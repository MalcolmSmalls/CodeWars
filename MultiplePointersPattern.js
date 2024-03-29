/* 
Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
*/

/* 
EXAMPLE 1:
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

// function sumZero(arr) {
//   let left = 0
//   let right = arr.length - 1
//   while (left < right) {
//     let sum = arr[left] + arr[right]
//     if (sum === 0) {
//       return [arr[left], arr[right]]
//     } else if (sum > 0) {
//       right--
//     } else {
//       left++
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 10]))

// console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]))

/* 
EXAMPLE 2:
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

// function countUniqueValues(arr) {
//   let left = 0
//   let right = 1

//   while (right < arr.length) {
//     if (arr[left] !== arr[right]) {
//       left++
//       arr[left] = arr[right]
//       right++
//     } else {
//       right++
//     }
//   }
//   if (left === 0) {
//     return 0
//   } else {
//     return left + 1
//   }
// }

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))

/* 
UDEMY answer:
function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  var i = 0
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== [j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
*/

/* 

Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

*/

// function averagePair(arr, num) {
//   if (arr.length === 0) return false
//   let left = 0
//   let right = arr.length - 1
//   while (left < right) {
//     let avg = arr[left] + arr[right] / 2
//     if (avg === num) {
//       return true
//     } else if (avg > num) {
//       right--
//     } else {
//       left++
//     }
//   }
//   return false
// }

// console.log(averagePair([1, 2, 3], 2.5))

/* 

UDEMY ANSWERS - 

averagePair Solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

*/

/* 

Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing

*/

// function isSubsequence(str1, str2) {
//   let left = 0
//   let right = 0
//   let newArr = []
//   while (right < str2.length) {
//     if (str1[left] !== str2[right]) {
//       right++
//     } else {
//       newArr.push(str2[right])
//       left++
//     }
//   }
//   if (newArr.join('') === str1) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isSubsequence('sing', 'sting'))

/* 




UDEMY ANSWERS -

isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}





*/
