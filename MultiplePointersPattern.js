/* 
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
*/

/* 
EXAMPLE 1:
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 10]))

// console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]))

/* 
EXAMPLE 2:
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

// function countUniqueValues(arr) {
//   let left = 0
//   let right = 1
//   let total = 0

//   while (right < arr.length) {
//     if (arr[left] !== arr[right]) {
//       console.log(right)
//       total++
//     } else {
//       right++
//       left++
//     }
//   }
//   return total
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
