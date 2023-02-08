class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
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
    console.log(this.values)
  }

  insert(val) {
    this.values.push(val)
    this.bubbleUp()
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
