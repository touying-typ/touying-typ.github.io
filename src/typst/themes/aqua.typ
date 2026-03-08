#import "@preview/touying:0.6.1": *
#import themes.aqua: *

#show: aqua-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [Aqua Theme],
    subtitle: [Blue wave inspired design],
    author: [Touying],
    date: datetime.today(),
  ),
)

#title-slide()

== Introduction

#slide[
  The *Aqua* theme brings a calming, ocean-inspired aesthetic.

  Features:
  - Vibrant blue color scheme
  - Clean slide structure
  - Professional look for technical talks
]

== Data & Figures

#slide[
  Touying integrates seamlessly with Typst's drawing packages.

  #align(center)[
    #grid(
      columns: 3,
      gutter: 2em,
      rect(width: 3cm, height: 2cm, fill: blue.lighten(60%), stroke: blue)[*Slide 1*],
      rect(width: 3cm, height: 2cm, fill: blue.lighten(60%), stroke: blue)[*Slide 2*],
      rect(width: 3cm, height: 2cm, fill: blue.lighten(60%), stroke: blue)[*Slide 3*],
    )
  ]
]

== Conclusion

#slide[
  *Touying* + *Typst* = Beautiful Presentations

  Start creating your slides today at:

  https://touying-typ.github.io/
]
