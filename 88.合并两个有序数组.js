/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  while (n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[n + m - 1] = nums1[--m]
    } else {
      nums1[n + m - 1] = nums2[--n]
    }
  }
};

// 以nums2的长度控制是否停止循环，将nums1的最后一位和nums2的最后一位比较
// 每次将较大的数移出，放在nums1后面的空位
// 剩余的数比较，直到 num2 为空

// 比较 n 次即可结束

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3

let result = merge(nums1, m, nums2, n)
console.log(nums1)

// @lc code=end

