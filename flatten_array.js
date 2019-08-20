// 拍平数组
function flattenArray(arr) {
  return arr.reduce((pre, acc) => [...pre, ...acc])
}

console.log(flattenArray([[1, 2], [5, 4], [8]]))

// ... 的替代是 concat
