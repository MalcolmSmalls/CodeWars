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
    this.size++
    return this.size
  }

  pop() {
    if (!this.first) return null
    let current = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = current.next
      current.next = null
    }
    this.size--
    return current
  }
}

let fatStax = new Stack()
console.log(fatStax.push('first'))
console.log(fatStax.push('second'))
console.log(fatStax.push('third'))
console.log(fatStax.pop())
console.log(fatStax.pop())
console.log(fatStax.pop())
