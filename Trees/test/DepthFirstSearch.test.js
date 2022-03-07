import {
  Tree,
  GenericTreeNode,
  BinaryTreeNode
} from '../../Data-Structures/Tree/Tree'
import { genericTreeDFS, binaryTreeDFS } from '../DepthFirstSearch'

describe('Generic tree - Depth First Search', () => {
  //            6
  //           / \
  //          5   7
  //         / \   \
  //        3   4   9
  //       /       /| \
  //      2       8 10 11
  //     /
  //    1

  const root = new GenericTreeNode(6)
  const n1 = new GenericTreeNode(5)
  const n2 = new GenericTreeNode(7)
  const n3 = new GenericTreeNode(3)
  const n4 = new GenericTreeNode(4)
  const n5 = new GenericTreeNode(9)
  const n6 = new GenericTreeNode(2)
  const n7 = new GenericTreeNode(8)
  const n8 = new GenericTreeNode(10)
  const n9 = new GenericTreeNode(11)
  const n10 = new GenericTreeNode(1)

  const tree = new Tree(root)
  root.addChild(n1)
  root.addChild(n2)
  n1.addChild(n3)
  n1.addChild(n4)
  n2.addChild(n5)
  n3.addChild(n6)
  n5.addChild(n7)
  n5.addChild(n8)
  n5.addChild(n9)
  n6.addChild(n10)

  it('Generic tree - Depth First Search', () => {
    expect(genericTreeDFS(tree, 11)).toStrictEqual(11)
    expect(genericTreeDFS(tree, 12)).toBeNull()
  })
})

describe('Binary tree - Depth First Search', () => {
  //            6
  //           / \
  //          5   7
  //         / \   \
  //        3   4   9
  //       /       / \
  //      2       8   10
  //     /
  //    1

  const root = new BinaryTreeNode(6)
  const n1 = new BinaryTreeNode(5)
  const n2 = new BinaryTreeNode(7)
  const n3 = new BinaryTreeNode(3)
  const n4 = new BinaryTreeNode(4)
  const n5 = new BinaryTreeNode(9)
  const n6 = new BinaryTreeNode(2)
  const n7 = new BinaryTreeNode(8)
  const n8 = new BinaryTreeNode(10)
  const n9 = new BinaryTreeNode(1)

  const tree = new Tree(root)
  root.left = n1
  root.right = n2
  n1.left = n3
  n1.right = n4
  n2.left = n5
  n3.left = n6
  n5.left = n7
  n5.right = n8
  n6.left = n9

  it('Binary tree - Depth First Search', () => {
    expect(binaryTreeDFS(tree, 9)).toStrictEqual(9)
    expect(binaryTreeDFS(tree, 11)).toBeNull()
  })
})
