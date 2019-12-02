class Node {
  constructor(element) {
    this.element = element
    this.pre = null
    this.next = null
  }
}

class LinkedList {
  constructor() {
    // 需要初始化 head 节点？没有 head，后续就没法操作
    this.head = new Node('head')
  }
  insert(newElement, item) {
    const newNode = new Node(newElement)
    const currentNode = this.find(item)
    newNode.pre = currentNode
    if (currentNode.next) {
      newNode.next = currentNode.next
      newNode.next.pre = currentNode
    }
    currentNode.next = newNode
  }
  // 不是传统意思的 delete
  remove(item) {
    const currentNode = this.find(item)
    currentNode.pre.next = currentNode.next
    // 操作 next 总是要检查是否存在
    if (currentNode.next !== null) {
      currentNode.next.pre = currentNode.pre
    }
  }
  find(item) {
    // 起点应该是什么，head？
    let currentNode = this.head
    while(currentNode.next !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  // 只能从前往后？
  findLast(item) {
    let currentNode = this.head
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  display() {
    let currentNode = this.head
    while(currentNode.next !== null) {
      // 这里容易写错，head 无意思
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }
  // 可以反向遍历
  dispReverse() {
    let currentNode = this.findLast()
    while(currentNode.pre !== null) {
      // 这里容易写错，跟 display 有区别
      console.log(currentNode.element)
      currentNode = currentNode.pre
    }
  }
}

const ll = new LinkedList()
ll.insert('mike')
ll.insert('jordan')
// ll.display()
// ll.remove('mike')
// console.log(ll.find('jordan'))
ll.dispReverse()
