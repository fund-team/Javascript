/*
Two function are implemented:
1. A function that returns the list of the visited nodes using iterative DFS
2. A function that returns a boolean indicating whether two nodes are connected
*/

function dfsIterative (graph, startingNode) {
  // Iterative DFS algorithm that returns the list of visited nodes starting from the input node
  const stack = [startingNode]
  const visited = []
  while (stack.length > 0) {
    const currNode = stack.pop()
    // adding the current node to the visited set
    visited.push(currNode)
    // adding neighbours in the stack
    for (const neighbour of graph.adjacencyMap[currNode].reverse()) {
      if (!visited.includes(neighbour)) {
        stack.push(neighbour)
      }
    }
  }
  return visited
}

function areConnectedUsingDFSIterative (graph, startingNode, targetNode) {
  // Iterative DFS algorithm that returns whether the two nodes are connected in the graph
  const stack = [startingNode]
  const visited = new Set()
  while (stack.length > 0) {
    const currNode = stack.pop()
    // if the current node is the second given in input, true is returned
    if (currNode === targetNode) { return true }
    // adding the current node to the visited set
    visited.add(currNode)
    // adding neighbours in the stack
    for (const neighbour of graph.adjacencyMap[currNode]) {
      if (!visited.has(neighbour)) {
        stack.push(neighbour)
      }
    }
  }
  return false
}

export { dfsIterative, areConnectedUsingDFSIterative }
