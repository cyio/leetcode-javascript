/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 理解：买一次，卖一次；买卖有先后
// 1. 暴力，遍历两次
// 2. 遍历一次，某天价格 - 某天之前最低价格（遍历时更新）
// 并不需要查找整个数组的最小值
// 需要两个值才能算出，遍历可以从 1 开始
var maxProfit = function(prices) {
  let curMin = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    curMin = Math.min(curMin, prices[i - 1])
    maxProfit = Math.max(maxProfit, prices[i] - curMin)
  }

  return maxProfit
};
// @lc code=end

