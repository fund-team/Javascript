import { Graph } from '../../Data-Structures/Graph/Graph'
import { connectedComponents } from '../ConnectedComponents'

describe('Test connectedComponents function', () => {
  const graph = new Graph()

  // adding vertices
  for (let i = 1; i < 6; i++) {
    graph.addVertex(i)
  }

  // adding edges
  graph.addEdge(1, 2)
  graph.addEdge(3, 4)
  graph.addEdge(3, 5)

  it('Graph should be composed of 2 components identifed by nodes 1 and 3', () => {
    const componentsArray = connectedComponents(graph)
    expect(componentsArray).toEqual(['1', '3'])
  })
})
