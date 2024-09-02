---
sidebar_position: 1
---

# 简单动画

Touying 为简单的动画效果提供了两个标记：`#pause` 和 `#meanwhile`。

## pause

`#pause` 的用途很简单，就是用于将后续的内容放到下一张 subslide 中，并且可以使用多个 `#pause` 以创建多张 subslides，一个简单的例子：

```typst
#slide[
  First #pause Second

  #pause

  Third
]
```

![image](https://github.com/touying-typ/touying/assets/34951714/a3bed1d3-e660-456d-8a54-a914436f43bf)

这个例子将会创建三张 subslides，逐渐地将内容展示出来。

如你所见，`#pause` 既可以放在行内，也可以放在单独的一行。


## meanwhile

有些情况下，我们需要在 `#pause` 的同时展示一些其他内容，这时候我们就可以用 `#meanwhile`。

```typst
#slide[
  First
  
  #pause
  
  Second

  #meanwhile

  Third

  #pause

  Fourth
]
```

![image](https://github.com/touying-typ/touying/assets/34951714/24ca19a3-b27c-4d31-ab75-09c37911e6ac)

这个例子只会创建两张 subslides，并且 "First" 和 "Third" 同时显示，"Second" 和 "Fourth" 同时显示。