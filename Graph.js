const Quene = require('./Quene.js')

class Graph {
  constructor() {
    this.vertexes = []
    this.adjList = new Map()
  }

  addVertex(v) {
    this.vertexes.push(v)
    this.adjList.set(v, [])
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  toString() {
    let resultStr = ''
    for (let i = 0; i < this.vertexes.length; i++) {
      resultStr += this.vertexes[i] + '->'
      let adj = this.adjList.get(this.vertexes[i])
      for (let j = 0; j < adj.length; j++) {
        resultStr += adj[j] + ' '
      }
      resultStr += '\n'
    }
    return resultStr
  }

  initializeColor() {
    let colors = []
    for (let v of this.vertexes) {
      colors[v] = 'white'
    }
    return colors
  }

  bfs(v, handler) {
    let color = this.initializeColor()
    let quene = new Quene()
    quene.enquene(v)
    while (!quene.isEmpty()) {
      let qv = quene.dequene()
      let qAdj = this.adjList.get(qv)
      color[qv] = 'gray'
      for (let i = 0; i < qAdj.length; i++) {
        let a = qAdj[i]
        if (color[a] === 'white') {
          color[a] = 'gray'
          quene.enquene(a)
        }
      }

      color[qv] = 'black'

      if (handler) {
        handler(qv)
      }
    }
  }

  dfs(handler) {
    let color = this.initializeColor()
    for (let v of this.vertexes) {
      if (color[v] === 'white') {
        this.dfsVisit(this.vertexes[i], color, handler)
      }
    }
  }
  dfsVisit(u, color, handler) {
    color[u] = 'gray'
    if (handler) {
      handler(u)
    }
    let uAdj = this.adjList.get(u)
    for (let i = 0; i < uAdj.length; i++) {
      let w = uAdj[i]
      if (color[w] === 'white') {
        this.dfsVisit(w, color, handler)
      }
    }
    color[u] = 'black'
  }
}

let graph = new Graph()

let myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let v of myVertexes) {
  graph.addVertex(v)
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
// console.log(graph.toString())

let result = ''
graph.bfs(graph.vertexes[0], v => {
  result += v + ' '
})
console.log(result)
