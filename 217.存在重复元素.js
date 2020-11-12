/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 考察点：hash search 和 insert 的平均时间复杂度为 O(1)
var containsDuplicate = function(nums) {
  let set = new Set()
  for(let i = 0; i < nums.length; i++){
    if (set.has(nums[i])) return true
    set.add(nums[i])
  }
  return false
};
// @lc code=end

