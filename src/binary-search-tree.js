const { Node } = require("../extensions/list-tree.js");

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot
  }

  add(value) {
    // const _node = new Node(value);

    this.treeRoot = addToTree(this.treeRoot, value)
    function addToTree(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addToTree(node.left, value)
      }
      else {
        node.right = addToTree(node.right, value)
      }

      return node
    }
  }

  has(value) {
    return searchInTree(this.treeRoot, value);

    function searchInTree(node, value) {
      if (!node) {
        return null;
      }

      if (node.value === value) {
        return true;
      }

      if (value < node.value) {
        return searchInTree(node.left, value);
      }
      else {
        return searchInTree(node.right, value);
      }
    }
  }

  find(value) {
    return findInTree(this.treeRoot, value);

    function findInTree(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      if (value < node.value) {
        return findInTree(node.left, value);
      }
      else {
        return findInTree(node.right, value);
      }
    }
  }


  remove(value) {
    this.treeRoot = removeNode(this.treeRoot, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }
      else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
      }

      let rightMin = node.right;
      while (rightMin.left) {
        rightMin.left;
      }
      node.value =rightMin.value;
      node.right = removeNode(node.right, rightMin.value);
      return node;
    }

  }

  min() {
    if(!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    while(node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if(!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    while(node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};