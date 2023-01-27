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

function reverse(string) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return
    }
    result.unshift(helperInput[0])
    helper(helperInput.slice(1))
  }
  helper(string)
  return result.join('')
}

console.log(reverse('awesome'))

// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }
