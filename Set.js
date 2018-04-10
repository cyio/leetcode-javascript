// 集合

class Set {
  constructor() {
    this.items = []
  }

  add(element) {
    if (this.has(element)) return false
    this.items.push(element)
    return true
  }

  remove(element) {
    if (!this.has(element)) return false
    if (this.has(element)) {
      this.items.splice(this.items.indexOf(element), 1)
      return true
    }
  }

  has(element) {
    return this.items.includes(element)
  }

  values() {
    return this.items
  }

  size() {
    return this.items.length
  }
}

let set = new Set()
set.add(1)
console.log(set.values())
set.add(1)
console.log(set.values())
set.add(10)
console.log(set.has(10))
set.remove(10)
console.log(set.has(10))
console.log(set.size())
