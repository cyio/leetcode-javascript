/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let maxVersionLength = Math.max(version1.length, version2.length)
  let v1 = version1.split('.')
  let v2 = version2.split('.')
  v1 = padArray(v1, maxVersionLength)
  v2 = padArray(v2, maxVersionLength)
  // console.log(v1, v2)
  for (let i = 0; i < maxVersionLength; i++) {
    const a = Number(v1[i])
    const b = Number(v2[i])
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else if (a === b){
      if (i !== maxVersionLength - 1) {
        continue
      } else {
        return 0
      }
    }
  }
};

function padArray(arr, length) {
  return [...arr, ...new Array(length - arr.length).fill('0')]
}

console.log(compareVersion('1.0.0', '1.001'))
// 题目没有给定版本号位数限制，不能以示例数据想当然
console.log(compareVersion('0.9.9.9.9.9.9.9.9.9.9.9.9', '1.001'))
// "0.9.9.9.9.9.9.9.9.9.9.9.9"
// "1.0"
