// 废弃
import json from './tree-mock.json'

console.log(json)
// const data = 

// title key children
// let data = json.body

function transform(data) {
  data.forEach(item => {
    item.title = item.name
    item.key = item.id
    if (item.childs && item.childs.length) {
      item.children = item.childs
      transform(item.children)
      // delete item.childs
    } else if (item.knowledges && item.knowledges.length) {
      item.children = item.knowledges
      transform(item.children)
      // delete item.knowledges
    } else if (item.questionModelList && item.questionModelList.length){
      item.children = item.questionModelList
      transform(item.children)
    } else {
      item.isLeaf = true
    }
  })
  return data
}

export default transform(json.body)
