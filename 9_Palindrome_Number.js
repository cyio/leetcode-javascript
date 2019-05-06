/**
 * @param {number} x
 * @return {boolean}
 */
// 给定数字是否为回文

var isPalindrome = function(x) {
  // 1. 负数不是
  if (x < 0) {
    return false
  }
  // 2. 比较正序和反序是否一致
  // 2.1 转成字符串，得到正序
  // 2.2 正序字符串分割，再用数组翻转、合并方法，得到反序字符串
  return x.toString() === x.toString().split('').reverse().join('')
};
