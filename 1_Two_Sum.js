// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// 给定一组数，求相加等于给定值的两个数字，返回索引位置

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
// hash 方式如何实现 
function twoSum(nums, target) {
  let i, j;
  // 想不清楚遍历边界，在大脑中先模拟这个过程
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)  {
        return [i, j]
        break
      }
    }
  }
  return []
}
console.log(twoSum([2, 7, 11, 15], 9))
// [ 0, 1 ]
