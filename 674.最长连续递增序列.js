/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// [1,3,5,4,7]
// [2, 2, 2]
// 移动左边界的条件，反向条件
// 满足条件时保存当次 ans
var findLengthOfLCIS = function(nums) {
  let ans = 0
  let left = 0
  for(let i = 0; i < nums.length; i++){
    if (i > 0 && nums[i-1] >= nums[i]){
      left = i
    } else {
      ans = Math.max(ans, i - left + 1)
    }
  }
  return ans
};
// @lc code=end

// while 等价版本
const arr = [101, 19, 12, 51, 32, 7, 103, 8];
var findLengthOfLCIS2 = function(nums) {
  let ans = 0
  let left = 0
  let right = 0
  while (right < nums.length) {
    if (right > 0 && nums[right - 1] >= nums[right]) {
      ans = Math.max(ans, right - left + 1)
    } else {
      left = right
    }
    right++
  }
  return ans
};
console.log(findLengthOfLCIS([3, 2, 1, 4, 3, 2, 1, 0]))
