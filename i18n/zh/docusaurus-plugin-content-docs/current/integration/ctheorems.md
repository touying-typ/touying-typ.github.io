---
sidebar_position: 5
---

# Ctheorems

Touying 能够与 ctheorems 包一起正常工作，你可以直接使用 ctheorems 包。

其中，你还可以使用 `#set heading(numbering: "1.1")` 为 sections 和 subsections 设置 numbering。

```typst
#import "@preview/touying:0.5.0": *
#import themes.university: *
#import "@preview/ctheorems:1.1.2": *
#import "@preview/numbly:0.1.0": numbly

// Theorems configuration by ctheorems
#show: thmrules.with(qed-symbol: $square$)
#let theorem = thmbox("theorem", "Theorem", fill: rgb("#eeffee"))
#let corollary = thmplain(
  "corollary",
  "Corollary",
  base: "theorem",
  titlefmt: strong
)
#let definition = thmbox("definition", "Definition", inset: (x: 1.2em, top: 1em))
#let example = thmplain("example", "Example").with(numbering: none)
#let proof = thmproof("proof", "Proof")

#show: university-theme.with(
  aspect-ratio: "16-9",
  // config-common(handout: true),
  config-info(
    title: [Title],
    subtitle: [Subtitle],
    author: [Authors],
    date: datetime.today(),
    institution: [Institution],
    logo: emoji.school,
  ),
)

#set heading(numbering: numbly("{1}.", default: "1.1"))
```

![image](https://github.com/touying-typ/touying/assets/34951714/b506da7e-b7d6-4493-b35a-2307cfd38ddc)