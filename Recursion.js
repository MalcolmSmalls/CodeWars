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

function collectOddValues(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
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

// const isOdd = (val) => val % 2 !== 0

// function someRecursive(arr, callback) {
//   if (arr.length === 0) {
//     return false
//   }
//   if (callback(arr[0])) {
//     return true
//   }
//   return someRecursive(arr.slice(1), callback)
// }

// console.log(someRecursive([4, 6, 8], isOdd))

/* 

flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.


*/

function flatten(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i])
    } else {
      newArr = newArr.concat(flatten(arr[i]))
    }
  }
  return newArr
}

console.log(flatten([1, [2, [3, 4], [[5]]]]))

/* 

capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.


*/

// function capitalizeFirst(arr) {
//   let newArr = []
//   if (arr.length === 0) {
//     return newArr
//   }
//   newArr.push(arr[0][0].toUpperCase() + arr[0].substring(1))
//   newArr = newArr.concat(capitalizeFirst(arr.slice(1)))
//   return newArr
// }

// console.log(capitalizeFirst(['car', 'taco', 'banana']))

/* 

nestedEvenSum
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

*/

// function nestedEvenSum(obj) {
//   let total = 0

//   function traverse(travObj) {
//     for (let key in travObj) {
//       if (travObj[key] % 2 === 0) {
//         total += travObj[key]
//       } else if (typeof travObj[key] === 'object') {
//         total += nestedEvenSum(travObj[key])
//       }
//     }
//   }
//   traverse(obj)
//   return total
// }

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: 'yup',
//     },
//   },
// }

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: 'car' },
// }

// console.log(nestedEvenSum(obj1))
// console.log(nestedEvenSum(obj2))

/* 

capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

*/

// function capitalizeWords(arr) {
//   let newArr = []
//   if (arr.length === 0) {
//     return newArr
//   }
//   newArr.push(arr[0].toUpperCase())
//   newArr = newArr.concat(capitalizeWords(arr.splice(1)))
//   return newArr
// }

// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))

/* 

stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

*/

// function stringifyNumbers(obj) {
//   let newObj = {}
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = `${obj[key]}`
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key])
//     } else {
//       newObj[key] = obj[key]
//     }
//   }
//   return newObj
// }

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// }

// console.log(stringifyNumbers(obj))

/* 

collectStrings
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

*/

function collectStrings(arr) {
  let newArr = []
  function traverseObj(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        newArr.push(obj[key])
      } else {
        return traverseObj(obj[key])
      }
    }
  }
  traverseObj(arr)
  return newArr
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
}

console.log(collectStrings(obj))
