/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const otherIndex = map.get(target - nums[i])
    if (otherIndex !== undefined) {
      return [otherIndex, i]
    } else {
      map.set(nums[i], i)
    }
  }
};

// 时间：O(n)，因为 map 是 O(1)
// @lc code=end

