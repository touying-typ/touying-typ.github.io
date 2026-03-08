#import "@preview/touying:0.6.1": *
#import themes.stargazer: *

#show: stargazer-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [Stargazer Theme],
    subtitle: [Reach for the stars],
    author: [Touying],
    date: datetime.today(),
  ),
)

#title-slide()

== Introduction

#slide[
  *Stargazer* is a dark, elegant theme inspired by the night sky.

  Perfect for:
  - Technical presentations
  - Conference talks
  - Research showcases
]

== Features

#slide[
  === Why Stargazer?

  The dark background creates a dramatic visual impact while maintaining readability.

  #grid(
    columns: 2,
    gutter: 1.5em,
    [
      *High Contrast*

      Text stands out clearly against the dark background.
    ],
    [
      *Professional*

      Suitable for formal academic and industry presentations.
    ],
  )
]

== Summary

#slide[
  Touying's *Stargazer* theme helps you shine at your next presentation.

  $ "Touying" + "Typst" = "⭐ Great Slides" $
]
