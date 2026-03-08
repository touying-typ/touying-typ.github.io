/**
 * remark-example.js
 *
 * A Docusaurus remark plugin that transforms fenced code blocks tagged
 * with the ``example`` language identifier into a rendered Typst code
 * block followed by the pre-compiled preview image.
 *
 * Line-prefix conventions inside an ``example`` block:
 *   ``>>> `` – prelude line: compiled but NOT displayed.
 *   ``<<< `` – display-only helper: displayed but NOT compiled.
 *   (normal)  – compiled AND displayed.
 *
 * The image path is derived from the MD5 hash of the *compiled* source
 * (identical to the hash used by scripts/generate-images.py) so that the
 * plugin can locate the pre-generated PNG without re-running typst.
 *
 * If the image file does not exist on disk (e.g. during local development
 * before generate-images.py has been run) the plugin still transforms the
 * code block to ``typst`` syntax; it simply omits the image node rather
 * than failing the build.
 */

import { visit } from "unist-util-visit";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";

const DEST_DIR = "static/img/typst-generated";

/**
 * Compute the 8-char MD5 hex prefix of the compiled source string.
 * Must stay in sync with scripts/generate-images.py `src_hash()`.
 */
function srcHash(compileSrc) {
  return createHash("md5").update(compileSrc, "utf8").digest("hex").slice(0, 8);
}

/**
 * Strip a line prefix marker and return the remaining content.
 * Returns null if the line does not start with the given prefix.
 *
 * @param {string} line
 * @param {string} prefix  e.g. ">>>" or "<<<"
 * @returns {string | null}
 */
function stripPrefix(line, prefix) {
  if (line === prefix) return "";
  if (line.startsWith(prefix + " ")) return line.slice(prefix.length + 1);
  return null;
}

/**
 * Parse an ``example`` block body into compile and display sources.
 *
 * @param {string} body  Raw block content (everything between the fences).
 * @returns {{ compileSrc: string, displaySrc: string }}
 */
function parseExampleBlock(body) {
  const compileLines = [];
  const displayLines = [];

  for (const line of body.split("\n")) {
    const prelude = stripPrefix(line, ">>>");
    const displayOnly = stripPrefix(line, "<<<");

    if (prelude !== null) {
      // Prelude: compile only
      compileLines.push(prelude);
    } else if (displayOnly !== null) {
      // Display-only helper
      displayLines.push(displayOnly);
    } else {
      compileLines.push(line);
      displayLines.push(line);
    }
  }

  return {
    compileSrc: compileLines.join("\n"),
    displaySrc: displayLines.join("\n"),
  };
}

const plugin = () => {
  const transformer = (ast) => {
    const toReplace = [];

    visit(ast, "code", (node, index, parent) => {
      if (node.lang !== "example") return;
      if (index === undefined || parent === undefined) return;

      toReplace.push({ node, index, parent });
    });

    // Process in reverse order so that splicing doesn't shift earlier indices.
    for (const { node, index, parent } of toReplace.reverse()) {
      const { compileSrc, displaySrc } = parseExampleBlock(node.value);
      const hash = srcHash(compileSrc);
      const imgFile = `${DEST_DIR}/${hash}.png`;
      const imgUrl = `/img/typst-generated/${hash}.png`;

      // Build the replacement nodes
      const codeNode = {
        type: "code",
        lang: "typst",
        meta: null,
        value: displaySrc,
      };

      const newNodes = [codeNode];

      if (existsSync(imgFile)) {
        newNodes.push({
          type: "image",
          url: imgUrl,
          alt: "Touying example output",
          title: null,
        });
      }

      // Wrap in PreviewedCode so code and image render side-by-side
      const previewedCodeNode = {
        type: "mdxJsxFlowElement",
        name: "PreviewedCode",
        attributes: [],
        children: newNodes,
      };

      // Replace the single ``example`` node with the wrapped component
      parent.children.splice(index, 1, previewedCodeNode);
    }
  };

  return transformer;
};

export default plugin;
