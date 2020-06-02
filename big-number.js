/*
 * a string
 * b string
 */
function bigNumberSum(a, b) {
  // 123456789
  // 000009876
  //
  // let cur = 0
  // while(cur < a.length || cur < b.length) {
    // // console.log(cur)
    // if (!a[cur]) {
      // a = '0' + a
    // } else if (!b[cur]) {
      // b = '0' + b
      // // console.log(b)
    // }
    // cur++;
  // }
  // 较小需要 pad，目标长度是较大值长度
  if (a.length > b.length) {
    b = b.padStart(a.length, '0')
  } else {
    a = a.padStart(b.length, '0')
  }
  // return [a, b]

  let carried = 0
  const res = []

  // 从后往前遍历，length 从大到小 减
  for (let i = a.length - 1; i > -1; i--) {
    const sum = carried + +a[i] + +b[i]
    res[i] = sum % 10
    carried = sum > 9 ? 1 : 0
  }
  // 超出的位数处理
  if (carried === 1) {
    res.unshift(1)
  }
  return res.join('')
}

let r = bigNumberSum('123456789', '9876') // expect '123466665'
console.log(r)
