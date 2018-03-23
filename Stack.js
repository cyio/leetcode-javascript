// ADT: 栈
// 后入先出，摞盘子
// 为什么没有直接使用数组的 push/pop/length 等方法
function Stack() {
  this.dataStore = []
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.length = length
  this.clear = clear
}
function push(element) {
  this.dataStore[this.top++] = element
}
function pop() {
  return this.dataStore[--this.top]
}
function peek() {
  return this.dataStore[this.top - 1]
}
function length() {
  return this.top
}
function clear() {
  this.top = 0
}

// 测试
var s = new Stack()
s.push('Apple')
s.push('Baidu')
s.push('Google')
// s.pop()
// s.clear()
console.log('length: ' + s.length())
console.log('peek: ' + s.peek())
