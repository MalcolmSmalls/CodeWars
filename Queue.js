class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    let node = new Node(val)
    if (!this.last) {
      this.last = node
      this.first = node
    } else {
      this.last.next = node
      this.last = node
    }
    this.size++
    return this.size
  }

  dequeue() {
    if (!this.first) return null
    let removedNode = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = removedNode.next
      removedNode.next = null
    }
    this.size--
    return removedNode
  }
}

const queueDawg = new Queue()

console.log(queueDawg.enqueue('first'))
console.log(queueDawg.enqueue('second'))
console.log(queueDawg.enqueue('third'))

console.log(queueDawg.dequeue('first'))
console.log(queueDawg.dequeue('second'))
console.log(queueDawg.dequeue('third'))
