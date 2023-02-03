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

  shift() {
    if (!this.head) return undefined
    let poppedNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = poppedNode.next
      this.head.prev = null
      poppedNode.next = null
    }
    this.length--
    return poppedNode
  }

  unshift(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.length++
    return this
  }

  //   getFORLOOP(index) {
  //     if (index < 0 || index >= this.length) return undefined
  //     let middle = Math.floor(this.length / 2)
  //     if (index >= middle) {
  //       let current = this.tail
  //       for (let i = 0; i < this.length - 1 - index; i++) {
  //         current = current.prev
  //       }
  //       return current
  //     } else {
  //       let current = this.head
  //       for (let i = 0; i < index; i++) {
  //         current = current.next
  //       }
  //       return current
  //     }
  //   }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count, current
    if (index <= Math.floor(this.length / 2)) {
      current = this.head
      count = 0
      while (count != index) {
        current = current.next
        count++
      }
    } else {
      count = this.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
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
// console.log(newDub.push('check'))
// console.log(newDub.unshift('busta rhymes up in effect uh, true indeed uhhh'))
// console.log(newDub.set('me', 2))
console.log(newDub.print())
