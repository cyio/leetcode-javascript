// 应用如，函数调用栈

class Stack {
	constructor() {
		this.items = []
	}

	push(element) {
		this.items.push(element)
	}

	pop() {
		if (this.isEmpty()) {
			return undefined
		}
		return this.items.pop()
	}

	peek() {
		if (this.isEmpty()) {
			return undefined
		}
		return this.items[this.items.length - 1]
	}

	isEmpty() {
		return this.items.length === 0
	}

	size() {
		return this.items.length
	}
}

// export default Stack
let stack = new Stack()
stack.push(6)
stack.push(5)
stack.pop()
console.log(stack.peek())

// 十进制转二进制
const dec2bin = decNumber => {
	let stack = new Stack()
	let remainder

	while (decNumber > 0) {
		remainder = decNumber % 2
		decNumber = Math.floor(decNumber / 2)
		stack.push(remainder)
	}

	let binayriString = ''
	while (!stack.isEmpty()) {
		binayriString += stack.pop()
	}
	return binayriString
}

console.log(dec2bin(10))
