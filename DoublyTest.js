class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = val
    this.next = null
  }
  push(val) {
    var node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined
    let count, current
    if (index >= Math.floor(this.length / 2)) {
      count = arr.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    } else {
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
    }
    return current
  }
}
