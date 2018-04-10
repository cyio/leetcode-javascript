// 队列，只能在队头出列，队尾入列

class Quene {
  constructor() {
    this.items = []
  }

  enquene(element) {
    this.items.push(element)
  }

  dequene() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items.shift()
  }

  front() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}

let quene = new Quene()
quene.enquene('mike')
quene.enquene('jim')
// console.log(quene.front())

module.exports = Quene
