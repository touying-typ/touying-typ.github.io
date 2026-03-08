#import "@preview/touying:0.6.1": *
#import themes.metropolis: *

#show: metropolis-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [Metropolis Theme],
    subtitle: [Modern minimalist design],
    author: [Touying],
    date: datetime.today(),
  ),
)

#title-slide()

= Introduction

== About Metropolis

#slide[
  The *Metropolis* theme is inspired by the popular LaTeX Beamer theme.

  - Clean, minimal design
  - Clear visual hierarchy
  - Excellent readability
]

== Code Example

#slide[
  Touying supports beautifully formatted code:

  ```typst
  #import "@preview/touying:0.6.1": *
  #import themes.metropolis: *

  #show: metropolis-theme.with(
    aspect-ratio: "16-9",
  )
  ```
]

= Features

== Dynamic Slides

#slide[
  Show content progressively:

  #pause

  Step 1: Import Touying

  #pause

  Step 2: Choose a theme

  #pause

  Step 3: Write your slides!
]
