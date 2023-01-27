/* 
This pattern involves creating a window which can either be an array or a number from one position to another.

Depending on a certain condition, the window either increases or closes ( and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

*/

/* 
EXAMPLE 1:
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

So basically it'll get an array and if n is 2 then it will traverse through the array and return the two consecutive numbers that returns the highest value. Or if n is 4 it'll return the four consecutive numbers that returns the highest value. But the sum !

*/

// function maxSubarraySum(arr, num) {
//   let maxSum = 0
//   let tempSum = 0
//   if (arr.length < num) return null
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i]
//   }
//   tempSum = maxSum
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i]
//     maxSum = Math.max(maxSum, tempSum)
//   }
//   return maxSum
// }

/* 


Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.


*/

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

/* 


Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.


*/

function minSubArrayLen(arr, num) {
  let minSum = 0
  let tempSum = 0
  if (arr.length < num) return 0
  for (let i = 0; i <= num; i++) {
    maxSum += arr[i]
  }
}
