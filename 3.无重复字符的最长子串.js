/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
// 思路：假定左起点，循环判断
var lengthOfLongestSubstring = function(str) {
  if (!str.length) return 0

  let tmpStr = ''   // 每次循环找到的不含重复字符的子字符串
  let maxStrLen = 0   // 最大不含重复字符的子字符串的长度
  let left = 0  // 不含重复字符的子字符串的左游标（起点）

  for (let i = 0; i < str.length; i++) {
    let cur = str[i]
    if (tmpStr.includes(cur)) {  // 发生重复，下一次循环
      // let step = tmpStr.length // wrong， dvdf
      let step = str.slice(left, i).indexOf(cur) + 1 // 发生重复第一个字母位置 + 1，只能用查找
      left += step // left 不能直接用 i，比如 dvdf 这种不连续重复
      continue
    }
    tmpStr = str.slice(left, i + 1)
    maxStrLen = Math.max(maxStrLen, tmpStr.length)
  }
  
  return maxStrLen
};
// @lc code=end

