---
sidebar_position: 2
---

# Pympress

[Pympress](https://github.com/Cimbali/pympress) is a PDF presentation tool designed for dual-screen setups such as presentations and public talks. Highly configurable, fully-featured, and portable


## Speaker Notes

```typst
#import "@preview/touying:0.6.1": *
#import themes.university: *

#show: university-theme.with(
  aspect-ratio: "16-9",
  config-common(show-notes-on-second-screen: right),
)

= Animation

== Simple Animation

We can use `#pause` to #pause display something later.

#pause

Just like this.

#meanwhile

Meanwhile, #pause we can also use `#meanwhile` to #pause display other content synchronously.

#speaker-note[
  + This is a speaker note.
  + You won't see it unless you use `config-common(show-notes-on-second-screen: right)`
]
```

![image](https://github.com/touying-typ/touying/assets/34951714/b43c7f99-c5f9-4084-aa70-c1561e8aafee)

Then we can use the pympress to show it.

![image](https://github.com/touying-typ/touying/assets/34951714/afbe17cb-46d4-4507-90e8-959c53de95d5)

