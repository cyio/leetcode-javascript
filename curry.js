function curry(fn) {
  const ctx = this
  return function inner(...args) {
    if (args.length === fn.length) {
      return fn.call(ctx, ...args)
    } else {
      return (...innerArgs) => inner.call(ctx, ...args, ...innerArgs)
    }
  }
}

// test
function log(a, b, c) {
  console.log(a, b, c)
}

const f1 = curry(log)(1)
const f2 = f1(2)
f2(3)
