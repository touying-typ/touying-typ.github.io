---
sidebar_position: 4
---

# Code Style

## Simple Style

If we just need to use it simply, we can directly input content under the title, just like writing a normal Typst document. The titles here serve to separate pages, and we can also normally use commands like `#pause` to achieve animation effects.

```typst
#import "@preview/touying:0.5.3": *
#import themes.simple: *

#show: simple-theme.with(aspect-ratio: "16-9")

= Title

== First Slide

Hello, Touying!

#pause

Hello, Typst!
```

![image](https://github.com/touying-typ/touying/assets/34951714/f5bdbf8f-7bf9-45fd-9923-0fa5d66450b2)

And you can use an empty title `== <touying:hidden>` to create a new page, which is also helpful to clear the continued application of the previous title.

If we need to maintain the current title and just want to add a new page, we can use `#pagebreak()`, or directly use `---` to split the page, the latter is parsed as `#pagebreak()` in Touying.

```typst
#import "@preview/touying:0.5.3": *
#import themes.simple: *

#show: simple-theme.with(aspect-ratio: "16-9")

= Title

== First Slide

Hello, Touying!

---

Hello, Typst!
```

![image](https://github.com/user-attachments/assets/42f4de99-3be4-4764-a2b6-f26201295ed1)

## Block Style

Many times, using only the simple style cannot achieve all the functions we need. For more powerful functions and clearer structure, we can also use the block style in the form of `#slide[...]`.

For example, the above example can be transformed into

```typst
#import "@preview/touying:0.5.3": *
#import themes.simple: *

#show: simple-theme.with(aspect-ratio: "16-9")

= Title

== First Slide

#slide[
  Hello, Touying!

  #pause

  Hello, Typst!
]
```

And `#empty-slide[]` can create an empty Slide without a header and footer.

There are many benefits to doing this:

1. Many times, we need more than the default `#slide[...]`, we also need special `slide` functions like `#focus-slide[...]`;
2. The `#slide[...]` function of different themes may have more parameters than the default, for example, the `#slide[...]` function of the metropolis theme will have an `align` parameter that can set the alignment;
3. Only `slide` functions can use callback-style content blocks to use `#only` and `#uncover` functions to achieve complex animation effects.
4. It can have a clearer structure, by identifying `#slide[...]` blocks, we can easily distinguish the specific pagination effects of slides.

## Convention Over Configuration

You may have noticed that when using the simple theme, using a first-level title automatically creates a section slide. This is because the simple theme registers a `config-common(slide-fn: slide, new-section-slide-fn: new-section-slide)` function, so Touying will call this function by default.

If we do not want it to automatically create such a section slide, we can remove this method:

```typst
#import "@preview/touying:0.5.3": *
#import themes.simple: *

#show: simple-theme.with(
  aspect-ratio: "16-9",
  config-common(new-section-slide-fn: none),
)

= Title

== First Slide

Hello, Touying!

#pause

Hello, Typst!
```

![image](https://github.com/touying-typ/touying/assets/34951714/17a89a59-9491-4e1f-95c0-09a22105ab35)

As you can see, this will only result in two pages, and the default section slide will disappear.

Similarly, we can also register a new section slide:

```typst
#import "@preview/touying:0.5.3": *
#import themes.simple: *

#show: simple-theme.with(
  aspect-ratio: "16-9",
  config-common(new-section-slide-fn: section => {
    touying-slide-wrapper(self => {
      touying-slide(
        self: self,
        {
          set align(center + horizon)
          set text(size: 2em, fill: self.colors.primary, style: "italic", weight: "bold")
          utils.display-current-heading(level: 1)
        },
      )
    })
  }),
)

= Title

== First Slide

Hello, Touying!

#pause

Hello, Typst!
```

![image](https://github.com/touying-typ/touying/assets/34951714/5305efda-0cd4-42eb-9f2e-89abc30b6ca2)