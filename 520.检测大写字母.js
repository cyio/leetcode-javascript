/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
  var detectCapitalUse = function(word){
    return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word)
  }

// var isCaptial = (letter) => !'abcdefghijklmnopqrstuvwxyz'.includes(letter) 
// var detectCapitalUse = function(word) {
//   word = word.split('')
//   let first = word[0]
//   if (isCaptial(first)) {
//     if (isCaptial(word[1]) > 0) {
//       return word.every(i => isCaptial(i))
//     }
//     return word.substr(1).every(i => !isCaptial(i))
//   }
//   return word.every(i => !isCaptial(i))
// };
// @lc code=end

