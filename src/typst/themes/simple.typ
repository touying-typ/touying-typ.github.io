#import "@preview/touying:0.6.1": *
#import themes.simple: *

#show: simple-theme.with(
  aspect-ratio: "16-9",
  footer: [Simple Theme],
)

= Simple Theme

== Introduction

#slide[
  Touying is a _powerful_ slide creation package for Typst.

  It supports:
  - Multiple built-in themes
  - Dynamic slides with `#pause`
  - Math equations: $E = m c^2$
]

== Features

#slide[
  #grid(
    columns: 2,
    gutter: 1em,
    [
      *Concise Syntax*

      Write slides with a clean, readable syntax inspired by Typst.
    ],
    [
      *Fast Compilation*

      Typst compiles in milliseconds, enabling instant previews.
    ],
  )
]

= Advanced Usage

== Dynamic Content

#slide[
  Reveal content step by step:

  + First item #pause
  + Second item #pause
  + Third item
]
