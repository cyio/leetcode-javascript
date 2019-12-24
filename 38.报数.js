/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === null || n.length === 0) return ''

  var cur = '1'
  var num = 1

  while(n > 1) {
    var r = ''

    for (var i = 0; i < cur.length; i++) {
      if (i < cur.length - 1 && cur[i] === cur[i + 1]) {
        num++   // 循环到没有重复数时，再更新 r
      } else {
        r += (num + '' + cur[i])
        num = 1
      }
    }

    cur = r
    n--
  }

  return cur    
};

console.log(countAndSay(4))

// 跟罗马数字一个思路，怎么判断重复字符
// @lc code=end

