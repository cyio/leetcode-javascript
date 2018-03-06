/**
 * @param {number} x
 * @return {number}
 */

// 对于位运算，JavaScript仅支持32位整型数：
// [JavaScript实验：数值范围](http://blog.shaochuancs.com/javascript-number-range/)

var reverse = function(x) {
  var reverseX = +String(Math.abs(x)).split('').reverse().join('')
	if (reverseX > 0x7FFFFFFF) {
			return 0
	}
  return x < 0 ? -reverseX : reverseX
};

console.log(reverse(1534236469))
