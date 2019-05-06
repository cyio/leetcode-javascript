// 连续字符计数

// 输入 aaaaaabbbbbccccddac
// 输出 a6b5c4d2a1c1
const input = 'aaaaaabbbbbccccddac'
const countSuccession = s => s.match(/(.)\1*/g).reduce((r, x) => r + x[0] + x.length, '')

console.log(countSuccession(input))

// 1.1 正则匹配出重复模式的字符组合，因为 aa 后续还可能出现，\1 表示只匹配第一组
let s = input.match(/(.)\1*/g) // ['aaaaa', 'bb', 'c', 'aa']
// 1.2 模式是 value[0] + value.length，
// 1.3 用 reduce 拼接，初始值为空字符串
let r = s.reduce((acc, value) => acc + value[0] + value.length, '')
console.log(r) // a5b2c1
