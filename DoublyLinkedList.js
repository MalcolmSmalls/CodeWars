class Node {
  constructor(val) {
    this.next = null
    this.prev = null
    this.val = val
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    let tail = this.tail
    tail.next = newNode
    newNode.prev = tail
    this.tail = newNode
    this.length++
    return this
  }

  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    return arr
  }
}

let newDub = new DoublyLinkedList()
newDub.push('woo-hah')
newDub.push('got')
newDub.push('you')
newDub.push('all')
newDub.push('in')
console.log(newDub.push('check'))
console.log(newDub.print())
