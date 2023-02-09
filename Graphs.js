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
}

const rappers = new Graph()

rappers.addVertex('Jay-Z')
rappers.addVertex('Kanye West')
rappers.addVertex('Kid Cudi')
rappers.addVertex('Jaz-O')
rappers.addEdge('Jay-Z', 'Kanye West')
rappers.addEdge('Jay-Z', 'Jaz-O')
rappers.addEdge('Kanye West', 'Kid Cudi')
// rappers.removeEdge('Jay-Z', 'Kanye West')
rappers.removeVertex('Kanye West')
console.log(rappers.adjacencyList)
