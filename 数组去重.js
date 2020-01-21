const data = [1, 1, 2, 3]

// S1: 使用 Set
// O1
function uniqueS1(arr) {
  return Array.from(new Set(arr))
}

// S2: 遍历
// O(n)
function uniqueS2(arr) {
  const tmp = []
  for (let i of arr) {
    if (!tmp.includes(i)) {
      tmp.push(i)
    }
  }
  return tmp
}
console.log(uniqueS2(data))

