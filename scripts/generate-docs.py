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


# ── MDX generator ────────────────────────────────────────────────────────────

def _sanitize_mdx_content(text: str) -> str:
    """
    Sanitize text for use as plain content inside MDX JSX elements.
    Escapes angle brackets outside code spans to prevent MDX parse errors.
    """
    return _escape_angle_brackets_outside_code(text)


def _safe_description_for_frontmatter(description: str) -> str:
    """Return the first sentence of a description, safe for use in YAML."""
    first_sentence = description.split(".")[0].strip() + "."
    # Remove inline code backticks so the YAML value is plain text
    plain = re.sub(r"`([^`]*)`", r"\1", first_sentence)
    # Escape double quotes
    return plain.replace('"', "'")


def _is_simple_default(default: str) -> bool:
    """Return True if a default value is simple enough to show inline in the signature."""
    if default is None:
        return False
    # Skip complex defaults that would break MDX or are too long
    return (
        "{" not in default
        and "}" not in default
        and len(default) < 40
    )


def _build_signature_components(
    name: str, sig_params: list[dict], is_function: bool, src_url: str
) -> str:
    """
    Build the <Signature> JSX block for a function or variable definition.
    Returns the MDX string for the signature block.
    """
    lines = ["<Signature>"]
    code_parts = []

    if is_function:
        code_parts.append(f"<SignatureName>{name}</SignatureName>(")
        n = len(sig_params)
        for i, sp in enumerate(sig_params):
            if sp.get("is_rest"):
                param_text = f"..{sp['name']}"
            elif sp.get("default") is not None and _is_simple_default(sp["default"]):
                param_text = f"{sp['name']}: {sp['default']}"
            else:
                param_text = sp["name"]
            pname_anchor = sp["name"].lstrip(".")
            comma = ", " if i < n - 1 else ""
            code_parts.append(
                f"<SignatureParam>[{param_text}](#{pname_anchor}){comma}</SignatureParam>"
            )
        code_parts.append(")")
    else:
        code_parts.append(f"<SignatureName>{name}</SignatureName>")

    code_parts.append(f'<SourceLink href="{src_url}" />')

    lines.append("  <code>" + "".join(code_parts) + "</code>")
    lines.append("</Signature>")
    return "\n".join(lines)


def definition_to_mdx(defn: dict, source_file: str) -> str:
    """Convert a parsed definition dict to MDX content (without front matter)."""
    name = defn["name"]
    description = typ_to_md(defn["description"]) if defn["description"] else ""
    params = defn["params"]
    return_types = defn["return_types"]
    sig_params = defn["sig_params"]
    is_function = defn["is_function"]
    line = defn["line"]

    src_url = f"{GITHUB_SRC_BASE}/{source_file}#L{line}"

    # For the signature, skip _default sentinel values
    clean_sig_params = []
    for sp in sig_params:
        sp_copy = dict(sp)
        if sp_copy.get("default") == "_default":
            sp_copy["default"] = None
        clean_sig_params.append(sp_copy)

    # Build default lookup from sig_params
    sig_defaults: dict[str, str | None] = {}
    sig_rest: dict[str, bool] = {}
    for sp in sig_params:
        sig_defaults[sp["name"]] = sp.get("default")
        sig_rest[sp["name"]] = sp.get("is_rest", False)

    lines = []

    # ── Page heading ─────────────────────────────────────────────────────────
    lines.append(f"# {name}")
    lines.append("")

    # ── Signature block ──────────────────────────────────────────────────────
    lines.append(_build_signature_components(name, clean_sig_params, is_function, src_url))
    lines.append("")

    # ── Description ─────────────────────────────────────────────────────────
    if description:
        lines.append(description)
        lines.append("")

    # ── Parameters section ───────────────────────────────────────────────────
    if params:
        lines.append("<Parameters>")
        lines.append("")
        for p in params:
            pname = p["name"]
            ptypes = p.get("types", [])
            pdesc_raw = p.get("description", "")
            is_rest = sig_rest.get(pname, False)
            default = sig_defaults.get(pname)
            # Skip _default sentinel
            if default == "_default":
                default = None

            display_name = f"..{pname}" if is_rest else pname
            anchor_id = pname.lstrip(".")

            # Build type string
            if ptypes:
                type_str = " | ".join(f"`{t}`" for t in ptypes)
                type_part = f" : {type_str}"
            else:
                type_part = ""

            # Build default string (only show simple defaults inline)
            if default is not None and _is_simple_default(default):
                default_part = f' <Default>`{default}`</Default>'
            else:
                default_part = ""

            lines.append(
                f"#### <ParamName>{display_name}</ParamName>{type_part}"
                f"{default_part} {{#{anchor_id}}}"
            )
            lines.append("")

            # Process and sanitize the parameter description
            pdesc = typ_to_md(pdesc_raw) if pdesc_raw else ""
            pdesc = _sanitize_mdx_content(pdesc)
            lines.append("<Param>")
            lines.append("")
            if pdesc:
                lines.append(pdesc)
                lines.append("")
            lines.append("</Param>")
            lines.append("")

        lines.append("</Parameters>")
        lines.append("")

    # ── Return type ─────────────────────────────────────────────────────────
    if return_types:
        ret_str = " | ".join(f"`{t}`" for t in return_types)
        lines.append(f"**Returns:** {ret_str}")
        lines.append("")

    return "\n".join(lines)


def generate_function_page(
    defn: dict,
    source_file: str,
    sidebar_position: int,
) -> str:
    """Generate a full MDX page for a single function definition."""
    name = defn["name"]
    description = defn.get("description", "")

    lines = []

    # ── Front matter ─────────────────────────────────────────────────────────
    lines.append("---")
    lines.append(f"sidebar_position: {sidebar_position}")
    if description:
        safe_desc = _safe_description_for_frontmatter(description)
        lines.append(f'description: "{safe_desc}"')
    lines.append("---")
    lines.append("")

    # ── Page body ────────────────────────────────────────────────────────────
    lines.append(definition_to_mdx(defn, source_file))

    return "\n".join(lines)


# ── Main ──────────────────────────────────────────────────────────────────────

def _remove_old_module_files() -> None:
    """Remove the old flat module .md files that were replaced by per-function pages."""
    old_files = [
        os.path.join(OUTPUT_DIR, os.path.splitext(sf)[0] + ".md")
        for sf, _, _ in SOURCE_FILES
    ]
    for path in old_files:
        if os.path.isfile(path):
            os.remove(path)
            print(f"  Removed old file: {path}")


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

    # Remove old flat module files
    _remove_old_module_files()

    # Write the top-level _category_.json (without generated-index link
    # since we provide a proper index.md below)
    category_path = os.path.join(OUTPUT_DIR, "_category_.json")
    with open(category_path, "w", encoding="utf-8") as fh:
        fh.write(
            '{\n'
            '  "label": "Reference",\n'
            '  "position": 99\n'
            '}\n'
        )

    # Write a top-level index.md for the /docs/reference URL
    index_lines = [
        "---",
        "sidebar_position: 0",
        'description: "API reference for Touying."',
        "---",
        "",
        "# API Reference",
        "",
        "This section contains the auto-generated API reference for Touying, "
        "derived from the doc comments in the Typst source files.",
        "",
    ]
    for _, title, description in SOURCE_FILES:
        index_lines.append(f"- **{title}** – {description}")
    index_lines.append("")
    with open(os.path.join(OUTPUT_DIR, "index.md"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(index_lines))

    for pos, (source_file, title, description) in enumerate(SOURCE_FILES, start=1):
        src_path = os.path.join(TOUYING_SRC, source_file)
        if not os.path.isfile(src_path):
            print(f"Warning: '{src_path}' not found, skipping.", file=sys.stderr)
            continue

        print(f"Processing {source_file} …", end="  ")
        definitions = parse_file(src_path)
        print(f"{len(definitions)} documented function(s) found.")

        # Create a subdirectory for this module
        module_id = os.path.splitext(source_file)[0]  # e.g. "components"
        module_dir = os.path.join(OUTPUT_DIR, module_id)
        os.makedirs(module_dir, exist_ok=True)

        # Write the module's _category_.json
        cat_json_path = os.path.join(module_dir, "_category_.json")
        with open(cat_json_path, "w", encoding="utf-8") as fh:
            fh.write(
                '{\n'
                f'  "label": "{title}",\n'
                f'  "position": {pos},\n'
                '  "link": {\n'
                '    "type": "generated-index",\n'
                f'    "description": "{description}"\n'
                '  }\n'
                '}\n'
            )

        # Write one .mdx file per function
        for fn_pos, defn in enumerate(definitions, start=1):
            fn_name = defn["name"]
            page_content = generate_function_page(
                defn=defn,
                source_file=source_file,
                sidebar_position=fn_pos,
            )
            out_path = os.path.join(module_dir, fn_name + ".mdx")
            with open(out_path, "w", encoding="utf-8") as fh:
                fh.write(page_content)

        print(f"  → Written {len(definitions)} page(s) to '{module_dir}/'")

    print(f"\nDone. Reference pages written to '{OUTPUT_DIR}/'.")


if __name__ == "__main__":
    main()
