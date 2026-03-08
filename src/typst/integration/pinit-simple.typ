#import "@preview/touying:0.6.1": *
#import themes.simple: *
#import "@preview/pinit:0.2.2": *

#show: simple-theme.with(aspect-ratio: "16-9")

#set text(size: 24pt)

#slide[
  A simple #pin(1)highlighted text#pin(2).

  #pinit-highlight(1, 2)

  #pinit-point-from(2)[It is simple.]
]
