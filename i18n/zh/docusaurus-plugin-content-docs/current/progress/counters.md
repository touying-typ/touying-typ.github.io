---
sidebar_position: 1
---

# Touying 的计数器

Touying 的状态均放置于 `utils` 命名空间下，包括所有的计数器。

## slide 计数器

你可以通过 `utils.slide-counter` 获取 slide 计数器，并且通过 `utils.slide-counter.display()` 展示当前 slide 的序号。


## last-slide 计数器

因为有些情形下，我们需要为 slides 加入后记，因此就有了冻结 last-slide 计数器的需求，因此这里维护了第二个计数器。

我们可以使用 `utils.last-slide-number` 展示后记前最后一张 slide 的序号。


## 进度

我们可以使用

```typst
#utils.touying-progress(ratio => ..)
```

来显示当前的进度。


## 后记

你可以使用

```typst
#show: appendix

= Appendix

appendix
```

语法进入后记。

并且 `<touying:unoutlined>` 标签可以让后记的 section 不显示在大纲中。