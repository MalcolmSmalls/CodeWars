/* 
Compares current index with previous index resulting in the highest value "popping" to the top before it's iterated through again to compare values.
*/

function bubbleSortUnnecessary(arr) {
  //   const swap = (arr, idx1, idx2) =>
  //     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

/* 
This works but does a bunch of unneccessary comparisons once it reaches the end it will start comparing j with j+1 which would be undefined if j is already [arr.length-1]. To fix that, start at the end with i. 
*/

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function bubbleSortNewSwap(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

console.log(bubbleSortNewSwap([5, 4, 3, 2, 1]))
