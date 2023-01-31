function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

function mergeSort(arr) {
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  if (arr.length === 1) {
    return arr
  }
  return merge(mergeSort(left), mergeSort(right))
}
console.log(mergeSort([4, 3, 1, 8, 10, 20, 2, 5]))
