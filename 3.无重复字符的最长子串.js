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
var lengthOfLongestSubstring = function(str) {
  if (!str.length) return 0

  let tmpStr = ''   // 每次循环找到的不含重复字符的子字符串
  let maxStrLen = 0   // 最大不含重复字符的子字符串的长度
  let len = str.length   
  let left = 0  // 不含重复字符的子字符串的左游标

  for (let i = 0; i < len; i++) {
    if (tmpStr.indexOf(str[i]) !== -1) {  // 发生重复，下一次循环
      left += (str.slice(left, i).indexOf(str[i]) + 1) // left 不能直接用 i，比如 dvdf 这种不连续重复
      continue
    }
    tmpStr = str.slice(left, i + 1)
    maxStrLen = Math.max(maxStrLen, tmpStr.length)
  }
  
  return maxStrLen
};
// @lc code=end

