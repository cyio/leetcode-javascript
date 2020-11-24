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
var threeSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b) // 从小到大排序
  // 长度不符；排序后的数组，如果最小值大于 0 或最大值小于 0 时，一定不满足
  if (sorted.length < 3 || sorted.length === 0 || sorted[0] > 0 || sorted[sorted.length - 1] < 0) return []
  const result = []
  for (let i = 0; i < sorted.length; i++) {
    let a = sorted[i]
    if (a < 0 && sorted[i + 2] < 0) continue
    // if (a > 0) continue
    for (let j = i + 1; j < sorted.length; j++) {
      let b = sorted[j]
      for (let k = j + 1; k < sorted.length; k++) {
        let c = sorted[k]
        // console.log(a, b, c)
        if (a + b + c === 0) {
          if (!hasSameArray(result, [a, b, c])) {
            result.push([a, b, c])
          }
        }
      }
    }
  }
  return result
};

function hasSameArray(nums, arr) {
  return nums.some(item => {
    return item.every((value, index) => {
      return value === arr[index]
    })
  })
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// 1. 三重循环，加数组是否重复判断。数据大时执行超出时间限制 pass，如连续的负数
// https://leetcode-cn.com/problems/3sum/solution/three-sum-ti-jie-by-wonderful611/
// @lc code=end

