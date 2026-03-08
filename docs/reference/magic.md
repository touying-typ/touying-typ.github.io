---
sidebar_position: 5
description: >-
  Show-rule helpers that enhance Typst behaviour.
---

# Magic

Show-rule helpers that enhance Typst behaviour.

## Function Index

- [`align-list-marker-with-baseline`](#align-list-marker-with-baseline)
- [`align-enum-marker-with-baseline`](#align-enum-marker-with-baseline)
- [`scale-list-items`](#scale-list-items)
- [`nontight`](#nontight)
- [`nontight-list-enum-and-terms`](#nontight-list-enum-and-terms)
- [`show-hide-set-list-marker-none`](#show-hide-set-list-marker-none)
- [`bibliography-as-footnote`](#bibliography-as-footnote)
- [`bibliography`](#bibliography)

---

## `align-list-marker-with-baseline`

**Signature:** `align-list-marker-with-baseline(body)`

Apply as a show rule to vertically align list markers with the baseline of the first line of each list item. This prevents markers from appearing too high when list items have tall content.

Usage: `#show: align-list-marker-with-baseline`

**Returns:** `content`

**Source:** [`magic.typ`](https://github.com/touying-typ/touying/blob/main/src/magic.typ#L13)

---

## `align-enum-marker-with-baseline`

**Signature:** `align-enum-marker-with-baseline(body)`

Apply as a show rule to vertically align enum markers with the baseline of the first line of each enum item. Only works for numeric markers (e.g. `1.`).

Usage: `#show: align-enum-marker-with-baseline`

**Returns:** `content`

**Source:** [`magic.typ`](https://github.com/touying-typ/touying/blob/main/src/magic.typ#L46)

---

## `scale-list-items`

**Signature:** `scale-list-items(scale: .75, body)`

Scale the font size of nested list, enum, and terms items.

Usage: `#show: scale-list-items.with(scale: .75)`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `scale` | `int` \| `float` | The font size ratio of the current nesting level relative to the parent. Default is `.75`. Default: `.75`. |
| `body` | `content` | The content to apply the scaling to. |

**Returns:** `content`

**Source:** [`magic.typ`](https://github.com/touying-typ/touying/blob/main/src/magic.typ#L94)

---

## `nontight`

**Signature:** `nontight(lst)`

Convert a single tight list, enum, or terms element to non-tight (with spacing between items). For use in show rules.

Usage: `#show list: nontight(list)`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `lst` | `content` | A list, enum, or terms element to make non-tight. |

**Returns:** `content`

**Source:** [`magic.typ`](https://github.com/touying-typ/touying/blob/main/src/magic.typ#L112)

---

## `nontight-list-enum-and-terms`

**Signature:** `nontight-list-enum-and-terms(body)`

Apply as a show rule to make all lists, enumerations, and term lists use non-tight spacing by default (adds spacing between items).

Usage: `#show: nontight-list-enum-and-terms`

**Returns:** `content`

**Source:** [`magic.typ`](https://github.com/touying-typ/touying/blob/main/src/magic.typ#L124)

---

## `show-hide-set-list-marker-none`

**Signature:** `show-hide-set-list-marker-none(body)`

Apply as a show rule to suppress list markers and enum numbering inside `#hide(...)` calls. This prevents phantom markers from taking up space in covered content.

Usage: `#show: show-hide-set-list-marker-none`

**Returns:** `content`

**Source:** [`magic.typ`](https://github.com/touying-typ/touying/blob/main/src/magic.typ#L136)

---

## `bibliography-as-footnote`

**Signature:** `bibliography-as-footnote(numbering: "[1]", bibliography, body)`

Display bibliography citations as footnotes. Place `#place(hide(bibliography(...)))` at the end of the document to register the bibliography entries.

Usage: `#show: magic.bibliography-as-footnote.with(bibliography(title: none, "ref.bib"))`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `numbering` | `str` | The numbering format for footnote citations. Default is `"[1]"`. Default: `"[1]"`. |
| `bibliography` | `bibliography` | The bibliography element, e.g. `bibliography("ref.bib")`. |

**Returns:** `content`

**Source:** [`magic.typ`](https://github.com/touying-typ/touying/blob/main/src/magic.typ#L164)

---

## `bibliography`

**Signature:** `bibliography(title: auto)`

Display the collected bibliography entries. Avoids the "multiple bibliographies are not yet supported" error by rendering entries gathered by `bibliography-as-footnote`.

Usage: `#magic.bibliography()`

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `title` | `str` \| `auto` \| `none` | The heading for the bibliography section. When `auto`, uses a language-appropriate title. When `none`, no heading is shown. Default is `auto`. Default: `auto`. |

**Returns:** `content`

**Source:** [`magic.typ`](https://github.com/touying-typ/touying/blob/main/src/magic.typ#L203)

---
