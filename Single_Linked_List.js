class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    // 在类里使用 this
    // Node = element + next
    this.head = new Node('head')
  }

  // 如何在链表上移动，定义一个变量，从头节点开始遍历，符合时返回节点，否则移动到下一个节点
  // 都不符合时返回尾节点的 next ，即 null
  find(item) {
    let currNode = this.head
    while (currNode !== null && currNode.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  // 删除节点需要找到前节点
  // next 有数据才需要判断，尾节点不需要判断
  findPrevious(item) {
    let currNode = this.head
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  insert(newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    // 注意顺序，current.next 后变
    newNode.next = current.next
    current.next = newNode
  }

  remove(item) {
    let prevNode = this.findPrevious(item)
    prevNode.next = prevNode.next.next
  }

  // 只显示包含数据的节点（不显示头节点）
  display() {
    let currNode = this.head
    while (currNode.next !== null) {
      console.log(currNode.next.element)
      currNode = currNode.next
    }
  }
}

let cities = new LinkedList()
cities.insert('beijing', 'head')
cities.insert('shanghai', 'beijing')
cities.insert('shenzhen', 'shanghai')
cities.remove('shenzhen')
cities.display()
console.log(cities.find('haha'))
