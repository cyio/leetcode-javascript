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
// 优化：以 size 较少数据循环
var intersection1 = function(nums1, nums2) {
  return [...new Set(nums1)].filter(x => new Set(nums2).has(x))
};

function intersection(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  return get(set1, set2)
}

function get(set1, set2){
  if (set1.size > set2.size) {
    return get(set2, set1) // 调换技巧
  }

  let res = new Set() // 空间占用

  for(let i of set1) { // for of 处理 set
    if (set2.has(i)) {
      res.add(i)
    }
  }

  return [...res]
}

// let arr1 = [1, 3, 4, 9]
// let arr2 = [1, 4, 9, 2]

// let r = intersection(arr1, arr2)
// console.log(r)
// @lc code=end

