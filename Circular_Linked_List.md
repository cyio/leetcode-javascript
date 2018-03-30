// 循环链表，便于反向遍历
// 最后一个节点的 next，总是指向 head

class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = new Node('head')
		// this.head.next = this.head
	}

	// 如何在链表上移动，定义一个变量，从头节点开始遍历，符合时返回节点，否则移动到下一个节点
	// 都不符合时返回尾节点的 next ，即 null
	find(item) {
		let currNode = this.head
		while (currNode.element !== item) {
			currNode = currNode.next
		}
		return currNode
	}

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
		newNode.next = current.next
		current.next = newNode
	}

	remove(item) {
		let prevNode = this.findPrevious(item)
		prevNode.next = prevNode.next.next
	}

	// 排除 head，避免死循环
	display() {
		let currNode = this.head
		while (currNode.next !== null && currNode.next.element !== 'head') {
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
