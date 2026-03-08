---
sidebar_position: 1
description: >-
  Core slide creation functions.
---

# Slides

Core slide creation functions.

## Function Index

- [`touying-slides`](#touying-slides)

---

## `touying-slides`

**Signature:** `touying-slides(..args, body)`

Touying slides function.

Example:

```typst
#show: touying-slides.with(
  config-page(paper: "presentation-" + aspect-ratio),
  config-common(
    slide-fn: slide,
  ),
  ..args,
)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `..args` | `arguments` | The configurations of the slides. For example, you can use `config-page(paper: "presentation-16-9")` to set the aspect ratio of the slides. |
| `body` | `content` | The contents of the slides. |

**Returns:** `content`

**Source:** [`slides.typ`](https://github.com/touying-typ/touying/blob/main/src/slides.typ#L25)

---
