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
  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }

  unShift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(val) {
    if (val >= this.length || val < 0) return undefined
    let current = this.head
    for (let i = 0; i < val; i++) {
      current = current.next
    }
    return current
  }

  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
    }
    return false
  }

  insert(index, val) {
    let newNode = new Node(val)
    if (index < 0 || index > this.length) return false
    if (index === this.length) return this.push(val)
    if (index === 0) return this.unshift(val)
    let beforeNode = this.get(index - 1)
    let tempNode = beforeNode.next
    beforeNode.next = newNode
    newNode.next = tempNode
    this.length++
    return true
  }
}

const firstLinkedList = new LinkedList()
firstLinkedList.push('Hi')
firstLinkedList.push('You')
firstLinkedList.push('How')
// console.log(firstLinkedList)
console.log(firstLinkedList.unShift('bruh'))
// console.log(firstLinkedList)
console.log(firstLinkedList.insert(3, 'wander'))
console.log(firstLinkedList.get(2))
console.log(firstLinkedList.get(3))
console.log(firstLinkedList.get(4))
// console.log(firstLinkedList.pop())
// console.log(firstLinkedList.pop())
// console.log(firstLinkedList.pop())
// console.log(firstLinkedList.pop())
// console.log(firstLinkedList)
