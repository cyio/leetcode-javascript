/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = null
  let l = 0
  let r = 0
  let i = 0
  while(i < s.length){
    let cur = s.substr(l, r + 1)
    if (isPal(cur) && cur.length > res) {
      res = cur
      
    }
    if (s.)
  }
};
// @lc code=end

