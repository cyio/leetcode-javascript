/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 动态规划 空间换时间
var fib = function (N) {
  if (N <= 1) return N
  const arr = new Array(N + 1).fill(null) // 因为有 0，创建个数需要 n + 1
  arr[0] = 0
  arr[1] = 1
  for (let i = 2; i < arr.length; i++) { // 注意循环起点
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[N]
};
// @lc code=end

