/**
 * @param {number} x
 * @return {number}
 */

// 对于位运算，JavaScript仅支持32位整型数：
// [JavaScript实验：数值范围](http://blog.shaochuancs.com/javascript-number-range/)

var reverse = function(x) {
  var reverseX = +String(Math.abs(x)).split('').reverse().join('')
  reverseX = x > 0 ? reverseX : -reverseX
  if (reverseX > Math.pow(2, 31) || reverseX < Math.pow(-2, 31) - 1) return 0
  return reverseX
};

console.log(reverse(1534236469))
