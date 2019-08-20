// 输入: [4,1,2,1,2]
// 输出: 4

// 思路1: 若该数组有序，且有一个元素只出现一次，以步数2向后遍历，那么一定会存在a[i] != a[i+1]
// 时间复杂度 n/2，所以是 n
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0]
  nums = nums.sort()
  for (let i = 0; i < nums.length; i = i + 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
  return -1
};

const r = singleNumber([1, 2, 1, 4, 2])
console.log(r)

