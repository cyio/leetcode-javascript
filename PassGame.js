// 击鼓传花

const Quene = require('./Quene.js')

const passGame = (names, outNum) => {
  const quene = new Quene()

  // 1. 全部加入队列
  for (let name of names) {
    quene.enquene(name)
  }

  // 2. 当队列人数大于 1 时
  while (quene.size() > 1) {
    // 2.1 模拟数数，数到不是 outNum 的移到队尾
    for (let i = 0; i < outNum; i++) {
      quene.enquene(quene.dequene())
    }

    // 2.2 数到 outNum 的出列，表示淘汰
    quene.dequene()
  }

  // 3. 队列只剩下一个元素，出列并查询在 names 中的位置
  return names.indexOf(quene.dequene())
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl', 'Mike']
var index = passGame(names, 7) // 数到8的人淘汰
console.log('最终位置:' + index) // 赢家
