/*

Simple Countdown Recursive Function

*/

// function countDown(num) {
//   if (num <= 0) {
//     console.log('Blast Off!')
//     return
//   }
//   console.log(num)
//   num--
//   countDown(num)
// }

// countDown(5)

/*

Add up to a number recursively

*/

// function sumRange(num) {
//   if (num === 0) {
//     return num
//   }
//   return num + sumRange(num - 1)
// }

// console.log(sumRange(5))

/* 

PURE RECURSION:
Use methods like slice, ...spread operator and concat to make copies of array rather than mutating them.
To make copies of string use slice and substring
To make copies of object use Object.assign or spread operator.

*/
function collectOddValues(arr) {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}

// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1
//   }
//   return base * power(base, exponent - 1)
// }

// console.log(power(2, 4))

// function factorial(num) {
//   if (num === 0) {
//     return 1
//   }
//   return num * factorial(num - 1)
// }

// console.log(factorial(4))

// function productOfArray(arr) {
//   if (arr.length === 0) {
//     return 1
//   }
//   return arr[0] * productOfArray(arr.slice(1))
// }

// console.log(productOfArray([1, 2, 3, 10]))

// function recursiveRange(num) {
//   if (num === 0) {
//     return num
//   }
//   return num + recursiveRange(num - 1)
// }

// console.log(recursiveRange(10))

// function fib(num) {
//   if (num <= 1) {
//     return num
//   } else {
//     return fib(num - 1) + fib(num - 2)
//   }
// }

// console.log(fib(10))

/*

reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

*/

// function reverse(string) {
//   let result = []

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return
//     }
//     result.unshift(helperInput[0])
//     helper(helperInput.slice(1))
//   }
//   helper(string)
//   return result.join('')
// }

// console.log(reverse('awesome'))
/*

UDEMY SOLUTION: 

function reverse(string) {
  if (string.length <= 1) {
    return string
  }
  return reverse(string.slice(1)) + string[0]
}


*/

/* 

isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

*/

// function isPalindrome(str) {
//   let newStr = []
//   function helper(input) {
//     if (input.length <= 0) {
//       return
//     }
//     newStr.unshift(input[0])
//     return helper(input.slice(1))
//   }

//   helper(str)
//   if (str === newStr.join('')) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isPalindrome('tacocat'))

/* 

Udemy Solution: 

isPalindrome Solution

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

*/

/* 

someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.


*/

const isOdd = (val) => val % 2 !== 0

function someRecursive(arr, callback) {
  if (arr.length === 0) {
    return false
  }
  if (callback(arr[0])) {
    return true
  }
  return someRecursive(arr.slice(1), callback)
}

console.log(someRecursive([4, 6, 8], isOdd))
