/*
Function that returns the neighbors of a node in a graph
Source: https://en.wikipedia.org/wiki/Neighbourhood_(graph_theory)
*/

function nodeNeighbors (graph, node) {
  // Returns an array with all of the node neighbors
  return graph.adjacencyMap[node]
}

export { nodeNeighbors }
