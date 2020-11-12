/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 3 -1 2 6
// max_ending_here max_so_far
// 3 3
// 2 3
// 4 4
// 10 10

// -3 1 2
// 1 1
// 3 3
// 如果累加项前值为负值，就可能需要更新 sum 为当前项

// 算出每个位置结尾连续子数组最大和，返回数组最大值
// f(i)=max{f(i−1)+arr[i],arr[i]}
// [详细解读动态规划的实现, 易理解 - 最大子序和 - 力扣（LeetCode）](https://leetcode-cn.com/problems/maximum-subarray/solution/xiang-xi-jie-du-dong-tai-gui-hua-de-shi-xian-yi-li/)

var maxSubArray = function(nums) {
  let ans = nums[0]
  let sum = 0
  for(let i = 0; i < nums.length; i++){
    sum = Math.max(sum + nums[i], nums[i])
    ans = Math.max(ans, sum)
  }
  return ans
};
// @lc code=end

