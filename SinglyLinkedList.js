class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    let current = this.head
    for (let i = 1; i < this.length; i++) {
      if (!this.head && !this.tail) return undefined
      if (i === this.length - 1) {
        current.next = null
        this.tail = current
        this.length--
      } else {
        current = current.next
      }
    }
    return this
  }
}

const firstLinkedList = new LinkedList()
firstLinkedList.push('Hi')
firstLinkedList.push('You')
firstLinkedList.push('How')
console.log(firstLinkedList)
console.log(firstLinkedList.pop())
