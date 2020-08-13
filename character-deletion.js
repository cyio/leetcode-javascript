// 字符删除
// [题目描述] 输入两个字符串，从第一字符串中删除第二个字符串中所有的字符
//
function characterDeletion(str, sub) {
  // const strArray = Array.from(str)
  // const subArray = Array.from(sub)
  // const ret = []
  // for (let letter of strArray) {
    // if (!subArray.includes(letter)) {
      // ret.push(letter)
    // }
  // }
  // return ret.join('')
  // return strArray
    // .filter(letter => !subArray.includes(letter))
    // .join('')
  return [...str] // 如果是链式调用，最好第一个调用就换行写，易于阅读和扩展
    .filter(letter => !sub.includes(letter))  // string 和 array 都有 includes 方法
    .join('')
}

// test
let str = 'They are students'
let sub = 'aeiou'
// expect ”Thy r stdnts”

let r = characterDeletion(str, sub)
console.log(r)

// 思考：删除是副作用，总是可以用纯函数来解决，并且更简单些，不需要关心索引位置
