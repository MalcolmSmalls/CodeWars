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
}
