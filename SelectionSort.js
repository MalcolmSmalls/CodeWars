function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j
      }
    }
    if (i !== minimum) {
      let temp = arr[i]
      arr[i] = arr[minimum]
      arr[minimum] = temp
    }
  }
  return arr
}

function selectionSort2015(arr) {
  let swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = 0; i < arr.length; i++) {
    let minimum = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j
      }
    }
    if (i !== minimum) swap(arr, minimum, i)
  }
  return arr
}
console.log(selectionSort2015([5, 4, 3, 2, 1]))
