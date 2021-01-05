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
// 借助 map 存储字符出现次数，需要两次遍历
// 时间 O(n)
var firstUniqChar = function(s) {
  let map = new Map()
  for (let i = 0, len = s.length; i < len; i++) {
    let count = (map.get(s[i]) || 0) + 1 // 需要括号，逻辑与 + 的优先级？
    map.set(s[i], count)
  }
  for (let i = 0, len = s.length; i < len; i++) {
    if (map.get(s[i]) === 1) return i
  }
  return -1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = firstUniqChar;
// @after-stub-for-debug-end