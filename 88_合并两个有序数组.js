// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 以nums2的长度控制是否停止循环，将nums1的最后一位和nums2的最后一位比较，把大的数放在nums1最后一位，再向前遍历比较
var merge = function(nums1, m, nums2, n) {
  while (n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[n + m - 1] = nums1[--m]
    } else {
      nums1[n + m - 1] = nums2[--n]
    }
  }
}

let nums1 = [1, 2, 9, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3

let result = merge(nums1, m, nums2, n)
console.log(nums1)
