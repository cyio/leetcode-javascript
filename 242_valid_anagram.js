// 有效的字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return fale
  return formatter(s) === formatter(t)
};

function formatter(w) {
  return w
    .split('')
    .sort()
    .join('')
}

console.log(isAnagram('anagram', "nagaram"))
console.log(isAnagram('rat', "car"))

// 如果有 unicode 字符，数组放不下，哈希表可解决
