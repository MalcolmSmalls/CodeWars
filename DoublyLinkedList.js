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
    } else {
      let tail = this.tail
      tail.next = newNode
      this.tail = newNode
      newNode.prev = tail
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
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
console.log(newDub.pop())
console.log(newDub.print())
