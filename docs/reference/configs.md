---
sidebar_position: 3
description: >-
  Configuration functions for presentation settings.
---

# Configs

Configuration functions for presentation settings.

## Function Index

- [`config-store`](#config-store)
- [`config-common`](#config-common)
- [`config-methods`](#config-methods)
- [`config-info`](#config-info)
- [`config-colors`](#config-colors)
- [`config-page`](#config-page)
- [`default-config`](#default-config)

---

## `config-store`

**Signature:** `config-store(..args)`

Store theme-specific private data in the presentation context.

Use this in your theme's `#show: my-theme.with(...)` to pass arbitrary key-value pairs that your theme needs internally. The stored values are accessible via `self.store.<key>` inside any theme function.

Example:

```typst
config-store(
  header-height: 2em,
  show-logo: true,
)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `..args` | `arguments` | Named key-value pairs to store in `self.store`. |

**Returns:** `dictionary`

**Source:** [`configs.typ`](https://github.com/touying-typ/touying/blob/main/src/configs.typ#L34)

---

## `config-common`

**Signature:** `config-common(handout, handout-subslides, slide-level, slide-fn, new-section-slide-fn, new-subsection-slide-fn, new-subsubsection-slide-fn, new-subsubsubsection-slide-fn, receive-body-for-new-section-slide-fn, receive-body-for-new-subsection-slide-fn, receive-body-for-new-subsubsection-slide-fn, receive-body-for-new-subsubsubsection-slide-fn, show-strong-with-alert, datetime-format, appendix, freeze-slide-counter, zero-margin-header, zero-margin-footer, auto-offset-for-heading, enable-pdfpc, enable-mark-warning, reset-page-counter-to-slide-counter, enable-frozen-states-and-counters, frozen-states, default-frozen-states, frozen-counters, default-frozen-counters, label-only-on-last-subslide, preamble, default-preamble, slide-preamble, default-slide-preamble, subslide-preamble, default-subslide-preamble, page-preamble, default-page-preamble, show-only-notes, show-notes-on-second-screen, horizontal-line-to-pagebreak, reset-footnote-number-per-slide, nontight-list-enum-and-terms, align-list-marker-with-baseline, align-enum-marker-with-baseline, scale-list-items, show-hide-set-list-marker-none, show-bibliography-as-footnote, default-composer, ..args)`

The common configurations of the slides.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `handout` | `bool` | Whether to enable the handout mode. By default, it retains only the last subslide of each slide, but this can be overridden via `handout-subslides`. Default is `false`. |
| `handout-subslides` | `none` \| `int` \| `array` \| `str` | The subslides to include in handout mode. Accepts the same format as `visible-subslides` (e.g. `2`, `(1, 3)`, `"2-"`, `"1, 3-5"`). When `none`, the last subslide is used (default behavior). Default is `none`. |
| `slide-level` | `int` | The level of the slides. Default is `2`, which means the level 1 and 2 headings will be treated as slides. |
| `slide-fn` | `function` | The function to create a new slide. |
| `new-section-slide-fn` | `function` | The function to create a new slide for a new section. Default is `none`. |
| `new-subsection-slide-fn` | `function` | The function to create a new slide for a new subsection. Default is `none`. |
| `new-subsubsection-slide-fn` | `function` | The function to create a new slide for a new subsubsection. Default is `none`. |
| `new-subsubsubsection-slide-fn` | `function` | The function to create a new slide for a new subsubsubsection. Default is `none`. |
| `receive-body-for-new-section-slide-fn` | `bool` | Whether to receive the body for the new section slide function. Default is `true`. |
| `receive-body-for-new-subsection-slide-fn` | `bool` | Whether to receive the body for the new subsection slide function. Default is `true`. |
| `receive-body-for-new-subsubsection-slide-fn` | `bool` | Whether to receive the body for the new subsubsection slide function. Default is `true`. |
| `receive-body-for-new-subsubsubsection-slide-fn` | `bool` | Whether to receive the body for the new subsubsubsection slide function. Default is `true`. |
| `show-strong-with-alert` | `bool` | Whether to show strong with alert. Default is `true`. |
| `datetime-format` | `auto` \| `str` | The format of the datetime. Default is `auto`. |
| `appendix` | `bool` | Is touying in the appendix mode. The last-slide-counter will be frozen in the appendix mode. Default is `false`. |
| `freeze-slide-counter` | `bool` | Whether to freeze the slide counter. Default is `false`. |
| `zero-margin-header` | `bool` | Whether to show the full header (with negative padding). Default is `true`. |
| `zero-margin-footer` | `bool` | Whether to show the full footer (with negative padding). Default is `true`. |
| `auto-offset-for-heading` | `bool` | Whether to add an offset relative to slide-level for headings. Default is `true`. |
| `enable-pdfpc` | `bool` | Whether to add `<pdfpc-file>` label for querying. Default is `true`. You can export the .pdfpc file directly using: `typst query --root . ./example.typ --field value --one "<pdfpc-file>" > ./example.pdfpc` |
| `enable-mark-warning` | `bool` | Whether to enable the mark warning. Default is `true`. |
| `reset-page-counter-to-slide-counter` | `bool` | Whether to reset the page counter to the slide counter. Default is `true`. |
| `show-only-notes` | `bool` | Whether to show the speaker notes as the main content with the slide shown as a small thumbnail in the top right corner. Default is `false`. This is similar to LaTeX Beamer's `\setbeameroption{show only notes}`. It is useful for using speaker notes with presentation tools that let you load two PDFs and synchronize them, one to display on the main screen and one on the auxiliary screen. |
| `show-notes-on-second-screen` | `none` \| `alignment` | Whether to show the speaker notes on the second screen. Default is `none`. Currently, the alignment can be `none`, `bottom`, and `right`. |
| `horizontal-line-to-pagebreak` | `bool` | Whether to convert horizontal lines to page breaks. Default is `true`. You can use markdown-like syntax `---` to divide slides. |
| `reset-footnote-number-per-slide` | `bool` | Whether to reset the footnote number per slide. Default is `true`. |
| `nontight-list-enum-and-terms` | `bool` | Whether to make `tight` argument always be `false` for list, enum, and terms. Default is `false`. |
| `align-list-marker-with-baseline` | `bool` | Whether to align the list marker with the baseline. Default is `false`. |
| `align-enum-marker-with-baseline` | `bool` | Whether to align the enum marker with the baseline. Default is `false`. It will only work when the enum item has a number like `1.`. |
| `scale-list-items` | `none` \| `float` | Whether to scale the list items recursively. For example, `scale-list-items: 0.8` will scale the list items by 0.8. Default is `none`. |
| `enable-frozen-states-and-counters` | `bool` | Whether to enable the frozen states and counters. It is useful for equations, figures, and theorems. Default is `true`. |
| `show-hide-set-list-marker-none` | `bool` | Whether to set the list marker to none for hide function. Default is `true`. |
| `show-bibliography-as-footnote` | `bool` | Whether to show the bibliography as footnote. Default is `none`. It receives a bibliography function like `bibliography(title: none, "ref.bib")`, or a dict like `(numbering: "[1]", bibliography: bibliography(title: none, "ref.bib"))`. |
| `frozen-states` | `array` | The frozen states for the frozen states and counters. Default is `()`. |
| `default-frozen-states` | `function` | The default frozen states for the frozen states and counters. Default is state for `ctheorems` package. |
| `frozen-counters` | `array` | The frozen counters for the frozen states and counters. You can pass some counters like `(counter(math.equation),)`. Default is `()`. |
| `default-frozen-counters` | `array` | The default frozen counters for the frozen states and counters. The default value is `(counter(math.equation), counter(figure.where(kind: table)), counter(figure.where(kind: image)))`. |
| `label-only-on-last-subslide` | `array` | We only label some contents in the last subslide, which is useful for ref equations, figures, footnotes, and theorems with multiple subslides. Default is `(figure, math.equation, footnote)`. |
| `preamble` | `function` | The function to run before each slide. Default is `none`. |
| `default-preamble` | `function` | The default preamble for each slide. Default is a function to check the mark warning and add pdfpc file. |
| `slide-preamble` | `function` | The function to run before each slide. Default is `none`. |
| `default-slide-preamble` | `function` | The default preamble for each slide. Default is `none`. |
| `subslide-preamble` | `function` | The function to run before each subslide. Default is `none`. |
| `default-subslide-preamble` | `function` | The default preamble for each subslide. Default is `none`. |
| `page-preamble` | `function` | The function to run before each page. Default is `none`. |
| `default-page-preamble` | `function` | The default preamble for each page. Default is a function to reset the footnote number per slide and reset the page counter to the slide counter. |
| `default-composer` | `auto` \| `function` \| `array` | The default composer for slides. It is used when the `composer` argument of the `slide` function is `auto`. Default is `auto`, which falls back to using `components.side-by-side`. For example, `config-common(default-composer: components.side-by-side.with(gutter: 2em))` sets the default gutter between columns to `2em` for all slides. |

**Returns:** `dictionary`

**Source:** [`configs.typ`](https://github.com/touying-typ/touying/blob/main/src/configs.typ#L222)

---

## `config-methods`

**Signature:** `config-methods(init, cover, uncover, only, effect, alternatives-match, alternatives, alternatives-fn, alternatives-cases, item-by-item, alert, show-only-notes, convert-label-to-short-heading, ..args)`

The configuration of the methods.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `init` | `function` | The function to initialize the presentation. It should be `(self: none, body) => { .. }`. |
| `cover` | `function` | The function to cover content. The default value is `utils.method-wrapper(hide)` function. You can configure it with `cover: utils.semi-transparent-cover` to use the semi-transparent cover. |
| `uncover` | `function` | The function to uncover content. The default value is `utils.uncover` function. |
| `only` | `function` | The function to show only the content. The default value is `utils.only` function. |
| `effect` | `function` | The function to add effect to the content. The default value is `utils.effect`. |
| `alternatives-match` | `function` | The function to match alternatives. The default value is `utils.alternatives-match` function. |
| `alternatives` | `function` | The function to show alternatives. The default value is `utils.alternatives` function. |
| `alternatives-fn` | `function` | The function to show alternatives with a function. The default value is `utils.alternatives-fn` function. |
| `alternatives-cases` | `function` | The function to show alternatives with cases. The default value is `utils.alternatives-cases` function. |
| `item-by-item` | `function` | The function to show items one by one. The default value is `utils.item-by-item` function. |
| `alert` | `function` | The function to alert the content. The default value is `utils.method-wrapper(text.with(weight: "bold"))` function. |
| `show-only-notes` | `function` | The function used to render speaker notes, either as the primary content (`show-only-notes: true` mode) or on a second screen. It should accept `(self: none, width: 0pt, height: 0pt, cutout: false)`. When `cutout: true`, return a dictionary with `background`, `foreground`, and `cutout-height` keys. |
| `convert-label-to-short-heading` | `function` | The function to convert label to short heading. It is useful for the short heading for heading with label. It will be used in function with `short-heading`. The default value is `utils.titlecase(lbl.replace(regex("^[^:]*:"), "").replace("_", " ").replace("-", " "))`. It means that some headings with labels like `section:my-section` will be converted to `My Section`. |

**Returns:** `dictionary`

**Source:** [`configs.typ`](https://github.com/touying-typ/touying/blob/main/src/configs.typ#L428)

---

## `config-info`

**Signature:** `config-info(title, short-title, subtitle, short-subtitle, author, date, institution, logo, ..args)`

The configuration of important information of the presentation.

Example:

```typst
config-info(
  title: "Title",
  subtitle: "Subtitle",
  author: "Author",
  date: datetime.today(),
  institution: "Institution",
)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `title` | `content` | The title of the presentation, which will be displayed in the title slide. |
| `short-title` | `content` \| `auto` | The short title of the presentation, which will usually be displayed in the footer of the slides. If you set it to `auto`, it will be the same as the title. |
| `subtitle` | `content` | The subtitle of the presentation. |
| `short-subtitle` | `content` \| `auto` | The short subtitle of the presentation, which will usually be displayed in the footer of the slides. If you set it to `auto`, it will be the same as the subtitle. |
| `author` | `content` | The author of the presentation. |
| `date` | `datetime` \| `content` | The date of the presentation. You can use `datetime.today()` to get the current date. |
| `institution` | `content` | The institution of the presentation. |
| `logo` | `content` | The logo of the institution. |

**Returns:** `dictionary`

**Source:** [`configs.typ`](https://github.com/touying-typ/touying/blob/main/src/configs.typ#L507)

---

## `config-colors`

**Signature:** `config-colors(neutral, neutral-light, neutral-lighter, neutral-lightest, neutral-dark, neutral-darker, neutral-darkest, primary, primary-light, primary-lighter, primary-lightest, primary-dark, primary-darker, primary-darkest, secondary, secondary-light, secondary-lighter, secondary-lightest, secondary-dark, secondary-darker, secondary-darkest, tertiary, tertiary-light, tertiary-lighter, tertiary-lightest, tertiary-dark, tertiary-darker, tertiary-darkest, ..args)`

The configuration of the colors used in the theme.

Example:

```typst
config-colors(
  primary: rgb("#04364A"),
  secondary: rgb("#176B87"),
  tertiary: rgb("#448C95"),
  neutral: rgb("#303030"),
  neutral-darkest: rgb("#000000"),
)
```

IMPORTANT: The colors should be defined in the *RGB* format at most cases.

There are four main color groups: `primary`, `secondary`, `tertiary`, and `neutral`.
Each group includes the base color plus variants: `light`, `lighter`, `lightest`, `dark`, `darker`, `darkest`.
For example, `primary`, `primary-light`, `primary-lightest`, `neutral-darkest`, etc.

**Returns:** `dictionary`

**Source:** [`configs.typ`](https://github.com/touying-typ/touying/blob/main/src/configs.typ#L556)

---

## `config-page`

**Signature:** `config-page(paper, header, footer, fill, margin, numbering, ..args)`

The configuration of the page layout.

It is equivalent to the `#set page()` rule in Touying.

Example:

```typst
config-page(
  paper: "presentation-16-9",
  header: none,
  footer: none,
  fill: rgb("#ffffff"),
  margin: (x: 3em, y: 2.8em),
)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `paper` | `str` | A standard paper size to set width and height. The default value is `"presentation-16-9"`. You can also use `aspect-ratio` to set the aspect ratio of the paper. |
| `header` | `content` | The page's header. Fills the top margin of each page. |
| `footer` | `content` | The page's footer. Fills the bottom margin of each page. |
| `fill` | `color` | The background color of the page. The default value is `rgb("#ffffff")`. |
| `margin` | `length` \| `dictionary` | The margin of the page. The default value is `(x: 3em, y: 2.8em)`. - A single length: The same margin on all sides. - A dictionary: With a dictionary, the margins can be set individually. The dictionary can contain the following keys in order of precedence: - top: The top margin. - right: The right margin. - bottom: The bottom margin. - left: The left margin. - inside: The margin at the inner side of the page (where the binding is). - outside: The margin at the outer side of the page (opposite to the binding). - x: The horizontal margins. - y: The vertical margins. - rest: The margins on all sides except those for which the dictionary explicitly sets a size. |
| `numbering` | `str` \| `function` | The numbering style of the page. The default value is `"1"`. The values for left and right are mutually exclusive with the values for inside and outside. |

**Returns:** `dictionary`

**Source:** [`configs.typ`](https://github.com/touying-typ/touying/blob/main/src/configs.typ#L667)

---

## `default-config`

**Signature:** `default-config`

The default configuration values used when no explicit configuration is provided.

**Source:** [`configs.typ`](https://github.com/touying-typ/touying/blob/main/src/configs.typ#L692)

---
