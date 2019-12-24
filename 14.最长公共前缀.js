/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let ret = ''
  if (strs.length === 0) return ret
  const firstWord = strs[0]
  for (let i = 0; i < firstWord.length; i++) {
    const curLetter = firstWord[i]
    if (strs.some(w => w[i] !== curLetter)) {
      break
    } else {
      ret += curLetter
    }
  }

  return ret
};

// 时间： 最大 O(n^2)	

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
// @lc code=end

