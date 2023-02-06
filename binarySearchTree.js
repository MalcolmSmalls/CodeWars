class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return undefined
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode
            return this
          }
          current = current.left
        } else {
          if (!current.right) {
            current.right = newNode
            return this
          }
          current = current.right
        }
      }
    }
  }
}

const bts = new BinarySearchTree()

console.log(bts.insert(12))
console.log(bts.insert(911))
console.log(bts.insert(90210))
