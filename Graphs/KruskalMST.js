import { WeightedUndirectedGraph } from "../Data-Structures/Graph/WeightedUndirectedGraph"
import { UnionFind } from "../Search/UnionFind"

function kruskalMST (inputGraph) {
  // Kruskal's Algorithm to generate a Minimum Spanning Tree (MST) of a graph
  // Details: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
  // getting the edges in ascending order of weights
  const edges = []
  const seen = new Set()
  for (const start of Object.keys(inputGraph.adjacencyMap)) {
    for (const end of Object.keys(inputGraph.adjacencyMap[start])) {
      if (!seen.has(`${start} ${end}`)) {
        seen.add(`${end} ${start}`)
        edges.push([start, end, inputGraph.adjacencyMap[start][end]])
      }
    }
  }
  edges.sort((a, b) => a[2] - b[2])
  // creating the disjoint set
  const nbNodes = Object.keys(inputGraph.adjacencyMap).length
  const disjointSet = new UnionFind(nbNodes, function(a) {return a-1})
  // MST generation
  const graph = new WeightedUndirectedGraph()
  let numEdges = 0
  let index = 0
  while (numEdges < nbNodes - 1) {
    const [u, v, w] = edges[index]
    index += 1
    if (!disjointSet.connected(u, v)) {
      numEdges += 1
      graph.addEdge(u, v, w)
      disjointSet.union(u, v)
    }
  }
  return graph
}

export { kruskalMST }
