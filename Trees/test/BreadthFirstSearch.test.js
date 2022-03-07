import { genericTreeBFS, binaryTreeBFS } from '../BreadthFirstSearch'
import {
  Tree,
  GenericTreeNode,
  BinaryTreeNode
} from '../../Data-Structures/Tree/Tree'

describe('Generic Tree BFS', () => {
  const rootNode = new GenericTreeNode(7)
  const n1 = new GenericTreeNode(5)
  const n2 = new GenericTreeNode(8)
  const n3 = new GenericTreeNode(3)
  const n4 = new GenericTreeNode(4)
  const n5 = new GenericTreeNode(6)
  const n6 = new GenericTreeNode(9)

  rootNode.addChild(n1)
  rootNode.addChild(n2)
  n1.addChild(n3)
  n1.addChild(n4)
  n1.addChild(n5)
  n2.addChild(n6)
  const tree = new Tree(rootNode)

  // Visualization :
  //
  //            7
  //           / \
  //          5   8
  //         /|\   \
  //        3 4 6   9

  it('Generic tree - BFS', () => {
    expect(genericTreeBFS(tree, 6)).toStrictEqual(6)
    expect(genericTreeBFS(tree, 11)).toBeNull()
    expect(genericTreeBFS(new Tree(), 11)).toBeNull()
  })
})

describe('Binary Tree BFS', () => {
  const rootNode = new BinaryTreeNode(7)
  const n1 = new BinaryTreeNode(5)
  const n2 = new BinaryTreeNode(8)
  const n3 = new BinaryTreeNode(3)
  const n4 = new BinaryTreeNode(6)
  const n5 = new BinaryTreeNode(9)

  rootNode.left = n1
  rootNode.right = n2
  n1.left = n3
  n1.right = n4
  n2.right = n5
  const tree = new Tree(rootNode)

  // Visualization :
  //
  //            7
  //           / \
  //          5   8
  //         / \   \
  //        3   6   9

  it('Binary tree - BFS', () => {
    expect(binaryTreeBFS(tree, 9)).toStrictEqual(9)
    expect(binaryTreeBFS(tree, 11)).toBeNull()
    expect(binaryTreeBFS(new Tree(), 11)).toBeNull()
  })
})
