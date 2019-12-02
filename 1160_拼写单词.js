/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const matchWords = []
  const charsArr = chars.split('')
  for (let i = 0; i < words.length; i++) {
    const letters = words[i].split('')
    let failCount = false
    const charsArrCopy = [...charsArr]
    for (let j = 0; j < letters.length; j++) {
      const index = charsArrCopy.indexOf(letters[j])
      if (index > -1) {
        // 拼写字母要求只能用一次
        charsArrCopy.splice(index, 1)
      } else {
        // 终止当前 word 拼写
        failCount = true
        break
      }
    }
    if (!failCount) {
      matchWords.push(words[i])
    }
  }
  // return letters.every(l => chars.includes(l))
  console.log(matchWords)
  return matchWords.reduce((pre, cur) => pre + cur.length, 0)
};

console.log(countCharacters(["hello","world","leetcode", "well"], "welldonehoneyr"))
