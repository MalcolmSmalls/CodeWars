class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
}

const rappers = new Graph()

rappers.addVertex('Jay-Z')
rappers.addVertex('Kanye West')
console.log(rappers.adjacencyList)
