#!/usr/bin/env python3
"""
Copy docs from the touying submodule into the Docusaurus doc directories.

Source:
    touying/docs/en/**  →  docs/**
    touying/docs/zh/**  →  i18n/zh/docusaurus-plugin-content-docs/current/**

Run this before generate-docs.py and generate-images.py so that all
hand-written documentation (from the touying submodule) is in place
before the reference pages and slide-preview images are generated.

Usage:
    python scripts/copy-docs.py

Requirements:
    - The touying submodule must be initialized:
        git submodule update --init
"""

import os
import shutil
import sys


# ── Configuration ─────────────────────────────────────────────────────────────

MAPPINGS = [
    (
        "touying/docs/en",
        "docs",
    ),
    (
        "touying/docs/zh",
        "i18n/zh/docusaurus-plugin-content-docs/current",
    ),
]


def copy_tree(src: str, dst: str) -> int:
    """
    Recursively copy all files from *src* to *dst*, overwriting existing files.
    Returns the number of files copied.
    """
    if not os.path.isdir(src):
        print(f"  ✗ Source directory not found: {src}", file=sys.stderr)
        return 0

    os.makedirs(dst, exist_ok=True)
    count = 0

    for root, dirs, files in os.walk(src):
        rel_root = os.path.relpath(root, src)
        dst_root = os.path.join(dst, rel_root) if rel_root != "." else dst
        os.makedirs(dst_root, exist_ok=True)

        for fname in files:
            src_file = os.path.join(root, fname)
            dst_file = os.path.join(dst_root, fname)
            shutil.copy2(src_file, dst_file)
            count += 1

    return count


def main() -> None:
    if not os.path.isdir("touying"):
        print(
            "Error: 'touying/' submodule directory not found.\n"
            "Please initialise the submodule first:\n"
            "  git submodule update --init",
            file=sys.stderr,
        )
        sys.exit(1)

    total = 0
    for src, dst in MAPPINGS:
        print(f"Copying  {src}  →  {dst} …", end="  ")
        n = copy_tree(src, dst)
        if n > 0:
            print(f"{n} file(s) copied.")
        else:
            print("(nothing copied)")
        total += n

    print(f"\nDone. {total} file(s) copied in total.")


if __name__ == "__main__":
    main()
