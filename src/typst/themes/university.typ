#import "@preview/touying:0.6.1": *
#import themes.university: *

#show: university-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [University Theme],
    subtitle: [A professional academic presentation],
    author: [Touying],
    date: datetime.today(),
    institution: [Touying Project],
  ),
)

#title-slide()

== Introduction

#slide[
  Touying provides a beautiful *university* theme for academic presentations.

  Key features:
  - Professional header with title and section
  - Clean progress bar at the bottom
  - Easy customization
]

== Mathematical Content

#slide[
  Touying works seamlessly with Typst math:

  $ sum_(k=1)^n k = (n(n+1))/2 $

  $ integral_0^1 x^2 d x = 1/3 $
]

== Columns Layout

#slide[
  #grid(
    columns: (1fr, 1fr),
    gutter: 2em,
    [
      *Left column*

      Typst's grid system makes it easy to create multi-column layouts.
    ],
    [
      *Right column*

      Content can be anything: text, images, code, formulas...
    ],
  )
]
