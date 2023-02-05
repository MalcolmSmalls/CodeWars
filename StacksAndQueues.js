class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let node = new Node(val)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      let current = this.first
      this.first = node
      node.next = current
    }
    return ++this.size
  }

  pop() {}
}

let fatStax = new Stack()
console.log(fatStax.push('blockin'))
console.log(fatStax.push('baller'))
