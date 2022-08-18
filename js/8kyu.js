//Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// const solution = str => {
//     return str.split("").reverse().join("")
// }

// console.log(solution('world'))


//-------------------------------------------------------------------------------------------------------------------Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// MY SOLUTION
// const fakeBin = x => {
//     let toArr = x.split("")
//     let newArr = []
//     console.log(toArr)
//     toArr.forEach((x,i) => {
//         if(Number(x)<5){
//             newArr.push(0)
//         }else{
//             newArr.push(1)}
//     })
//     return newArr.join("")
// }

// console.log(fakeBin('45385593107843568'))

//THEIR SOLUTIONS

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// function fakeBin(str){
//     var newStr = "";
//     for(var i=0;i<str.length;i++){
//       if(Number(str[i])>=5){
//         newStr += "1"
//       }
//       else{
//         newStr += "0";
//       }
//     }
//     return newStr;
//   }



//-------------------------------------------------------------------------------------------------------------------Sort and Star

// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// MY SOLUTION

// const twoSort = s => {
//     let sortedArr = s.sort()
//     console.log(sortedArr)
//     return sortedArr[0].split("").join("***")
// }

// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

// OTHER SOLUTIONS
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   }


//------------------------------------------------------------------------------------------Find the smallest integer in the array



// const findSmallestInt = args => args.sort((a,b)=>a-b)[0]
    
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a,b)=>a-b)[0]
//   }
// }

// console.log(findSmallestInt([78,56,232,12,8]))


// OTHER SOLUTIONS

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

//-----------------------------------------------------------------------------------------------------------------Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// const makeNegative = num => num > 0 ? -num : num < 0 ? num: 0

// console.log(makeNegative(9))

// OTHER SOLUTIONS

// function makeNegative(num) {
//     return -Math.abs(num);
//   }



//---------------------------------------------------------------------------------------------------Capitalization and Mutability
// DESCRIPTION:
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.substring(1);
//   }

// console.log(capitalizeWord('tupac'))

//----------------------------------------------------------------------------------------------------------------Square(n) Sum

// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// const squareSum = numbers =>{
//     let newArr = []
//     numbers.forEach(x => {
//         newArr.push(x**2)})
//     return newArr.reduce((acc,curr)=>acc+curr,0) 
// }

// console.log(squareSum([]))

// OTHER SOLUTION

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }

//--------------------------------------------------------------------------------Thinkful - Number Drills: Blue and red marbles

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.



// const alternateCase = (str) => {
//     let newStr = ""
//     for(i=0; i < str.length; i++)
//       if(str[i] === str[i].toUpperCase()){
//         newStr += str[i].toLowerCase()
//       }else{
//         newStr += str[i].toUpperCase()
//       }
//       return str
//   }

//   const alternateCase = (str) => {
//     let newStr = str.split('')
//     const map = newStr.map((x) => {
//         for(i=0;i< newStr.length; i++){
//          if(x=== x.toUpperCase()){
//             x = x.toLowerCase()
//         }else{
//             x = x.toUpperCase()
//         }
//         }
//     })
//     return map
// }



//   console.log(alternateCase("HELLO WORLD"))




//-----------------------------------------------------------------------Merge two sorted arrays into one

// DESCRIPTION:
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!



// const mergeArrays = (arr1, arr2) => {
//   let newArr = []
//   let noDupes = []
//   arr1.forEach(x => newArr.push(x))
//   arr2.forEach(x => newArr.push(x))
//   newArr = newArr.sort((a,b)=>a-b)
//   newArr.forEach((number) => {
//       if (!noDupes.includes(number)){
//           noDupes.push(number)
//       }
//   })
//   return noDupes
  
// }

// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]))

// OTHER SOLUTION
// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
//   }



//-----------------------------------------------------------------------Sum Mixed Array
// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


// const sumMix = x => {
//     let toNum = []
//     x.forEach(x=>toNum.push(Number(x)))
//     return toNum.reduce((acc,curr)=> acc+curr,0)

// }

// console.log(sumMix([9, 3, '7', '3']))

// OTHER SOLUTION

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }


//--------------------------------------------------------------------Beginner Series #4 Cockroach

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


// function cockroachSpeed(s) {
//     return Math.floor((s * 100000)/3600)
//   }

  // OTHER SOLUTIONS
//   const cockroachSpeed = s => Math.floor(s / 0.036);

//-------------------------------------------------------------------------------------------Count by XX

// DESCRIPTION:
// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// function countBy(x, n) {
//     let z = [];
//     for(i=0;i<n;i++){
//       z.push(x+n)}
  
//     return z;
//   }

//Powers of 2-------------------------------------------------


//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


// function powersOfTwo(n){
//   let results = []
//   for(i=1;i<=n+1;i++){
//     results.push(2**(i-1))
//   }
//   return results
// }


// powersOfTwo(1)



//Sum of positive------------------------------------------------------------------------------------------------------------

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// function positiveSum(arr) {
//   let sum = 0
//   arr.forEach(item => {
//     if(item > 0){
//       sum = item + sum
//     }else{
//       sum = sum + 0 
//     }
//   })
//   return sum
// }

// console.log(positiveSum([1,-2,3,4,5]))


//Contamination #1 -String-----------------------------------------------------------------------------------------------

//An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"



// function contamination(text, char){
//   let arr = text.split("")
//   let results = []
//   arr.forEach(letter =>
//     results.push(char))
//   return results.join("")
// }

// console.log(contamination("abc","z"))


//OTHER SOLUTIONS
// function contamination(text, char){
//   return char.repeat(text.length)
// }


//Beginner Series #2 Clock------------------------------------------------------------------------------------------------

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// function past(h, m, s){
//   let hours = h * 3600000
//   let minutes = m * 60000
//   let seconds = s * 60
//   return hours + minutes + seconds
// }

// //OTHER SOLUTION
// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }


//Reversed sequence----------------------------------------------------------------------------------------------------
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//   let results = []
//   for(i=1;i<=n;i++){
//     results.push(i)
//   }
//   return results.sort((a,b) => b-a);
// };

//OTHER SOLUTIONS
// const reverseSeq = n => {
//   let arr = [];
//     for (let i=n; i>0; i--) {
//       arr.push(i);
//       } return arr;
//   };

// console.log(reverseSeq(5))

//MakeUpperCase-----------------------------------------------------------------------------------------------------------------
//Write a function which converts the input string to uppercase.

// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

// console.log(makeUpperCase('hello'))

//Remove First and Last Character--------------------------------------------------------------------------------------------

// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
//   return str.slice(1,-1)
//  };

//  console.log(removeChar('eloquent'))


//Opposite number-----------------------------------------------------------------------------------------------



// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


// function opposite(number) {
//   if(number < 0){
//     return Math.abs(number)
//   }else{
//     return -number
//   }
// }

// console.log(opposite(4))

//Other Solutions 

// function opposite(number) {
//   return(-number);
// }

//You only need one - Beginner---------------------------------------------------------------------------------------
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// function check(a, x) {
//   return a.includes(x)
// }
// console.log(check([101, 45, 75, 105, 99, 107], 107))


//Returning Strings-----------------------------------------------------------------------------------------------------
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]


// const greet = name => `Hello, ${name} how are you doing today?`



//
////
//////
//I love you, a little , a lot, passionately ... not at all-----------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// function howMuchILoveYou(nbPetals) {
//   let newArr = ['I love you','a little', 'a lot', 'passionately', 'madly', 'not at all']
//   let results = ""
//   for(i=0;i<=nbPetals;i++){
//     if(i % 6 === 0){
//       results = newArr[5]
//     }else{
//     results = newArr[(i % 6)-1]
//   }}
//   return results
// }

// console.log(howMuchILoveYou(7))

//Other Solutions
// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]

// function howMuchILoveYou(n) {
//    return phrases[(n - 1) % phrases.length] 
// }



//
////
//////
//Beginner - Lost Without a Map-------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// function maps(x){
//   let newArr = x.map(num => num*2)
//   return newArr
// }

// console.log(maps([1, 2, 3]))

//OTHER SOLUTION
// function maps(x){
//   return x.map(n => n * 2);
// }


//
////
//////
//Is the string uppercase?---------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.



// const strCheck = {
//   isUpperCase(){
//     console.log(`hello, ${this.str}`)
//   }
// }

// function Str(str){
//   this.str = str
// }
// String.prototype.isUpperCase = function() {
//   let results = this.toString()
//   if(results === results.toUpperCase()){
//     console.log(`${results} is upper case`)
//     return true
//   }else{
//     console.log(`${results} is not upper case`)
//     return false
//   }
// }

// 'c'.isUpperCase()

//OTHER SOLUTIONS

// String.prototype.isUpperCase=function() {return this==this.toUpperCase()}


//
////
//////
//Pythagorean Triple----------------------------------------------------------------------------------------------------------
//////
////
//
//


// DESCRIPTION:
// Given an array of 3 integers a, b and c, determine if they form a pythagorean triple.

// A pythagorean triple is formed when:

// c2 = a2 + b2
// where c is the largest value of a, b, c.

// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

// Return Values
// 1 if a, b and c form a pythagorean triple
// 0 if a, b and c do not form a pythagorean triple
// For Python: return True or False
// For JavaScript: return true or false

// function isPythagoreanTriple(integers) {
//   integers.sort((a,b)=>a-b)
//   return integers[2]**2 === integers[0]**2 + integers[1]**2
// }

// console.log(isPythagoreanTriple([3, 4, 5]))