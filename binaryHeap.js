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
