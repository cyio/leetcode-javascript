// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// 给定一组数，返回其中两个数相加等于给定值的索引位置

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// UPDATE (2016/2/13):
// The return format had been changed to zero-based indices. Please read the above updated description carefully.

// Hide Company Tags LinkedIn Uber Airbnb Facebook Amazon Microsoft Apple Yahoo Dropbox Bloomberg Yelp Adobe
// Hide Tags Array Hash Table
// Hide Similar Problems (M) 3Sum (M) 4Sum (M) Two Sum II - Input array is sorted (E) Two Sum III - Data structure design



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1. 嵌套循环
var twoSum = function(nums, target) {
  let result = []
  let i
  let j
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j)
      }
    }
  }
  return result
};

console.log(twoSum([2, 7, 11, 15], 9))
