import { Graph } from '../../Data-Structures/Graph/Graph'
import { dfsIterative, areConnectedUsingDFSIterative } from '../DepthFirstSearchIterative'

describe('Test DFSIterative connection function', () => {
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

  it('Should return the list of the visited nodes using DFS starting from node 1', () => {
    const dfsVisitedNodes = dfsIterative(graph, 1)
    expect(dfsVisitedNodes).toEqual([1, 2, 4, 3, 5, 6])
  })
})

describe('Test DFSIterative connection function', () => {
  const graph = new Graph()

  // adding vertices
  for (let i = 1; i < 6; i++) {
    graph.addVertex(i)
  }

  // adding edges
  graph.addEdge(1, 2)
  graph.addEdge(3, 4)
  graph.addEdge(3, 5)

  it('Should return true as the nodes 1 and 2 are connected', () => {
    const areConnected = areConnectedUsingDFSIterative(graph, 1, 2)
    expect(areConnected).toBe(true)
  })

  it('Should return false as the nodes 1 and 3 are not connected', () => {
    const areConnected = areConnectedUsingDFSIterative(graph, 1, 3)
    expect(areConnected).toBe(false)
  })
})
