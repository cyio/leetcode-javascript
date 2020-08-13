// 实现模板字符串功能

// 1. 正则匹配出 key，然后字符串替换
// 2. 字符串可用点号分割成数组
// 3. shift 出来依次供对象访问
function render(template, context) {
  // 如果无匹配，返回 template
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    key = key.split('.')
    let result = context
    while (key.length > 0) {
      result = result[key.shift()]
    }
    return result
  })
}
const template = '{{name}}很厉name害，才{{age}}岁，身高{{detail.height}}'
const context = { name: 'jawil', age: '15', detail: { height: '170' } }
console.log(render(template, context))

const template2 = 'plain text'
console.log(render(template2, context))
