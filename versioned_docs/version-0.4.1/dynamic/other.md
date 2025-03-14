---
sidebar_position: 5
---

# Other Animations

Touying also provides `touying-reducer`, which adds `pause` and `meanwhile` animations to cetz and fletcher.

## Simple Animations

Here's an example:

```typst
#import "@preview/touying:0.4.1": *
#import "@preview/cetz:0.3.2"
#import "@preview/fletcher:0.4.4" as fletcher: node, edge

// cetz and fletcher bindings for touying
#let cetz-canvas = touying-reducer.with(reduce: cetz.canvas, cover: cetz.draw.hide.with(bounds: true))
#let fletcher-diagram = touying-reducer.with(reduce: fletcher.diagram, cover: fletcher.hide)

#let s = themes.metropolis.register(aspect-ratio: "16-9", footer: self => self.info.institution)
#let (init, slides) = utils.methods(s)
#show: init

#let (slide, empty-slide) = utils.slides(s)
#show: slides.with(title-slide: false, outline-slide: false)

// cetz animation
#slide[
  Cetz in Touying:

  #cetz-canvas({
    import cetz.draw: *
    
    rect((0,0), (5,5))

    (pause,)

    rect((0,0), (1,1))
    rect((1,1), (2,2))
    rect((2,2), (3,3))

    (pause,)

    line((0,0), (2.5, 2.5), name: "line")
  })
]

// fletcher animation
#slide[
  Fletcher in Touying:

  #fletcher-diagram(
    node-stroke: .1em,
    node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),
    spacing: 4em,
    edge((-1,0), "r", "-|>", `open(path)`, label-pos: 0, label-side: center),
    node((0,0), `reading`, radius: 2em),
    edge((0,0), (0,0), `read()`, "--|>", bend: 130deg),
    pause,
    edge(`read()`, "-|>"),
    node((1,0), `eof`, radius: 2em),
    pause,
    edge(`close()`, "-|>"),
    node((2,0), `closed`, radius: 2em, extrude: (-2.5, 0)),
    edge((0,0), (2,0), `close()`, "-|>", bend: -40deg),
  )
]
```

![image](https://github.com/touying-typ/touying/assets/34951714/9ba71f54-2a5d-4144-996c-4a42833cc5cc)


## only and uncover

In fact, we can also use `only` and `uncover` within cetz, just requiring a bit of skill:

```typst
#slide(repeat: 3, self => [
  #let (uncover, only) = utils.methods(self)

  Cetz in Touying in subslide #self.subslide:

  #cetz.canvas({
    import cetz.draw: *
    let self = (self.methods.update-cover)(self: self, hide.with(bounds: true))
    let (uncover,) = utils.methods(self)
    
    rect((0,0), (5,5))

    uncover("2-3", {
      rect((0,0), (1,1))
      rect((1,1), (2,2))
      rect((2,2), (3,3))
    })

    only(3, line((0,0), (2.5, 2.5), name: "line"))
  })
])
```