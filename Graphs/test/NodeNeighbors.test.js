import { Graph } from '../../Data-Structures/Graph/Graph'
import { nodeNeighbors } from '../NodeNeighbors'

describe('Test connectedComponents function', () => {
  const graph = new Graph()

  // adding vertices
  for (let i = 1; i < 7; i++) {
    graph.addVertex(i)
  }

  // adding edges
  graph.addEdge(1, 2)
  graph.addEdge(1, 3)
  graph.addEdge(2, 4)
  graph.addEdge(3, 5)
  graph.addEdge(3, 6)

  it('Should return the neighbors of node 3 that are nodes 1, 5, and 6', () => {
    const neighbors = nodeNeighbors(graph, 3)
    expect(neighbors).toEqual([1, 5, 6])
  })
})
