---
sidebar_position: 6
description: >-
  Functions for generating pdfpc presenter metadata.
---

# PDFPC

Functions for generating pdfpc presenter metadata.

## Function Index

- [`pdfpc-file`](#pdfpc-file)
- [`speaker-note`](#speaker-note)
- [`config`](#config)

---

## `pdfpc-file`

**Signature:** `pdfpc-file(loc)`

Generate pdfpc metadata for the presentation. Called internally in the preamble when `enable-pdfpc` is `true`. Query the result with `typst query --root . ./example.typ --field value --one "<pdfpc-file>" > ./example.pdfpc`.

**Returns:** `content`

**Source:** [`pdfpc.typ`](https://github.com/touying-typ/touying/blob/main/src/pdfpc.typ#L7)

---

## `speaker-note`

**Signature:** `speaker-note(text)`

Emit a raw speaker note string for the current slide into the pdfpc metadata. Called internally by `utils.speaker-note`.

**Returns:** `content`

**Source:** [`pdfpc.typ`](https://github.com/touying-typ/touying/blob/main/src/pdfpc.typ#L63)

---

## `config`

**Signature:** `config(duration-minutes: none, start-time: none, end-time: none, last-minutes: none, note-font-size: none, disable-markdown: false, default-transition: none)`

Configuration for the pdfpc export. You can export the pdfpc file by shell command `typst query --root . ./example.typ --field value --one "<pdfpc-file>" > ./example.pdfpc`.

Example:

```typ
#pdfpc.config(
  duration-minutes: 30,
  start-time: datetime(hour: 14, minute: 10, second: 0),
  end-time: datetime(hour: 14, minute: 40, second: 0),
  last-minutes: 5,
  note-font-size: 12,
  disable-markdown: false,
  default-transition: (
    type: "push",
    duration-seconds: 2,
    angle: ltr,
    alignment: "vertical",
    direction: "inward",
  ),
)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `duration-minutes` | `int` | The duration of the presentation in minutes. Default: `none`. |
| `start-time` | `datetime` | The start time of the presentation. Default: `none`. |
| `end-time` | `datetime` | The end time of the presentation. Default: `none`. |
| `last-minutes` | `int` | The number of minutes to show the last slide. Default: `none`. |
| `note-font-size` | `float` | The font size of the speaker notes. Default: `none`. |
| `disable-markdown` | `bool` | A flag to disable markdown in the speaker notes. Default: `false`. |
| `default-transition` | `dictionary` \| `none` | The default slide transition. A dictionary with optional keys: `type` (str, e.g. `"push"`), `duration-seconds` (int), `angle` (direction, e.g. `ltr`), `alignment` (str, `"horizontal"` or `"vertical"`), `direction` (str, `"inward"` or `"outward"`). Default is `none`. Default: `none`. |

**Returns:** `content`

**Source:** [`pdfpc.typ`](https://github.com/touying-typ/touying/blob/main/src/pdfpc.typ#L124)

---
