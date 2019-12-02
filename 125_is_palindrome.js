/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === ' ') return true
  if (s.length === 1) return true
  // 1. 正则匹配字母和数字  如何匹配单个字母
  var sGroup = s.match(/[(a-z)|(A-Z)|(0-9)]{1}/g)
  // 2. 合并匹配结果
  var S = sGroup.map(i => i.toLowerCase()).join('')
  // 3. 转换成数组，反转并比较
  return S === S.split('').reverse().join('')
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome(' '))
console.log(isPalindrome('.'))
