// Input: name = "saeed", typed = "ssaaedd"
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  // 1.1
  const nameSplit = name.match(/(.)\1*/g)
  const typedSplit = typed.match(/(.)\1*/g)

  // 1.2 长度不同，肯定不符合
  if (nameSplit.length !== typedSplit.length) return false
  // 1.3 循环比较字母和长度
  for (let i = 0; i < nameSplit.length; i++) {
    let x = nameSplit[i]
    let y = typedSplit[i]
    // console.log(x, y)
    // 1.4 有一个条件不符合，结束比较
    if (x[0] !== y[0] || x.length > y.length) {
      return false
    }
  }
  return true
};

console.log(isLongPressedName('saeed', 'ssaaedd'))
console.log(isLongPressedName('alex', 'aaleex'))
console.log(isLongPressedName('laiden', 'laiden'))

