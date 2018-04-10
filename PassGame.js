// 击鼓传花

const Quene = require('./Quene.js')

const passGame = (nameList, num) => {
  const quene = new Quene()

  for (let name of nameList) {
    quene.enquene(name)
  }

  while (quene.size() > 1) {
    // 模拟数数，数到不是 num 的移到队尾
    for (let i = 0; i < num; i++) {
      quene.enquene(quene.dequene())
    }

    // 数到 num 的出队
    quene.dequene()
  }

  // 拿到最后一个 name，并查询在 names 中的位置
  return nameList.indexOf(quene.dequene())
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
var index = passGame(names, 7) // 数到8的人淘汰
console.log('最终位置:' + index) // 赢家
