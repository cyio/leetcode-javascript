/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const record = new Map()
  let maxLen = 0;
  let head = 0
  let tail = 0
  while(tail < s.length){
    const item = s[tail]
    if (record.has(item) && head <= record.get(item)){ // head 移动条件：窗口内发生重复
      // const lastRepeatIndex = record.get(item)
      // if (head <= lastRepeatIndex) head = lastRepeatIndex + 1
      head = lastRepeatIndex + 1
    }
    record.set(item, tail)
    maxLen = Math.max(maxLen, tail - head + 1)
    tail += 1
  }
  
  return maxLen;
};
// dvdf pwwkew
var lengthOfLongestSubstring2 = function(s) {
  let maxStrLen = 0;
  let tmpStr = '';
  for (let i = 0; i < s.length; i++) {
    if (tmpStr.includes(s[i])) {
      tmpStr = tmpStr.slice(tmpStr.indexOf(s[i]) + 1);
      tmpStr += s[i]
      continue
    }

    tmpStr += s[i];
    maxStrLen = Math.max(maxStrLen, tmpStr.length);
  }
  return maxStrLen;
};

// 思路：假定左起点，循环判断，发生重复时左起点往前跳几步
var lengthOfLongestSubstring1 = function(str) {
  if (!str.length) return 0

  let tmpStr = ''   // 每次循环找到的不含重复字符的子字符串
  let maxStrLen = 0   // 最大不含重复字符的子字符串的长度
  let left = 0  // 不含重复字符的子字符串的左游标（起点）

  for (let i = 0; i < str.length; i++) {
    if (tmpStr.includes(str[i])) {  // 发生重复，下一次循环
      // let step = tmpStr.length // wrong， dvdf
      let step = str.slice(left, i).indexOf(str[i]) + 1 // 发生重复第一个字母位置 + 1，只能用查找
      left += step // left 不能直接用 i，比如 dvdf 这种不连续重复
      continue
    }
    tmpStr = str.slice(left, i + 1)
    maxStrLen = Math.max(maxStrLen, tmpStr.length)
  }
  
  return maxStrLen
};
// @lc code=end

