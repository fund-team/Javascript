import { WeightedUndirectedGraph } from '../../Data-Structures/Graph/WeightedUndirectedGraph'
import { primMST } from '../PrimMST'

describe('Test primMST function', () => {
  const graph = new WeightedUndirectedGraph()

  // adding weighted edges
  graph.addEdge(1, 2, 1)
  graph.addEdge(1, 3, 2)
  graph.addEdge(2, 3, 2)
  graph.addEdge(3, 4, 1)
  graph.addEdge(3, 5, 100)
  graph.addEdge(4, 5, 5)

  it('Should delete the edge with weight 100 and the one between 2 and 3', () => {
    const mstGraph = primMST(graph, 1)
    expect(mstGraph.adjacencyMap).toEqual({
      1: { 2: 1, 3: 2 },
      2: { 1: 1 },
      3: { 4: 1, 1: 2 },
      4: { 3: 1, 5: 5 },
      5: { 4: 5 }
    })
  })

  it('Should delete the edge with weight 100 and the one between 1 and 3', () => {
    const mstGraph = primMST(graph, 2)
    expect(mstGraph.adjacencyMap).toEqual({
      1: { 2: 1 },
      2: { 1: 1, 3: 2 },
      3: { 4: 1, 2: 2 },
      4: { 3: 1, 5: 5 },
      5: { 4: 5 }
    })
  })
})
