// 对数组以指定长度分块
function chunkArray(arr, len) {
  const chunkedArray = []
  let i = 0
  while(i < arr.length) {
    chunkedArray.push(arr.slice(i, i += len))
  }
  return chunkedArray
}

console.log(chunkArray([1, 3, 9, 2, 3, 2, 8, 9], 2))
console.log(chunkArray([1, 3, 9, 2, 3, 2, 8, 9], 3))

// 1. 声明返回数组
// 2. 声明 i
// 3. 循环，终止条件，切片，改变 i，+= 含义
