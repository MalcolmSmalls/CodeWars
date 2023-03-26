// Determine offspring sex based on genes XX and XY chromosomes

// Take in a str. If XX = female, if XY = male. What if the string is neither, or if it is YY ?

// create a variable If str === XX return daughter else son
// Return 'Congratulations! You're going to have a ___.

function chromosomeCheck(sperm) {
  const gender = sperm === 'XX' ? 'daughter' : 'son'
  return `Congratulations! You're going to have a ${gender}`
}

// Simple multiplication

// If the input number is even multiply by 8 otherwise, multiply by nine

// Write conditional if % 2 === 0 return num * 8 else num * 9

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9
}

// Find Nearest Square Number

// Take in a number and get the square root of it. Return square root if it's evenly squared, if not round up and down and figure out which one is closet to the target number.

// Math.sqrt a number create a flooredVar and a ceiled version and if num - floored < num -  ceiled return floored, else ceiled

function nearestSq(n) {
  const squareRoot = Math.sqrt(n)
  if (Number.isInteger(squareRoot)) return squareRoot
  const flooredVar = Math.floor(squareRoot)
  const ceiledVar = Math.floor(squareRoot)
  if (squareRoot - flooredVar < ceiledVar - squareRoot) {
    return flooredVar
  } else {
    return ceiledVar
  }
}

// Be Concise I - The Ternary Operator

// TODO: Refactor and shorten the function

var describeAge = (a) =>
  a <= 12
    ? `You're a(n) kid`
    : a >= 13 && a <= 17
    ? `You're a(n) teenager`
    : a >= 18 && a <= 64
    ? `You're a(n) adult`
    : `You're a(n) elderly`

// Power

function numberToPower(number, power) {
  let totalPowered = 1
  for (let i = 0; i < power; i++) {
    totalPowered *= number
  }
  return totalPowered
}

// All Star Code Challenge #18

function strCount(str, letter) {
  let obj = {}
  for (let item of str) {
    obj[item] = (obj[item] || 0) + 1
  }
  for (let key in obj) {
    if (key === letter) {
      return obj[key]
    }
  }
  return 0
}

// ASCII Total

function uniTotal(string) {
  if (string === '') return 0
  let total = 0
  for (let i = 0; i < string.length; i++) {
    total += string.charCodeAt(i)
  }
  return total
}

// Square(n) Sum

function squareSum(numbers) {
  let total = 0
  numbers.forEach((item) => (total += item ** 2))
  return total
}

// Century From Year

function century(year) {
  return Math.ceil(year / 100)
}

// Quarter of the year

const quarterOf = (month) => {
  return Math.ceil(month / 3)
}

// Is n divisible by x and y?

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// Geometry Basics: Distance between points in 2D

function distanceBetweenPoints(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
}

// Even or Odd

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}

// Return to Sanity
function mystery() {
  var results = { sanity: 'Hello' }
  return results
}

// Grasshopper - Terminal Game #1

function Hero(name) {
  this.name = name || 'Hero'
  this.position = '00'
  this.health = 100
  this.damage = 5
  this.experience = 0
}

//Fun with ES6 Classes #1 - People, people, people

class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}

// Reversed Strings

function solution(str) {
  return str.split('').reverse().join('')
}

// Add Length

function addLength(str) {
  let arr = str.split(' ')
  return arr.map((item) => `${item} ${item.length}`)
}

// Convert a Boolean to a String

function booleanToString(b) {
  return b ? 'true' : 'false'
}

// Price of Mangoes

function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price
}

// Unfinished Loop - Bug Fixing #1

function createArray(number) {
  var newArray = []

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter)
  }

  return newArray
}

// The 'if' function

function _if(bool, func1, func2) {
  if (bool) {
    func1()
  } else {
    func2()
  }
}

// Third Angle of a Triangle

function otherAngle(a, b) {
  return 180 - a - b
}

// Reversed Words
function reverseWords(str) {
  return str.split(' ').reverse().join(' ')
}

// Crash Override

function aliasGen(first, last) {
  if (Number.isInteger(+first[0]) || Number.isInteger(+last[0]))
    return 'Your name must start with a letter from A - Z.'
  return `${firstName[first[0].toUpperCase()]} ${
    surname[last[0].toUpperCase()]
  }`
}

// Keep Hydrated!
function litres(time) {
  return Math.floor(0.5 * time)
}

// Filter out the geese
function gooseFilter(birds) {
  return birds.filter(
    (item) =>
      !item.match(
        /^["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]+/
      )
  )
}

// Beginner Series #2 Clock
function past(h, m, s) {
  let totalHrs = h * 3600000
  let totalMins = m * 60000
  let totalSecs = s * 1000
  return totalHrs + totalMins + totalSecs
}

// Invert values

function invert(array) {
  return array.map((item) => Math.abs(item) * -Math.sign(item))
}

// How many lightsabers do you own?

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0
}

// Powers of 2

function powersOfTwo(n) {
  const arr = new Array(n + 1).fill(2, 0, n + 1)

  return arr.map((item, index) => item ** index)
}

// console.log(powersOfTwo(1))

// Vowel remover
function shortcut(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return string
    .split('')
    .filter((item) => !vowels.includes(item))
    .join('')
}

// Beginner - Reduce but Grow

function grow(x) {
  return x.reduce((a, b) => a * b, 1)
}

// Collatz Conjecture (3n+1)

var hotpo = function (n) {
  if (n == 0) return 0 //Optional Handler to n = 0
  let count = 0
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2
      count++
    } else {
      n = n * 3 + 1
      count++
    }
  }
  return count
}

// Cat years, Dog years

var humanYearsCatYearsDogYears = function (humanYears) {
  let total = [humanYears, 0, 0]
  humanYears > 2
    ? (total[1] = (humanYears - 2) * 4 + 9 + 15)
    : humanYears > 1
    ? (total[1] = 15 + 9)
    : (total[1] = 15)
  humanYears > 2
    ? (total[2] = (humanYears - 2) * 5 + 9 + 15)
    : humanYears > 1
    ? (total[2] = 15 + 9)
    : (total[2] = 15)

  return total
}

// Grasshopper - Summation
var summation = function (num) {
  if (num === 0) return num
  return num + summation(num - 1)
}

// Function 2 - squaring an argument
function square(num) {
  return Math.pow(num, 2)
}

// Training JS #7: if..else and ternary operator
function saleHotdogs(n) {
  return n >= 10 ? 90 * n : n >= 5 ? n * 95 : n * 100
}

// Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replaceAll(/[!]/g, '')
}

console.log(removeExclamationMarks('hey!'))

// Pythagorean Triple

function isPythagoreanTriple(integers) {
  let newArr = [integers[0] ** 2, integers[1] ** 2, integers[2] ** 2].sort(
    (a, b) => a - b
  )
  let left = 0
  let right = newArr.length - 1
  while (left < right) {
    let target = newArr[left] + newArr[right]
    if (newArr.includes(target)) {
      return true
    } else if (target < newArr[left]) {
      left++
    } else {
      right--
    }
  }
  return false
}

// Training JS #1: create your first JS function and print "Hello World!"
function helloWorld() {
  const str = 'Hello World!'
  console.log(str)
}

// Enumerable Magic #4 - True for None?
function none(arr, fun) {
  return !arr.some(fun)
}

// Find Maximum and Minimum Values of a List

var min = function (list) {
  list.sort((a, b) => a - b)
  return list[0]
}

var max = function (list) {
  list.sort((a, b) => b - a)
  return list[0]
}

// Find Multiples of a Number
function findMultiples(integer, limit) {
  let newArr = []
  let newInt = integer
  while (newInt <= limit) {
    newArr.push(newInt)
    newInt += integer
  }
  return newArr
}

// Regular Ball Super Ball

var Ball = function (ballType) {
  this.ballType = ballType || 'regular'
}

// CSV representation of array

function toCsvText(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i > 0 && j === 0) {
        newArr.push(`\n${array[i][j]}`)
      } else {
        newArr.push(`,${array[i][j]}`)
      }
    }
  }
  return newArr.join('').slice(1)
}

// Grasshopper - Debug sayHello
function sayHello(name) {
  return `Hello, ${name}`
}

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map((item) =>
      item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()
    )
    .join('')
}

//Is it a palindrome?

function isPalindrome(x) {
  return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
}

// Convert a String to a Number!

const stringToNumber = function (str) {
  return +str
}

// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump
}

// Parse nice int from char problem
function getAge(inputString) {
  return +inputString[0]
}

// Safen User Input Part I - htmlspecialchars

function htmlspecialchars(formData) {
  let newStr = ''
  const obj = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;',
  }

  for (let letter of formData) {
    if (Object.hasOwn(obj, letter)) {
      newStr += obj[letter]
    } else {
      newStr += letter
    }
  }
  return newStr
}

// Difference of Volumes of Cuboids

function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, total) => acc * total, 1) -
      b.reduce((acc, total) => acc * total, 1)
  )
}

// String Templates - Bug Fixing #5
function buildString(...template) {
  return `I like ${template.join(', ')}!`
}

// Sum The Strings
function sumStr(a, b) {
  return (+a + +b).toString()
}

// Calculate BMI

function bmi(weight, height) {
  const bmiCalculated = weight / height ** 2
  switch (true) {
    case bmiCalculated <= 18.5:
      return 'Underweight'
    case bmiCalculated <= 25.0:
      return 'Normal'
    case bmiCalculated <= 30.0:
      return 'Overweight'
    case bmiCalculated > 30:
      return 'Obese'
  }
}

// Basic variable assignment
var a = 'code'
var b = 'wa.rs'
var name = a + b

// Switch it Up!
function switchItUp(number) {
  const obj = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  }

  return obj[number]
}

// Grasshopper - Basic Function Fixer
function addFive(num) {
  var total = num + 5
  return total
}

// Keep up the hoop
function hoopCount(n) {
  return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'
}

// Opposites Attract

function lovefunc(flower1, flower2) {
  let oneEven = flower1 % 2 === 0 || flower2 % 2 === 0
  let oneOdd = flower1 % 2 === 0 && flower2 % 2 === 0
  return oneOdd !== oneEven
}

//Grasshopper - Messi Goals

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

//Remove First and Last Character
function removeChar(str) {
  return str
    .split('')
    .slice(1, str.length - 1)
    .join('')
}

// Get the mean of an array
function getAverage(marks) {
  let total = 0
  for (let num of marks) {
    total += num
  }

  return Math.floor(total / marks.length)
}

// Welcome!

function greet(language) {
  const database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  }
  for (let key in database) {
    if (key === language) {
      return database[language]
    }
  }
  return 'Welcome'
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  return `${name} ${
    name[0].toLowerCase() === 'r' ? 'plays' : 'does not play'
  } banjo`
}

// Super Duper Easy
function problem(x) {
  return isNaN(x) || x === '' ? 'Error' : x * 50 + 6
}

// Abbreviate a Two Word Name
function abbrevName(name) {
  let splitName = name.toUpperCase().split(' ')
  return `${splitName[0][0]}.${splitName[1][0]}`
}

// Alan Partridge II - Apple Turnover

function apple(x) {
  return x ** 2 > 1000
    ? `It's hotter than the sun!!`
    : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

// Is there a vowel in there?
function isVow(a) {
  let newArr = []
  const obj = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  }
  for (let code of a) {
    if (obj.hasOwnProperty(code)) {
      newArr.push(obj[code])
    } else {
      newArr.push(code)
    }
  }
  return newArr
}

// My head is at the wrong end!
function fixTheMeerkat(arr) {
  return arr.reverse()
}

// Count the Monkeys!

function monkeyCount(n) {
  return Array(n)
    .fill(0)
    .map((item, index) => index + 1)
}

// Gravity Flip

const flip = (d, a) => {
  return d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
}

//Is the string uppercase?

String.prototype.isUpperCase = function () {
  return this.toUpperCase() == this
}

// Quadratic Coefficients Solver
function quadratic(x1, x2) {
  let b = 0 - x1 - x2
  let c = x1 * x2
  return [1, b, c]
}

//Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  return eval(`${value1}${operation}${value2}`)
}

// You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i + i
}

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return []
  let totalNeg = 0
  let totalPos = 0
  for (let num of input) {
    if (num <= 0) {
      totalNeg += num
    } else {
      totalPos += 1
    }
  }
  return [totalPos, totalNeg]
}

// You only need one - Beginner

function check(a, x) {
  return a.includes(x)
}

// Classic Hello World

class Solution {
  static main() {
    console.log('Hello World!')
  }
}

// Count Odd Numbers below n

function oddCount(n) {
  return Math.floor(n / 2)
}

// OOP: Object Oriented Piracy

function Ship(draft, crew) {
  this.draft = draft
  this.crew = crew
  this.isWorthIt = function () {
    if (this.draft - this.crew * 1.5 > 20) {
      return true
    }
    return false
  }
}

// MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase()
}

// pick a set of first elements
function first(arr, n = 1) {
  return arr.slice(0, n)
}

// Duck Duck Goose

function duckDuckGoose(players, goose) {
  if (goose >= players.length) {
    goose = goose % players.length
  }
  let player = players.at(goose - 1)
  let descriptor = Object.getOwnPropertyDescriptor(player, 'name')
  return descriptor.value
}

// cleaner

function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name
}

// Return the day

function whatday(num) {
  const obj = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  }

  if (num > 7 || num < 1) {
    return 'Wrong, please enter a number between 1 and 7'
  } else {
    return obj[num]
  }
}

// function sumOfDifferences(arr) {
//   let newArr = []
//   arr.sort((a, b) => b - a)
//   if (arr.length % 2 !== 0) {
//     arr.forEach((item, index) => {
//       if (index % 2 !== 0) {
//         newArr.push(item)
//         newArr.push(item)
//       } else {
//         newArr.push(item)
//       }
//     })
//   } else {
//     newArr = [...arr]
//   }
//   let totalArr = []
//   let left = 0
//   let right = left + 1
//   while (right < newArr.length) {
//     totalArr.push(newArr[left] + newArr[right])
//     left = left + 2
//     right = right + 2
//   }
//   return totalArr.reduce((acc, curr) => acc - curr)
// }

// Sum of differences in array

function sumOfDifferences(arr) {
  if (arr.length === 0) return 0
  arr.sort((a, b) => b - a)
  return arr[0] - arr[arr.length - 1]
}

// Calculate average
function findAverage(array) {
  if (!array.length) return 0
  return array.reduce((acc, curr) => acc + curr, 0) / array.length
}

//Will there be enough space?
function enough(cap, on, wait) {
  return cap - on - wait > 0 ? 0 : Math.abs(cap - on - wait)
}

// Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)))
}

// Return Negative
function makeNegative(num) {
  return num < 0 ? num : -num
}

// Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  const colorArr = ['green', 'yellow', 'red', 'green']
  return colorArr[colorArr.indexOf(current) + 1]
}

// Find the Remainder

function remainder(n, m) {
  return Math.max(m, n) % Math.min(m, n)
}

// Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2)
}

// Beginner - Lost Without a Map

function maps(x) {
  return x.map((item) => item * 2)
}

// Calculate Price Excluding VAT

function excludingVatPrice(price) {
  if (price === null) return -1
  let num = +(price / 1.15).toFixed(2)
  return num ? num : 0
}

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length
  )
}

// No Loops 2 - You only need one
function check(a, x) {
  return a.includes(x)
}

// Enumerable Magic - Does My List Include This?
function include(arr, item) {
  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i])
    if (map.has(item)) {
      return true
    }
  }
  return false
}

// Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600)
}

// Training JS #2: Basic data types--Number

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250

function equal1() {
  let a = v1,
    b = v1
  return a + b
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v4, //set number value to a
    b = v2 //set number value to b
  return a - b
}

function equal3() {
  let a = v1, //set number value to a
    b = v5 //set number value to b
  return a * b
}

function equal4() {
  let a = v4, //set number value to a
    b = v5 //set number value to b
  return a / b
}

function equal5() {
  let a = v2, //set number value to a
    b = v4 //set number value to b
  return a % b
}

// What's the real floor?
function getRealFloor(n) {
  return n <= 0 ? n : n > 13 ? n - 2 : n - 1
}

function weatherInfo(temp) {
  var c = convertToCelsius(temp)
  if (c < 0) {
    return c + ' is freezing temperature'
  } else {
    return c + ' is above freezing temperature'
  }
}

// Grasshopper - Debug

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9)
  return celsius
}


// Sum Arrays

// Sum Numbers
function sum (numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
    
};


//Total amount of points

function points(games) {
  let totalX = 0
  games.forEach(item => {
    if(item[0] > item[2]){
      totalX += 3
    }else if(item[0] === item[2]){
      totalX +=  1
    }
  })

  return totalX
}



// Area or Perimeter
const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : l + l + w + w
};

// Training JS #12: loop statement --for..in and for..of


function giveMeFive(obj){
  let newArr = []
  for(let key in obj){
    if(key.length === 5){
      newArr.push(key)
    }
    if(obj[key].length === 5){
      newArr.push(obj[key])
    }
  }
  return newArr
}



// Training JS #10: loop statement --for
function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    }else{
      odd.push(arr[i])
    }
  }
  
  return [odd,even];
}


// The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
}

// if(!isNaN(a) || !isNaN(b)) return -1
// if(a.toUpperCase() === a && b.toUpperCase() === b || a.toLowerCase() === a && b.toLowerCase() === b){
//   return 1
// }else{
//   return 0
// }


// Multiple of index
function multipleOfIndex(array) {
  let newArr = []
  array.forEach((item, index) =>{
    if(item % index === 0){
      newArr.push(item)
    }
  })
  return newArr
}

// Multiplication table for number
function multiTable(number) {
  let str = ''
  for(let i = 1; i <= 10; i++){
    str += `${i} * ${number} = ${number * i}\n`
  }
  return str.slice(0, str.length-1)
}


// Type of sum
function typeOfSum(a, b) {
  return typeof(a+b)
}


// Convert to Binary
function toBinary(n){
  return +n.toString(2)
}


//  I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  let obj = {
    0: "not at all",
    1: 'I love you',
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all"
  }
  if(nbPetals > 6){
    if(nbPetals)
    return obj[nbPetals % 6]
  }
return obj[nbPetals]
}


// Training JS #9: loop statement --while and do..while
function padIt(str,n){
  let newArr = [str]
  while(n > 0){
    newArr.unshift('*')
    n--
    if(n <= 0) break;
    newArr.push('*')
    n--
  }
  return newArr.join('')
}


// Expressions Matter

function expressionMatter(a, b, c) {
  const array = [a+b+c, a*b*c, (a+b)*c, (a*b)+c, a+(b*c), a*(b*c), a*(b+c)]
  return Math.max.apply(null, array)
  
}


// Grasshopper - Terminal game move function
function move (position, roll) {
  return roll * 2 + position
}

// Removing Elements
function removeEveryOther(arr){
  let newArr = []
  arr.map((item, index) => {
    if(index % 2 === 0){
      newArr.push(item)
    }
  })
  return newArr
}

// Pillars

function pillars(numPill, dist, width) {
  if(numPill===1) return 0
  return ((numPill-1) * dist * 100) + ((numPill-2)*width)
}


// DNA to RNA Conversion
function DNAtoRNA(dna) {
  let str = ''
  const obj = {
    G: 'G',
    C: 'C',
    T: 'U',
    A: "A"
  }
  for(let letter of dna){
    str += obj[letter]
  }
  return str
}


// Wilson primes

function amIWilson(p) {
  const primes = [5,13,563]
  return primes.indexOf(p) >= 0 ? true: false
}

// Training JS #8: Conditional statement--switch
function howManydays(month){
  var days;
  switch (month){
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      days = 31
      break
  case 4: case  6: case  9: case  11:
      days = 30
      break
  case 2:
      days = 28
      break
  }
  return days;
}

// Switch/Case - Bug Fixing #6

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': 
      result = value.a + value.b;
      break;
    case'-': 
      result = value.a - value.b;
      break;
    case'/': 
      result = value.a / value.b;
      break;
    case'*': 
      result = value.a * value.b;
      break;
    case'%': 
      result = value.a % value.b;
      break;
    case'^': 
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}




// Is it even?

function testEven(n) {
  return n % 2 === 0
}

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
  return bool ? 'Yes': 'No'
}


// Find the first non-consecutive number

function firstNonConsecutive (arr) {
  let pointer = 0
  let copiedArr = [...arr]
  let consecutiveArr = copiedArr.fill(arr[0]).map((item, index) => item+index)
  for(let i = 0; i < arr.length; i++){
    if(consecutiveArr[i] !== arr[i]) return arr[pointer];
    pointer++

  }
  return null
}


// Returning Strings

function greet(name){
  return `Hello, ${name} how are you doing today?`
}


// Remove duplicates from list
function distinct(a) {
  let newArr = []
  for(let num of a){
    if(!newArr.includes(num)){
      newArr.push(num)
    }
  }
  return newArr
}

//The Wide-Mouthed frog!

function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}


// N-th Power

function index(array, n){
  return !array[n] ? -1 : array[n]**n
}


// Name on billboard

function billboard(name, price = 30){
  let total = 0
  for(let key of name){
    total += price
  }
  return total
} 



//  If you can't sleep, just count sheep!!
var countSheep = function (num){
  let str = ''
  let i = 1
  while(i <= num){
    str += `${i} sheep...`
    i++
  }
    return str
}


// Grasshopper - If/else syntax debug

function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}


 // Grasshopper - Messi goals function

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// To square(root) or not to square(root)

function squareOrSquareRoot(array) {
  return array.map(item => Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : item ** 2)
}


// Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let grade
  let obj = {
    90: 'A',
    80: 'B',
    70: 'C',
    60: 'D',
    0: 'F'
  }
  let avg = (s1 + s2 + s3) / 3
  for(let key in obj){
    if(avg >= key){
      grade = obj[key]
    }
  }
  return grade
}


// Beginner Series #1 School Paperwork

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m
}


// Array plus array

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, curr) => acc+curr, 0)
}


//Grasshopper - Personalized Message

function greet (name, owner) {
  return name === owner ? `Hello boss` : 'Hello guest'
}


// Transportation on vacation
function rentalCarCost(d) {
  let total = d * 40
  console.log(total)
  return d >= 7 ? total - 50 : d >= 3 ? total - 20 : total
}


// Do I get a bonus?


function bonusTime(salary, bonus) { 
  return bonus ? `£${salary * 10}` : `£${salary}`
}


// Get Planet Name By ID
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}


// Grasshopper - Check for factor

function checkForFactor (base, factor) {
  return base % factor === 0
}

// For Twins: 1. Types
function typeValidation(variable, type) {
  return typeof(variable) === type
}

// Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
  return string[string.length-1] === '!' ? string.slice(0,string.length-1) : string
}

// Opposite number

function opposite(number) {
  return(-number);
}


//Basic Training: Add item to an Array

var websites = []
websites.push('codewars')

// Mr. Freeze
Object.freeze(MrFreeze)


// Count by X

function countBy(x, n) {
  let z = [];
  for(let i = x; i <= n * x; i = i + x){
    z.push(i)
  }
  return z;
}


// Convert a string to an array

function stringToArray(string){
  return string.split(' ')
}


// Bin to Decimal

function binToDec(bin){
  return parseInt(bin, 2)
}


// What is between?

function between(a, b) {
  let newArr = []
  while(a <= b){
    newArr.push(a)
    a++
  }
  return newArr
}



// Convert number to reversed array of digits


function digitize(n) {
  return n.toString().split('').map(item => Number(item)).reverse()
}


// Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  return numbers.filter(item => item % divisor === 0)
}

// Short Long Short

function solution(a, b){
  const newArr = []
  if(a.length > b.length){
    newArr.push(a)
    newArr.push(b)
    newArr.unshift(b)
  }else{
    newArr.push(b)
    newArr.push(a)
    newArr.unshift(a)
  }
  return newArr.join('')
}


// Sort and Star

function twoSort(s) {
  return s.sort()[0].split('').join('***')
}


// Sum of positive

function positiveSum(arr) {
  let total = 0
  arr.forEach(item => item > 0 ? total += item: item)
  return total
}


// Contamination #1 -String-

function contamination(text, char){
  const newArr = new Array(text.length)
  return newArr.fill(char,0).join('')
}


// Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

// Double Char 

function doubleChar(str) {
  let newStr = ''
  for(let letter of str){
    newStr += letter
    newStr += letter
  }
  return newStr
  
}