/*
Function that returns the connected components of a graph in the form
of an array containing 1 node for each component. The size of the output
array then represents the number of independent (i.e. not connected)
components in the graph.
*/

import { dfsIterative } from './DepthFirstSearchIterative'

function connectedComponents (graph) {
  // Function to generate the Connected Components
  // Result is an array containing 1 node from each component
  const visited = []
  const components = []
  for (const node of Object.keys(graph.adjacencyMap)) {
    if (!visited.includes(node)) {
      components.push(node)
      // Get the nodes connected to the node and add them to the visited set
      for (const connectedNode of dfsIterative(graph, node)) {
        if (!visited.includes(connectedNode)) { visited.push(connectedNode.toString()) }
      }
    }
  }
  return components
}

export { connectedComponents }
