/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// for循环中原地移除数组中元素，一般会考虑到数组长度变化带来的索引变化问题，而倒序删除则规避了这个情况
// 正序时，元素移除时，递增遍历会漏掉元素；而倒序，只是索引背后的元素移除了，不影响递减遍历元素
var removeElement = function(nums, val) {
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
  return nums.length
};
// @lc code=end

