/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// case 'a' 'a'
var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle)
    if (needle.length === 0) return 0
    let i = 0
    while (i < haystack.length){
      if (i + needle.length <= haystack.length
        && haystack.slice(i, i + needle.length) === needle
      ){
        return i
      }
      i++
    }
    return -1
};
// @lc code=end

