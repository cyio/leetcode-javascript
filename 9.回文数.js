/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  let revertedNumber = 0
  while(x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x = Number.parseInt(x / 10)
  }

  return x === revertedNumber || x === Number.parseInt(revertedNumber / 10)
};

// 字符串方法太简单了，跳过
// 特点：只翻转后半部分，避免翻转后越界
// while 算法需要排除最后一位为 0 但非 0 的数
// while 最后一次执行，前半部分应大于翻转后的数，等于或小于不需要再转

console.log(isPalindrome(1221))
console.log(isPalindrome(12210))
console.log(isPalindrome(-12210))
// @lc code=end

