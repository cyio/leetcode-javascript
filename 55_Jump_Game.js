/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 题解：最大步数是否总是 >= 0，以便跳完
var canJump = function(nums) {
  // 1 暂存左侧最大步数
  var numLeft = nums[0]; 
  // 2 遍历
  for(var i = 1; i < nums.length; i++){
    // 3 模拟跳跃，每跳一次，跳跃数减一
    numLeft--;
    // 4 不足 0 时，无法完成
    if(numLeft < 0){
      return false;
    }
    // 5 贪心求解可以到达的最远步数
    numLeft = Math.max(nums[i], numLeft);
  }

  // 6 跳到或跳过，有效解
  return numLeft >= 0;
};
