---
sidebar_position: 2
description: >-
  Reusable UI components for slides.
---

# Components

Reusable UI components for slides.

## Function Index

- [`side-by-side`](#side-by-side)
- [`adaptive-columns`](#adaptive-columns)
- [`progress-bar`](#progress-bar)
- [`left-and-right`](#left-and-right)
- [`checkerboard`](#checkerboard)
- [`progressive-outline`](#progressive-outline)
- [`custom-progressive-outline`](#custom-progressive-outline)
- [`mini-slides`](#mini-slides)
- [`simple-navigation`](#simple-navigation)
- [`knob-marker`](#knob-marker)

---

## `side-by-side`

**Signature:** `side-by-side(columns: auto, gutter: 1em, ..bodies)`

A simple wrapper around `grid` that creates a single-row grid. Used as the default `composer` for multi-body slides.

Example: `side-by-side[a][b][c]` will display `a`, `b`, and `c` side by side.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `columns` | `auto` \| `array` | The column widths. Default is `auto`, which creates equal-width columns matching the number of bodies. Default: `auto`. |
| `gutter` | `length` | The space between columns. Default is `1em`. Default: `1em`. |
| `..bodies` | `content` | The contents to display side by side. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L24)

---

## `adaptive-columns`

**Signature:** `adaptive-columns(gutter: 4%, max-count: 3, start: none, end: none, body)`

Adaptive columns layout that automatically chooses the number of columns based on content height.

Example: `components.adaptive-columns(outline())`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `gutter` | `length` | The space between columns. Default is `4%`. Default: `4%`. |
| `max-count` | `int` | The maximum number of columns. Default is `3`. Default: `3`. |
| `start` | `content` \| `none` | The content to place before the columns. Default is `none`. Default: `none`. |
| `end` | `content` \| `none` | The content to place after the columns. Default is `none`. Default: `none`. |
| `body` | `content` | The content to place in the columns. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L54)

---

## `progress-bar`

**Signature:** `progress-bar(height: 2pt, primary, secondary)`

Touying progress bar.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `primary` | `color` | The color of the progress bar. |
| `secondary` | `color` | The color of the background of the progress bar. |
| `height` | `length` | The height of the progress bar, optional. Default is `2pt`. Default: `2pt`. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L90)

---

## `left-and-right`

**Signature:** `left-and-right(left, right)`

Place two content blocks at the left and right edges of the available width using a three-column grid.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `left` | `content` | The content of the left part. |
| `right` | `content` | The content of the right part. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L109)

---

## `checkerboard`

**Signature:** `checkerboard(columns: none, rows: none, alignment: center + horizon, primary: white, secondary: silver, ..bodies)`

Create a slide where the provided content blocks are displayed in a grid with a checkerboard color pattern.

You can configure the grid using the `rows` and `columns` keyword arguments (both default to `none`):

- If `columns` is an integer, create that many columns of width `1fr`.
- If `columns` is `none`, create as many columns of width `1fr` as there are content blocks.
- Otherwise assume that `columns` is an array of widths already, use that.
- If `rows` is an integer, create that many rows of height `1fr`.
- If `rows` is `none`, create as many rows of height `1fr` as needed given the number of content blocks and columns.
- Otherwise assume that `rows` is an array of heights already, use that.

That means that `#checkerboard[...][...]` stacks horizontally and `#checkerboard(columns: 1)[...][...]` stacks vertically.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `columns` | `int` \| `array` \| `none` | The column specification. Default is `none`. Default: `none`. |
| `rows` | `int` \| `array` \| `none` | The row specification. Default is `none`. Default: `none`. |
| `alignment` | `alignment` | The alignment applied to the contents of each checkerboard cell. Default is `center + horizon`. Default: `center + horizon`. |
| `primary` | `color` | The background color of odd cells. Default is `white`. Default: `white`. |
| `secondary` | `color` | The background color of even cells. Default is `silver`. Default: `silver`. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L139)

---

## `progressive-outline`

**Signature:** `progressive-outline(alpha: 60%, level: 1, transform: (cover: false, alpha: 60%, ..args, it) => if cover { text(utils.update-alpha(text.fill, alpha), it) } else { it }, ..args)`

Show progressive outline. It will make other sections except the current section to be semi-transparent.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `alpha` | `ratio` | The transparency of the other sections. Default is `60%`. Default: `60%`. |
| `level` | `int` | The level of the outline. Default is `1`. Default: `1`. |
| `transform` | `function` | A function applied to each outline entry. It receives `(cover: bool, level: int, alpha: ratio, ..args, it)` where `cover` is `true` when the entry should be visually de-emphasized, `it` is the outline entry element, and `alpha` is the transparency value. Default: `(cover: false, alpha: 60%, ..args, it) => if cover { text(utils.update-alpha(text.fill, alpha), it) } else { it }`. |
| `..args` | `arguments` | Additional arguments forwarded to the inner `outline()` call. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L215)

---

## `custom-progressive-outline`

**Signature:** `custom-progressive-outline(self: none, alpha: 60%, level: auto, numbered: (false,), filled: (false,), paged: (false,), numbering: (), text-fill: none, text-size: none, text-weight: none, vspace: none, title: none, indent: (0em,), fill: (repeat[.],), short-heading: true, uncover-fn: body => body, ..args)`

A fully-featured progressive outline that renders headings from multiple levels with per-level styling.

Uses arrays indexed by heading level (first element = level 1, second = level 2, etc.) to apply different styling to each level. Unlike `progressive-outline` (a thin wrapper around Typst's built-in `outline`), this function renders each heading manually, giving full control over numbering, indentation, fills, and typography.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `self` | `none` | The self context. Default: `none`. |
| `alpha` | `ratio` | The transparency of the other headings. Default is `60%`. Default: `60%`. |
| `level` | `auto` \| `int` | The outline level. When `auto`, all levels up to `slide-level` are shown. Default is `auto`. Default: `auto`. |
| `numbered` | `array` | Per-level booleans indicating whether headings are numbered. Default is `(false,)`. Default: `(false,)`. |
| `filled` | `array` | Per-level booleans indicating whether to show a fill between the heading and the page number. Default is `(false,)`. Default: `(false,)`. |
| `paged` | `array` | Per-level booleans indicating whether to show the page number. Default is `(false,)`. Default: `(false,)`. |
| `numbering` | `array` | Per-level numbering strings or `none` overrides. Default is `()`. Default: `()`. |
| `text-fill` | `array` \| `none` | Per-level text fill colors. Default is `none` (inherits current text color). Default: `none`. |
| `text-size` | `array` \| `none` | Per-level text sizes. Default is `none` (inherits current text size). Default: `none`. |
| `text-weight` | `array` \| `none` | Per-level text weights. Default is `none` (inherits current text weight). Default: `none`. |
| `vspace` | `array` \| `none` | Per-level vertical space above each heading. Default is `none`. Default: `none`. |
| `title` | `str` \| `none` | The title of the outline section. Default is `none`. Default: `none`. |
| `indent` | `array` | Per-level left indentation. Default is `(0em,)`. Default: `(0em,)`. |
| `fill` | `array` | Per-level fill content between heading and page number. Default is `(repeat[.],)`. Default: `(repeat[.],)`. |
| `short-heading` | `bool` | Whether to shorten headings that have labels using `utils.short-heading`. Default is `true`. Default: `true`. |
| `uncover-fn` | `function` | A function `body => body` applied to currently-active (non-covered) headings. Default is the identity function. Default: `body => body`. |
| `..args` | `arguments` | Additional arguments forwarded to the underlying `progressive-outline` call. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L301)

---

## `mini-slides`

**Signature:** `mini-slides(self: none, fill: rgb("000000"), alpha: 60%, display-section: false, display-subsection: true, linebreaks: true, short-heading: true, inline: false)`

Section navigation component showing all sections and their per-slide progress as small filled/empty circle dots.

Typically placed in a theme's page header. Each section is labeled with a link, and each slide within the section is represented by a small dot (filled for the current slide, hollow for others). The active section uses the full `fill` color; inactive sections have `alpha` transparency applied.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `self` | `none` | The self context, used to resolve short headings. Default: `none`. |
| `fill` | `color` | The text and dot color. Default is `rgb("000000")`. Default: `rgb("000000")`. |
| `alpha` | `ratio` | The transparency applied to inactive sections. Default is `60%`. Default: `60%`. |
| `display-section` | `bool` | Whether to show per-slide dots for level-1 section headings. Default is `false`. Default: `false`. |
| `display-subsection` | `bool` | Whether to show per-slide dots for level-2 subsection headings. Default is `true`. Default: `true`. |
| `linebreaks` | `bool` | Whether to insert a line break after section/subsection labels. Default is `true`. Default: `true`. |
| `short-heading` | `bool` | Whether to shorten heading labels using `utils.short-heading`. Default is `true`. Default: `true`. |
| `inline` | `bool` | Whether to place dots on the same line as the section label instead of below it. Default is `false`. Default: `false`. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L428)

---

## `simple-navigation`

**Signature:** `simple-navigation(self: none, short-heading: true, primary: white, secondary: gray, background: black, logo: none)`

A horizontal navigation bar showing all level-1 sections as clickable links.

The active section label is shown in `primary` color; all other sections use `secondary` color. An optional logo is placed at the right edge. Typically used as a page header in themes.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `self` | `none` | The self context, used to resolve short headings. Default: `none`. |
| `short-heading` | `bool` | Whether to shorten heading labels using `utils.short-heading`. Default is `true`. Default: `true`. |
| `primary` | `color` | The text color of the currently active section. Default is `white`. Default: `white`. |
| `secondary` | `color` | The text color of inactive sections. Default is `gray`. Default: `gray`. |
| `background` | `color` | The background fill of the navigation bar. Default is `black`. Default: `black`. |
| `logo` | `content` \| `none` | Optional logo displayed at the right side of the bar. Default is `none`. Default: `none`. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L577)

---

## `knob-marker`

**Signature:** `knob-marker(primary: rgb("#005bac"))`

LaTeX-like knob marker for list items.

Example: `#set list(marker: components.knob-marker(primary: rgb("005bac")))`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `primary` | `color` | The color of the marker. Default: `rgb("#005bac")`. |

**Returns:** `content`

**Source:** [`components.typ`](https://github.com/touying-typ/touying/blob/main/src/components.typ#L643)

---
