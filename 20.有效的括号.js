/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) return false
  const stack = []
  const pareMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let l of s) {  // 单个右括号时，没进 stack,一直空
    //1. 左括号，push，注意求反
    if (!Object.keys(pareMap).includes(l)) {
      stack.push(l)
      //2. 右括号，是否匹配 stack peak
    } else if (stack.length !== 0 && pareMap[l] !== stack.pop()) {
      return false
    }
  }
  //3. empty is valid, 有效的可全部抵销
  if (stack.length !== 0) {
    return false
  } else {
    return true
  }

}

// console.log(isValid('({[])}'))
// console.log(isValid('([)]'))
// console.log(isValid("()[]{}"))
console.log(isValid(""))
// console.log(isValid("()"))


// s1: 找到最内层的括号对，消去，重复此过程，若存在无法消去的字符则说明字符串无效。
// s2: stack + map，这里 stack 可用数组替代
// 奇数肯定不是
// @lc code=end

