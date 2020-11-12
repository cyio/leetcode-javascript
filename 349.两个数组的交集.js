/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 一、循环暴力，时间上，数组 includes 也是循环，因此是两个循环，O(m * n)
// 二、Set 时间上，转换集合 O(m + n) + 集合 has 平均 O(1)
// 为什么转换成 Set，a. 可以减少重复值检查 b. has O(1)
// 优化：可以判断两数组的最大最小，先判断是否有交集，没交集直接就退出
var intersection = function(nums1, nums2) {
  return [...new Set(nums1)].filter(x => new Set(nums2).has(x))
};
// @lc code=end

