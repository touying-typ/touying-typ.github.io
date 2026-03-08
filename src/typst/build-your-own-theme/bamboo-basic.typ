#import "@preview/touying:0.6.1": *

// ---- bamboo.typ (inlined) ----

#let slide(title: auto, ..args) = touying-slide-wrapper(self => {
  if title != auto {
    self.store.title = title
  }
  // set page
  let header(self) = {
    set align(top)
    show: components.cell.with(fill: self.colors.primary, inset: 1em)
    set align(horizon)
    set text(fill: self.colors.neutral-lightest, size: .7em)
    utils.display-current-heading(level: 1)
    linebreak()
    set text(size: 1.5em)
    if self.store.title != none {
      utils.call-or-display(self, self.store.title)
    } else {
      utils.display-current-heading(level: 2)
    }
  }
  let footer(self) = {
    set align(bottom)
    show: pad.with(.4em)
    set text(fill: self.colors.neutral-darkest, size: .8em)
    utils.call-or-display(self, self.store.footer)
    h(1fr)
    context utils.slide-counter.display() + " / " + utils.last-slide-number
  }
  self = utils.merge-dicts(
    self,
    config-page(
      header: header,
      footer: footer,
    ),
  )
  touying-slide(self: self, ..args)
})

#let bamboo-theme(
  aspect-ratio: "16-9",
  footer: none,
  ..args,
  body,
) = {
  set text(size: 20pt)

  show: touying-slides.with(
    config-page(
      paper: "presentation-" + aspect-ratio,
      margin: (top: 4em, bottom: 1.5em, x: 2em),
    ),
    config-common(
      slide-fn: slide,
    ),
    config-methods(
      alert: utils.alert-with-primary-color,
    ),
    config-colors(
      primary: rgb("#5E8B65"),
      neutral-lightest: rgb("#ffffff"),
      neutral-darkest: rgb("#000000"),
    ),
    config-store(
      title: none,
      footer: footer,
    ),
    ..args,
  )

  body
}


// ---- main.typ ----

#show: bamboo-theme.with(aspect-ratio: "16-9")

= First Section

== First Slide

A slide with a title and an *important* information.
