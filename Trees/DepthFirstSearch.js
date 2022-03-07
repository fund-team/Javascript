/*
 * Author: Surendra Kumar
 * DFS Algorithm implementation using preorder (root, left, right) and a stack datastructure in JavaScript
 * DFS Algorithm for searching tree data structures.
 */

import { Stack } from '../Data-Structures/Stack/Stack'

function genericTreeDFS (tree, value) {
  const stack = new Stack()

  if (typeof tree !== 'undefined' && typeof tree.root !== 'undefined') {
    stack.push(tree.root)
  }

  while (stack.size()) {
    const node = stack.pop()

    if (node.value === value) {
      return node.value
    }

    if (node.children.length === 0) {
      continue
    }

    node.children
      .slice()
      .reverse()
      .forEach((element) => {
        stack.push(element)
      })
  }
  return null
}

function binaryTreeDFS (tree, value) {
  const stack = new Stack()
  if (typeof tree !== 'undefined' && typeof tree.root !== 'undefined') {
    stack.push(tree.root)
  }

  while (stack.size()) {
    const node = stack.pop()

    if (node.value === value) {
      return node.value
    }
    if (node.right !== null) {
      stack.push(node.right)
    }
    if (node.left !== null) {
      stack.push(node.left)
    }
  }
  return null
}

export { genericTreeDFS, binaryTreeDFS }
