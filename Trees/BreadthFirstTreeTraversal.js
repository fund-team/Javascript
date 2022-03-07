/*
  Breadth First Tree Traversal or level order traversal implementation using Queue datastructure in javascript
  Author: @GerardUbuntu
*/

import { Queue } from '../Data-Structures/Queue/Queue'

function breadthFirstTreeTraversal(tree) {
  const queue = new Queue()
  const result = []

  if (typeof tree !== 'undefined' && typeof tree.root !== 'undefined') {
    queue.enqueue(tree.root)
  }

  while (!queue.empty()) {
    const node = queue.dequeue()
    result.push(node.value)

    if (node.children.length !== 0) {
      node.children.forEach((element) => {
        queue.enqueue(element)
      })
    }
  }

  return result
}

function breadthFirstBinaryTreeTraversal(tree) {
  const queue = new Queue()
  const result = []

  if (typeof tree !== 'undefined' && typeof tree.root !== 'undefined') {
    queue.enqueue(tree.root)
  }

  while (!queue.empty()) {
    const node = queue.dequeue()
    result.push(node.value)

    if (node.left !== null) {
      queue.enqueue(node.left)
    }
    if (node.right !== null) {
      queue.enqueue(node.right)
    }
  }

  return result
}

export { breadthFirstTreeTraversal, breadthFirstBinaryTreeTraversal }
