// 优先队列

class QueneElement {
	constructor(element, priority) {
		this.element = element
		this.priority = priority
	}
}

class PriorityQuene {
	constructor() {
		this.items = []
	}

	enquene(element, priority) {
		const queneElement = new QueneElement(element, priority)
		if (this.isEmpty()) {
			this.items.push(queneElement)
		} else {
			let added = false
			for (let i = 0; i < this.items.length; i++) {
				// 需求是将元素排到同优先级最后，也就是下一个优先级前面
				// 数字越小，表示优先级越高
				if (queneElement.priority < this.items[i].priority) {
					this.items.splice(i, 0, queneElement)
					added = true
					break
				}
			}

			if (!added) {
				this.items.push(queneElement)
			}
		}
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

let quene = new PriorityQuene()
quene.enquene('mike', 0)
quene.enquene('jim', 1)
quene.enquene('tom', 2)
quene.enquene('lee', 1)
console.log(quene.items)
