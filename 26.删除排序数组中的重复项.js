/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let last = nums[nums.length - 1]
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === last) {
      nums.splice(i, 1)
    } else {
      last = nums[i]
    }
  }
  return nums.length
};

let nums = [0,0,1,1,1,2,2,3,3,4]
// let nums = [0, 0, 1, 1, 2]
let r = removeDuplicates(nums)
console.log(nums)

// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/dan-ke-xi-lie-yong-shi-9687nei-cun-635-by-lvshanke/
// [0,0,1,1,1,2,2,3,3,4] not pass 多个 1
// var removeDuplicates = function(nums) {
//   for (let [index, num] of nums.entries()) {
//     if (nums.slice(index + 1).includes(num)) {
//       nums.splice(index, 1)
//     }
//   }

//   return nums.length
// };

// @lc code=end

