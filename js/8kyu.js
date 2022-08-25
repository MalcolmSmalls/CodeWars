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

