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
    if (!this.head || !this.tail) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift(val) {
    let newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
}

const firstLinkedList = new LinkedList()
firstLinkedList.push('Hi')
firstLinkedList.push('You')
firstLinkedList.push('How')
console.log(firstLinkedList)
console.log(firstLinkedList.shift('22'))
// console.log(firstLinkedList.pop())
// console.log(firstLinkedList.pop())
// console.log(firstLinkedList.pop())
// console.log(firstLinkedList.pop())
// console.log(firstLinkedList)
