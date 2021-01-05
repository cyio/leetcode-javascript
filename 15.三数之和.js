/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双指针：当我们需要枚举数组中的两个元素时，如果我们发现随着第一个元素的递增，第二个元素是递减的，那么就可以使用双指针的方法
// -4, -1, -1, 0, 1, 2
// -4 -1 2
var threeSum = function(nums) {
  if (nums.length < 3) return []
  // 从小到大排序
  nums.sort((a, b) => a - b)
  const n = nums.length
  const res = []
  // 最小值大于 0 或者 最大值小于 0，说明没有无效答案
  if (nums[0] > 0 || nums[n - 1] < 0) return res
  for (let i = 0; i < n; i++) {
    // 如果当前值大于 0，和右侧的值再怎么加也不会等于 0，所以直接退出
    if (nums[i] > 0) return res
    // 当前循环的值和上次循环的一样，就跳过，避免重复值
    if (i > 0 && nums[i] === nums[i - 1]) continue
    // 双指针
    let l = i + 1
    let r = n - 1
    while(l < r){
      const sum = nums[i] + nums[l] + nums[r]
      if (sum > 0) r--
      if (sum < 0) l++
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        // 跳过重复值，依然以 i 为锚，当 l 或 r 重复时，整个解就重复了
        while(l < r && nums[l] === nums[l + 1]){
          l++
        }
        // 跳过重复值
        while(l < r && nums[r] === nums[r + 1]){
          r--
        }
        // 当找到解时，左右都要移动，因为只移动一边一定不符合解
        l++
        r--
      }
    }
  }
  return res
};
// @lc code=end

