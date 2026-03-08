#!/usr/bin/env python3
"""
Generate preview images for Touying slide themes.

For each .typ file in src/typst/, compile it with Typst to produce per-page PNG
images.  If only one page is produced, save it directly (no composite).  If
multiple pages are produced, stitch them together side-by-side (2 columns) with a
light-grey background and gutters.  The output is written to:

    static/img/typst-generated/<relative-path>.png

Theme preview images (src/typst/themes/*.typ) are additionally saved as single
first-page previews to static/img/themes/<name>.png for use on the Themes page.

Usage:
    python scripts/generate-images.py

Requirements:
    - typst  (must be on $PATH)
    - Pillow (pip install Pillow)
"""

import os
import glob
import subprocess
import sys
import tempfile
import shutil

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install it with: pip install Pillow", file=sys.stderr)
    sys.exit(1)

# ── Configuration ─────────────────────────────────────────────────────────────

SOURCE_DIR        = "src/typst"
DEST_DIR          = "static/img/typst-generated"
THEMES_PREVIEW_DIR = "static/img/themes"  # committed theme preview images
COLUMNS           = 2          # pages per row in the composite image
GUTTER            = 24         # px gap between pages and around the border
BACKGROUND        = (240, 240, 240)  # light-grey background colour (RGB)
PAGE_SCALE        = 2          # typst --ppi factor (144 ppi = 2× the default 72)
PPI               = 144        # dots per inch passed to typst

# ── Helpers ───────────────────────────────────────────────────────────────────

def run(cmd: list[str], **kwargs) -> subprocess.CompletedProcess:
    """Run a command and return the result (raises on non-zero exit)."""
    print("  $", " ".join(cmd))
    result = subprocess.run(cmd, **kwargs)
    if result.returncode != 0:
        print(f"  ✗ command failed (exit {result.returncode})", file=sys.stderr)
    return result


def compile_typ_to_pngs(typ_file: str, tmp_dir: str) -> list[str]:
    """
    Compile a .typ file with typst, producing one PNG per slide page.

    typst compile supports the `{n}` placeholder in the output path to write
    each page as a separate file.
    """
    pattern = os.path.join(tmp_dir, "page-{n}.png")
    result = run(
        [
            "typst", "compile",
            "--format", "png",
            "--ppi", str(PPI),
            typ_file,
            pattern,
        ]
    )
    if result.returncode != 0:
        return []

    # Collect the produced files in page order
    pages = sorted(
        glob.glob(os.path.join(tmp_dir, "page-*.png")),
        key=lambda p: int(os.path.splitext(os.path.basename(p))[0].split("-")[1]),
    )
    return pages


def stitch_pages(page_files: list[str], columns: int = COLUMNS) -> Image.Image:
    """
    Stitch a list of page PNG files into a single composite image.

    Pages are arranged in a grid with *columns* images per row.
    A uniform gutter surrounds each page and fills the gaps between them.
    The canvas background is the light-grey BACKGROUND colour.
    """
    images = [Image.open(p).convert("RGB") for p in page_files]
    if not images:
        raise ValueError("No pages to stitch")

    # Uniform page size (use the largest width/height to handle any variability)
    page_w = max(img.width  for img in images)
    page_h = max(img.height for img in images)

    rows = (len(images) + columns - 1) // columns

    canvas_w = columns * page_w + (columns + 1) * GUTTER
    canvas_h = rows    * page_h + (rows    + 1) * GUTTER

    canvas = Image.new("RGB", (canvas_w, canvas_h), BACKGROUND)

    for idx, img in enumerate(images):
        row = idx // columns
        col = idx %  columns
        x = GUTTER + col * (page_w + GUTTER)
        y = GUTTER + row * (page_h + GUTTER)
        # Centre smaller pages within their cell (shouldn't normally differ)
        x += (page_w - img.width)  // 2
        y += (page_h - img.height) // 2
        canvas.paste(img, (x, y))

    return canvas


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    if not os.path.isdir(SOURCE_DIR):
        print(f"Source directory '{SOURCE_DIR}' not found – nothing to do.")
        return

    os.makedirs(DEST_DIR, exist_ok=True)

    typ_files = []
    for root, _dirs, files in os.walk(SOURCE_DIR):
        for fname in sorted(files):
            if fname.endswith(".typ") and not fname.startswith("_"):
                typ_files.append(os.path.join(root, fname))

    if not typ_files:
        print(f"No .typ files found under '{SOURCE_DIR}'.")
        return

    success, failed = 0, 0

    for typ_file in typ_files:
        rel_path   = os.path.relpath(typ_file, SOURCE_DIR)
        out_path   = os.path.join(DEST_DIR, os.path.splitext(rel_path)[0] + ".png")
        os.makedirs(os.path.dirname(out_path), exist_ok=True)

        print(f"\n▶ {typ_file}  →  {out_path}")

        with tempfile.TemporaryDirectory() as tmp_dir:
            pages = compile_typ_to_pngs(typ_file, tmp_dir)
            if not pages:
                print(f"  ✗ Skipping (compilation failed)")
                failed += 1
                continue

            print(f"  ✓ Compiled {len(pages)} page(s)")

            try:
                if len(pages) == 1:
                    # Single page: copy directly without composite background
                    shutil.copy2(pages[0], out_path)
                    img = Image.open(out_path)
                    print(f"  ✓ Saved single-page image ({img.width}×{img.height})")
                else:
                    composite = stitch_pages(pages)
                    composite.save(out_path)
                    print(f"  ✓ Saved composite image ({composite.width}×{composite.height})")

                # Theme files: also save first-page preview to the committed directory
                themes_source = os.path.join(SOURCE_DIR, "themes")
                if os.path.abspath(os.path.dirname(typ_file)) == os.path.abspath(themes_source):
                    os.makedirs(THEMES_PREVIEW_DIR, exist_ok=True)
                    theme_name = os.path.splitext(os.path.basename(typ_file))[0]
                    theme_preview = os.path.join(THEMES_PREVIEW_DIR, f"{theme_name}.png")
                    shutil.copy2(pages[0], theme_preview)
                    print(f"  ✓ Saved theme preview → {theme_preview}")

                success += 1
            except Exception as exc:
                print(f"  ✗ Failed to save image: {exc}", file=sys.stderr)
                failed += 1

    print(f"\n{'─'*50}")
    print(f"Done: {success} succeeded, {failed} failed.")
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
