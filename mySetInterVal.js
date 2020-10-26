// [第 1 题：写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal · Issue #7 · lgwebdream/FE-Interview](https://github.com/lgwebdream/FE-Interview/issues/7)
// function 或 class

function mySetInterVal(fn, a, b) {
}

let fn = () => console.log('hi')

window.test = new mySetInterVal(fn, 1000, 2000)
