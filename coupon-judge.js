// item.type === 1 ? '专属' : '通用'}}券]
let list = [
  {type: 1, id: 1, amount: 20},
  {type: 1, id: 2, amount: 10},
  {type: 2, id: 3, amount: 30},
]

// 自己写的三次 sort
// list length > 0
// return coupon id
// function couponJudge(list) {
  // // 1. 按金额从大到小排序
  // const sorted = list.sort((a, b) => b.amount - a.amount)
  // // 2. 过滤最大金额
  // const max = sorted.filter(i => i.amount === list[0].amount)
  // if (max.length === 1) return max[0].id
  // // 3. 存在多个相等值时，按类型排序，专属优先
  // return max.sort((a, b) => a.type - b.type)[0].id
// }

// 优化版，一次 sort，复合排序规则
function couponJudge(list) {
  return list.sort((a, b) =>
    b.amount - a.amount === 0
      ? a.type - b.type
      : b.amount - a.amount
  )[0]
}
let result = couponJudge(list)
console.log(result)
