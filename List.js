// ADT：列表
// 应用：影碟租赁

function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.length = length
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.length = length
  this.contains = contains
}

function append(element) {
  this.dataStore[this.listSize++] = element
}
function remove(element) {
  var foundAt = this.find(element)
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1)
    --this.listSize
    return true
  }
  return false
}
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i
    }
  }
  return -1
}
function length() {
  return this.dataStore.listSize
}
function toString() {
  return this.dataStore
}
// 假定向后插入
function insert(element, after) {
  var insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element)
    ++this.listSize
    return true
  }
  return false
}
function clear() {
  delete this.dataStore
  this.dataStore = []
  this.listSize = this.pos = 0
}
function contains(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return true
    }
  }
  return false
}
// 用户在列表上移动
function front() {
  this.pos = 0
}
function end() {
  this.pos = this.listSize - 1
}
function prev() {
  if (this.pos > 0) {
    --this.pos
  }
}
function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos
  }
}
function currPos() {
  return this.pos
}
function moveTo(pos) {
  this.pos = pos
}
// 获取当前位置元素
function getElement() {
  return this.dataStore[this.pos]
}

var names = new List()
names.append('apple')
names.append('baidu')
// console.log(names.remove('baidu'))
names.insert('google', 'baidu')
// names.clear()
// console.log(names.contains('google'))
names.front()
// console.log(names.getElement())
// console.log(names)

module.exports = List
