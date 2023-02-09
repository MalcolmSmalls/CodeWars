class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    )
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacencyVertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start) {
    let results = []
    let visited = {}
    let adjacencyList = this.adjacencyList
    ;(function dfs(vertex) {
      if (!vertex) return
      visited[vertex] = true
      results.push(vertex)
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start)
    return results
  }

  depthFirstIterative(start) {
    let results = []
    let stack = [start]
    let visited = {}
    let currentVertex

    visited[start] = true
    while (stack.length) {
      currentVertex = stack.pop()
      results.push(currentVertex)

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return results
  }
}

// const rappers = new Graph()

// rappers.addVertex('Jay-Z')
// rappers.addVertex('Kanye West')
// rappers.addVertex('Kid Cudi')
// rappers.addVertex('Jaz-O')
// rappers.addEdge('Jay-Z', 'Kanye West')
// rappers.addEdge('Jay-Z', 'Jaz-O')
// rappers.addEdge('Kanye West', 'Kid Cudi')
// rappers.removeVertex('Kanye West')
// console.log(rappers.adjacencyList)

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.depthFirstRecursive('A'))

console.log(g.depthFirstIterative('A'))
