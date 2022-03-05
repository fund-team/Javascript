import { WeightedUndirectedGraph } from '../WeightedUndirectedGraph'

describe('Test WeightedUndirectedGraph class', () => {
  const graph = new WeightedUndirectedGraph()

  // adding weighted edges
  graph.addEdge(1, 2, 1)
  graph.addEdge(2, 3, 2)
  graph.addEdge(3, 4, 1)
  graph.addEdge(3, 5, 100)
  graph.addEdge(4, 5, 5)

  it('Check adjacency map', () => {
    expect(graph.adjacencyMap).toEqual({
      1: { 2: 1 },
      2: { 1: 1, 3: 2 },
      3: { 2: 2, 4: 1, 5: 100 },
      4: { 3: 1, 5: 5 },
      5: { 3: 100, 4: 5 }
    })
  })
})
