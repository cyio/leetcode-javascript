// 双指针，遇上不等立刻返回
function isP(str) {
  let n = str.length - 1
  let flag = true
  for (let i = 0, j = n; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      flag = false
      break
    }
  }
  console.log(flag)
  return flag
}

function isP(str) {
  let i = 0
  let j = str.length - 1
  let flag = true
  while(i <= j){
    if (str[i] === str[j]) {
      i++
      j--
    } else {
      flag = false
      break
    }
  }
  console.log(flag)
  return flag
}

let a = 'abc'
let aa = 'abba'
let aaa = 'aca'
let aaaa = ''
isP(a)
isP(aa)
isP(aaa)
isP(aaaa)
