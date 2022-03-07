/*
As in DepthFirstSearchIterative, two function are implemented:
1. A function that returns the list of the visited nodes
2. A function that returns a boolean indicating whether two nodes are connected
both using recursive DFS
*/

function dfsRecursive (graph, startingNode, visited = []) {
  // Recursive DFS algorithm that returns the list of visited nodes starting from the input node
  // adding the current node to the visited set
  visited.push(startingNode)
  // calling the helper function recursively for all unvisited nodes
  for (const neighbour of graph.adjacencyMap[startingNode]) {
    if (!visited.includes(neighbour)) {
      dfsRecursive(graph, neighbour, visited)
    }
  }
  return visited
}

function areConnectedUsingDFSRecursive (graph, startingNode, targetNode, visited = []) {
  // DFS Function to search if two nodes are connected in a graph
  // checking if the searching node has been found
  if (startingNode === targetNode) { return true }
  // adding the current node to the visited set
  visited.push(startingNode)
  // calling the helper function recursively for all unvisited nodes
  for (const neighbour of graph.adjacencyMap[startingNode]) {
    if (!visited.includes(neighbour)) {
      if (areConnectedUsingDFSRecursive(graph, neighbour, targetNode, visited)) { return true }
    }
  }
  return false
}

export { dfsRecursive, areConnectedUsingDFSRecursive }
