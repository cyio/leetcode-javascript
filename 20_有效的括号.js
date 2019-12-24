/**
 * @param {string} s
 * @return {boolean}
 */
// const stack = require('./stack.js')
// console.log(stack)
var isValid = function(s) {
  const stack = [s[0]]
  const pareMap = {
    ')': '(',
    '[': ']',
    '{': '}'
  }
  for (let l of s) {
    //1. 左括号，push
    if (!Object.keys(pareMap).includes(l)) {
      stack.push(l)
      //2. 右括号，is match peak
    } else if (stack.length !== 0 && pareMap[l] !== stack.pop()) {
      return false
    }
  }
  //3. empty is valid
  if (stack.length !== 0) {
    return false
  } else {
    return true
  }
};

console.log(isValid('()'))
