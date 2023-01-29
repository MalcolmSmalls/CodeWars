/* 
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity.
*/

function binarySearch(arr, value) {
  let mid = Math.round((arr.length - 1) / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  if (arr.length < 2) {
    if (arr[0] === value) {
      return true
    } else {
      return false
    }
  }
  if (value >= arr[mid]) {
    return binarySearch(right, value)
  } else {
    return binarySearch(left, value)
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

console.log(binarySearch(numbers, 10))
