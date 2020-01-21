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
  let i, j;
  // 想不清楚遍历边界，在大脑中先模拟这个过程
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)  {
        return [i, j]
        // break
      }
    }
  }
  return []
};

// 时间：O(2n)
// console.log(twoSum([2, 7, 11, 15], 9))
// [ 0, 1 ]
// console.log(twoSum([2, 7, 11, 15], 8))
// @lc code=end

