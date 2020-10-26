/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// toString，会有分隔符
// 进位，
// join 位数超边界 19，16n000
var plusOneNotWork = function(digits) {
  // if (digits[0] === 0) return [1]

  return String((+digits.join('') + 1)).split('')
};

// 1. 无进位
// 2. 进位后，为 0 ,继续处理更高位
// 3. 999，此时处理为 000，需要加 1
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) return digits
  }
  return [1, ...digits]
}
plusOne([1, 2, 3])
// @lc code=end

