/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 1. 主要复用字符串反转方法，注意最后转回数字时的正负处理
  const reverseXStr = +String(Math.abs(x))
    .split('')
    .reverse()
    .join('')
  const reverseX = x > 0 ? +reverseXStr : -reverseXStr
  const isBeyondBorder = reverseX > Math.pow(2, 31) || reverseX < Math.pow(-2, 31) - 1
  return isBeyondBorder ? 0 : reverseX
};

// 对于位运算，JavaScript仅支持32位整型数：
// [JavaScript实验：数值范围](http://blog.shaochuancs.com/javascript-number-range/)
// console.log(reverse(1534236469))
// console.log(reverse(1527))

// @lc code=end

