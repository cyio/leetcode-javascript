// 实现函数compose，compose接受多个函数作为参数，并返回一个新的函数，新的函数会从右向左依次执行原函数， 并且上一次结果的返回值将会作为下一个函数的参数。
// compose 函数只能有一个参数

function compose(...fns) {
  // 返回的是函数，参数来自最初调用
  return arg => fns.reduceRight((acc, curFn) => curFn(acc), arg)
}

function a(msg) {
  return msg + 'a'
}
function b(msg) {
  return msg + 'b'
}
function c(msg) {
  return msg + 'c'
}

const f = compose(a, b, c)
const r = f('hello ')

console.log(r) // hello cba
