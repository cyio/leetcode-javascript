class Node {
	constructor(element) {
		this.element = element
		this.next = null
		this.previous = null
	}
}

class LinkedList {
	constructor() {
		this.head = new Node('head')
	}

	// 如何在链表上移动，定义一个变量，从头节点开始遍历，符合时返回节点，否则移动到下一个节点
	// 都不符合时返回尾节点的 next ，即 null
	find (item) {
		let currNode = this.head
		while(currNode.element !== item) {
			currNode = currNode.next
		}
		return currNode
	}

	// next 有数据才需要判断，尾节点不需要判断
	findPrevious (item) {
		let currNode = this.head
		while(currNode.next !== null && (currNode.next.element !== item)) {
			currNode = currNode.next
		}
		return currNode
	}

	findLast (item) {
		let currNode = this.head
		while(currNode.next !== null) {
			currNode = currNode.next
		}
		return currNode
	}

	insert (newElement, item) {
		let newNode = new Node(newElement)
		let current = this.find(item)
		newNode.next = current.next
		newNode.previous = current
		current.next = newNode
	}

	remove (item) {
		let current = this.find(item)
		current.previous.next = current.next
		if (current.next !== null) {
			current.next.previous = current.previous
		}
	}

	// 只显示包含数据的节点（不显示头节点）
	display () {
		let currNode = this.head
		while(currNode.next !== null) {
			console.log(currNode.next.element)
			currNode = currNode.next
		}
	}

	dispReverse () {
		let currNode = this.findLast()
		while(currNode.previous !== null) {
			console.log(currNode.element)
			currNode = currNode.previous
		}
	}

}

let cities = new LinkedList()
cities.insert('beijing', 'head')
cities.insert('shanghai', 'beijing')
cities.insert('shenzhen', 'shanghai')
// cities.remove('shenzhen')
// cities.display()
cities.dispReverse()
