---
sidebar_position: 4
---

# Cover 函数

正如您已经了解的那样，`uncover` 和 `#pause` 均会使用 `cover` 函数对不显示的内容进行遮盖。那么，这里的 `cover` 函数究竟是什么呢？


## 默认 Cover 函数：`hide`

`cover` 函数是保存在 `s.methods.cover` 的一个方法，后续 `uncover` 和 `#pause` 均会在这里取出 `cover` 函数来使用。

默认的 `cover` 函数是 [hide](https://typst.app/docs/reference/layout/hide/) 函数，这个函数能将内部的内容更改为不可见的，且不会影响布局。


## 更新 Cover 函数

有的情况下，您想用您自己的 `cover` 函数，那么您可以通过

```typst
config-methods(cover: (self: none, body) => hide(body))
```

方法来设置您自己的 `cover` 函数。


## hack: 处理 enum 和 list

你会发现现有的 cover 函数无法隐藏 enum 和 list 的 mark，参考 [这里](https://github.com/touying-typ/touying/issues/10)，因此你可以进行 hack：

```typst
config-methods(cover: (self: none, body) => box(scale(x: 0%, body)))
```


## 半透明 Cover 函数

Touying 提供了半透明 Cover 函数的支持，只需要加入

```typst
config-methods(cover: utils.semi-transparent-cover.with(alpha: 85%))
```

即可开启，其中你可以通过 `alpha: ..` 参数调节透明度。


:::warning[警告]

注意，这里的 `transparent-cover` 并不能像 `hide` 一样不影响文本布局，因为里面有一层 `box`，因此可能会破坏页面原有的结构。

:::


:::tip[原理]

`utils.semi-transparent-cover` 方法定义为

```typst
#let semi-transparent-cover(self: none, constructor: rgb, alpha: 85%, body) = {
  cover-with-rect(
    fill: update-alpha(
      constructor: constructor,
      self.page.fill,
      alpha,
    ),
    body,
  )
}
```

可以看出，其是通过 `utils.cover-with-rect` 创建了一个与背景色同色的半透明矩形遮罩，以模拟内容透明的效果，其中 `constructor: rgb` 和 `alpha: 85%` 分别表明了背景色的构造函数与透明程度。

:::