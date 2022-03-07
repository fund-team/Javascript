import { WeightedUndirectedGraph } from '../../Data-Structures/Graph/WeightedUndirectedGraph'
import { kruskalMST } from '../KruskalMST'

describe('Test kruskalMST function', () => {
  const graph = new WeightedUndirectedGraph()

  // adding weighted edges
  graph.addEdge(1, 2, 1)
  graph.addEdge(1, 3, 1)
  graph.addEdge(2, 3, 2)
  graph.addEdge(3, 4, 1)
  graph.addEdge(3, 5, 100)
  graph.addEdge(4, 5, 5)

  it('Should delete the edge with weight 100 and the one between 2 and 3', () => {
    const mstGraph = kruskalMST(graph)
    expect(mstGraph.adjacencyMap).toEqual({
      1: { 2: 1, 3: 1 },
      2: { 1: 1 },
      3: { 4: 1, 1: 1 },
      4: { 3: 1, 5: 5 },
      5: { 4: 5 }
    })
  })
})
