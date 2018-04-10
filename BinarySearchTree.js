// 二叉搜索树
// 所有树可以用二叉树模拟出来
// 每个节点最多两个子节点，故名二叉

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    let newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历
  preOrderTranversal(handler) {
    this.preOrderTranversalNode(this.root, handler)
  }

  preOrderTranversalNode(node, handler) {
    if (node !== null) {
      handler(node.key)
      this.preOrderTranversalNode(node.left, handler)
      this.preOrderTranversalNode(node.right, handler)
    }
  }

  min() {
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }

  max() {
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }

  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node === null) return false
    if (node.key > key) {
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  remove(key) {
    let current = this.root
    let parent = this.root
    let isLeftChild = true

    while (current.key !== key) {
      parent = current
      if (key < current.key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }

      if (current === null) return false
    }

    // 三种情况： 没有子节点，有一个子节点，有两个子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    } else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }
  }
}

let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(1)
bst.insert(7)
// console.log(bst)
let resultString = ''
bst.preOrderTranversal(key => {
  resultString += key + ' '
})
console.log(resultString)
console.log(bst.min(), bst.max())
console.log(bst.search(2))
