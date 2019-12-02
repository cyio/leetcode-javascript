// 计算房间灯的开关状态

// 每层 10 个，门牌号从 0 - 99，共 10 层，100 个房间，默认灯都是关的
// 第 n 轮隔 n 个 toggle 开关
// 问第 n 轮后，100 个房间灯的状态
// n = 1, 0 2 4 6
// n = 2, 0 3 6 9
// n = 3, 0 4 8 12
// 特殊点在递加是 i + 1
let status = []
for (let i = 0; i < 100; i++) {
  status[i] = false
}
function checkStatus(n) {
  for (let y = 1; y < n + 1; y++) {
    for (let x = 0; x < 100; x = x + y + 1) {
      status[x] = !status[x]
    }
  }
  return status
}

console.log(checkStatus(3))
