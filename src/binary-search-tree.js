// const { Node } = require("../extensions/list-tree.js");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(value) {
    this.treeRoot = this.addToTree(this.treeRoot, value);
  }

  addToTree(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.data) {
      node.left = this.addToTree(node.left, value);
    } else if (value > node.data) {
      node.right = this.addToTree(node.right, value);
    }

    return node;
  }

  has(value) {
    return !!this.searchInTree(this.treeRoot, value);
  }

  searchInTree(node, value) {
    if (!node) {
      return false;
    }

    if (node.data === value) {
      return true;
    }

    return value < node.data 
      ? this.searchInTree(node.left, value)
      : this.searchInTree(node.right, value);
  }

  find(value) {
    return this.findInTree(this.treeRoot, value);
  }

  findInTree(node, value) {
    if (!node) {
      return null;
    }

    if (node.data === value) {
      return node;
    }

    return value < node.data 
      ? this.findInTree(node.left, value)
      : this.findInTree(node.right, value);
  }

  remove(value) {
    this.treeRoot = this.removeNode(this.treeRoot, value);
  }

  removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.data) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.data) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let rightMin = node.right;
      while (rightMin.left) {
        rightMin = rightMin.left;
      }

      node.data = rightMin.data;
      node.right = this.removeNode(node.right, rightMin.data);
    }

    return node;
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }

    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};