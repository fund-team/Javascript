/*
 * Depth First Tree Traversal or level order traversal implementation using Stack data structure in javascript
 */

import { Stack } from '../Data-Structures/Stack/Stack'

function depthFirstGenericTreeTraversal (tree) {
  const stack = new Stack()
  const result = []

  if (typeof tree !== 'undefined' && typeof tree.root !== 'undefined') {
    stack.push(tree.root)
  }

  while (stack.size()) {
    const currentNode = stack.pop()
    result.push(currentNode.value)

    if (currentNode.children.length === 0) {
      continue
    }

    // Reverse the children to push them to the stack in the correct order
    // Slice to not mutate the original order
    currentNode.children
      .slice()
      .reverse()
      .forEach((element) => {
        stack.push(element)
      })
  }
  return result
}

function depthFirstBinaryTreeTraversal (tree) {
  const stack = new Stack()
  const result = []

  if (typeof tree !== 'undefined' && typeof tree.root !== 'undefined') {
    stack.push(tree.root)
  }

  while (stack.size()) {
    const currentNode = stack.pop()
    result.push(currentNode.value)

    if (currentNode.right) {
      stack.push(currentNode.right)
    }

    if (currentNode.left) {
      stack.push(currentNode.left)
    }
  }

  return result
}

export { depthFirstGenericTreeTraversal, depthFirstBinaryTreeTraversal }
