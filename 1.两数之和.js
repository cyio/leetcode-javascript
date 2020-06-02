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
  // 对 Map 不是很熟悉
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    const num2 = target - nums[i] // pair 条件
    const num2Index = map.get(num2)
    // 如果存在 pair 则返回，否则存入 map
    // map get 不存在，返回 undefined，如果存在有效值，应该返回数字（数字可能是 0 ，所以判断要强一致）
    if (num2Index !== undefined) { 
      return [num2Index, i]
    } else {
      map.set(num1, i)  // 这里值在前，索引在后，方便找值
    }
  }
};

// 时间：O(n)，因为 map 是 O(1)
// 笨办法是 O(n平方)
// console.log(twoSum([2, 7, 11, 15], 9))
// @lc code=end

