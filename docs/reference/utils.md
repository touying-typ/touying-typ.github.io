---
sidebar_position: 4
description: >-
  Utility functions used throughout Touying.
---

# Utils

Utility functions used throughout Touying.

## Function Index

- [`add-dicts`](#add-dicts)
- [`merge-dicts`](#merge-dicts)
- [`touying-progress`](#touying-progress)
- [`trim`](#trim)
- [`label-it`](#label-it)
- [`reconstruct`](#reconstruct)
- [`reconstruct-table-like`](#reconstruct-table-like)
- [`is-sequence`](#is-sequence)
- [`is-styled`](#is-styled)
- [`reconstruct-styled`](#reconstruct-styled)
- [`is-metadata`](#is-metadata)
- [`is-kind`](#is-kind)
- [`is-heading`](#is-heading)
- [`call-or-display`](#call-or-display)
- [`method-wrapper`](#method-wrapper)
- [`methods`](#methods)
- [`capitalize`](#capitalize)
- [`titlecase`](#titlecase)
- [`short-heading`](#short-heading)
- [`current-heading`](#current-heading)
- [`display-current-heading`](#display-current-heading)
- [`display-current-heading-number`](#display-current-heading-number)
- [`display-current-short-heading`](#display-current-short-heading)
- [`display-info-date`](#display-info-date)
- [`markup-text`](#markup-text)
- [`fit-to-height`](#fit-to-height)
- [`fit-to-width`](#fit-to-width)
- [`cover-with-rect`](#cover-with-rect)
- [`update-alpha`](#update-alpha)
- [`semi-transparent-cover`](#semi-transparent-cover)
- [`color-changing-cover`](#color-changing-cover)
- [`alpha-changing-cover`](#alpha-changing-cover)
- [`alert-with-primary-color`](#alert-with-primary-color)
- [`alert`](#alert)
- [`check-visible`](#check-visible)
- [`effect`](#effect)
- [`uncover`](#uncover)
- [`only`](#only)
- [`handout-only`](#handout-only)
- [`alternatives-match`](#alternatives-match)
- [`alternatives`](#alternatives)
- [`alternatives-fn`](#alternatives-fn)
- [`alternatives-cases`](#alternatives-cases)
- [`item-by-item`](#item-by-item)
- [`speaker-note`](#speaker-note)
- [`page-args-from-aspect-ratio`](#page-args-from-aspect-ratio)
- [`get-page-dimensions`](#get-page-dimensions)
- [`i18n-outline-title`](#i18n-outline-title)

---

## `add-dicts`

**Signature:** `add-dicts(dict-a, dict-b)`

Add a dictionary to another dictionary recursively.

Example: `add-dicts((a: (b: 1)), (a: (c: 2)))` returns `(a: (b: 1, c: 2))`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `dict-a` | `dictionary` | The base dictionary. |
| `dict-b` | `dictionary` | The dictionary to merge into `dict-a`. |

**Returns:** `dictionary`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L12)

---

## `merge-dicts`

**Signature:** `merge-dicts(init-dict, ..dicts)`

Merge some dictionaries recursively.

Example: `merge-dicts((a: (b: 1)), (a: (c: 2)))` returns `(a: (b: 1, c: 2))`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `init-dict` | `dictionary` | The initial dictionary to start from. |
| `..dicts` | `array` | Additional dictionaries to merge in order. |

**Returns:** `dictionary`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L38)

---

## `touying-progress`

**Signature:** `touying-progress(callback)`

Get the progress of the current slide.

`utils.last-slide-number` gives the total slide count and can be used directly in headers or footers.

**Example:**

```typst
#show: simple-theme.with(aspect-ratio: "16-9")
= Slide
#touying-progress(ratio => {
"Progress: " + str(int(ratio * 100)) + "%"
})
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `callback` | `function` | A function `ratio => { .. }` receiving a float between `0.0` and `1.0`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L81)

---

## `trim`

**Signature:** `trim(arr, empty-contents: ([], [ ], parbreak(), linebreak()))`

Remove leading and trailing empty elements from an array of content.

Example: `trim(([], [ ], parbreak(), linebreak(), [a], [ ], [b], [c], linebreak(), parbreak(), [ ], [ ]))` returns `([a], [ ], [b], [c])`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `arr` | `array` | The array of content to trim. |
| `empty-contents` | `array` | An array of content elements considered empty. Default is `([], [ ], parbreak(), linebreak())`. Default: `([], [ ], parbreak(), linebreak())`. |

**Returns:** `array`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L112)

---

## `label-it`

**Signature:** `label-it(it, label-name)`

Add a label to a content.

Example: `label-it("key", [a])` is equivalent to `[a <key>]`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` | The content to label. |
| `label-name` | `str` \| `label` | The name of the label, or a label. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L134)

---

## `reconstruct`

**Signature:** `reconstruct(body-name: "body", labeled: true, named: false, it, ..new-body)`

Reconstruct a content with a new body.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `body-name` | `str` | The property name of the body field. Default: `"body"`. |
| `labeled` | `bool` | Indicates whether the label of the content should be preserved. Default: `true`. |
| `named` | `bool` | Indicates whether to pass fields as named arguments. Default: `false`. |
| `it` | `content` | The content to reconstruct. |
| `..new-body` | `content` | The new body you want to replace the old body with. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L156)

---

## `reconstruct-table-like`

**Signature:** `reconstruct-table-like(named: true, labeled: true, it, new-children)`

Reconstruct a table-like content with new children.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `named` | `bool` | Whether to pass fields as named arguments. Default is `true`. Default: `true`. |
| `labeled` | `bool` | Whether to preserve the label of the content. Default is `true`. Default: `true`. |
| `it` | `content` | The content to reconstruct. |
| `new-children` | `array` | The new children to replace the old children with. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L193)

---

## `is-sequence`

**Signature:** `is-sequence(it)`

Determine if a content is a sequence (i.e. created by concatenating content with `+` or implicit adjacency).

Example: `is-sequence([a])` returns `true`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` | The content to check. |

**Returns:** `bool`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L213)

---

## `is-styled`

**Signature:** `is-styled(it)`

Determine if a content is styled (i.e. wrapped by Typst's internal styled element when `set` or `show` rules are applied).

Example: `is-styled(text(fill: red)[Red])` returns `true`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` | The content to check. |

**Returns:** `bool`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L227)

---

## `reconstruct-styled`

**Signature:** `reconstruct-styled(it, new-child)`

Reconstruct a styled content with a new body.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` | The content to reconstruct. |
| `new-child` | `content` | The new child you want to replace the old body with. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L239)

---

## `is-metadata`

**Signature:** `is-metadata(it)`

Determine if a content is a `metadata(...)` element.

Example: `is-metadata(metadata((a: 1)))` returns `true`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` | The content to check. |

**Returns:** `bool`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L251)

---

## `is-kind`

**Signature:** `is-kind(it, kind)`

Determine if a content is a metadata with a specific kind.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` | The content to check. |
| `kind` | `str` | The kind string to match. |

**Returns:** `bool`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L263)

---

## `is-heading`

**Signature:** `is-heading(it, depth: 9999)`

Determine if a content is a heading in a specific depth.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` | The content to check. |
| `depth` | `int` | Maximum heading depth to consider. Default is `9999`. Default: `9999`. |

**Returns:** `bool`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L279)

---

## `call-or-display`

**Signature:** `call-or-display(self, it)`

Call a `self => {..}` function and return the result, or wrap plain content in `[]`.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `self` | `dictionary` | The presentation context. |
| `it` | `content` \| `function` | The content to display, or a callback `self => content`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L291)

---

## `method-wrapper`

**Signature:** `method-wrapper(fn)`

Wrap a function with a `self` parameter to make it callable as a method.

Returns a new function of the form `(self: none, ..args) => fn(..args)`.

Example: `#let hide = method-wrapper(hide)` to get a `hide` method.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `fn` | `function` | The function to wrap. |

**Returns:** `function`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L308)

---

## `methods`

**Signature:** `methods(self)`

Extract all method functions from `self` and bind `self` as their first named argument.

Returns a dictionary of ready-to-call functions where the `self` argument has already been applied. Use destructuring to get individual methods.

Example: `#let (uncover, only) = utils.methods(self)` to get `uncover` and `only` methods.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `self` | `dictionary` | The presentation context (must have a `methods` key containing a dictionary of functions). |

**Returns:** `dictionary`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L320)

---

## `capitalize`

**Signature:** `capitalize(s)`

Capitalize a string.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `s` | `str` | The string to convert. |

**Returns:** `str`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L346)

---

## `titlecase`

**Signature:** `titlecase(s)`

Convert a string into title case.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `s` | `str` | The string to convert. |

**Returns:** `str`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L361)

---

## `short-heading`

**Signature:** `short-heading(self: none, it)`

Convert a heading with label to a short display form.

If the heading has a special Touying label (e.g. `touying:hidden`), returns the heading body as-is.
If the heading has a user label (e.g. `section:my-section`), strips the namespace prefix and applies title case via `convert-label-to-short-heading`.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` | The heading content element. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L378)

---

## `current-heading`

**Signature:** `current-heading(level: auto, hierachical: true, depth: 9999)`

Get the current heading on or before the current page.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `level` | `int` \| `auto` | The level of the heading. If `level` is `auto`, it will return the last heading on or before the current page. If `level` is a number, it will return the last heading on or before the current page with the same level. Default: `auto`. |
| `hierachical` | `bool` | Whether to return the heading hierarchically. If `true`, returns the last heading according to the hierarchical structure. If `false`, returns the last heading on or before the current page with the same level. Default: `true`. |
| `depth` | `int` | The maximum depth of the heading to search. Usually, it should be set as slide-level. Default: `9999`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L429)

---

## `display-current-heading`

**Signature:** `display-current-heading(self: none, level: auto, hierachical: true, depth: 9999, style: (setting: body => body, numbered: true, current-heading) => setting({ if numbered and current-heading.numbering != none { ( std.numbering( current-heading.numbering, ..counter(heading).at(current-heading.location()), ) + h(.3em) ) } current-heading.body }), ..setting-args)`

Display the current heading on the page.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `level` | `int` \| `auto` | The level of the heading. If `level` is `auto`, it will return the last heading on or before the current page. If `level` is a number, it will return the last heading on or before the current page with the same level. Default: `auto`. |
| `numbered` | `bool` | Whether to display the heading numbering. Default is `true`. |
| `hierachical` | `bool` | Whether to return the heading hierarchically. If `true`, returns the last heading according to the hierarchical structure. If `false`, returns the last heading on or before the current page with the same level. Default: `true`. |
| `depth` | `int` | The maximum depth of the heading to search. Usually, it should be set as slide-level. Default: `9999`. |
| `setting` | `function` | The setting of the heading. Default is `body => body`. |
| `style` | `function` | The style of the heading. If `style` is a function, it will use the function to style the heading. For example, `style: current-heading => current-heading.body`. If you set it to `style: auto`, it will be controlled by `show heading` rules. Default: `(setting: body => body, numbered: true, current-heading) => setting({ if numbered and current-heading.numbering != none { ( std.numbering( current-heading.numbering, ..counter(heading).at(current-heading.location()), ) + h(.3em) ) } current-heading.body })`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L477)

---

## `display-current-heading-number`

**Signature:** `display-current-heading-number(level: auto, numbering: auto, hierachical: true, depth: 9999)`

Display the current heading number on the page.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `level` | `int` \| `auto` | The level of the heading. If `level` is `auto`, it will return the last heading on or before the current page. If `level` is a number, it will return the last heading on or before the current page with the same level. Default: `auto`. |
| `numbering` | `str` \| `auto` | The numbering of the heading. If `auto`, uses the heading's own numbering. If a string, uses that as the numbering pattern. Default: `auto`. |
| `hierachical` | `bool` | Whether to return the heading hierarchically. If `true`, returns the last heading according to the hierarchical structure. If `false`, returns the last heading on or before the current page with the same level. Default: `true`. |
| `depth` | `int` | The maximum depth of the heading to search. Usually, it should be set as slide-level. Default: `9999`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L533)

---

## `display-current-short-heading`

**Signature:** `display-current-short-heading(self: none, level: auto, hierachical: true, depth: 9999, setting: body => body, style: (self: none, current-heading) => short-heading( self: self, current-heading, ), ..setting-args)`

Display the current short heading on the page.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `level` | `int` \| `auto` | The level of the heading. If `level` is `auto`, it will return the last heading on or before the current page. If `level` is a number, it will return the last heading on or before the current page with the same level. Default: `auto`. |
| `hierachical` | `bool` | Whether to return the heading hierarchically. If `true`, returns the last heading according to the hierarchical structure. If `false`, returns the last heading on or before the current page with the same level. Default: `true`. |
| `depth` | `int` | The maximum depth of the heading to search. Usually, it should be set as slide-level. Default: `9999`. |
| `style` | `function` | The style of the heading. If `style` is a function, it will use the function to style the heading. For example, `style: (self: none, current-heading) => utils.short-heading(self: self, current-heading)`. Default: `(self: none, current-heading) => short-heading( self: self, current-heading, )`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L575)

---

## `display-info-date`

**Signature:** `display-info-date(self)`

Display the date from `self.info.date` formatted with `self.datetime-format`.

Returns the date as a formatted string when `self.info.date` is a `datetime`, or returns it as-is when it is already `content`.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `self` | `dictionary` | The presentation context (must have `self.info.date`). |

**Returns:** `content` \| `str`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L611)

---

## `markup-text`

**Signature:** `markup-text(it, mode: "typ", indent: 0)`

Convert content to markup text, partly from
[typst-examples-book](https://sitandr.github.io/typst-examples-book/book/typstonomicon/extract_markup_text.html).

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `it` | `content` \| `str` | The content to convert. |
| `mode` | `str` | The output mode: `"typ"` for Typst markup or `"md"` for Markdown. Default: `"typ"`. |
| `indent` | `int` | The number of spaces to indent. Default is `0`. Default: `0`. |

**Returns:** `str`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L631)

---

## `fit-to-height`

**Signature:** `fit-to-height(width: none, prescale-width: none, grow: true, shrink: true, height, body)`

Fit content to specified height.

Example: `#utils.fit-to-height(100%)[BIG]`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `width` | `length` \| `fraction` \| `relative` | Will determine the width of the content after scaling. So, if you want the scaled content to fill half of the slide width, you can use `width: 50%`. Default: `none`. |
| `prescale-width` | `length` \| `fraction` \| `relative` | Allows you to make Typst's layout assume that the given content is to be laid out in a container of a certain width before scaling. For example, you can use `prescale-width: 200%` assuming the slide's width is twice the original. Default: `none`. |
| `grow` | `bool` | Indicates whether the content should be scaled up if it is smaller than the available height. Default is `true`. Default: `true`. |
| `shrink` | `bool` | Indicates whether the content should be scaled down if it is larger than the available height. Default is `true`. Default: `true`. |
| `height` | `length` | The height to fit the content to. |
| `body` | `content` | The content to fit. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L764)

---

## `fit-to-width`

**Signature:** `fit-to-width(grow: true, shrink: true, width, content)`

Fit content to specified width.

Example: `#utils.fit-to-width(100%)[BIG]`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `grow` | `bool` | Indicates whether the content should be scaled up if it is smaller than the available width. Default is `true`. Default: `true`. |
| `shrink` | `bool` | Indicates whether the content should be scaled down if it is larger than the available width. Default is `true`. Default: `true`. |
| `width` | `length` \| `fraction` \| `relative` | The width to fit the content to. |
| `body` | `content` | The content to fit. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L829)

---

## `cover-with-rect`

**Signature:** `cover-with-rect(..cover-args, fill: auto, inline: true, body)`

Cover content with a rectangle of a specified color. If you set the fill to the background color of the page, you can use this to create a semi-transparent overlay.

Example: `#utils.cover-with-rect(fill: "red")[Hidden]`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `..cover-args` | `args` | The arguments to pass to the rectangle. |
| `fill` | `color` | The color to fill the rectangle with. Default: `auto`. |
| `inline` | `bool` | Indicates whether the content should be displayed inline. Default is `true`. Default: `true`. |
| `body` | `content` | The content to cover. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L869)

---

## `update-alpha`

**Signature:** `update-alpha(color, alpha)`

Update the alpha channel of a color.

Example: `update-alpha(rgb("#ff0000"), 0.5)` returns a red color with 50% opacity.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `color` | `color` | The color to update. |
| `alpha` | `ratio` | The new alpha value as a percentage (e.g. `50%` for half-transparent). |

**Returns:** `color`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L925)

---

## `semi-transparent-cover`

**Signature:** `semi-transparent-cover(self: none, alpha: 85%, body)`

Cover content with a semi-transparent rectangle matching the page background color.

Example: `config-methods(cover: utils.semi-transparent-cover)`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `alpha` | `ratio` | The opacity of the covering rectangle (higher means more opaque/more hidden). Default is `85%`. Default: `85%`. |
| `body` | `content` | The content to cover. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L939)

---

## `color-changing-cover`

**Signature:** `color-changing-cover(self: none, color: gray, fallback-hide: true, transparentize-table: false, it)`

Cover content with a text-color-changing mechanism.

Example: `config-methods(cover: utils.color-changing-cover.with(color: gray))`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `color` | `color` | The color to apply to text when covered. Default is `gray`. Default: `gray`. |
| `fallback-hide` | `bool` | Whether to hide the content if it does not contain text. Default is `true`. Default: `true`. |
| `transparentize-table` | `bool` | Whether to transparentize table content. Default is `false`. Default: `false`. |
| `it` | `content` | The content to cover. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L989)

---

## `alpha-changing-cover`

**Signature:** `alpha-changing-cover(self: none, alpha: 25%, fallback-hide: true, transparentize-table: false, it)`

Cover content with an alpha-changing mechanism.

Example: `config-methods(cover: utils.alpha-changing-cover.with(alpha: 25%))`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `alpha` | `ratio` | The opacity to apply to text colors when covered. Default is `25%`. Default: `25%`. |
| `fallback-hide` | `bool` | Whether to hide the content if it does not contain text. Default is `true`. Default: `true`. |
| `transparentize-table` | `bool` | Whether to transparentize table content. Default is `false`. Default: `false`. |
| `it` | `content` | The content to cover. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1018)

---

## `alert-with-primary-color`

**Signature:** `alert-with-primary-color(self: none, body)`

Applies the theme's primary color to text content. Used as the default `alert` method.

Example: `config-methods(alert: utils.alert-with-primary-color)`

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1041)

---

## `alert`

**Signature:** `alert(self: none, body)`

Apply alert styling to content using the theme's alert method. Equivalent to `(self.methods.alert)(self: self, body)`.

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1050)

---

## `check-visible`

**Signature:** `check-visible(idx, visible-subslides)`

Check if a subslide index is visible given a visibility specification.

Example: `check-visible(3, "2-")` returns `true`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `idx` | `int` | The current subslide index. |
| `visible-subslides` | `int` \| `array` \| `str` | Specifies which subslides are visible. Supported formats: - A single integer, e.g. `3` — only subslide 3. - An array, e.g. `(1, 2, 4)` — equivalent to `"1, 2, 4"`. - A string with ranges, e.g. `"-2, 4, 6-8, 10-"` — subslides 1, 2, 4, 6, 7, 8, 10, and all after 10. |

**Returns:** `bool`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1105)

---

## `effect`

**Signature:** `effect(self: none, fn, visible-subslides, cont, is-method: false)`

Take effect in some subslides.

Example: `#effect(text.with(fill: red), "2-")[Something]` will display `[Something]` if the current slide is 2 or later.

You can also add an abbreviation by using `#let effect-red = effect.with(text.with(fill: red))` for your own effects.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `fn` | `function` | The function that will be called in the subslide. Or you can use a method function like `(self: none) => { .. }`. |
| `visible-subslides` | `int` \| `array` \| `str` | A single integer, an array of integers, or a string specifying the visible subslides. Supported formats: - A single integer, e.g. `3` — only subslide 3. - An array, e.g. `(1, 2, 4)` — equivalent to `"1, 2, 4"`. - A string with ranges, e.g. `"-2, 4, 6-8, 10-"` — subslides 1, 2, 4, 6, 7, 8, 10, and all after 10. |
| `cont` | `content` | The content to display when the content is visible in the subslide. |
| `is-method` | `bool` | Whether the function is a method function. Default is `false`. Default: `false`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1186)

---

## `uncover`

**Signature:** `uncover(self: none, visible-subslides, uncover-cont, cover-fn: auto)`

Uncover content in some subslides. Reserved space when hidden (like `#hide()`).

**Example:**

```typst
#show: simple-theme.with(aspect-ratio: "16-9")
= Slide
#uncover("2-")[Only visible from subslide 2]
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `visible-subslides` | `int` \| `array` \| `str` | A single integer, an array of integers, or a string specifying the visible subslides. Supported formats: - A single integer, e.g. `3` — only subslide 3. - An array, e.g. `(1, 2, 4)` — equivalent to `"1, 2, 4"`. - A string with ranges, e.g. `"-2, 4, 6-8, 10-"` — subslides 1, 2, 4, 6, 7, 8, 10, and all after 10. |
| `uncover-cont` | `content` | The content to display when visible. |
| `cover-fn` | `function` \| `auto` | An optional cover function to use instead of the default cover method from the theme. Useful when using `uncover` inside external package integrations (e.g. `fletcher.hide` for fletcher diagrams). Default: `auto`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1228)

---

## `only`

**Signature:** `only(self: none, visible-subslides, only-cont)`

Display content in some subslides only. No space is reserved when hidden.

**Example:**

```typst
#show: simple-theme.with(aspect-ratio: "16-9")
= Slide
#only("2")[Only on subslide 2]
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `visible-subslides` | `int` \| `array` \| `str` | A single integer, an array of integers, or a string specifying the visible subslides. Supported formats: - A single integer, e.g. `3` — only subslide 3. - An array, e.g. `(1, 2, 4)` — equivalent to `"1, 2, 4"`. - A string with ranges, e.g. `"-2, 4, 6-8, 10-"` — subslides 1, 2, 4, 6, 7, 8, 10, and all after 10. |
| `only-cont` | `content` | The content to display when visible. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1268)

---

## `handout-only`

**Signature:** `handout-only(self: none, cont)`

Display content only in handout mode.
Don't reserve space when hidden, content is completely not existing there.

Example:

```typst
#handout-only[This content is only visible in handout mode.]
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cont` | `content` | The content to display in handout mode. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1287)

---

## `alternatives-match`

**Signature:** `alternatives-match(self: none, subslides-contents, position: bottom + left, stretch: false)`

`#alternatives` has a couple of "cousins" that might be more convenient in some situations. The first one is `#alternatives-match` that has a name inspired by match-statements in many functional programming languages. The idea is that you give it a dictionary mapping from subslides to content:

Example:

```typst
#alternatives-match((
  "1, 3-5": [this text has the majority],
  "2, 6": [this is shown less often]
))
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `subslides-contents` | `dictionary` | A dictionary mapping from subslides to content. |
| `position` | `alignment` | The position of the content. Default is `bottom + left`. Default: `bottom + left`. |
| `stretch` | `bool` | Whether to stretch all alternatives to the maximum width and height. Default is `false`. Important: If you use a zero-length content like a context expression, you should set `stretch: false`. Default: `false`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1314)

---

## `alternatives`

**Signature:** `alternatives(self: none, start: 1, repeat-last: true, ..args)`

`#alternatives` is able to show contents sequentially in subslides.

Example: `#alternatives[Ann][Bob][Christopher]` will show "Ann" in the first subslide, "Bob" in the second subslide, and "Christopher" in the third subslide.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `start` | `int` | The starting subslide number. Default is `1`. Default: `1`. |
| `repeat-last` | `bool` | Whether the last alternative should persist on all remaining subslides. Default is `true`. Default: `true`. |
| `position` | `alignment` | The alignment of alternatives within the reserved space. Default is `bottom + left`. |
| `stretch` | `bool` | Whether to stretch all alternatives to the maximum width and height. Default is `false`. Important: If you use a zero-length content like a context expression, you should set `stretch: false`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1368)

---

## `alternatives-fn`

**Signature:** `alternatives-fn(self: none, start: 1, end: none, count: none, ..kwargs, fn)`

You can have very fine-grained control over the content depending on the current subslide by using #alternatives-fn. It accepts a function (hence the name) that maps the current subslide index to some content.

Example: `#alternatives-fn(start: 2, count: 7, subslide => { numbering("(i)", subslide) })`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `start` | `int` | The starting subslide number. Default is `1`. Default: `1`. |
| `end` | `int` \| `none` | The ending subslide number. Default is `none`. Default: `none`. |
| `count` | `int` \| `none` | The number of subslides. Default is `none`. Default: `none`. |
| `position` | `alignment` | The alignment of alternatives within the reserved space. Default is `bottom + left`. |
| `stretch` | `bool` | Whether to stretch all alternatives to the maximum width and height. Default is `false`. Important: If you use a zero-length content like a context expression, you should set `stretch: false`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1401)

---

## `alternatives-cases`

**Signature:** `alternatives-cases(self: none, cases, fn, ..kwargs)`

You can use this function if you want to have one piece of content that changes only slightly depending of what "case" of subslides you are in.

Example:

```typst
#alternatives-cases(("1, 3", "2"), case => [
  #set text(fill: teal) if case == 1
  Some text
])
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cases` | `array` | An array of strings that specify the subslides for each case. |
| `fn` | `function` | A function that maps the case to content. The argument `case` is the index of the cases array you input. |
| `position` | `alignment` | The alignment of alternatives within the reserved space. Default is `bottom + left`. |
| `stretch` | `bool` | Whether to stretch all alternatives to the maximum width and height. Default is `false`. Important: If you use a zero-length content like a context expression, you should set `stretch: false`. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1447)

---

## `item-by-item`

**Signature:** `item-by-item(self: none, start, cont)`

Display list, enum, or terms items one by one with animation.

Each item is revealed on a successive subslide. Items before `start` appear immediately;
from subslide `start`, one additional item is revealed per subslide.

**Example:**

```typst
#show: simple-theme.with(aspect-ratio: "16-9")
= Slide
#item-by-item[
- first
- second
- third
]
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `start` | `int` | The subslide on which the first item appears. Default is `1`. |
| `cont` | `content` | The content containing a list, enum, or terms element. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1483)

---

## `speaker-note`

**Signature:** `speaker-note(self: none, mode: "typ", setting: it => it, subslide: none, note)`

Speaker notes are a way to add additional information to your slides that is not visible to the audience. This can be useful for providing additional context or reminders to yourself.

Multiple calls on the same slide are combined (accumulated), so all notes are shown together.

Example: `#speaker-note[This is a speaker note]`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `self` | `dictionary` | The current presentation context. Default: `none`. |
| `mode` | `str` | The mode of the markup text, either `typ` or `md`. Default is `typ`. Default: `"typ"`. |
| `setting` | `function` | A function that takes the note as input and returns a processed note. Default: `it => it`. |
| `subslide` | `none` \| `auto` \| `int` \| `array` \| `str` | Restricts the note to specific subslides, similar to `only`. - `none`: shown on all subslides. - `auto`: automatically determined from the current pause position (default when called via `#speaker-note`). - int, array, or string: shown only on the specified subslides. Default: `none`. |
| `note` | `content` | The content of the speaker note. |

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1557)

---

## `page-args-from-aspect-ratio`

**Signature:** `page-args-from-aspect-ratio(aspect-ratio)`

Convert an aspect ratio string to page configuration arguments.

For the built-in Typst presentation paper sizes ("16-9" and "4-3"), returns
a `paper` key. For other ratios (e.g. "16-10", "3-2"), returns explicit
`width` and `height` keys computed from the 16-9 base width (841.89pt).

Example:

```typst
config-page(..utils.page-args-from-aspect-ratio("16-10"))
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `aspect-ratio` | `str` | The aspect ratio string in `"W-H"` format where `W` and `H` are positive numbers. E.g., `"16-9"`, `"4-3"`, `"16-10"`. |

**Returns:** `dictionary`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1618)

---

## `get-page-dimensions`

**Signature:** `get-page-dimensions(self)`

Get the page width and height from the slide configuration.

Returns a tuple `(width, height)`. If the page has explicit `width`/`height`
keys those are used directly; otherwise dimensions are derived from the
`paper` key. The built-in Typst presentation paper sizes
(`"presentation-16-9"` and `"presentation-4-3"`) are recognised; for any
other paper name the 16-9 default dimensions (841.89pt × 473.56pt) are used
as a fallback.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `self` | `dictionary` | The current slide self dictionary. |

**Returns:** `array`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1656)

---

## `i18n-outline-title`

**Signature:** `i18n-outline-title`

Internationalized outline/table-of-contents title. Returns the appropriate word for the current document language (supports Arabic, Catalan, Czech, Danish, German, English, Spanish, Estonian, Finnish, Japanese, Russian, Traditional Chinese, and Simplified Chinese).

**Returns:** `content`

**Source:** [`utils.typ`](https://github.com/touying-typ/touying/blob/main/src/utils.typ#L1677)

---
