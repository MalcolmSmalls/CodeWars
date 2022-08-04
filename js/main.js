// Sum without highest and lowest number
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

//Input validation
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {
//     let newArray = array.sort((a,b)=>a-b)
//     newArray.shift()
//     newArray.pop()
//     let sum = newArray.reduce((a,c)=>a+c)
//     console.log(sum)
//   }

// function sumArray(array) {
//     if(Array.isArray(array) === false || array.length <= 1) {
//         return 0
//     }else if(array.length > 1){
//         let newArray = array.sort((a,b)=>a-b)
//         newArray.shift()
//         newArray.pop()
//         let sum = newArray.reduce((a,c)=>a+c)
//         console.log(sum)
//     }else{
//         return 0
//     }
// }

//WORKED!

// function sumArray(array) {
//     if(array !== null && array !== undefined && array.length > 2 && Array.isArray(array) === true && array.includes() === false){
//         let newArray = array.sort((a,b)=>a-b) 
//         newArray.shift()
//         newArray.pop()
//         let sum = newArray.reduce((a,c)=>a+c)
//         return sum
//     }else{
//         return 0
//     }
// }

// console.log(sumArray(null))
// console.log(sumArray([ ]))
// console.log(sumArray([ 3 ]))
// console.log(sumArray([ 3, 5 ]))
// console.log(sumArray([ 6, 2, 1, 8, 10 ]))
// console.log(sumArray([ 0, 1, 6, 10, 10 ]))
// console.log(sumArray([ -6, -20, -1, -10, -12 ]))
// console.log(sumArray([ -6, 20, -1, 10, -12 ]))
// let newArray = [0, 1, 6, 10, 10]





  //---------------------------------------------------------------------------------------------------------------------------

// Convert a String to a Number!
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = string => {
    return Number(string)
  }

//   Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// const countSheeps = arrayOfSheep => {
//     let sum = 0
//     arrayOfSheep.forEach(x => {
//         if(x===true){
//             sum += 1
//         }
//     })
//     return sum
//   }


//  let test = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

//   countSheeps(test)




//-------------------------------------------------------------------------------------------------------------

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].




//   const countPositivesSumNegatives = input => {
//     let emptyArr = []
//     let sum = 0
//     let negSum = 0
//     if(input === null || input.length === 0){
//       return []
//     }else if(input.length > 0){
//     input.forEach(num => {
//       if(num > 0){
//         sum++
//       }else if(num < 0){
//         negSum += num
//       }
//     })}
//     emptyArr.unshift(sum, negSum)
//     return emptyArr
//   }

// console.log(countPositivesSumNegatives([]))

//-----------------------------------------------------------------------------------------------------------------------

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// const repeatStr = (n,s) => s.repeat(n)

//--------------------------------------------------------------------------------------------------------------------------------
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// const numberToString = num => num.toString()

//-----------------------------------------------------------------------------------------------------------------------

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// const smash = words => {
//   if(words === null || Array.isArray(words) === false){
//     return ""
//   }else if(words.length === 1){
//     return words.toString()
//   }else if(words.length <= 0){
//     return ""
//   }else{
//     return words.join(" ").trim()
//   }
// }

//-------------------------------------------------------------------------------------------------------------------------

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// const digits = n => n.toString().split("").length

// console.log(digits(433324))

//--------------------------------------------------------------------------------------------------------------------------------

// In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

// For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

// Notes:

// Messages are composed of only letters and digits
// Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
// Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
// If the message is an empty string, you should return true



// function isAValidMessage(message){
//   let splitArray = message.replaceAll(/([0-9])/g , " ").replaceAll("  "," ").trim().split(" ")
//   let numArray = message.replaceAll(/([a-z])/g, " ").replaceAll("  "," ").trim().split(" ").filter(Boolean)
//   let checkArray = message.split("")
//   if(checkArray[1] !== /([0-9])/g){
//     return false
//   }else if(numArray.length !== splitArray.length){
//     return false
//   }else if(numArray.length === splitArray.length){
//     for(i=0; i < splitArray.length; i++){
//       if(numArray[i] == splitArray[i].length){
//         return true
//       }
//     }
//   }
// }


// THIS WORKS!
// function isAValidMessage(message){
//   let splitArray = message.replace(/([0-9])/g , " ").replace(/([" "])/g," ").trim().split(" ").filter(Boolean)
//   let numArray = message.replace(/([a-z])/g, " ").replace(/([" "])/g," ").trim().split(" ").filter(Boolean)
//   let checkArray = message.split("")
//   console.log(splitArray)
//   console.log(numArray)
//   checkArray = Number(checkArray[0])
//   if(message === ""){
//     return true
//   }else if(Number.isInteger(checkArray) === false){
//     return false
//   }else if(numArray.length !== splitArray.length){
//     return false
//   }else if(numArray.length === splitArray.length){
//     for(i=0; i < splitArray.length; i++){
//       if(numArray[i] == splitArray[i].length){
//         return true
//       }
//     }
//   }
// }
//   let wordArray = []

//   console.log(isAValidMessage("4code13hellocodewars"))

//THIS AIN"T WORK

//function isAValidMessage(message){
  // your code
//   if (!message) return true

//   while (message.length > 0) {
//     let num = parseInt(message);
  
//     if (isNaN(num)) return false;
    
//     message = message.slice((num + "").length);
    
//     let str = message.slice(0, num);
//     let regex = RegExp('^[a-zA-Z]{' + num + '}$')
    
//     if (!regex.test(str)) return false;
    
//     message = message.slice(num);
//   }
//   return true;
// }

// let testArr = ["1", "2", "r", "s"]


/// what i wanna do is separate the numbers from integers and store into another variable, and do the same for the string or word then compare the length of the string to the number 




// const bmi = (weight,height) => {
// 	let results = weight / (height**2)
// 	return results <= 18.5 ? "Underweight" :
// 	results <= 25.0 ? "Normal" :
// 	results <= 30.0 ? "Overweight" : "Obese"
// }

// console.log(bmi(80,1.80))


//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


// const invert = array => {
//   let newArr = []
// 	array.forEach(x => {
// 	if(Math.sign(x) === 1 || Math.sign(x) === 0){
// 	newArr.push(-x)
// 	}else if(Math.sign(x) === -1){
// 	newArr.push(Math.abs(x))
// 	}else if(array === []){
// 	return []
// 	}})
//   return newArr
// } 

// console.log(invert([1,2,3,4,5]))

//-----------------------------------------------------------------------------------------------------------


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   return str.split("").reverse().join("").split(" ").reverse().join(" ")
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."))

//Mumbling-----------------------------------------------------------------------------------------------------------


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



// const accum = s => {
//   let newString = ""
//   s = s.toLowerCase()
//   for(i=0;i<s.length;i++){
//     newString += `${s[i].repeat(i+1)} `
//   }
//   let newArr = newString.trim().split(" ")
//   for(i=0;i<newArr.length;i++){
//     newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substring(1);
//   }
//   let newNewString = newArr.join("-")
//   return newNewString
// }



// // MOST CLEVER SOLUTION
// // function accum(s) {
// //   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// // }


// console.log(accum("ZpglnRxqenU"))

// Categorize New Member

//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = data => {
  data.forEach((age, i) => {
    if(age[1][i] < 55){ 
      console.log('Open')
    }else{
      console.log('Senior')
    }
  })
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))