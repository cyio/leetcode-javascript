// [第 1 题：写一个 mySetInterval(fn, a, b),
// 每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterval
// Issue #7 · lgwebdream/FE-Interview](https://github.com/lgwebdream/FE-Interview/issues/7)
// function 或 class

// 为什么、什么场景用 this
// 递归怎么写
// tID
function mySetInterval(fn, a, b) {
}

let fn = () => console.log('hi')

window.test = new mySetInterval(fn, 1000, 2000)
