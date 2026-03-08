#!/usr/bin/env python3
"""
Generate reference documentation from Touying source files.

Parses the Touying-style doc comments (/// prefix) from the Typst source
files in the touying/ submodule and generates Markdown pages in
docs/reference/ for use by Docusaurus.

Touying comment format:
    /// Description of the function.
    ///
    /// Example: `example-code` returns `result`
    ///
    /// - param-name (type1, type2): Parameter description.
    ///
    ///   Continuation of param description (indented with 2 spaces).
    ///
    /// - other-param (type): Another description.
    ///
    /// -> return-type
    #let function-name(param-name, other-param: default) = { ... }

Usage:
    python scripts/generate-docs.py

Requirements:
    - The touying submodule must be initialized (git submodule update --init)
"""

import os
import re
import sys


# ── Configuration ─────────────────────────────────────────────────────────────

TOUYING_SRC = "touying/src"
OUTPUT_DIR = "docs/reference"
GITHUB_SRC_BASE = "https://github.com/touying-typ/touying/blob/main/src"

# Source files to document, in order (name → display title)
SOURCE_FILES = [
    ("slides.typ", "Slides", "Core slide creation functions."),
    ("components.typ", "Components", "Reusable UI components for slides."),
    ("configs.typ", "Configs", "Configuration functions for presentation settings."),
    ("utils.typ", "Utils", "Utility functions used throughout Touying."),
    ("magic.typ", "Magic", "Show-rule helpers that enhance Typst behaviour."),
    ("pdfpc.typ", "PDFPC", "Functions for generating pdfpc presenter metadata."),
]


# ── Typst → Markdown conversion ───────────────────────────────────────────────

def _extract_example_block(text: str) -> tuple[str, str]:
    """
    Find and remove the first #example(...) block from text.
    Returns (text_without_example, extracted_code) where extracted_code
    is the visible (<<< prefixed) lines from the example, joined.
    If no #example block is found, returns (text, "").
    """
    # Find the start of the #example( call
    start = text.find("#example(")
    if start == -1:
        return text, ""

    # Find the matching closing paren by counting depth
    depth = 0
    i = start + len("#example")
    while i < len(text):
        ch = text[i]
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
            if depth == 0:
                break
        i += 1

    example_content = text[start + len("#example(") : i]
    remainder = text[:start] + text[i + 1:]

    # Extract the visible lines (<<< prefix) and plain lines (no >>> prefix)
    visible_lines = []
    for raw in example_content.split("\n"):
        stripped = raw.strip()
        if stripped.startswith("<<<"):
            visible_lines.append(stripped[3:].strip())
        elif stripped.startswith(">>>"):
            pass  # setup/hidden line — skip
        else:
            visible_lines.append(stripped)

    code = "\n".join(l for l in visible_lines if l).strip()
    return remainder.strip(), code


def typ_to_md(text: str) -> str:
    """
    Convert Typst markup in a doc-comment string to Markdown.

    Handles the most common cases found in Touying doc comments:
    - #example(...) blocks → typst code blocks (visible lines only).
    - Typst code blocks (```typst ... ```) are kept as-is.
    - Inline backtick code is kept as-is.
    - Typst `= Heading` syntax is converted to Markdown `## Heading`.
    - `#link("url")[text]` → `[text](url)`.
    - Bare `<` / `>` outside code blocks are escaped for MDX.
    """
    # First, extract and convert all #example(...) blocks
    example_blocks = []
    while "#example(" in text:
        text, code = _extract_example_block(text)
        if code:
            example_blocks.append(code)

    # Append example code blocks at the end of the description
    extra_md = ""
    for code in example_blocks:
        extra_md += "\n\n**Example:**\n\n```typst\n" + code + "\n```"

    # Process line by line so we can handle fenced code blocks correctly
    lines = text.split("\n")
    result = []
    in_code_block = False
    for line in lines:
        if line.strip().startswith("```"):
            in_code_block = not in_code_block
            result.append(line)
            continue
        if in_code_block:
            result.append(line)
            continue

        # Convert Typst heading syntax (= Heading) to Markdown (## Heading)
        heading_match = re.match(r"^(=+)\s+(.*)", line)
        if heading_match:
            level = len(heading_match.group(1))
            title = heading_match.group(2)
            result.append("#" * (level + 1) + " " + title)
            continue

        # Convert #link("url")[text] → [text](url)
        line = re.sub(
            r'#link\("([^"]+)"\)\[([^\]]+)\]',
            lambda m: f"[{m.group(2)}]({m.group(1)})",
            line,
        )

        # Escape bare < and > that are outside inline code to avoid MDX JSX errors.
        # We do this carefully to avoid escaping inside backtick spans.
        line = _escape_angle_brackets_outside_code(line)

        result.append(line)

    return "\n".join(result) + extra_md


def _escape_angle_brackets_outside_code(line: str) -> str:
    """
    Escape bare < and > characters that appear outside inline backtick spans.
    MDX treats bare < as JSX, which causes parse errors.
    """
    parts = line.split("`")
    # Even-indexed parts are outside backticks, odd-indexed are inside
    for idx in range(0, len(parts), 2):
        parts[idx] = parts[idx].replace("<", "&lt;").replace(">", "&gt;")
    return "`".join(parts)


# ── Doc comment parser ────────────────────────────────────────────────────────

def _strip_doc_prefix(line: str) -> str:
    """Strip the leading '/// ' or '///' from a doc-comment line."""
    line = line.rstrip()
    if line.startswith("/// "):
        return line[4:]
    if line.startswith("///"):
        return line[3:]
    return line


def _parse_param_line(content: str):
    """
    Try to parse a parameter doc line.

    Format: `- param-name (type1, type2): Description`

    Returns (name, types_list, description) or None if no match.
    The types_list is a list of stripped type strings.
    Multiple types may be separated by commas or ' | '.
    """
    # Format: - param-name (type1, type2): Description
    m = re.match(
        r"^-\s+([\w][\w\-\.]*(?:\.\.)?)"  # param name (allows .. for rest)
        r"\s+\(([^)]*)\)"                 # (types)
        r":\s*(.*)$",                     # : description
        content,
    )
    if not m:
        return None
    name = m.group(1).strip()
    raw_types = m.group(2).strip()
    desc = m.group(3).strip()

    # Split types by comma or |, strip whitespace
    types = [t.strip() for t in re.split(r"[,|]", raw_types) if t.strip()]
    return name, types, desc


def _parse_return_line(content: str):
    """
    Try to parse a return-type doc line.  Format: `-> type1 | type2`
    Returns list of type strings, or None if no match.
    """
    m = re.match(r"^->\s+(.+)$", content)
    if not m:
        return None
    raw = m.group(1).strip()
    return [t.strip() for t in re.split(r"[,|]", raw) if t.strip()]


def parse_doc_comment(raw_lines: list[str]) -> dict:
    """
    Parse a block of raw '///' lines into a structured dict.

    Returns:
        {
          "description": str,          # Markdown description
          "params": [
              {"name": str, "types": list[str], "description": str}
          ],
          "return_types": list[str],   # may be empty
        }
    """
    # Strip the '/// ' prefix from every line
    lines = [_strip_doc_prefix(l) for l in raw_lines]

    description_parts: list[str] = []
    params: list[dict] = []
    return_types: list[str] = []

    # State machine
    # "desc"  – collecting description
    # "param" – collecting a parameter (may have continuation lines)
    state = "desc"
    current_param: dict | None = None

    for line in lines:
        # ── Return type ────────────────────────────────────────────────────
        ret = _parse_return_line(line)
        if ret is not None:
            return_types = ret
            # Flush current param if any
            if current_param is not None:
                params.append(current_param)
                current_param = None
            state = "done"
            continue

        # ── New parameter ──────────────────────────────────────────────────
        parsed = _parse_param_line(line)
        if parsed is not None:
            # Flush the previous param
            if current_param is not None:
                params.append(current_param)
            name, types, desc = parsed
            current_param = {"name": name, "types": types, "description": desc}
            state = "param"
            continue

        # ── Continuation / description ─────────────────────────────────────
        if state == "param" and current_param is not None:
            # A line with 2+ leading spaces is a continuation of the current param
            if line.startswith("  ") and line.strip():
                current_param["description"] += " " + line.strip()
                continue
            # An empty line is just a blank separator inside the param block
            if line == "":
                continue
            # Any other non-empty non-indented line inside a param block:
            # treat as continuation too (rare edge case)
            if line.strip() and not line.startswith("-"):
                current_param["description"] += " " + line.strip()
                continue

        if state == "desc":
            description_parts.append(line)

    # Flush last param
    if current_param is not None:
        params.append(current_param)

    description = "\n".join(description_parts).strip()
    return {
        "description": description,
        "params": params,
        "return_types": return_types,
    }


# ── Function-signature parser ─────────────────────────────────────────────────

class _BraceCounter:
    """Count (balanced) parentheses depth, respecting string literals."""

    def __init__(self):
        self.depth = 0
        self.in_string = False
        self.escape_next = False

    def feed(self, char: str) -> None:
        if self.escape_next:
            self.escape_next = False
            return
        if char == "\\" and self.in_string:
            self.escape_next = True
            return
        if char == '"':
            self.in_string = not self.in_string
            return
        if self.in_string:
            return
        if char == "(":
            self.depth += 1
        elif char == ")":
            self.depth -= 1


def _strip_line_comments(line: str) -> str:
    """Remove trailing // ... comments from a line, respecting string literals."""
    in_string = False
    prev = ""
    for i, ch in enumerate(line):
        if ch == '"' and prev != "\\":
            in_string = not in_string
        if not in_string and ch == "/" and prev == "/":
            return line[: i - 1].rstrip()
        prev = ch
    return line


def _extract_params_from_signature(sig_lines: list[str]) -> list[dict]:
    """
    Given the lines of a #let name(...) definition, extract parameter
    names and default values.

    Returns a list of {'name': str, 'default': str | None}.
    """
    # Strip inline // comments and join lines
    cleaned = [_strip_line_comments(l) for l in sig_lines]
    full = " ".join(line.strip() for line in cleaned)

    # Find the opening paren of the function signature
    m = re.search(r"#?let\s+[\w\-]+\s*\(", full)
    if not m:
        return []

    start = m.end() - 1  # position of '('
    counter = _BraceCounter()
    counter.feed("(")  # count the opening paren
    end = start + 1
    while end < len(full) and counter.depth > 0:
        counter.feed(full[end])
        end += 1

    params_str = full[start + 1 : end - 1]

    # Split into individual parameter strings, respecting nested parens
    params = []
    depth = 0
    current = ""
    in_string = False
    for ch in params_str:
        if ch == '"' and not in_string:
            in_string = True
            current += ch
        elif ch == '"' and in_string:
            in_string = False
            current += ch
        elif in_string:
            current += ch
        elif ch in "([":
            depth += 1
            current += ch
        elif ch in ")]":
            depth -= 1
            current += ch
        elif ch == "," and depth == 0:
            params.append(current.strip())
            current = ""
        else:
            current += ch
    if current.strip():
        params.append(current.strip())

    result = []
    for p in params:
        p = p.strip()
        if not p:
            continue
        # Rest argument: ..args
        if p.startswith(".."):
            result.append({"name": p[2:] or "args", "default": None, "is_rest": True})
            continue
        # Named argument with default: name: default
        if ":" in p:
            name, default = p.split(":", 1)
            name = name.strip()
            default = default.strip()
            # Strip body-style default like `(self: none, ..args) => fn(..args)`
            result.append({"name": name, "default": default, "is_rest": False})
        else:
            result.append({"name": p.strip(), "default": None, "is_rest": False})

    return result


def parse_file(path: str) -> list[dict]:
    """
    Parse a Typst source file and return a list of documented definitions.

    Each definition dict contains:
        {
          "name": str,
          "description": str,
          "params": [...],
          "return_types": [...],
          "sig_params": [...],   # from code signature
          "is_function": bool,
          "line": int,           # 1-based line number of #let
        }
    """
    with open(path, encoding="utf-8") as fh:
        lines = fh.readlines()

    definitions = []
    i = 0
    while i < len(lines):
        line = lines[i]

        # Start of a doc comment block
        if line.strip().startswith("///"):
            doc_start = i
            doc_lines = []
            while i < len(lines) and lines[i].strip().startswith("///"):
                doc_lines.append(lines[i])
                i += 1
            # Skip any blank lines between comment and definition
            while i < len(lines) and lines[i].strip() == "":
                i += 1
            # Check whether the next line is a #let definition
            if i < len(lines) and re.match(r"\s*#let\s+", lines[i]):
                let_line_no = i + 1  # 1-based
                # Collect lines of the signature until we get the function body
                sig_lines = []
                j = i
                # Collect until we see "= {" or "= (" or just "="
                # For multi-line signatures, collect until brace depth returns to 0
                open_parens = 0
                found_eq = False
                while j < len(lines):
                    sig_lines.append(lines[j])
                    text = lines[j]
                    for ch in text:
                        if ch == "(":
                            open_parens += 1
                        elif ch == ")":
                            open_parens -= 1
                    # If parens are balanced and we see '=' outside of parens
                    # or we see '= {' after the signature, we're done
                    if open_parens <= 0 and "=" in text:
                        found_eq = True
                        break
                    if open_parens <= 0 and j > i:
                        break
                    j += 1

                # Parse the definition name from the first sig line
                name_match = re.match(r"\s*#let\s+([\w\-]+)\s*", lines[i])
                if name_match is None:
                    i += 1
                    continue

                name = name_match.group(1)

                # Skip private definitions
                if name.startswith("_"):
                    i += 1
                    continue

                # Detect whether this is a function definition (#let name(...))
                # vs a variable assignment (#let name = ...).
                # Strategy: on the first signature line, check whether '(' appears
                # before any '=' (function) or after (variable/call).
                first_line = sig_lines[0] if sig_lines else ""
                eq_pos = first_line.find("=")
                paren_pos = first_line.find("(")
                is_function = (
                    paren_pos >= 0
                    and (eq_pos < 0 or paren_pos < eq_pos)
                )

                doc = parse_doc_comment(doc_lines)

                sig_params = []
                if is_function:
                    sig_params = _extract_params_from_signature(sig_lines)

                definitions.append(
                    {
                        "name": name,
                        "description": doc["description"],
                        "params": doc["params"],
                        "return_types": doc["return_types"],
                        "sig_params": sig_params,
                        "is_function": is_function,
                        "line": let_line_no,
                    }
                )
            # No #let found – this doc comment floats standalone; skip it
        else:
            i += 1

    return definitions


# ── Markdown generator ────────────────────────────────────────────────────────

def _escape_md(text: str) -> str:
    """Escape characters that would break Markdown table cells."""
    return text.replace("|", "\\|")


def _format_types(types: list[str]) -> str:
    """Format a list of types as inline code joined with ' | '."""
    if not types:
        return ""
    return " \\| ".join(f"`{t}`" for t in types)


def _build_signature(name: str, sig_params: list[dict], is_function: bool) -> str:
    """Build a human-readable function signature string."""
    if not is_function:
        return name
    parts = []
    for p in sig_params:
        if p.get("is_rest"):
            parts.append(f"..{p['name']}")
        elif p.get("default") is not None and p.get("default") != "_default":
            parts.append(f"{p['name']}: {p['default']}")
        else:
            parts.append(p["name"])
    return f"{name}({', '.join(parts)})"


def definition_to_md(defn: dict, source_file: str) -> str:
    """Convert a parsed definition dict to a Markdown string."""
    name = defn["name"]
    description = typ_to_md(defn["description"]) if defn["description"] else ""
    params = defn["params"]
    return_types = defn["return_types"]
    sig_params = defn["sig_params"]
    is_function = defn["is_function"]
    line = defn["line"]

    src_url = f"{GITHUB_SRC_BASE}/{source_file}#L{line}"

    lines = []

    # ── Heading ─────────────────────────────────────────────────────────────
    lines.append(f"## `{name}`")
    lines.append("")

    # ── Signature ───────────────────────────────────────────────────────────
    # For the signature, skip _default sentinel values to keep it clean
    clean_sig_params = []
    for sp in sig_params:
        sp_copy = dict(sp)
        if sp_copy.get("default") == "_default":
            sp_copy["default"] = None
        clean_sig_params.append(sp_copy)
    sig = _build_signature(name, clean_sig_params, is_function)
    lines.append(f"**Signature:** `{sig}`")
    lines.append("")

    # ── Description ─────────────────────────────────────────────────────────
    if description:
        lines.append(description)
        lines.append("")

    # ── Parameters table ────────────────────────────────────────────────────
    # Merge doc params with sig_params for default values
    sig_defaults: dict[str, str | None] = {}
    sig_rest: dict[str, bool] = {}
    for sp in sig_params:
        sig_defaults[sp["name"]] = sp.get("default")
        sig_rest[sp["name"]] = sp.get("is_rest", False)

    if params:
        lines.append("**Parameters:**")
        lines.append("")
        lines.append("| Name | Type | Description |")
        lines.append("|------|------|-------------|")
        for p in params:
            pname = p["name"]
            ptypes = _format_types(p["types"])
            # Escape table-breaking and MDX-breaking characters in the description
            pdesc = _escape_md(p["description"])
            pdesc = _escape_angle_brackets_outside_code(pdesc)
            # Append default value info if available (skip _default sentinel)
            default = sig_defaults.get(pname)
            if default is not None and default != "_default":
                pdesc += f" Default: `{_escape_md(default)}`."
            is_rest = sig_rest.get(pname, False)
            display_name = f"`..{pname}`" if is_rest else f"`{pname}`"
            lines.append(f"| {display_name} | {ptypes} | {pdesc} |")
        lines.append("")

    # ── Return type ─────────────────────────────────────────────────────────
    if return_types:
        lines.append(f"**Returns:** {_format_types(return_types)}")
        lines.append("")

    # ── Source link ─────────────────────────────────────────────────────────
    lines.append(f"**Source:** [`{source_file}`]({src_url})")
    lines.append("")
    lines.append("---")
    lines.append("")

    return "\n".join(lines)


def generate_module_page(
    source_file: str,
    title: str,
    description: str,
    definitions: list[dict],
    sidebar_position: int,
) -> str:
    """Generate a full Markdown page for one Touying source module."""
    page_id = os.path.splitext(source_file)[0]  # e.g. "utils"

    lines = []

    # ── Front matter ─────────────────────────────────────────────────────────
    lines.append("---")
    lines.append(f"sidebar_position: {sidebar_position}")
    lines.append(f"description: >-")
    lines.append(f"  {description}")
    lines.append("---")
    lines.append("")

    # ── Page heading ─────────────────────────────────────────────────────────
    lines.append(f"# {title}")
    lines.append("")
    lines.append(description)
    lines.append("")

    if not definitions:
        lines.append("*No public documented functions found in this module.*")
        lines.append("")
        return "\n".join(lines)

    # ── Table of contents (function list) ────────────────────────────────────
    lines.append("## Function Index")
    lines.append("")
    for defn in definitions:
        name = defn["name"]
        anchor = name.lower().replace("-", "-")
        lines.append(f"- [`{name}`](#{anchor})")
    lines.append("")
    lines.append("---")
    lines.append("")

    # ── Each function ─────────────────────────────────────────────────────────
    for defn in definitions:
        lines.append(definition_to_md(defn, source_file))

    return "\n".join(lines)


def generate_index_page(modules: list[tuple[str, str, str]]) -> str:
    """
    Generate the index page for the reference section.

    modules: list of (page_id, title, description)
    """
    lines = []
    lines.append("---")
    lines.append("sidebar_position: 0")
    lines.append('description: "API reference for Touying."')
    lines.append("---")
    lines.append("")
    lines.append("# API Reference")
    lines.append("")
    lines.append(
        "This section contains the auto-generated API reference for Touying, "
        "derived from the doc comments in the Typst source files."
    )
    lines.append("")
    lines.append("## Modules")
    lines.append("")
    for page_id, title, description in modules:
        lines.append(f"### [{title}](./{page_id}.md)")
        lines.append("")
        lines.append(description)
        lines.append("")
    return "\n".join(lines)


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    if not os.path.isdir(TOUYING_SRC):
        print(
            f"Error: '{TOUYING_SRC}' not found.\n"
            "Please initialise the submodule first:\n"
            "  git submodule update --init",
            file=sys.stderr,
        )
        sys.exit(1)

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Write the _category_.json so Docusaurus knows about this section
    category_path = os.path.join(OUTPUT_DIR, "_category_.json")
    with open(category_path, "w", encoding="utf-8") as fh:
        fh.write('{\n  "label": "Reference",\n  "position": 99,\n  "link": {\n    "type": "generated-index"\n  }\n}\n')

    module_index: list[tuple[str, str, str]] = []

    for pos, (source_file, title, description) in enumerate(SOURCE_FILES, start=1):
        src_path = os.path.join(TOUYING_SRC, source_file)
        if not os.path.isfile(src_path):
            print(f"Warning: '{src_path}' not found, skipping.", file=sys.stderr)
            continue

        print(f"Processing {source_file} …", end="  ")
        definitions = parse_file(src_path)
        print(f"{len(definitions)} documented function(s) found.")

        page_id = os.path.splitext(source_file)[0]
        page_content = generate_module_page(
            source_file=source_file,
            title=title,
            description=description,
            definitions=definitions,
            sidebar_position=pos,
        )
        out_path = os.path.join(OUTPUT_DIR, page_id + ".md")
        with open(out_path, "w", encoding="utf-8") as fh:
            fh.write(page_content)

        module_index.append((page_id, title, description))

    # Write the index page
    index_content = generate_index_page(module_index)
    with open(os.path.join(OUTPUT_DIR, "index.md"), "w", encoding="utf-8") as fh:
        fh.write(index_content)

    print(f"\nDone. Reference pages written to '{OUTPUT_DIR}/'.")


if __name__ == "__main__":
    main()
