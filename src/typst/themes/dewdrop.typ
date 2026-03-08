#import "@preview/touying:0.6.1": *
#import themes.dewdrop: *

#show: dewdrop-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [Dewdrop Theme],
    subtitle: [Fresh and clean design],
    author: [Touying],
    date: datetime.today(),
  ),
)

#title-slide()

== Introduction

#slide[
  *Dewdrop* theme features a fresh, nature-inspired aesthetic.

  Characteristics:
  - Soft color palette
  - Elegant typography
  - Navigation dots for slide progress
]

== Content Slide

#slide[
  Touying makes it easy to create structured content:

  #grid(
    columns: (1fr, 1fr),
    gutter: 1.5em,
    [
      *Text Content*

      Write naturally in Typst syntax with full Unicode support.
    ],
    [
      *Mathematical Content*

      $ cal(L)(theta) = -sum_i log p(y_i | x_i; theta) $
    ],
  )
]

== Summary

#slide[
  Touying is the modern way to create presentations in Typst.

  Get started today:

  ```sh
  # In your Typst file
  #import "@preview/touying:0.6.1": *
  ```
]
