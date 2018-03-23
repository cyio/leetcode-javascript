// 连续字符计数

// 输入 aaaaaabbbbbccccddac
// 输出 a6b5c4d2a1c1

const countSuccession = s => s.match(/(.)\1*/g).reduce((r, x) => r + x[0] + x.length, '')

console.log(countSuccession('aaaaaabbbbbccccddac'))

// 分解
let s = ['aaaaa', 'bb', 'c']
let r = s.reduce((acc, value) => acc + value[0] + value.length, '')
console.log(r) // a5b2c1
