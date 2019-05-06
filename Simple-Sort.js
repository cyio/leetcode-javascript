// 简单排序

class ArrayList {
  // 1. 定义数组，一些基础方法
  constructor() {
    this.array = []
  }
  // 1.1 数组插入
  insert(item) {
    this.array.push(item)
  }
  // 1.2 转换为字符串，输入查看使用
  toString() {
    return this.array.join()
  }
  // 1.3 置换
  swap(m, n) {
    let temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  // 2. 冒泡排序
  bubbleSort() {
    let length = this.array.length
    // 需要参与排序的项，每次递减一个
    for (let i = length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1)
        }
      }
    }
  }

  // 3. 选择排序
  selectionSort() {
    let length = this.array.length

    for (let i = 0; i < length - 1; i++) {
      let min = i
      for (let j = min + 1; j < length; j++) {
        if (this.array[min] > this.array[j]) {
          min = j
        }
      }
      this.swap(min, i)
    }
  }

  // 4. 插入排序
  insertionSort() {
    let length = this.array.length

    for (let i = 1; i < length; i++) {
      let j = i
      let temp = this.array[i]
      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
  }
}

let list = new ArrayList()
list.insert(3)
list.insert(6)
list.insert(4)
list.insert(2)
list.insert(11)
list.insert(10)
list.insert(5)
// list.bubbleSort()
// list.selectionSort()
list.insertionSort()
console.log(list)
