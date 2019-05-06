/**
 * @param {string} s
 * @return {boolean}
 */



// valid cases
// 9
// .9
// 9.
// 0.9
// 9e10
// 9e-10

// invalid case
// .
// ab
// 9ea10
// 9e
// e9
// .e1



// cannot use (\d*\.?\d*)\d+
// 科学计数法 1.2e-4 = 1.2 * (10 ** -4) = 0.00012
// 开头结尾仅可以有空格，如'  9 '

var isNumber = s => !!s.match(/^\s*[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)(\e[+-]?\d+)?\s*$/);

let n = '  9  0'
console.log(isNumber(n))
