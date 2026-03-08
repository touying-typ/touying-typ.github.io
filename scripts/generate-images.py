#!/usr/bin/env python3
"""
Generate preview images for Touying documentation examples.

Scans all Markdown and MDX files under docs/ for fenced code blocks
tagged with the ``example`` language identifier, extracts them, compiles
each one with the Typst CLI, and stitches multi-page output into a single
composite PNG.

Line-prefix conventions inside an ``example`` block:
    ``>>> `` – setup/prelude line: included in the compiled source but
               *not* shown in the displayed code block.
    ``<<< `` – display-only line: shown in the code block but *not*
               compiled (used for multi-file instructional snippets).
    (normal)  – compiled **and** displayed.

Each example is identified by the MD5 hash of its compiled source text.
The output is written to:

    static/img/typst-generated/<hash8>.png

Theme example images (first page of the first example in
docs/themes/<name>.md) are additionally saved to:

    static/img/themes/<name>.png

for use on the /themes gallery page.

This script must run **after** copy-docs.py and generate-docs.py so that
both the hand-written docs (in docs/) and the auto-generated reference
pages (in docs/reference/) are present when the scan takes place.

Usage:
    python scripts/generate-images.py

Requirements:
    - typst  (must be on $PATH)
    - Pillow (pip install Pillow)
"""

import glob
import hashlib
import os
import re
import subprocess
import sys
import tempfile
import shutil

# ── GitHub Actions helpers ──────────────────────────────────────────────────

def _is_github_actions() -> bool:
    return os.environ.get("GITHUB_ACTIONS") == "true"


def _gha_warning(message: str, file: str = "", line: int | None = None) -> None:
    """Emit a GitHub Actions ::warning:: annotation (no-op outside CI)."""
    if not _is_github_actions():
        return
    parts = ["::warning"]
    props = []
    if file:
        props.append(f"file={file}")
    if line is not None:
        props.append(f"line={line}")
    if props:
        parts.append(" " + ",".join(props))
    parts.append("::")
    parts.append(message)
    print("".join(parts), flush=True)

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install it with: pip install Pillow", file=sys.stderr)
    sys.exit(1)


# ── Configuration ─────────────────────────────────────────────────────────────

DOCS_DIRS = ["docs"]          # directories to scan (recursively)
DEST_DIR = "static/img/typst-generated"
THEMES_PREVIEW_DIR = "static/img/themes"   # first-page previews for /themes page
COLUMNS = 2          # pages per row in composite images
GUTTER = 24          # px gap between pages and around the border
BACKGROUND = (240, 240, 240)  # light-grey RGB
PPI = 144            # typst --ppi value (2× default 72)


# ── Markdown parser ────────────────────────────────────────────────────────────

def _strip_prefix(line: str, prefix: str) -> str | None:
    """
    If *line* equals *prefix* or starts with *prefix* + space, return the
    remainder after stripping the prefix (and the space if present).
    Otherwise return None.
    """
    if line == prefix:
        return ""
    if line.startswith(prefix + " "):
        return line[len(prefix) + 1:]
    return None


def iter_example_blocks(md_text: str):
    """
    Yield (compile_src, display_src) pairs for every ``example`` fenced
    code block found in *md_text*.

    compile_src – source text passed to ``typst compile``
                  (>>> lines included without prefix, <<< lines omitted)
    display_src – source text shown in the rendered code block
                  (>>> lines omitted, <<< lines included without prefix)
    """
    # Match fenced blocks: ```example ... ``` (3 or more backticks, on own lines)
    fence_re = re.compile(
        r"^(?P<fence>`{3,})example[^\n]*\n"   # opening fence
        r"(?P<body>.*?)"                       # body (non-greedy)
        r"^(?P=fence)[ \t]*$",                # closing fence (same length)
        re.MULTILINE | re.DOTALL,
    )

    for m in fence_re.finditer(md_text):
        body = m.group("body")
        compile_lines: list[str] = []
        display_lines: list[str] = []

        for line in body.splitlines():
            prelude = _strip_prefix(line, ">>>")
            display_only = _strip_prefix(line, "<<<")

            if prelude is not None:
                # Prelude: compile only
                compile_lines.append(prelude)
            elif display_only is not None:
                # Display-only helper
                display_lines.append(display_only)
            else:
                compile_lines.append(line)
                display_lines.append(line)

        compile_src = "\n".join(compile_lines)
        display_src = "\n".join(display_lines)
        yield compile_src, display_src


def src_hash(compile_src: str) -> str:
    """Return the first 8 hex chars of the MD5 of *compile_src* (UTF-8)."""
    return hashlib.md5(compile_src.encode("utf-8")).hexdigest()[:8]


# ── Typst compiler ─────────────────────────────────────────────────────────────

def run(cmd: list[str], **kwargs) -> subprocess.CompletedProcess:
    """Run *cmd*, printing it; return the CompletedProcess (no exception on failure)."""
    print("  $", " ".join(cmd))
    return subprocess.run(cmd, **kwargs)


def compile_example(compile_src: str, tmp_dir: str) -> list[str]:
    """
    Write *compile_src* to a temp .typ file, compile to PNG pages, and
    return the sorted list of per-page PNG paths.  Returns [] on failure.
    """
    typ_file = os.path.join(tmp_dir, "example.typ")
    with open(typ_file, "w", encoding="utf-8") as fh:
        fh.write(compile_src)

    pattern = os.path.join(tmp_dir, "page-{n}.png")
    result = run(
        [
            "typst", "compile",
            "--format", "png",
            "--ppi", str(PPI),
            typ_file,
            pattern,
        ],
        capture_output=True,
    )
    if result.returncode != 0:
        stderr = result.stderr.decode(errors="replace").strip()
        print(f"  ✗ typst failed:\n{stderr}", file=sys.stderr)
        return []

    pages = sorted(
        glob.glob(os.path.join(tmp_dir, "page-*.png")),
        key=lambda p: int(os.path.splitext(os.path.basename(p))[0].split("-")[1]),
    )
    return pages


def stitch_pages(page_files: list[str], columns: int = COLUMNS) -> Image.Image:
    """Stitch per-page PNGs into a single composite with a grey background."""
    images = [Image.open(p).convert("RGB") for p in page_files]
    page_w = max(img.width for img in images)
    page_h = max(img.height for img in images)
    rows = (len(images) + columns - 1) // columns
    canvas_w = columns * page_w + (columns + 1) * GUTTER
    canvas_h = rows * page_h + (rows + 1) * GUTTER
    canvas = Image.new("RGB", (canvas_w, canvas_h), BACKGROUND)
    for idx, img in enumerate(images):
        row, col = divmod(idx, columns)
        x = GUTTER + col * (page_w + GUTTER) + (page_w - img.width) // 2
        y = GUTTER + row * (page_h + GUTTER) + (page_h - img.height) // 2
        canvas.paste(img, (x, y))
    return canvas


# ── File collector ─────────────────────────────────────────────────────────────

def collect_doc_files(dirs: list[str]) -> list[str]:
    """Return sorted list of all .md and .mdx files under the given directories."""
    result = []
    for base in dirs:
        if not os.path.isdir(base):
            continue
        for root, _dirs, files in os.walk(base):
            for fname in sorted(files):
                if fname.endswith(".md") or fname.endswith(".mdx"):
                    result.append(os.path.join(root, fname))
    return sorted(result)


# ── Theme preview helper ────────────────────────────────────────────────────────

def is_theme_doc(md_path: str) -> str | None:
    """
    If *md_path* is a theme documentation file (docs/themes/<name>.md),
    return the theme name; otherwise return None.
    """
    norm = md_path.replace("\\", "/")
    # Match docs/themes/<name>.md  (not a _category_ file)
    m = re.match(r"(?:.*?/)?docs/themes/([^/_][^/]*)\.mdx?$", norm)
    if m:
        return m.group(1)
    return None


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    os.makedirs(DEST_DIR, exist_ok=True)

    doc_files = collect_doc_files(DOCS_DIRS)
    if not doc_files:
        print("No documentation files found – nothing to do.")
        return

    print(f"Scanning {len(doc_files)} documentation file(s) for example blocks …\n")

    success = 0
    failed = 0
    skipped = 0
    # Collect warning details for the end-of-run summary and GHA annotations
    warnings: list[str] = []

    for md_path in doc_files:
        with open(md_path, encoding="utf-8") as fh:
            md_text = fh.read()

        blocks = list(iter_example_blocks(md_text))
        if not blocks:
            continue

        theme_name = is_theme_doc(md_path)
        first_theme_done = False

        for block_idx, (compile_src, _display_src) in enumerate(blocks):
            h = src_hash(compile_src)
            out_path = os.path.join(DEST_DIR, h + ".png")

            print(f"▶ {md_path}[{block_idx}]  hash={h}  →  {out_path}")

            if os.path.exists(out_path):
                print("  ✓ Already exists, skipping.")
                skipped += 1
                # Still save theme preview from cache if needed
                if theme_name and not first_theme_done:
                    _save_theme_preview_from_png(out_path, theme_name)
                    first_theme_done = True
                continue

            with tempfile.TemporaryDirectory() as tmp_dir:
                pages = compile_example(compile_src, tmp_dir)
                if not pages:
                    msg = f"Example compilation failed: {md_path}[{block_idx}] (hash={h})"
                    warnings.append(msg)
                    print(f"  ⚠ {msg}", file=sys.stderr)
                    _gha_warning(msg, file=md_path)
                    failed += 1
                    continue

                print(f"  ✓ Compiled {len(pages)} page(s)")

                try:
                    if len(pages) == 1:
                        shutil.copy2(pages[0], out_path)
                    else:
                        composite = stitch_pages(pages)
                        composite.save(out_path)

                    # Theme preview: first page of the first example block
                    if theme_name and not first_theme_done:
                        os.makedirs(THEMES_PREVIEW_DIR, exist_ok=True)
                        theme_preview = os.path.join(
                            THEMES_PREVIEW_DIR, f"{theme_name}.png"
                        )
                        shutil.copy2(pages[0], theme_preview)
                        print(f"  ✓ Saved theme preview → {theme_preview}")
                        first_theme_done = True

                    success += 1
                except Exception as exc:
                    msg = f"Failed to save image for {md_path}[{block_idx}]: {exc}"
                    warnings.append(msg)
                    print(f"  ⚠ {msg}", file=sys.stderr)
                    _gha_warning(msg, file=md_path)
                    failed += 1

    print(f"\n{'─' * 50}")
    if warnings:
        print(f"⚠  {failed} example(s) could not be compiled (skipped):")
        for w in warnings:
            print(f"   • {w}")
        print()
    print(
        f"Done: {success} compiled, {skipped} skipped (cached), {failed} skipped (failed)."
    )
    # Always exit 0 – failures are warnings, not build-blocking errors.
    # Individual missing images simply won't be shown in the rendered docs.


def _save_theme_preview_from_png(png_path: str, theme_name: str) -> None:
    """
    Copy *png_path* as the theme preview image for the /themes gallery page.
    Logs a warning on failure but does not raise.
    """
    try:
        os.makedirs(THEMES_PREVIEW_DIR, exist_ok=True)
        theme_preview = os.path.join(THEMES_PREVIEW_DIR, f"{theme_name}.png")
        shutil.copy2(png_path, theme_preview)
    except Exception as exc:
        print(f"  ⚠ Could not save theme preview for '{theme_name}': {exc}", file=sys.stderr)


if __name__ == "__main__":
    main()
