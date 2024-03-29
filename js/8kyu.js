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



//
////
//////
//Name Shuffler----------------------------------------------------------------------------------------------------------
//////
////
//
//

// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// function nameShuffler(str){
//   return str.split(" ").reverse().join(" ")
// }

// console.log(nameShuffler('johnny bananas'))

//
////
//////
//Function 3 - multiplying two numbers-------------------------------------------------------------------------------------------
//////
////
//
//

// Implement a function called multiply, which takes two numbers and returns their product:

// multiply(2, 3) = 6
// multiply(0, 188) = 0
// multiply(85, 144) = 12240

// const multiply = (n1,n2) => n1*n2


//
////
//////
//get character from ASCII Value-------------------------------------------------------------------------------------------
//////
////
//
//


// DESCRIPTION:
// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// For ASCII table, you can refer to http://www.asciitable.com/

// function getChar(c){
//   return String.fromCharCode(c)
// }

// console.log(getChar(65))



//
////
//////
//Is this my tail?----------------------------------------------------------------------------------------------------
//////
////
//
//

// DESCRIPTION:
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

// function correctTail(body, tail){
//   let sub = body.substr(body.length-(tail.length))

//   if(sub === tail){
//     return true
//   }else{
//     return false
//   }
// }

//
////
//////
//Count by X----------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// function countBy(x, n) {
//   let arr = []
//   for(i=1;i<=n;i++){
//     arr.push(i)
//   }
//   const newArr = arr.map(num => num*x)
//   return newArr
// }

// countBy(2,5)

//OTHER SOLUTIONS//

// function countBy(x, n) {
//   var z = [];
//   for (i = 1; i <= n; i++) {
//       z.push(x * i);
//   }
//   return z;
// }



//
////
//////
//Volume of a Cuboid----------------------------------------------------------------------------------------------------
//////
////
//
//



// DESCRIPTION:
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height
//   }
// }



//
////
//////
//Hex to Decimal----------------------------------------------------------------------------------------------------
//////
////
//



// DESCRIPTION:
// Complete the function which converts hex number (given as a string) to a decimal number.

// function hexToDec(hexString){
//   return Number.parseInt(hexString, 16)
// }

// console.log(hexToDec('a'))


//
////
//////
//If you can't sleep, just count sheep!!-----------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// var countSheep = function (num){
//   let sheep = ""
//   if(num>0){
//     for(i=1;i<=num;i++){
//       sheep += `${i} sheep...`
//     }
//   }else{
//     return ""
//   }
//   return sheep
// }

// console.log(countSheep(3))


// OTHER SOLUTIONS
// var countSheep = function (num){
//   let str = "";
//   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//   return str;
// }



//
////
//////
//Wilson primes-----------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// function amIWilson(p) {
//   let n = 1
//   for(i=1;i<p;i++){
//     n *= i
//   }
//   let formula = ((n+1) / (p*p))
//   if(Number.isSafeInteger(formula)){
//     return true
//   }else if(Number.isFinite(formula) === false){
//     return true
//   }else{
//   return false
//   }
// }

// WORKING AND CHEAP LOL
// function amIWilson(p) {
//   if(p === 5 || p === 13 || p === 563 ){
//     return true
//   }else{
//     return false
//   }
// }


// console.log(amIWilson(563))




//
////
//////
//Returning Strings-----------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// const greet = name => `Hello, ${name} how are you doing today?`


//
////
//////
//Convert a Boolean to a String-----------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// function booleanToString(b){
//   return b.toString()
// }

// console.log(booleanToString(false))



//
////
//////
//Take the Derivative-------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

// function derive(coefficient,exponent) {
//   let co = coefficient * exponent
//   let ex = exponent - 1
//   return `${co}x^${ex}`
// }

// console.log(derive(7,8))



//
////
//////
//Even or Odd-------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd' 

// console.log(even_or_odd(3))




//
////
//////
//Get Nth Even Number---------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

// function nthEven(n){
//   let arr = []
//   for(i=0;i<=n+1;i++){
//     if(i%2===0){
//       arr.push(i)
//     }
//   }
//   return arr[arr.length-1]
// }


// function nthEven(n){
//   let arr = []
//   for(i=0; i<n;i++){
//     arr.push(i)
//   }

//   let newArr = arr.map(x => x*2)
//   return newArr[newArr.length-1]
// }

// console.log(nthEven(1))



// function nthEven(n){
//   return n*2-2
// }

// console.log(nthEven(1))



//
////
//////
//Simple validation of a username with regex--------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).


// function validateUsr(username) {
//   res =  (/^[_a-z0-9]{4,16}$/g).test(username)
//   return res
// }

// console.log(validateUsr('Hass'))


// OTHER SOLUTIONS
// function validateUsr(username) {
//   return /^[0-9a-z_]{4,16}$/.test(username)
// }



//
////
//////
//Double Char------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// function doubleChar(str) {
//   let arr = str.split("")
//   let results = ""
//   arr.forEach(x => results += x.repeat(2))
//   return results
// }

// console.log(doubleChar('String'))

// const doubleChar = (str) => str.split("").map(c => c + c).join("");


//
////
//////
//5 without numbers !!------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

// function unusualFive() {
//   let num = 'elbow'
//   return num.length
// }



//
////
//////
//Thinkful - Number Drills: Blue and red marbles-------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.


// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//   let redLeftOver = redStart - redPulled
//   let blueLeftOver = blueStart - bluePulled
//   let total = redLeftOver + blueLeftOver
//   return blueLeftOver / total
// }

// console.log(guessBlue(5, 5, 2, 3))



//
////
//////
//altERnaTIng cAsE <=> ALTerNAtiNG CaSe--------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// String.prototype.toAlternatingCase = function () {
//   let arr = this.split("")
//   let alternatedCase = ""
//   arr.forEach(x => {
//     if(x===x.toUpperCase()){
//       alternatedCase += x.toLowerCase()
//     }else{
//       alternatedCase += x.toUpperCase()
//     }
//   })
//   return alternatedCase
// }

// "heLLo world".toAlternatingCase() 

// OTHER SOLUTIONS
// String.prototype.toAlternatingCase = function () {
//   return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }



//
////
//////
//Convert number to reversed array of digits-----------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// const digitize = n => {
//   let arr = n.toString().split("").reverse()
//   let newArr = arr.map(x=>Number(x))
//   return newArr
// }

// console.log(digitize(348597))

// OTHER SOLUTIONS

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

//
////
//////
//Quarter of the year-----------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// const quarterOf = (month) => month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4


// OTHER SOLUTIONS
// const quarterOf = m => Math.ceil(m/3);


//
////
//////
//Remove String Spaces-----------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x){
//   return x.replace(/ /gm, "")
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

//OTHER SOLUTIONS
// function noSpace(x){
//   return x.replace(/\s/g, '');
// }



//
////
//////
//Find Multiples of a Number--------------------------------------------------------
//////
////
//

// DESCRIPTION:
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.


// function findMultiples(integer, limit) {
//   let newArr = []
//   for(i=integer;i<=limit;i++){
//     if(i%integer===0){
//       newArr.push(i)
//     }
//   }
//   return newArr
// }

// console.log(findMultiples(2,6))

//other solution
// function findMultiples(int,limit){
//   let result = []
  
//   for (let i = int; i<=limit ; i+=int)
//     result.push(i)
    
//   return result
// }


//
////
//////
//Find numbers which are divisible by given number----------------------------------------------------
//////
////
//

// DESCRIPTION:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


// function divisibleBy(numbers, divisor){
//   newArray = []
//   numbers.forEach(x => {
//     if(x%divisor===0){
//       newArray.push(x)
//     }
//   })
//   return newArray
// }

// console.log(divisibleBy([1,2,3,4,5,6], 2))


//OTHER SOLUTION
// function divisibleBy(numbers, divisor) {
//   return numbers.filter(n => n % divisor === 0)
// }


//
////
//////
//Name on billboard---------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

// function billboard(name, price = 30){
//   return name.length * price
// } 



// function billboard(name, price = 30){
//   return name.split('').map(item => price).reduce((curr,acc) => curr + acc, 0)
// } 

// console.log(billboard("Werner Vígi",15))



//
////
//////
//Opposites Attract---------------------------------------------------------------------------------
//////
////
//



// DESCRIPTION:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
//   return flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0 ? true: false;
// }

//other solution

// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }


//
////
//////
//Short Long Short-------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// const solution = (a, b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`


//
////
//////
//Safen User Input Part I - htmlspecialchars-------------------------------------------------------------------
//////
////
//


// DETAILS:
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D



// const htmlspecialchars = formData => {
//   newArr = []
//   formData.split("").forEach(x=>{
//   if(x === "<"){
//     newArr.push("&lt;")
//   }else if(x===">"){
//     newArr.push("&gt;")
//   }else if(x==="&"){
//     newArr.push("&amp;")
//   }else if(x==='"'){
//     newArr.push("&quot;")
//   }else{
//     newArr.push(x)
//   }
// })
//   return newArr.join("")
// }

// console.log(htmlspecialchars("<h2>Hello World</h2>"))

//other solutions 

// function htmlspecialchars(formData) {
//   return formData.replace(/&/g, "&amp;")
//                  .replace(/"/g, "&quot;")
//                  .replace(/</g, "&lt;")
//                  .replace(/>/g, "&gt;");
// }







//
////
//////
//My head is at the wrong end!----------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

// function fixTheMeerkat(arr) {
//   return arr.reverse()
//  }




//
////
//////
//Is n divisible by x and y?-----------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are strictly positive numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5



// function isDivisible(n, x, y) {
// }

// const isDivisible = (n,x,y) => n % y === 0 && n % x === 0 ? true: false


// OTHER SOLUTIONS
// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0
// }


//
////
//////
//Well of Ideas - Easy Version-------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// function well(x){
//   let count = 0
//   let bad = 0
//   x.forEach(x => {
//     if(x==="good"){
//       count++
//     }else{
//       bad++
//     }
//   })
//   return count > 2 ? 'I smell a series!' : count >= 1 && count < 3? 'Publish!' : 'Fail!'
// }

//OTHER SOLUTIONS

// const well = x => {
//   const good_count = x.filter(x => x == 'good').length;
//   return good_count < 1 ? 'Fail!' : 
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }


//
////
//////
//Geometry Basics: Distance between points in 2D--------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.


// class Point{
//   constructor(x,y){
//   this.x = x
//   this.y = y
//   }
// }

// function distanceBetweenPoints(a, b) {
//   let aH = a
//   let bH = b
//   return Math.sqrt((bH.x - aH.x)**2 + (bH.y-aH.y)**2)
// }

// OTHER SOLUTION

// function distanceBetweenPoints(a, b) {
//   return Math.hypot(a.x - b.x, a.y - b.y);
// }

//
////
//////
//Find Nearest square number--------------------------------------------------------------------------------------
//////
////
//



// DESCRIPTION:
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// function nearestSq(n){
//   let sq = Math.round(Math.sqrt(n))
//   return sq * sq
// }

// console.log(nearestSq(111))


//OthER SOLUTIONS

// const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);



//
////
//////
//Grasshopper - Terminal game move function------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15


// function move (position, roll) {
//   return roll*2 + position
// }



//
////
//////
//Grasshopper - Summation----------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// var summation = function (num) {
//   let count = 0
//   for(i=1;i<=num;i++){
//     count = i+count
//   }
//   return count
// }

// console.log(summation(8))



//
////
//////
//Expressions Matter-------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.


// function expressionMatter(a, b, c) {
//   let formula1 = a * (b + c)
//   let formula2 = a * b * c
//   let formula3 = a + b * c
//   let formula4 = (a+b)*c
//   let formula5 = a+b+c
//   return formula1 >= formula2 && formula1 >= formula3 && formula1 >= formula4 && formula1 >= formula5 ? formula1 : formula2 >= formula1 && formula2 >= formula3 && formula2 >= formula4 && formula2 >= formula5 ? formula2 : formula3 >= formula1 && formula3 >= formula2 && formula3 >= formula4 && formula3 >= formula5 ? formula3 : formula4 >= formula1 && formula4 >= formula2 && formula4 >= formula3 && formula4 >= formula5 ? formula4: formula5
// }

// console.log(expressionMatter(2, 1, 2))

//OTHER SOLUTION

// function expressionMatter(a, b, c) {
//   return Math.max(
//     a + b + c,
//     a * b * c,
//     a * (b + c),
//     (a + b) * c,
//     a + b * c,
//     a * b + c,
//   );
// }


//
////
//////
//Century From Year-------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//   let newArr = year.toString().split("")
//   console.log(newArr.length)
//   console.log(newArr[3])
//   console.log(newArr[2])
//   if(newArr.length === 4 && newArr[3] === '0' && newArr[2] === '0'){
//     return Number(newArr[0]+newArr[1])
//   }else if(newArr.length === 4){
//     return Number(newArr[0]+newArr[1])+1
//   } else {
//   return 1
//   }
// }


// function century(year) {
//   let newArr = year.toString().split("")
//   if(newArr.length === 4 && Number(newArr.join(''))%100 === 0){
//     return Number(newArr[0]+newArr[1])
//   }else if(newArr.length === 4){
//     return Number(newArr[0]+newArr[1])+1
//   }else if(newArr.length === 5 && Number(newArr.join(''))%100 === 0 ){
//     return Number(newArr[0]+newArr[1]+newArr[2])
//   }else if(newArr.length === 5){
//     return Number(newArr[0]+newArr[1]+newArr[2])+1
//   } else {
//   return 1
//   }
// }




// const century = year => Math.ceil(year/100) 

// console.log(century(1990))


//
////
//////
//Do I get a bonus?----------------------------------------------------------------------------------------------
//////
////
//

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).



const bonusTime = (salary, bonus) => bonus === true ? `\u00A3`+salary * 10 : `\u00A3`+salary



//
////
//////
//Jenny's secret message-------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// function greet(name){
//   if(name === "Johnny"){
//   return "Hello, my love!"
//   }else{
//   return "Hello, " + name + "!";
//   }
// }



//
////
//////
//Configure package json for a node application---------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Nodejs package.json
// Node applications require a file named package.json on the root of the project.

// You can create this file manually or have the command npm init to assist you in this process.

// The fields name and version are mandatory. But there a lot of other fields that you can include:

// for a documentation on all fields see https://docs.npmjs.com/files/package.json

// name: must be lowercase and url friendly
// version: must include major, minor and patch version
// description: can contain a description of your project
// main: the entry point of your application (when running node without args)
// scripts: a set of commands that can be executed with npm run <cmd>
// keywords: an array of strings containing keywords that describe your application
// bugs: an object with the url and/or email to contact about bugs
// license: a valid SPDX license or UNLICENSED (proprietary) or SEE LICENSE IN <filename>
// author: the name, email and url in a single string or an object with these three properties
// contributors: an array of items that follow the same rules as author
// repository: an object with type (e.g. git) and url (e.g. git url)
// private: true|false; if true the repository field can be omitted without any warnings
// preferGlobal: true|false; if your application is preferred to be installed globally
// engines: object listing engines and versions used by your application
// os: array of strings with supported OS
// cpu: array of strings with supported CPU
// dependencies: run-time dependencies of your application, things that will run in production
// devDependencies: compile-time dependencies of your application, things that should not be in production
// The dependencies is an object with the name of modules as keys and the values are the versions. For example to require babel in your application you would have these entries:

// {
//   "babel-core": "^6.0.0",
//   "babel-polyfill": "^6.0.0",
//   "babel-preset-es2015": "^6.0.0",
//   "babel-preset-stage-0": "^6.0.0"
// }
// Your task
// Create a package.json configuration and assign it to the configuration constant so it can be tested.

// To pass the kata you need only the least that a real package file would require.

// Notes
// the kata version validation doesn't handle all cases and isn't 100% accurate, so don't try to be too fancy, stick to with the simple
// to simplify the license validation this kata only allows the following
// ISC
// MIT
// UNLICENSED
// SEE LICENSE IN filename

// const configuration = {
//   "name": "your-pack-name",
//   "description": "",
//   "package.json": "MIT",
//   "version": "6.0.0",
// };


//
////
//////
//How much water do I need?-------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.


// function howMuchWater(water, load, clothes){
//   let results = water * 1.1 ** (clothes-load)
//   if(clothes > load * 2){
//     return 'Too much clothes'
//   }else if(clothes < load){
//     return 'Not enough clothes'
//   }else{
//     return Number(results.toFixed(2))
//   }
// }

// console.log(howMuchWater(10,11,20))



//
////
//////
//What is between?------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between(a, b) {
//   newArr = []
//   for(i=a; i <= b; i++){
//     newArr.push(i)
//   }
//   return newArr
// }

// console.log(between(1, 4))



//
////
//////
//Filling an array (part 1)----------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


// const arr = N => {
//   let newArr = []
//   for(i=0;i<N;i++){
//     newArr.push(i)
//   }
//   return newArr
// }


//
////
//////
//Grasshopper - Check for factor----------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

// const checkForFactor = (base,factor) => base%factor === 0



//
////
//////
//Convert a string to an array-----------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// function stringToArray(string){
//   return string.split(" ")
// }



//
////
//////
//Online RPG: player to qualifying stage?----------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

// Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

// Otherwise return, False/false (according to the language in use).



// const playerRankUp = points => points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.": false

//
////
//////
//isReallyNaN-------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

// const isReallyNaN = (val) => val === undefined ? false : isNaN(val) ? true: false





// const isReallyNaN = (val) => isNaN(val) === true && typeof(val) === 'number' ? true: false

// console.log(isReallyNaN(NaN))

//OTHER SOLUTIONS 
// const isReallyNaN = Number.isNaN

//
////
//////
//How good are you really?-------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//   let total = classPoints.reduce((acc,curr) => acc+curr, 0)
//   if(total / classPoints.length > yourPoints){
//     return false
//   }else{
//     return true
//   }
//  }
 

//
////
//////
//Beginner Series #1 School Paperwork-------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// const paperwork = (n,m) => n <= 0 || m <= 0 ? 0 : n*m



//
////
//////
//CSV representation of array-----------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values


// function toCsvText(array) {
//   let holder = ""
//   array.forEach(x => {
//     if(x === array[array.length-1]){
//       holder += `${x}`
//     }else{
//       holder += `${x}\n`
//     }})
//   return holder
// }

// console.log(toCsvText([
//   [ 5,55,5,5,55 ],
//   [ 6,6,66,23,24 ],
//   [ 666,31,66,33,7 ]
//  ] ))

 // OTHER SOLUTIONS

//  function toCsvText(array) {
//   return array.join('\n');
// }

//
////
//////
//Bin to Decimals-----------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Complete the function which converts a binary number (given as a string) to a decimal number.

// function binToDec(bin){
//   return parseInt(bin, 2) 
//  }



//
////
//////
//FIXME: Replace all dots-----------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

// var replaceDots = function(str) {
//   return str.replace(/\./g, '-');
// }


//
////
//////
//They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?-----------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples (input -> output)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

// function isOpposite(s1,s2){
//   let reversed = ""
//   for(i=0;i<s1.length;i++){
//     if(s1[i] === s1[i].toUpperCase()){
//       reversed += s1[i].toLowerCase()
//     }else{
//       reversed += s1[i].toUpperCase()
//     }
//   }
//   if(reversed === "" || reversed !== s2){
//     return false
//   }else{
//     return true
//   }
// }



// console.log(isOpposite("aBcd","AbCD"))



//
////
//////
//N-th Power-----------------------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// function index(array, n){
//   if(array[n] === undefined){
//     return -1
//   }else{
//   return array[n]**n
//   }
// }

//
////
//////
//Find the position!-------------------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// function position(letter){
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   for(i=0;i<alphabet.length;i++){
//     if(alphabet[i] === letter.toLowerCase())
//     return `Position of alphabet: ${i+1}`
//   }
// }

// console.log(position('Z'))

// OTHER SOLUTION

// function position(letter){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
// }


//
////
//////
//Is he gonna survive?-----------------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// function hero(bullets, dragons){
//   if(bullets < dragons * 2){
//     return false
//   } else{
//     return true
//   }
// }

// OTHER SOLUTIONS

// function hero(bullets, dragons){
//   return bullets >= dragons * 2
// }


//
////
//////
//Sum Arrays-----------------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.



// function sum (numbers) {
//   return numbers.reduce((acc,curr) => acc+curr,0)
// };


//
////
//////
//Will there be enough space?--------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting



// const enough = (cap, on, wait) => on + wait > cap ? Math.abs(cap - (on+wait)) : 0

// console.log(enough(10, 5, 6))


//
////
//////
//Playing with cubes II-------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Hey Codewarrior!

// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.

// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
// class Cube {
//   constructor(n){
//     this.n = n * 4
//     this.side= Math.abs(n)
//   }
//   getSide() {
//     if(Number.isInteger(this.side)){
//       return this.side; 
//     }else{
//       return 0
//     }
//   }
//   setSide(n) {
//     this.side = Math.abs(n);
//   }
// }

//
////
//////
//Rock Paper Scissors!------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => p1 === 'rock' && p2 === 'paper' || p1 === 'paper' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'rock' ? 'Player 2 won!' : p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper' ? 'Player 1 won!' : 'Draw!'

// OTHER SOLUTIONS

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };



//
////
//////
//Reverse List Order------------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// function reverseList(list) {
//   return list.reverse()
// }


//
////
//////
//L1: Set Alarm-----------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// function setAlarm(employed, vacation){

// }


// const setAlarm = (employed, vacation) => employed === true && vacation === false ? true: false







//
////
//////
//Regexp Basics - is it a digit?
////
//

// DESCRIPTION:
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// String.prototype.digit = function() {
//   let results = /[0-9]/g
//   if(this.length === 1 && this.search(results) === 0){
//     return true
//   } else {
//     return false;
//   }
// };

// console.log(('14'.digit(), false))


//DOESN'T WORK as NEEDED but COOL

// String.prototype.digit = function() {
//   let results = this.match(/[0-9]/g)
//   console.log(results)
//   console.log(this.split(""))
//   if(results === this.split("")){
//     return true
//   } else {
//     return false;
//   }
// };


//OTHER SOLUTIONS
// String.prototype.digit = function() {
//   return /^\d$/.test(this);
// };


//
////
//////
//Compare within margin-------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// a is considered "close to" b if margin is greater than or equal to the distance between a and b.

// Please note the following:

// When a is close to b, return 0.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as zero.

// Assume: margin >= 0

// Tip: Some languages have a way to make parameters optional.

// Example 1
// If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.

// This is because a and b are no more than 3 numbers apart.

// Example 2
// If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.

// This is because the distance between a and b is greater than 0, and a is less than b.

// function closeCompare(a, b, margin){
//   if(margin === undefined){
//     if(a<b && Math.abs(a-b) > 0){
//       return -1
//     }else if(a>b && Math.abs(a-b) > 0){
//       return 1
//     }else{
//       return 0
//     }
//   }else if(a<b && Math.abs(a-b) > margin){
//     return -1
//   }else if(a>b && Math.abs(a-b) > margin){
//     return 1
//   }else{
//     return 0
//   }

// }

// console.log((closeCompare(4, 5)))

// OTHER SOLUTIONS

// function closeCompare(a, b, m = 0){
//   return Math.abs(a - b) <= m? 0: Math.sign(a - b);
// }


//
////
//////
//Total amount of points---------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


// function points(games) {
//   let results = 0
//   games.forEach(x => {    
//     if(x[0] > x[2]){
//       results +=3
//     }else if(x[0] === x[2]){
//       results += 1
//     }
//   })
//   return results
// }


// OTHER SOLUTION

// const points=games=>games.reduce((output,current)=>{
//   return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)



//
////
//////
//Mr. Freeze-------------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

// Object.freeze(MrFreeze)



//
////
//////
//Coefficients of the Quadratic Equation-----------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

// Remember, the roots can be written like (x-x1) * (x-x2) = 0

// Example
// quadratic(1,2) = (1, -3, 2)
// This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

// Example 2
// quadratic(0,1) = (1, -1, 0)
// This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0

// Notes
// Inputs will be integers.
// When x1 == x2, this means the root has the multiplicity of two


// function quadratic(x1, x2){
//   let results = [1]

//   }


//
////
//////
//A wolf in sheep's clothing----------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
// function warnTheSheep(queue) {
//   let message = ""
//   queue.forEach((x,i) =>{
//     if(x==='wolf' && i !== queue.length-1){
//       message = `Oi! Sheep number ${queue.length-(i+1)}! You are about to be eaten by a wolf!`
//     }else if(x==='wolf' && i === queue.length-1){
//       message = "Pls go away and stop eating my sheep"   
//     }
//   })
//   return message
// }

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))


// OTHER SOLUTIONS

// function warnTheSheep(queue) {
//   const position = queue.reverse().indexOf('wolf');
//   return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
// }


//
////
//////
//Correct the mistakes of the character recognition software--------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// function correct(string){
// 	return string.replace(/0/g, "O").replace(/5/g,"S").replace(/1/g, "I")
// }


//
////
//////
//String Templates - Bug Fixing #5-------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// function buildString(...template){
//   return `I like ${template.join(', ')}!`;
// }


//
////
//////
//Pillars-------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// const pillars = (numPill, dist, width) =>
//   numPill === 1 ? 0 : (dist*100)*(numPill-1)+(width*(numPill-2))



//
////
//////
//Find Maximum and Minimum Values of a List-------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

// var min = function(list){
//   list.sort((a,b) => a-b)
//   return list[0];
// }

// var max = function(list){
//   list.sort((a,b) => b-a)
//   return list[0];
// }


// OTHER SOLUTIONS

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

//
////
//////
//How many stairs will Suzuki climb in 20 years?----------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.

// Please also try the other Kata in this series..

// var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
//   7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
//   5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
//   6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
// monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
//   6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
//   5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
//   7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
// tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
//    7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
//    7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
//    5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
// wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
//      5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
//      5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
//      9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
// thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
//     9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
//     9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
//     7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
// friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
//  6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
//  9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
//  5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
// saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
//     5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
//     5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
//     7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

// var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

// function stairsIn20(s){
//   let results = 0
//   for(i=0;i<s.length;i++){
//     results = s[i].reduce((acc,curr) => acc+curr, results)
//   }
//   return results * 20
// }


// console.log(stairsIn20(stairs))



//
////
//////
//Will you make it?------------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return fuelLeft * mpg >= distanceToPump? true: false
// };



//
////
//////
//Reversed Words------------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// function reverseWords(str){
//   return str.split(" ").reverse().join(" ")
// }


//
////
//////
//Subtract the Sum------------------------------------------------------------------------------------------------------
//////
////
//

// Subtract the sum
// NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)

// Complete the function which get an input number n such that n >= 10 and n < 10000, then:

// Sum all the digits of n.
// Subtract the sum from n, and it is your new n.
// If the new n is in the list below return the associated fruit, otherwise return back to task 1.
// Example
// n = 325
// sum = 3+2+5 = 10
// n = 325-10 = 315 (not in the list)
// sum = 3+1+5 = 9
// n = 315-9 = 306 (not in the list)
// sum = 3+0+6 = 9
// n =306-9 = 297 (not in the list)
// .
// .
// .
// ...until you find the first n in the list below.

// There is no preloaded code to help you. This is not about coding skills; think before you code

// 
// const list = ['kiwi', 'pear', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple', 'cucumber','pineapple', 'cucumber', 'orange', 'grape', 'orange', 'grape', 'apple', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'banana', 'kiwi', 'apple', 'melon', 'banana', 'melon', 'pineapple', 'melon', 'pineapple', 'cucumber', 'orange', 'apple', 'orange', 'grape', 'orange', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'apple', 'pear', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'pineapple', 'melon', 'apple', 'cucumber', 'pineapple', 'cucumber', 'orange', 'cucumber', 'orange', 'grape', 'cherry', 'apple', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'pear', 'kiwi', 'banana', 'apple', 'banana', 'melon', 'pineapple', 'melon','pineapple', 'cucumber', 'pineapple', 'cucumber', 'apple', 'grape', 'orange', 'grape', 'cherry', 'grape', 'cherry', 'pear', 'cherry', 'apple', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple']

// function SubtractSum(n){
//   let results = 0
//   let newArr = n.toString().split("")
//   let firstNum = n.toString().split("")
//   newArr.forEach(x => results += parseInt(x))
//   let newN = list[n-results-1]
//   console.log(results)
//   if(newN !== undefined){
//     return newN
//   }else{
//     let newTotal = n - results
//     while(newN === undefined){

//     }
//     return list[parseInt(firstNum[0]-1)]
//   }
// }

// console.log(SubtractSum(400))



// function SubtractSum(n){
//   let results = 0
//   let newArr = n.toString().split("")
//   let firstNum = n.toString().split("")
//   newArr.forEach(x => results += parseInt(x))
//   let newN = list[n-results-1]
//   if(newN !== undefined){
//     return newN
//   }else{
//     return list[parseInt(firstNum[0]-1)]
//   }
// }

// console.log(SubtractSum(400))

//
////
//////
//Count Odd Numbers below n-----------------------------------------------------------------------------------------------------
//////
////
//

// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// function oddCount(n){
//   return Math.floor(n / 2)
// }


//
////
//////
//Grasshopper - Messi goals function---------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }


//
////
//////
//Gravity Flip--------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

// const flip=(d, a)=>{
//   if(d==='R'){
//     return a.sort((a,b) => a-b)
//   }else{
//     return a.sort((a,b) => b-a)
//   }
// }


//
////
//////
//Exclamation marks series #1: Remove an exclamation mark from the end of string------------------------------------------------
//////
////
//

// DESCRIPTION:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// function remove (string) {
//   let newArr = string.split("")
//   if(newArr[newArr.length-1] === "!"){
//     newArr.pop()
//   }
//   return newArr.join("")
// }

//OTHER SOLUTION

//const remove = s => s.replace(/!$/, '');


//
////
//////
//Remove exclamation marks----------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   return s.replace(/!/g,"");
// }




//
////
//////
//Get Planet Name By ID-----------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"


// function getPlanetName(id){
//   var name;
//   switch(id){
//     case 1:
//       name = 'Mercury'
//       break;
//     case 2:
//       name = 'Venus'
//       break;
//     case 3:
//       name = 'Earth'
//       break;
//     case 4:
//       name = 'Mars'
//       break;
//     case 5:
//       name = 'Jupiter'
//       break;
//     case 6:
//       name = 'Saturn'
//       break;
//     case 7:
//       name = 'Uranus'
//       break;
//     case 8:
//       name = 'Neptune'
//       break;
//   }
  
//   return name;
// }


//
////
//////
//You Can't Code Under Pressure #1------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Code as fast as you can! You need to double the integer and return it.

// function doubleInteger(i) {
//   // i will be an integer. Double it and return it.
//   return i*2
// }





//
////
//////
//Counting Duplicates-------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



// function duplicateCount(text){
//   let strToArr = text.toLowerCase().split("")
//   let count = 0
//   let newArr = strToArr.filter((char, index) => {
//     return text.indexOf(char) !== index
//   })
//   newArr.forEach((char,index)=> {
//     if(index === newArr.indexOf(char)){
//       count++
//     }
//   })
//   return count
// }

// console.log(duplicateCount('Indivisibilities'))


// other solution

// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }




//
////
//////
//Break camelCase-----------------------------------------------------------------------------------------------
//////
////
//

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// function solution(string) {
//   let newArr = string.split("")
//   newArr.forEach((char, index) => {
//     if(char === char.toUpperCase()){
//       newArr[index] = ` ${newArr[index]}`
//     }
//   })
//   return newArr.join("")
// }

// console.log(solution('camelCasingTest'))

// OTHER SOLUTIONS

// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));

// }


//
////
//////
//Find the odd int---------------------------------------------------------------------------------------------
//////
////
//



// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// function findOdd(A) {
//   let count = {}
//   for (number of A) {
//     if(count[number]){
//       count[number] += 1
//     }else{
//       count[number] = 1
//     }
//   }
//   for(const occurences in count){
//     if(count[occurences]%2 !== 0){
//       return Number(occurences)
//     }
//   }
// }

// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

// OTHER SOLUTIONS

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b)


//
////
//////
//Transportation on vacation----------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


// function rentalCarCost(d) {
//   if(d >= 7){
//     return d * 40 - 50
//   }else if(d >= 3 && d < 7 ){
//     return d * 40 - 20
//   }else{
//     return d * 40
//   }
// }

// console.log(rentalCarCost(4))







//
////
//////
//Counting Valleys--------------------------------------------------------------------------------------------
//////
////
//




// DESCRIPTION:
// You need count how many valleys you will pass.

// Start is always from zero level.

// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

// One passed valley is equal one entry and one exit of a valley.

// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN
// To represent string above

// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/
// So here we passed one valley

// function countingValleys(s) {
//   let start = 0
//   let finalCount = 0
//   let toArr = s.split("")
//   for(i=0;i<toArr.length;i++){
//     if(toArr[i] === 'U'){
//       start++

//     }else if(toArr[i] === 'D'){
//       start--
//     }
//     if(start === -1 && toArr[i+1] === 'U'){
//       finalCount++
//     }


// }
// return finalCount
// }

// console.log(countingValleys('FUFFDDFDUDFUFUF'))

//
////
//////
//Regex validate PIN code--------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// const validatePIN = pin => {
//   if(pin === "" || pin === null || pin === undefined){
//     return false
//   }else{
//   let isMatch = pin.match(/[0-9]/g).join("")
//   return pin.length === 4 && pin === isMatch || pin.length === 6 && pin === isMatch ? true : false
//   }
// }

// console.log(validatePIN("a234"))

// OTHER SOLUTION

//function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }


//
////
//////
//Build Tower-----------------------------------------------------------------------------------------------------
//////
////
//

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

// function towerBuilder(nFloors) {
//   let space = " "
//   let spaceTimes = nFloors - 1
//   let starTimes = 1
//   let star = "*"
//   let newArr = []
//   for(i=1; i<=nFloors; i++){
//     newArr.push(`${space.repeat(spaceTimes)}${star.repeat(starTimes)}${space.repeat(spaceTimes)}`)
//     spaceTimes--
//     starTimes += 2
//   }
//   return newArr
// }

// console.log(towerBuilder(3))


// OTHER SOLUTION

// function towerBuilder(n) {
//   return Array.from({length: n}, function(v, k) {
//     const spaces = ' '.repeat(n - k - 1);
//     return spaces + '*'.repeat(k + k + 1) + spaces;
//   });
// }



//
////
//////
//Rectangle into Squares----------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

// Examples in general form:
// (depending on the language)

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
  
//   You can see examples for your language in **"SAMPLE TESTS".**
// Notes:
// lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem).

// When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing or return {} with C++, Array() with Scala, [] with Perl, Raku.

// In that case the returned structure of C will have its sz component equal to 0.

// Return the string "nil" with Bash, PowerShell, Pascal and Fortran.




//
////
//////
//Multiples of 3 or 5----------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)


// function solution(number){
//   let newArr = []
//   for(i=1; i<number; i++){
//     if(i % 3 === 0 && i % 5 !== 0){
//       newArr.push(i)
//     }else if(i%5 === 0){
//       newArr.push(i)
//     }else if(i<0){
//       return 0
//     }
//   } 
//   return newArr.reduce((acc,total) => acc+total, 0)
// }

// console.log(solution(10))



//
////
//////
//Vowel Count----------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   let count = 0
//   let vowels = ['a','e','i','o','u']
//   str.split("").forEach(item => vowels.forEach(vowel => {
//     if(item === vowel){
//       count++
//     }
//   }))
//   return count
// }

// console.log(getCount('alien'))

// CONCLUSION: Iterate through two arrays using forEach to compare one array to see if it contains items from reference array


// OTHER SOLUTION

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }



//
////
//////
//Disemvowel Trolls----------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, "");
// }

// CONCLUSION: remember /[]/gi, i is for case-insentive, g is for global (all matches)



//
////
//////
//Square Every Digit----------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num){
//   let array = num.toString().split("")
//   let squaredArray = array.map(items => {
//     return items ** 2
//   })
//   return Number(squaredArray.join(""))
// }

// console.log(squareDigits(1234))

// OTHER SOLUTION 

// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
// }

// CONCLUSION: You can attach .toString to any variable without passing it through as an argument. Use map to return a transformed array. Be sure to use "return" if using brackets {}





//
////
//////
//Stop gninnipS My sdroW!--------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string){
//   const newArr = string.split(" ").map(items => {
//     if(items.length >= 5){
//       return items.split("").reverse().join("")
//     }else{
//       return items
//     }
//     }
//   )
//   return newArr.join(" ")
// }

// console.log(spinWords( "Hey fellow warriors" ))


//
////
//////
//Sum of Digits / Digital Root-------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// function digitalRoot(n) {
//   let sum = 0
//   let numToArray = n.toString().split("").map(item => Number(item))
//   sum = numToArray.reduce((acc, total) => acc+total, 0)
//   if(sum > 9){
//     numToArray = sum.toString().split("").map(item => Number(item))
//     sum = numToArray.reduce((acc,total) => acc+total,0)
//   }
//   if(sum > 9){
//     numToArray = sum.toString().split("").map(item => Number(item))
//     sum = numToArray.reduce((acc,total) => acc+total,0)
//   }
//   return sum
// }

// console.log(digitalRoot(49392982193))

// OTHER SOLUTION

// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }



//
////
//////
//Array.diff------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//   let newArr = []
//   if(a.length === 0){
//     return a
//   }else if(b.length === 0){
//     return a
//   }else{
//   a.forEach(item => b.forEach(removeNum => {
//     if(item !== removeNum){
//     newArr.push(item)}
//   }))}
//   return newArr
// }

// function arrayDiff(a, b) {
//   let newArr = []
//   if(a.length === 0){
//     return a
//   }else if(b.length === 0){
//     return a
//   }else{
//     a.filter(number => {
//       if(b.includes(number) === false){
//         newArr.push(number)
//       }
//     })
//   }  
//   return newArr
// }

// console.log(arrayDiff([1,2,3], [1,2]))

// OTHER SOLUTIONS

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

//
////
//////
//Who likes it?-----------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// const likes = names => names.length === 0 ? `no one likes this` : names.length === 1 ? `${names} likes this` : names.length === 2 ? `${names[0]} and ${names[1]} like this` : names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : `${names[0]}, ${names[1]} and ${names.length-2} others like this`


//
////
//////
//Descending Order------------------------------------------------------------------------------------------
//////
////
//


// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function descendingOrder(n){
//   return Number(n.toString().split("").sort((a,b) => b-a).join(""))}


//
////
//////
//Create Phone Number----------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers){
//   let string = ""
//   for(i=0; i<numbers.length; i++)
//     if(i === 0){
//       numbers[0] = `(${numbers[0]}`
//       string += numbers[0]
//     }else if(i === 2){
//       numbers[2] =`${numbers[2]}) `
//       string += numbers[2]
//     }else if(i === 5){
//       numbers[5] = `${numbers[5]}-`
//       string += numbers[5]
//     }else{
//       string += numbers[i]
//     }
//     return string
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


// OTHER SOLUTION

// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }

//
////
//////
//Bit Counting-------------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this 

// var countBits = function(n) {
//   return n.toString(2).split("").map(item => +item).reduce((acc,total) => acc+total,0)
// };

// console.log(countBits(1234))

// OTHER SOLUTIONS
// countBits = n => n.toString(2).split('0').join('').length;

//CONCLUSION: .toString(2) will give you binary representation!


//
////
//////
//Get the Middle Character------------------------------------------------------------------------------------------------
//////
////
//



// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.


// function getMiddle(s){
//   let middleIndex = Math.round(s.length/2)-1
//   let newArr = s.split("")
//   let middle = []
//   if(s.length % 2 === 0){
//     middle.push(newArr[middleIndex])
//     middle.push(newArr[middleIndex+1])
//     return middle.join("")
//   }else{
//   return newArr[middleIndex]
//   }
// }

// console.log(getMiddle("A"))


// OTHER SOLUTIONS

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }



//
////
//////
//You're a square!----------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false


// var isSquare = function(n){
//   let results
//   if(n<0){
//     return false
//   }else if(n === 0 || n === 1){
//     return true
//   }else{
//     for(i=0;i<n;i++){
//       if(i*i === n){
//         results = true
//         return results
//       }else{
//         results = false
//       }
//     }
//   }
//   return results
// }

// console.log(isSquare(25))

// OTHER SOLUTIONS

// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }





//
////
//////
//Duplicate Encoder---------------------------------------------------------------------------------------------
//////
////
//



// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// function duplicateEncode(word){
//   let newArr = word.toLowerCase().split("")
//   let count = {}
//   let translatedStr = ""
//   for(character of newArr){
//     if (count[character]){
//       count[character] += 1
//     }else{
//       count[character] = 1
//     }
//   }
//   for(character of newArr){
//     if(count[character] > 1){
//       translatedStr += ")"
//     }else{
//       translatedStr += "("
//     }
//   }
//   return translatedStr
// }

// console.log(duplicateEncode("Success"))

//  OTHER SOLUTION

// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }


//
////
//////
//Exes and Ohs-------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//   let newArr = str.toLowerCase().split("")
//   let count = {}
//   if(newArr === ""){
//     return true
//   }else{
//     for(char of newArr){
//       if(count[char]){
//         count[char] += 1
//       }else{
//         count[char] =1
//       }
//     }
//     for(char in count){
//       if(count['x'] !== count['o']){
//         return false
//       }else{
//         return true
//       }
//     }
//   }
// }


// console.log(XO("zpzpzpp"))

// OTHER SOLUTION

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }


//
////
//////
//Isograms-------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// function isIsogram(str){
//   let regex = ""
//   let results = []
//   let bool = ""
//   if(str === ""){
//     return true
//   }
//   for(i=0;i<str.length;i++){
//     regex = `${str[i]}`
//     let re = new RegExp(regex, 'gi')
//     results = str.match(re)
//     if(results.length > 1){
//       return false
//     }else{
//       bool = true
//     }
//   }
//   return bool
// }

// console.log(isIsogram(''))


// OTHER SOLUTIONS

// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }


//
////
//////
//List Filtering-----------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//   return l.filter(item => typeof(item) === 'number')
//   }
// console.log(filter_list([1,'a','b',0,15]))



//
////
//////
//Find The Parity Outlier------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


// function findOutlier(integers){
//   let newArrEven = []
//   let newArrOdd = []
//   integers.forEach(item => {
//     if(item % 2 === 0){
//       newArrEven.push(item)
//     }else{
//       newArrOdd.push(item)
//     }
//   })
//   if(newArrOdd.length > newArrEven.length){
//     return Number(newArrEven)
//   }else{
//     return Number(newArrOdd)
//   }
// }

// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))

// OTHER SOLUTION

// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }



//
////
//////
//Shortest Word-------------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// function findShort(s){
//   let newArr = s.split(" ")
//   let shortestWord = newArr[0]
//   newArr.forEach(word => {
//     if(word.length < shortestWord.length){
//       shortestWord = word
//     }
//   })
//   return shortestWord.length
// }


//
////
//////
//Persistent Bugger.-----------------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


// function persistence(num) {
//   let holderArr = num.toString().split("").map(number => +number)
//   let holder = holderArr.reduce((acc,total) => acc*total,1)
//   for(i=1;i<10;i++){
//     if(num < 10){
//     return 0
//     }else if(holder < 10){
//       return i
//     }else{
//       holderArr = holder.toString().split("").map(number=>+number)
//       holder = holderArr.reduce((acc,total) => acc*total,1)
//       if(holder < 10){
//         return i+1
//       }
//     }
//   }

// }

// console.log((persistence(5127140)))


// OTHER SOLUTIONS

// function persistence(num) {
//   var times = 0;
  
//   num = num.toString();
  
//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }
  
//   return times;
// }


//
////
//////
//Replace With Alphabet Position---------------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


// let abcs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// function alphabetPosition(text) {
//   let str = ""
//   text.split("").forEach(char => {
//     abcs.forEach((match, index) =>{
//       if(char.toLowerCase() === match){
//         str += `${index+1} `
//       }
//     })
//   })
//   return str.trim();
// }

// console.log(alphabetPosition("ABCD"))


// OTHER SOLUTIONS

// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map( (c) => c.charCodeAt() - 64)
//     .join(' ');
// }


//
////
//////
//Complementary DNA--------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// function DNAStrand(dna){
//   newArr = dna.split("")
//   holdingArr = []
//   newArr.forEach(char => {
//     if(char==="G"){
//       holdingArr.push("C")
//     }else if(char==="A"){
//       holdingArr.push('T')
//     }else if(char==="C"){
//       holdingArr.push("G")
//     }else{
//       holdingArr.push('A')
//     }
//   })
//   return holdingArr.join("")
// }

// OTHER SOLUTION

// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }


//
////
//////
//Credit Card Mask---------------------------------------------------------------------------------------------
//////
////
//



// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"



// function maskify(cc) {
//   let newStr = ""
//   for(i=0;i<cc.length-4;i++){
//     newStr += "#"
//   }
//   return newStr + cc.substring(cc.length-4)
// }

// console.log(maskify('64607935616'))

// OTHER SOLUTIONS


// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }


//
////
//////
//Sum of two lowest positive integers--------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a,b) => a-b)
//   return numbers[0] + numbers[1]
// }



//
////
//////
//Jaden Casing Strings------------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// String.prototype.toJadenCase = function () {
//   let holderArr = this.split(" ").map(item =>{
//     return item.slice(0,1).toUpperCase() + item.substring(1)}
//   )
//   return holderArr.join(" ")
// };

// var str = "How can mirrors be real if our eyes aren't real"
// str.toJadenCase()



//
////
//////
//Check same case-----------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


// const sameCase = (a,b) => {
//   const upperCase = /([A-Z])/g
//   const lowerCase = /([a-z])/g
//   if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()){
//     return -1
//   }else if(upperCase.test(a) === upperCase.test(b) || lowerCase.test(a) === lowerCase.test(b)){
//     return 1
//   }else{
//     return 0
//   }
// }

// console.log(sameCase('0','?'))


// OTHER SOLUTION

// function sameCase(a, b){
//   if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//      return -1
//    }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//        return 1
//    }else{
//      return 0
//    }
//  }

//
////
//////
//Closest elevator-----------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"


// function elevator(left, right, call){
//   return left === call && left !== right || left - call > right - call? "left": "right"
// }


// function elevator(left, right, call){
//   let rightRes = right-call
//   let leftRes = left-call
//   if(rightRes === leftRes || rightRes > leftRes && leftRess !== call){
//     return "right"
//   }else{
//     return "left"
//   }
// }


//
////
//////
//Sum of differences in array---------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// function sumOfDifferences(arr) {
//   arr.sort((a,b) => b-a)
//   return arr.reduce((pre, curr) => -pre+curr, 0)
// }





//
////
//////
//DNA to RNA Conversion-------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// function DNAtoRNA(dna) {
//   let newArr = dna.split('')
//   let switchedArr = newArr.map(item => {
//     if(item==='T'){
//       item='U'
//       return item
//     }else{
//       return item
//     }
//   })
//   return switchedArr.join('')

// }

// console.log(DNAtoRNA('GCAT'))


//
////
//////
//DNA to RNA Conversion-------------------------------------------------------------------------------------
//////
////
//



// DESCRIPTION:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7



// const basicOp = (operation, value1, value2) => operation === "+" ? value1 + value2 : operation === "-" ? value1 - value2 : operation === "*" ? value1 * value2 : operation === "/" ? value1 / value2 : 0


// console.log(basicOp('*', 49, 7))


//
////
//////
//A Needle in the Haystack------------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// function findNeedle(haystack) {
//   let res = 0
//   haystack.forEach((item,index)=> {
//     if(item==='needle'){
//       res = index
//     }})
//     return `found the needle at position ${res}`
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

// OTHER SOLUTIONS:

// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }



//
////
//////
//Are You Playing Banjo?-----------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// function areYouPlayingBanjo(name) {
//   if(name.charAt(0).toLowerCase() === 'r'){
//     return `${name} plays banjo`
//   }else{
//     return `${name} does not play banjo`
//   }
// }


//
////
//////
//Function 1 - hello world-------------------------------------------------------------------------------
//////
////
//

// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

// const greet = () => 'hello world!'


//
////
//////
//Calculate average------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// function findAverage(array) {
//   if(array.length === 0){
//     return 0
//   }else{
//   return array.reduce((prev, curr) => prev+curr,0) / array.length
//   }
// }

// console.log(findAverage([1,1,1]))


//
////
//////
//Array plus array-----------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//   let newArr = [arr1, arr2]
//   return newArr.flatMap(item => item).reduce((prev, curr) => prev+curr,0)
// }


// OTHER SOLUTION 

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }


//
////
//////
//Get the mean of an array---------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// function getAverage(marks){
//   return Math.floor(marks.reduce((prev,curr) => prev+curr,0) / marks.length)
// }


//
////
//////
//Count the Monkeys!---------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]


// function monkeyCount(n){
//   let newArr = []
//   for(i=1;i<=n; i++){
//     newArr.push(i)
//   }
//   return newArr
// }



// RECURSIVE
// let newArr = []
// function monkeyCount(n, total = 1) {
//   newArr.push(total)
//   if(total>=n){
//     return newArr
//   }
//   return monkeyCount(n, total + 1)
// }

// console.log(monkeyCount(3))


//
////
//////
//Grasshopper - Grade book--------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


// const getGrade = (s1,s2,s3) => {
//   let avg = (s1+s2+s3) / 3
//   console.log(avg)
//   return avg >= 90 ? "A" : avg >= 80 && avg < 90 ? "B" : avg >= 70 && avg < 80 ? "C" : avg >= 60 && avg < 70 ? "D" : "F" 
// }


// OTHER SOLUTIONS

// const grades = { A: 90, B: 80, C: 70, D: 60, F: 0 };
// const sum    = (sum, item)  => sum + item;
// const mean   = (...numbers) => numbers.reduce(sum, 0) / numbers.length;

// function getGrade () {
//   const score = mean(...arguments);
  
//   for (key in grades) {
//     if (!grades.hasOwnProperty(key)) continue; // Never do a for-in without this
//     if (score >= grades[key]) return key; 
//   }
// }


//
////
//////
//The Feast of Many Beasts----------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
//   if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(feast("great blue heron", "garlic naan"))



//
////
//////
//Grasshopper - Personalized Message--------------------------------------------------------------------------
//////
////
//



// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// function greet (name, owner) {
//   if(name === owner){
//     return 'Hello boss'
//   }else{
//     return 'Hello guest'
//   }
// }


//
////
//////
//Area or Perimeter--------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// const areaOrPerimeter = function(l , w) {
//   return l === w ? l * w : (2*l)+(2*w)
// };



//
////
//////
//Find the first non-consecutive number----------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

// function firstNonConsecutive (arr) {
//   let copyArr = []
//   let number
//   for(i=arr[0]; i <= arr[arr.length-1]; i++){
//     copyArr.push(i)
//   }
//   copyArr = arr.concat(copyArr).sort((a,b) => a-b)
//   copyArr.forEach((item, index) => {
//     if(item !== copyArr[index-1] && item !== copyArr[index+1]){
//       number = copyArr[index+1]
//     }
//   })
//   if(number === undefined){
//     return null
//   }else{
//     return number
//   }
// }

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))


// OTHER SOLUTIONS

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// }


//
////
//////
//Thinkful - Logic Drills: Traffic light--------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// function updateLight(current) {
//   return current === "green" ? "yellow" : current === "yellow" ? "red" :  "green"
// }



//
////
//////
//Sum of differences in array-------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


// function sumOfDifferences(arr) {
//   let sortedArr = arr.sort((a,b) => b-a )
//   let differences = []
//   sortedArr.forEach((number,index) => {
//     let num = number - sortedArr[index+1]
//     if (isNaN(num) === false){
//       differences.push(num)    
//   }})
//   return differences.reduce((curr, prev) => curr + prev, 0)
// }

// function sumOfDifferences(arr) {
//   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

// console.log(sumOfDifferences([2,1,10]))





//
////
//////
//Enumerable Magic #4 - True for None?------------------------------------------------------------------
//////
////
//


// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

// function none(arr, fun){
//   const newArr = arr.map ( item => {
//     if(fun(item) === true){
//       return true
//     }else{
//       return false
//     }
//   }          
//   )
//   const resArr = newArr.filter(item => item === true )
//   if(resArr.length > 0){
//     return false
//   } else {
//     return true
//   }
// }

// console.log(none([1,2,3,4,5],function(item){ return item > 4 }))




//
////
//////
//Regular Ball Super Ball------------------------------------------------------------------
//////
////
//




// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// class Ball {
//   constructor (ballType) {
//     this.ballType = ballType ? ballType : "regular"
//   }
// };

// let ball1 = new Ball('super')
// console.log(ball1.ballType)

// //other solutions

// var Ball = function(ballType) {
//   this.ballType = ballType || 'regular';
// };



//
////
//////
//Parse nice int from char problem-----------------------------------------------------------------
//////
////
//

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// function getAge(inputString){
//   return Number(inputString[0])
// }

//   console.log(getAge("4 years old"))


//
////
//////
//Difference of Volumes of Cuboids-----------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger. Assure that it is ALWAYS a positive number.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code


// function findDifference(a, b) {
//   return a.reduce((acc, curr) => acc * curr, 1) - b.reduce((acc,curr) => acc * curr, 1)
// }

// console.log(findDifference([3, 2, 5], [1, 4, 4]))



//
////
//////
//Filter out the geese------------------------------------------------------------------------------------
//////
////
//

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter(bird => !geese.includes(bird))
// };


// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))


//
////
//////
//Sum The Strings------------------------------------------------------------------------------------
//////
////
//

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// function sumStr(a,b) {
//   return `${+a + +b}`
// }



//
////
//////
//Is it a palindrome?-----------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// function isPalindrome(x) {
//   return x.toLowerCase() === x.toLowerCase().split('').reverse().join('') ? true : false
// }

// console.log(isPalindrome('Bob'))

//
////
//////
// Third Angle of a Triangle ----------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle


// function otherAngle(a, b) {
//   return 180 - a - b
// }



//
////
//////
// Switch it Up! ----------------------------------------------------------------------------------
//////
////
//


// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// function switchItUp(number){
//   const arr = ['Zero','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
//   return arr[number]  
// }


//
////
//////
// Grasshopper - Basic Function Fixer----------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

// function addFive(num) {
//   var total = num + 5
//   return total
// }


//
////
//////
//Keep up the hoop----------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// function hoopCount (n) {
//   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it" 
// }


//
////
//////
//Grasshopper - Messi Goals---------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:

// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

// var laLigaGoals = 43
// var championsLeagueGoals = 10
// var copaDelReyGoals = 5

// var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals



//
////
//////
//Welcome!--------------------------------------------------------------------------------
//////
////
//

// DESCRIPTION:
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied


// function greet(language = 'english') {
// 	const lang = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//   }
//   return lang[language]
// }




// function greet(language) {
// 	const lang = {
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//   }
//   return lang[language] ? lang[language] : lang['english']
// }
// console.log(greet())
// console.log(greet('finnish'))


//
////
//////
//Pre-FizzBuzz Workout #1-------------------------------------------------------------------------------------
//////
////
//


// DESCRIPTION:
// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// function preFizz(n) {
//   let newArr = []
//   for(let i = 1; i <= n; i++){
//     newArr.push(i)
//   }
//   return newArr
// }