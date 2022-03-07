class GenericTreeNode {
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChild(child) {
    this.children.push(child)
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(rootNode) {
    this.root = rootNode
  }
}

export { Tree, GenericTreeNode, BinaryTreeNode }
