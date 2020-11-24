/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (s.length === 0) return -1
  if (s.length === 1) return 0
  let set = new Set()
  for(let i = 0; i < s.length; i++){
    if (i + 1 < s.length && !set.has(s[i]) && !s.substr(i + 1).includes(s[i])){
      return i
    } else {
      set.add(s[i])
    }
  }
  return -1
};
// @lc code=end

