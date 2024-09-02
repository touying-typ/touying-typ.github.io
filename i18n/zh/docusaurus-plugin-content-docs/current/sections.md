---
sidebar_position: 3
---

# 节与小节

## 结构

与 Beamer 相同，Touying 同样有着 section 和 subsection 的概念。

一般而言，1 级、2 级和 3 级标题分别用来对应 section、subsection 和 subsubsection，例如 dewdrop 主题。

```typst
#import "@preview/touying:0.5.0": *
#import themes.dewdrop: *

#show: dewdrop-theme.with(aspect-ratio: "16-9")

= Section

== Subsection

=== Title

Hello, Touying!
```

![image](https://github.com/user-attachments/assets/34f5e293-29e3-4aa3-bb74-c2d4914560c6)

但是很多时候我们并不需要 subsection，因此也会使用 1 级和 2 级标题来分别对应 section 和 title，例如 university 主题。

```typst
#import "@preview/touying:0.5.0": *
#import themes.university: *

#show: university-theme.with(aspect-ratio: "16-9")

= Section

== Title

Hello, Touying!
```

![image](https://github.com/user-attachments/assets/eb38627c-58ef-4319-897e-846697576a6b)

实际上，我们可以通过 `config-common` 函数的 `slide-level` 参数来控制这里的行为。`slide-level` 代表着嵌套结构的复杂度，从 0 开始计算。例如 `#show: university-theme.with(config-common(slide-level: 2))` 等价于 `section` 和 `subsection` 都会创建新 slide；而 `#show: university-theme.with(config-common(slide-level: 3))` 等价于 `section`，`subsection` 和 `subsubsection` 都会创建新 slide。


## 编号

为了给节与小节加入编号，我们只需要使用

```typst
#set heading(numbering: "1.1")
#show heading.where(level: 1): set heading(numbering: "1.")
```

即可设置默认编号为 `1.1`，且 section 对应的编号为 `1.`。


## 目录

在 Touying 中显示目录很简单：

```typst
#import "@preview/touying:0.5.0": *
#import themes.simple: *
#import "@preview/numbly:0.1.0": numbly

#set heading(numbering: numbly("{1}.", default: "1.1"))

#show: simple-theme.with(aspect-ratio: "16-9")

= Section

== Subsection

#components.adaptive-columns(outline(indent: 1em))
```

![image](https://github.com/user-attachments/assets/2674a632-e881-432f-a212-a55bcc7207c1)

其中 `outline(indent: 1em)` 是 Typst 的原生目录函数。而 `#components.adaptive-columns()` 函数可以让目录尽可能只占据一个页面，即它会自适应分别设置 `#columns(1, body)` 或者 `#columns(2, body)`，以此类推。

如果你需要一个可以显示当前进度的 `outline` 函数，你可以考虑使用 `#components.progressive-outline()` 或 `#components.custom-progressive-outline()`，就像 dewdrop 主题那样。