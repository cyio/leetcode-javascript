//  [2,2,1,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路1：排序，以 num 为键，个数为值存储，再遍历查找，
// 提前定义 key 是关键，否则容易写错
var majorityElement = function(nums) {
  nums = nums.sort()
  let obj = {}
  for(let i = 0; i < nums.length; i++)  {
    const key = nums[i]
    if (!obj.hasOwnProperty(key)) {
      obj[key] = 1
    } else {
      obj[key] = obj[key] + 1
    }
  }
  for (let j = 0; j < Object.keys(obj).length; j++) {
    const key = Object.keys(obj)[j]
    if (obj[key] > nums.length / 2) {
      return key
    }
  }
  return -1
};

let r = majorityElement([2,2,1,1,1,2,2])
console.log(r)
