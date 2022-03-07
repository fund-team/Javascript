/*
 * BFS Algorithm implementation using a Queue data structure in JavaScript
 * BFS Algorithm for searching tree data structures.
 */

import { Queue } from '../Data-Structures/Queue/Queue'

function genericTreeBFS (tree, value) {
  const queue = new Queue()

  if (typeof tree !== 'undefined' && typeof tree.root !== 'undefined') {
    queue.enqueue(tree.root)
  }

  while (!queue.empty()) {
    const node = queue.dequeue()

    if (node.value === value) {
      return node.value
    }

    if (node.children.length === 0) {
      continue
    }

    node.children.forEach((element) => {
      queue.enqueue(element)
    })
  }
  return null
}

function binaryTreeBFS (tree, value) {
  const queue = new Queue()

  if (typeof tree !== 'undefined' && typeof tree.root !== 'undefined') {
    queue.enqueue(tree.root)
  }

  while (!queue.empty()) {
    const node = queue.dequeue()

    if (node.value === value) {
      return node.value
    }
    if (node.left !== null) {
      queue.enqueue(node.left)
    }
    if (node.right !== null) {
      queue.enqueue(node.right)
    }
  }
  return null
}

export { genericTreeBFS, binaryTreeBFS }
