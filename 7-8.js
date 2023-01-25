// Trimming a string

/* 



*/

// function trim(str, size){
//     const arr = str.split('')
//     return arr.length <= size ? str : arr.length <= 3 ? arr.slice(0, size).join('') + '...' : arr.slice(0, size-3).join('') + '...'
// }

// console.log(trim("Creating kata is fun", 14))

// Price of Mangoes

/* 

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free


*/

// function mango(quantity, price) {
//     return price * (quantity - Math.floor(quantity / 3))
// }

// console.log(mango(2, 3))
// console.log(mango(3, 3))
// console.log(mango(5, 3))
// console.log(mango(9, 5))

// Sum of odd numbers

// function rowSumOddNumbers(n) {
//     let total = 0
// 	for(let i = n * 2 + 1; i < n; i = i + 2){
//         if(i === 1){
//             total = n * 2 + 1

//         }
//         total = total + 2
//     }
//     return total
// }

// console.log(rowSumOddNumbers(3))

// Vowel remover

// function shortcut (string) {
//     const vowels = ['a','e','i','o','u']
//     let newArr = string.split('').map(item => {
//         if(vowels.includes(item) === false){
//             return item
//         }
//     })
//     return newArr.join("")
// }

//   console.log(shortcut('HELLO'))

//   function shortcut(string){
//     return string.replace(/[aeiou]/g,'')
//   }

// Removing Elements

// function removeEveryOther(arr){
//     return arr.filter((item, index) => index % 2 === 0)
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))

// All Star Code Challenge #18

// function strCount(str, letter){
//     let count = 0
//     str.split('').forEach(item => item === letter ? count++ : null)
//     return count
// }

// console.log(strCount("Hello", "l"))

// function strCount(str, letter){
//     return str.split(letter).length-1
//   }

// Cat years, Dog years

// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0
//     let dogYears = 0
//     for(let i = 1; i <= humanYears; i++){
//         if(i === 1){
//             dogYears += 15, catYears += 15
//         }else if(i === 2){
//             dogYears += 9, catYears += 9
//         }else{
//             catYears += 4, dogYears += 5
//         }
//     }
//     return [humanYears, catYears, dogYears];
//   }

//   console.log(humanYearsCatYearsDogYears(10))

// To square(root) or not to square(root)

// function squareOrSquareRoot(array) {
//     const newArr = array.map(item => {
//         if(Number.isInteger(Math.sqrt(item))){
//             return Math.sqrt(item)
//         }else{
//             return item**2
//         }
//     })
//     return newArr;
//   }

// console.log(squareOrSquareRoot([4,3,9,7,2,1]))

//Student's Final Grade

// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10){
//       return 100
//     }else if(exam > 75 && projects >= 5){
//       return 90
//     }else if(exam > 50 && projects >= 2){
//       return 75
//     }else{
//       return 0
//     }
//   }

// Is it even?

// function testEven(n) {
//     if(n % 2 === 0){
//       return true
//     }else{
//       return false
//     }
// }

// Unfinished Loop - Bug Fixing #1

// function createArray(number){
//     var newArray = [];

//     for(var counter = 1; counter <= number; counter++){
//       newArray.push(counter);
//     }

//     return newArray;
//   }

// Stringy Strings

// function stringy(size) {
//     let newStr = ""
//     for(let i = 0; i < size; i++){
//         if(i % 2 === 0){
//             newStr += 1
//         }else{
//             newStr += 0
//         }
//     }
//     return newStr
//   }

//   console.log(stringy(6))

// Grasshopper - If/else syntax debug

// function checkAlive (health) {
//     if ( health <= 0) {
//       return false
//     } else {
//       return true
//     }
//   }

// What's the real floor?
// function getRealFloor(n) {
//     return n > 13 ? n-2 : n <= 0 ? n : n-1
// }

// Super Duper Easy
// function problem(x) {
//   return typeof x === 'number' ? x * 50 + 6 : 'Error'
// }

/* Lario and Muigi Pipe Problem

Take an array, get the lowest number and the highest number. Then return an array that takes the lower number and inputs a number for each 1+ increment until it reaches the highest interval, so it counts up to it with no duplicates.


Initalize a lowestNum variable with arr[0] that will be used to compare with the others to determine the lowest number.
Initalize a highestNum variable with arr[0] to compare for the highest number
Loop through array
  // If num[i] is less than lowestNum, lowestNum = num[i]
  // If num[i] is more than highestNum, highestNum = num[i]
Create newArr = []
Iterate from lowestNum to highestNum
 // push each i to newArr
return newArr

*/

// function pipeFix(numbers) {
//   let lowestNum = numbers[0]
//   let highestNum = numbers[0]
//   numbers.forEach((number) => {
//     if (number < lowestNum) {
//       lowestNum = number
//     }

//     if (number > highestNum) {
//       highestNum = number
//     }
//   })
//   const newArr = []
//   for (let i = lowestNum; i <= highestNum; i++) {
//     newArr.push(i)
//   }
//   return newArr
// }

// console.log(pipeFix([-1, 4]))

/* Grasshopper - Terminal game combat function

Write a function that takes in two numbers. Subtract num1 - num2 and return the results. If num2 > num1 return 0.

return num1 - num2
if num2 > num1 return 0
*/

// function combat(health, damage) {
//   return damage > health ? 0 : health - damage
// }

/* Generate range of integers

Write a function that takes three arguments. Min, max, step. Return an array that starts with the min, takes however many steps incrementally up to max. May not have a max depending on step?

create newarray = []
iterate starting on min and ending til less than or equal to max 
increase by step
push to array
return newarr
*/

// function generateRange(min, max, step) {
//   let newArr = []
//   for (let i = min; i <= max; i = i + step) {
//     newArr.push(i)
//   }
//   return newArr
// }

// console.log(generateRange(2, 10, 2))

/* Two to one

Write a function that takes in two strings. Return a sorted combination of these two strings, only using unique letters from the two. 

create obj1 = {}
create obj2 = {}
create obj3 = {}
create a for in loop that looks at each letter of str1 and adds to object only if there isn't an instance of it already
do the same for str2

create a for of loop to compare obj1 and obj2 and only add one instance to obj3
create array from obj and sort a-z

return array joined by ''
*/

// function longest(s1, s2) {
//   const obj1 = {}
//   const arr = []
//   for (let letter of s1) {
//     obj1[letter] = 1
//   }
//   for (let letter of s2) {
//     obj1[letter] = 1
//   }
//   for (let key in obj1) {
//     arr.push(key)
//   }
//   return arr.sort().join('')
// }

// console.log(longest('aretheyhere', 'yestheyarehere'))

// OTHER SOLUTIONS, LESS CODE, more READABLE?

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// REMEMBER Set returns an array with only one occurence.

/* 
Take a Ten Minutes Walk
- Take N-S W-E make sure they balance eachother and equal to 10. So you can do 5 e 5 w or 2 n 2 s 3 w 3 e return true if balanced and false if not.

Create an object 
iterate through array and count up each instance of direction
if e-w and s-n are even and sum up to 10 return true else, false

*/

// function isValidWalk(walk) {
//   if (walk.length !== 10) {
//     return false
//   }
//   let obj = {}
//   for (let i = 0; i < walk.length; i++) {
//     let direction = walk[i]
//     obj[direction] ? (obj[direction] += 1) : (obj[direction] = 1)
//   }

//   if (obj['n'] === obj['s'] && obj['e'] === obj['w']) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))

// Your order, please

// function order(words) {
//   let newArr = words.split(' ')
//   let numArr = []
//   let finishedArr = []
//   for (let letter of words) {
//     if (letter !== ' ' && !isNaN(Number(letter))) {
//       numArr.push(letter)
//     }
//   }

//   let left = 0
//   let right = 0
//   while (left < newArr.length) {
//     right = numArr[left] - 1
//     finishedArr[right] = newArr[left]
//     left++
//   }
//   return finishedArr.join(' ')
// }

// console.log(order('is2 Thi1s T4est 3a'))

/* 
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    

*/

/* 

Convert string to camel case


Take a string and make it one word camel case, no spaces or dashes and if the first word is capitalized, keep it capitalized or not if it isn't while capitalizing everything else, camelCase

create a regex that includes a-zA-Z and maybe 1-9 not sure if there are gonna be integer inputs

do a for of loop and if it gets to a character thats not in the regex add it to a new variable

split by this variable into a newArr

create an arr and map with item and index return an item[0] to upperCase if index > 0 

then return join("")
*/

function toCamelCase(str) {
  const regEx = /[A-Za-z1-9]/
  let delimiter = ''
  let arr = []
  for (let letter of str) {
    if (!regEx.test(letter)) {
      arr.push(' ')
    } else {
      arr.push(letter)
    }
  }
  let newArr = arr
    .join('')
    .split(' ')
    .map((item, index) => {
      if (index !== 0) {
        return item[0].toUpperCase() + item.substring(1)
      } else {
        return item
      }
    })
  return newArr.join('')
}

console.log(toCamelCase('the_stealth_warrior'))

/* 

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}


*/
