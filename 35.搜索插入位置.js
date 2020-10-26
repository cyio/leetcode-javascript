/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.indexOf(target) === -1) {
    nums.push(target)
    nums.sort((a, b) => a - b) // 需要传入 compareFn，存在大于 10 的数字；升序，a > b 时调换
  }
  return nums.indexOf(target)
};
// @lc code=end

