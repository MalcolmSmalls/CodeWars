class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  bubbleUp() {
    let index = this.values.length - 1
    let element = this.values[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (element <= parent) break
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }

  bubbleDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild > element) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex
        }
      }
      if (swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }

  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }

  extractMax() {
    let max = this.values[0]
    let end = this.values.pop()
    if (this.values.length > 1) {
      this.values[0] = end
      this.bubbleDown()
    }

    return max
  }
}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()

console.log(heap.values)

// Priority queue - The lower the number the higher priority. So use MinBinaryHeap where the parent/root is the lower values

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let node = new Node(val, priority)
    this.values.push(node)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.values.length - 1
    let element = this.values[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (element.priority >= parent.priority) break
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }

  dequeue() {
    let min = this.values[0]
    let end = this.values.pop()
    if (this.values.length > 1) {
      this.values[0] = end
      this.bubbleDown()
    }
    return min
  }

  bubbleDown() {
    let index = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex
        }
      }
      if (swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
}

const schedule = new PriorityQueue()
schedule.enqueue('Go to sleep', 5)
schedule.enqueue('Take shower', 4)
schedule.enqueue('Eat', 3)
schedule.enqueue('Brush Teeth', 2)
schedule.enqueue('Wake Up', 1)
schedule.enqueue('Dream', 6)

console.log(schedule.values)

schedule.dequeue()

console.log(schedule.values)
