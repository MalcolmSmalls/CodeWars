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
    let temp = new Node(val)
    if (this.length === 0) {
      this.tail = temp
      this.head = this.tail
      this.length++
    } else {
      this.tail.next = temp
      this.tail = temp
      this.length++
    }
  }
}

const firstLinkedList = new LinkedList()
firstLinkedList.push('Hi')
firstLinkedList.push('How')
firstLinkedList.push('are')
firstLinkedList.push('You')
console.log(firstLinkedList)
