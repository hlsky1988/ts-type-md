---
order: 0
---

# typescript 类型渐进

## 选这个分享的原因:

1. 在之前的(公司)项目里推进ts一直是一件不太讨人喜欢的事情,尤其是在写业务的时候,补充类型是一件相当费时间的事情,尤其是一些第三方的库未定义类型的时候,比如 微信的 js-sdk,很多人为了省事直接any到底,这也是 typescript 被戏称为 anyscript 的原因

2. ts 在 3.x 版本更新了 unknown 类型,同时推荐使用 unknown 来代替 any, 在变量类型无法推断的情况下(实际情况是 any 和 unknown 都会出现), 变量会显示为 unknown 类型, 这时候我就好奇 unknown 和 any 有什么区别

先说明 any 和 unknown 两者间的区别:

- any 不做任何类型检查,相当于关闭了当前变量的类型检查

- unknown 比 any 的类型检查严格，any 什么检查都不做，unknown 要求收窄类型, 
unknown 能被赋值为任何类型，但不能被直接赋值给 any 和 unknown 之外的其他类型,需要先判断类型(类型断言)

```ts
let var1:unknown = 1
let var2:unknown = 'ss'
let var3:string = 'ss'

var2 = var1

var3 = var1   // 不能将类型“unknown”分配给类型“string”。ts(2322)

var3 = var2   // 不能将类型“unknown”分配给类型“string”。ts(2322)

if (typeof var2 === 'string') {
  var3 = var2
}

// 看完这个东西觉得更烦躁了, 哈哈哈哈哈

```

## 为什么用文档工具而不是PPT ?

因为有一些伪代码要展示, 这样会更方便, Markdown 渲染的效果也好一些


