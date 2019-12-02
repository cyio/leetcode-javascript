/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var result = 0;

  for(var i = 0; i < s.length; i++){
    if (i > 0 && (c2n(s[i]) > c2n(s[i-1]))){
      result -= 2 * c2n(s[i-1]); // 减两次
    } 

    result += c2n(s[i]);  // 这里总是加，如果出现左大右小，上一步提前减掉
  }

  return result;
};

var c2n = function(c){
  switch(c){  // 如果这里用 map，会额外占用空间
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return 0;
  }
}

console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))

// @lc code=end

