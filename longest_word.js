// 给定一句话，返回最长单词（可能有多个）
function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
  const sorted = wordArr.sort((a, b) => b.length - a.length)
  console.log(sorted)
  const longestWordArr = sorted.filter((w) => w.length === sorted[0].length)
  return longestWordArr.length > 1 ? longestWordArr : longestWordArr[0]
}

// 1. 匹配单词
// 2. 根据长度降序排序
// 3. 取出所有最长长度单词
// 4. 返回时区分情形
console.log(longestWord('hello tom and mike!') === 'hello')
console.log(longestWord('hello tom and mike, there').length  === 2)

// sort a\b 先后顺序?
// 升序
function compareNumbers(a, b) {
  return a - b;
}
