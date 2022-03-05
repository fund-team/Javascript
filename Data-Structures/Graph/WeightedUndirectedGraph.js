class WeightedUndirectedGraph {
  constructor () {
    this.adjacencyMap = {}
  }

  addNode (node) {
    this.adjacencyMap[node] = {}
  }

  addEdge (node1, node2, weight) {
    if (!(node1 in this.adjacencyMap)) { this.addNode(node1) }
    if (!(node2 in this.adjacencyMap)) { this.addNode(node2) }
    this.adjacencyMap[node1][node2] = weight
    this.adjacencyMap[node2][node1] = weight
  }
}

export { WeightedUndirectedGraph }
