/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sorted = nums.sort()
  if (sorted.length < 3 || sorted.length === 0 || sorted[0] > 0 || sorted[sorted.length - 1] < 0) return []
  const result = []
  for (let i = 0; i < sorted.length; i++) {
    let a = sorted[i]
    if (a > 0) break
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

// 1. 三重循环，加数组是否重复判断，数据大时执行超出时间限制
