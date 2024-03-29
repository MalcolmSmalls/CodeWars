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
function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

//Total amount of points

function points(games) {
  let totalX = 0
  games.forEach((item) => {
    if (item[0] > item[2]) {
      totalX += 3
    } else if (item[0] === item[2]) {
      totalX += 1
    }
  })

  return totalX
}

// Area or Perimeter
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : l + l + w + w
}

// Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj) {
  let newArr = []
  for (let key in obj) {
    if (key.length === 5) {
      newArr.push(key)
    }
    if (obj[key].length === 5) {
      newArr.push(obj[key])
    }
  }
  return newArr
}

// Training JS #10: loop statement --for
function pickIt(arr) {
  var odd = [],
    even = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }

  return [odd, even]
}

// The Feast of Many Beasts
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  )
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
  array.forEach((item, index) => {
    if (item % index === 0) {
      newArr.push(item)
    }
  })
  return newArr
}

// Multiplication table for number
function multiTable(number) {
  let str = ''
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${number * i}\n`
  }
  return str.slice(0, str.length - 1)
}

// Type of sum
function typeOfSum(a, b) {
  return typeof (a + b)
}

// Convert to Binary
function toBinary(n) {
  return +n.toString(2)
}

//  I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  let obj = {
    0: 'not at all',
    1: 'I love you',
    2: 'a little',
    3: 'a lot',
    4: 'passionately',
    5: 'madly',
    6: 'not at all',
  }
  if (nbPetals > 6) {
    if (nbPetals) return obj[nbPetals % 6]
  }
  return obj[nbPetals]
}

// Training JS #9: loop statement --while and do..while
function padIt(str, n) {
  let newArr = [str]
  while (n > 0) {
    newArr.unshift('*')
    n--
    if (n <= 0) break
    newArr.push('*')
    n--
  }
  return newArr.join('')
}

// Expressions Matter

function expressionMatter(a, b, c) {
  const array = [
    a + b + c,
    a * b * c,
    (a + b) * c,
    a * b + c,
    a + b * c,
    a * (b * c),
    a * (b + c),
  ]
  return Math.max.apply(null, array)
}

// Grasshopper - Terminal game move function
function move(position, roll) {
  return roll * 2 + position
}

// Removing Elements
function removeEveryOther(arr) {
  let newArr = []
  arr.map((item, index) => {
    if (index % 2 === 0) {
      newArr.push(item)
    }
  })
  return newArr
}

// Pillars

function pillars(numPill, dist, width) {
  if (numPill === 1) return 0
  return (numPill - 1) * dist * 100 + (numPill - 2) * width
}

// DNA to RNA Conversion
function DNAtoRNA(dna) {
  let str = ''
  const obj = {
    G: 'G',
    C: 'C',
    T: 'U',
    A: 'A',
  }
  for (let letter of dna) {
    str += obj[letter]
  }
  return str
}

// Wilson primes

function amIWilson(p) {
  const primes = [5, 13, 563]
  return primes.indexOf(p) >= 0 ? true : false
}

// Training JS #8: Conditional statement--switch
function howManydays(month) {
  var days
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31
      break
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break
    case 2:
      days = 28
      break
  }
  return days
}

// Switch/Case - Bug Fixing #6

function evalObject(value) {
  var result = 0
  switch (value.operation) {
    case '+':
      result = value.a + value.b
      break
    case '-':
      result = value.a - value.b
      break
    case '/':
      result = value.a / value.b
      break
    case '*':
      result = value.a * value.b
      break
    case '%':
      result = value.a % value.b
      break
    case '^':
      result = Math.pow(value.a, value.b)
      break
  }
  return result
}

// Is it even?

function testEven(n) {
  return n % 2 === 0
}

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  return bool ? 'Yes' : 'No'
}

// Find the first non-consecutive number

function firstNonConsecutive(arr) {
  let pointer = 0
  let copiedArr = [...arr]
  let consecutiveArr = copiedArr.fill(arr[0]).map((item, index) => item + index)
  for (let i = 0; i < arr.length; i++) {
    if (consecutiveArr[i] !== arr[i]) return arr[pointer]
    pointer++
  }
  return null
}

// Returning Strings

function greet(name) {
  return `Hello, ${name} how are you doing today?`
}

// Remove duplicates from list
function distinct(a) {
  let newArr = []
  for (let num of a) {
    if (!newArr.includes(num)) {
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

function index(array, n) {
  return !array[n] ? -1 : array[n] ** n
}

// Name on billboard

function billboard(name, price = 30) {
  let total = 0
  for (let key of name) {
    total += price
  }
  return total
}

//  If you can't sleep, just count sheep!!
var countSheep = function (num) {
  let str = ''
  let i = 1
  while (i <= num) {
    str += `${i} sheep...`
    i++
  }
  return str
}

// Grasshopper - If/else syntax debug

function checkAlive(health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}

// Grasshopper - Messi goals function

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// To square(root) or not to square(root)

function squareOrSquareRoot(array) {
  return array.map((item) =>
    Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : item ** 2
  )
}

// Grasshopper - Grade book
function getGrade(s1, s2, s3) {
  let grade
  let obj = {
    90: 'A',
    80: 'B',
    70: 'C',
    60: 'D',
    0: 'F',
  }
  let avg = (s1 + s2 + s3) / 3
  for (let key in obj) {
    if (avg >= key) {
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
  return [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0)
}

//Grasshopper - Personalized Message

function greet(name, owner) {
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
function getPlanetName(id) {
  var name
  switch (id) {
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }

  return name
}

// Grasshopper - Check for factor

function checkForFactor(base, factor) {
  return base % factor === 0
}

// For Twins: 1. Types
function typeValidation(variable, type) {
  return typeof variable === type
}

// Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove(string) {
  return string[string.length - 1] === '!'
    ? string.slice(0, string.length - 1)
    : string
}

// Opposite number

function opposite(number) {
  return -number
}

//Basic Training: Add item to an Array

var websites = []
websites.push('codewars')

// Mr. Freeze
Object.freeze(MrFreeze)

// Count by X

function countBy(x, n) {
  let z = []
  for (let i = x; i <= n * x; i = i + x) {
    z.push(i)
  }
  return z
}

// Convert a string to an array

function stringToArray(string) {
  return string.split(' ')
}

// Bin to Decimal

function binToDec(bin) {
  return parseInt(bin, 2)
}

// What is between?

function between(a, b) {
  let newArr = []
  while (a <= b) {
    newArr.push(a)
    a++
  }
  return newArr
}

// Convert number to reversed array of digits

function digitize(n) {
  return n
    .toString()
    .split('')
    .map((item) => Number(item))
    .reverse()
}

// Find numbers which are divisible by given number
function divisibleBy(numbers, divisor) {
  return numbers.filter((item) => item % divisor === 0)
}

// Short Long Short

function solution(a, b) {
  const newArr = []
  if (a.length > b.length) {
    newArr.push(a)
    newArr.push(b)
    newArr.unshift(b)
  } else {
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
  arr.forEach((item) => (item > 0 ? (total += item) : item))
  return total
}

// Contamination #1 -String-

function contamination(text, char) {
  const newArr = new Array(text.length)
  return newArr.fill(char, 0).join('')
}

// Name Shuffler
function nameShuffler(str) {
  return str.split(' ').reverse().join(' ')
}

// Double Char

function doubleChar(str) {
  let newStr = ''
  for (let letter of str) {
    newStr += letter
    newStr += letter
  }
  return newStr
}

// Reversed sequence
const reverseSeq = (n) => {
  let newArr = []
  while (n > 0) {
    newArr.push(n)
    n--
  }
  return newArr
}

// Hex to Decimal

function hexToDec(hexString) {
  return parseInt(hexString, 16)
}

// Take the Derivative
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}

// Get Nth Even Number

function nthEven(n) {
  return n * 2 - 2
}

// Simple validation of a username with regex
function validateUsr(username) {
  let res = /^[a-z1-9_]{4,16}$/
  return res.test(username)
}

// get character from ASCII Value

function getChar(c) {
  return String.fromCharCode(c)
}

// Sum Mixed Array
function sumMix(x) {
  return x.map((item) => Number(item)).reduce((acc, curr) => acc + curr, 0)
}

// Is this my tail?
function correctTail(bod, tail) {
  return bod[bod.length - 1] === tail
}

// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  let newSet = new Set([...arr1, ...arr2])
  return [...newSet].sort((a, b) => a - b)
}

// Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let total = blueStart + redStart - bluePulled - redPulled
  return (blueStart - bluePulled) / total
}

// Fake Binary
function fakeBin(x) {
  let newStr = ''
  for (let num of x) {
    if (num >= 5) {
      newStr += '1'
    } else {
      newStr += '0'
    }
  }
  return newStr
}

// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
  }
}

// Capitalization and Mutability

function capitalizeWord(word) {
  word = word[0].toUpperCase() + word.slice(1)
  return word
}

// Well of Ideas - Easy Version
function well(x) {
  let goodArrayLen = x.filter((item) => item === 'good').length
  return goodArrayLen > 2
    ? 'I smell a series!'
    : goodArrayLen < 3 && goodArrayLen > 0
    ? 'Publish!'
    : 'Fail!'
}

// Jenny's secret message
function greet(name) {
  if (name === 'Johnny') return 'Hello, my love!'
  return 'Hello, ' + name + '!'
}

//  Configure package json for a node application
const configuration = {
  name: 'your-pack-name',
  version: '6.1.3',
}

// Online RPG: player to qualifying stage?

function playerRankUp(points) {
  return points >= 100
    ? 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
    : false
}

// isReallyNaN
const isReallyNaN = (val) => {
  return Number.isNaN(val)
}

// FIXME: Replace all dots

var replaceDots = function (str) {
  let newStr = ''
  for (let char of str) {
    if (char === '.') {
      char = '-'
    }
    newStr += char
  }
  return newStr
}

var replaceDots = function (str) {
  return str.replace(/\./g, '-')
}

// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
function isOpposite(s1, s2) {
  let actualOpposite = ''
  for (let char of s1) {
    if (char.toLowerCase() === char) {
      char = char.toUpperCase()
    } else {
      char = char.toLowerCase()
    }
    actualOpposite += char
  }

  return s1 && s2 ? s2 === actualOpposite : false
}

// Find the position!

function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

// Is he gonna survive?
function hero(bullets, dragons) {
  return bullets >= dragons * 2
}

// Playing with cubes II

class Cube {
  constructor(side) {
    if (!side) {
      this.side = 0
    } else {
      this.side = Math.abs(side)
    }
  }

  getSide() {
    return this.side
  }
  setSide(n) {
    this.side = Math.abs(n)
  }
}

// Rock Paper Scissors!

const rps = (p1, p2) => {
  let beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  }
  if (beats[p1] === p2) {
    return 'Player 1 won!'
  } else if (p1 === p2) {
    return 'Draw!'
  } else {
    return 'Player 2 won!'
  }
}

// Reverse List Order
function reverseList(list) {
  return list.reverse()
}

// L1: Set Alarm

function setAlarm(employed, vacation) {
  return vacation || !employed ? false : true
}

// Compare within margin

function closeCompare(a, b, margin = 0) {
  const newArr = [a, b].sort((a, b) => b - a)
  return margin >= newArr[0] - newArr[1] ? 0 : a < b ? -1 : 1
}

// A wolf in sheep's clothing
function warnTheSheep(queue) {
  const sheepSpot = queue.indexOf('wolf')
  if (sheepSpot === queue.length - 1) {
    return 'Pls go away and stop eating my sheep'
  } else {
    return `Oi! Sheep number ${
      queue.length - (sheepSpot + 1)
    }! You are about to be eaten by a wolf!`
  }
}

// Correct the mistakes of the character recognition software
function correct(string) {
  let fixChars = {
    0: 'O',
    5: 'S',
    1: 'I',
  }
  let newStr = ''
  for (let char of string) {
    if (fixChars[char]) {
      newStr += fixChars[char]
    } else {
      newStr += char
    }
  }
  return newStr
}

// Enumerable Magic #20 - Cascading Subsets

function eachCons(array, n) {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(array.slice(i, i + n))
  }
  return newArr.filter((arr) => arr.length === n)
}

// Welcome to the City
function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// Plural
function plural(n) {
  return n !== 1
}

// 101 Dalmatians - squash the bugs, not the dogs!

function howManyDalmatians(number) {
  var dogs = [
    'Hardly any',
    'More than a handful!',
    "Woah that's a lot of dogs!",
    '101 DALMATIANS!!!',
  ]

  var respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number === 101
      ? dogs[3]
      : dogs[2]

  return respond
}

//Define a card suit
function defineSuit(card) {
  const obj = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  }
  return obj[card[card.length - 1]]
}

// Freudian translator

function toFreud(string) {
  const reg = /[A-Z'a-z]+/gm
  return string.replace(reg, 'sex')
}

// String cleaning
function stringClean(s) {
  let reg = /[0-9]/gm
  return s.replace(reg, '')
}

// Fundamentals: Return

function add(a, b) {
  return a + b
}

function divide(a, b) {
  return a / b
}

function multiply(a, b) {
  return a * b
}

function mod(a, b) {
  return a % b
}

function exponent(a, b) {
  return Math.pow(a, b)
}

function subt(a, b) {
  return a - b
}

// Stringy Strings
function stringy(size) {
  let newStr = ''
  while (size > 0) {
    newStr += 1
    size--
    if (size === 0) break
    newStr += 0
    size--
  }
  return newStr
}

// Help the Elite Squad of Brazilian forces BOPE

function magNumber(info) {
  let obj = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  }

  return Math.ceil((info[1] * 3) / obj[info[0]])
}

// Lario and Muigi Pipe Problem

function pipeFix(numbers) {
  let start = numbers[0]
  let end = numbers[numbers.length - 1]
  let newArr = []
  while (start <= end) {
    newArr.push(start)
    start++
  }
  return newArr
}

// Decibel Scale

function dBScale(intensity) {
  return 10 * Math.log10(intensity / Math.pow(10, -12))
}

// Aspect Ratio Cropping - Part 1

function aspectRatio(x, y) {
  return [Math.ceil((y * 16) / 9), y]
}

// Semi-Optional
function wrap(value) {
  return { value: value }
}

// USD => CNY

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

// Is the date today
function isToday(date) {
  const d = new Date()
  return date.getYear() === d.getYear() && date.getDate() === d.getDate()
}

// Sentence Smash

function smash(words) {
  return words.join(' ')
}

// Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
  let newArr = []
  arr.map((item, index) => {
    if (index < n) {
      newArr.push(item)
    }
  })
  return newArr
}

// Hello, Name or World!

function hello(name) {
  return `Hello, ${
    name ? name[0].toUpperCase() + name.substring(1).toLowerCase() : 'World'
  }!`
}

// A Strange Trip to the Market
function isLockNessMonster(s) {
  return (
    s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')
  )
}

// Add new item (collections are passed by reference)
function addExtra(listOfNumbers) {
  let newArr = [...listOfNumbers]
  newArr.push(1)
  return newArr
}

// Sum of Multiples
function sumMul(n, m) {
  if (m <= n) return 'INVALID'
  let total = n
  const multiple = n
  while (n < m) {
    n += multiple
    if (n > m) break
    total += n
  }
  return total
}

// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

function remove(string) {
  let reg = /!/gm
  return `${string.replace(reg, '')}!`
}

// A Needle in the Haystack
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

function remove(string) {
  let newStr = string
  while (newStr.endsWith('!')) {
    newStr = newStr.slice(0, newStr.length - 1)
  }
  return newStr
}

// Student's Final Grade
function finalGrade(exam, projects) {
  if (projects > 10) return 100
  if (exam > 90) return 100
  let total = 0
  const grades = {
    100: [90, 10],
    90: [75, 5],
    75: [50, 2],
  }

  for (let key in grades) {
    if (exam > grades[key][0] && projects >= grades[key][1]) {
      total = key
    }
  }
  return Number(total)
}

// BASIC: Making Six Toast.
function sixToast(num) {
  return num > 6 ? num - 6 : 6 - num
}

// Drinks about

function peopleWithAgeDrink(old) {
  let str = ''
  let ageLimits = {
    0: 'drink toddy',
    14: 'drink coke',
    18: 'drink beer',
    21: 'drink whisky',
  }
  for (let key in ageLimits) {
    if (old >= key) {
      str = ageLimits[key]
    }
  }
  return str
}

// Grasshopper - Variable Assignment Debug

var a = 'dev'
var b = 'Lab'

var name = a + b

// Return Two Highest Values in List

function twoHighest(arr) {
  if (!arr.length) return []
  const sortedArr = arr.sort((a, b) => a - b)
  let resultsArr = [sortedArr[sortedArr.length - 1]]
  let index = sortedArr.length - 1
  while (resultsArr.length === 1 && index >= 0) {
    if (sortedArr[index] !== resultsArr[0]) {
      resultsArr.push(sortedArr[index])
    }
    index--
  }
  return resultsArr
}

function twoHighest2(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}

// Kata Example Twist

var websites = []
while (websites.length !== 1000) {
  websites.push('codewars')
}

// Did she say hallo?
function validateHello(greetings) {
  const res = /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/gim.test(greetings)
  return res
}

// Ensure question
function ensureQuestion(s) {
  return s[s.length - 1] === '?' ? s : `${s}?`
}

// How old will I be in 2099?
function calculateAge(birthYear, currentYear) {
  if (birthYear > currentYear) {
    const years = birthYear - currentYear
    return `You will be born in ${years} year${years === 1 ? '' : 's'}.`
  }
  if (birthYear === currentYear) return 'You were born this very year!'
  const years = currentYear - birthYear
  return `You are ${years} year${years === 1 ? '' : 's'} old.`
}

// Grasshopper - Function syntax debugging
function main(verb, noun) {
  return verb + noun
}

// Remove First and Last Character Part Two

function array(arr) {
  const newArr = arr.split(',')
  if (newArr.length < 3) return null
  newArr.pop()
  newArr.shift()
  return newArr.join(' ')
}

// Generate range of integers
function generateRange(min, max, step) {
  const newArr = []
  for (let i = min; i <= max; i = i + step) {
    newArr.push(i)
  }
  return newArr
}

// Do you speak "English"?

function spEng(sentence) {
  return sentence.match(/English/gi) ? true : false
}

// Swap Values
function swapValues(args) {
  var temp = args[0]
  args[0] = args[1]
  args[1] = temp
}

// Template Strings
var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`
}

//  UEFA EURO 2016

function uefaEuro2016(teams, scores) {
  let obj = {
    draw: `At match ${teams[0]} - ${teams[1]}, teams played draw.`,
    win: `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`,
    lose: `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`,
  }

  return scores[0] > scores[1]
    ? obj.win
    : scores[0] < scores[1]
    ? obj.lose
    : obj.draw
}

// Incorrect division method
const solve = (x, y) => x / y

// L1: Bartender, drinks!
function getDrinkByProfession(param) {
  let obj = {
    jabroni: 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    programmer: 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    politician: 'Your tax dollars',
    rapper: 'Cristal',
  }
  return obj[param.toLowerCase()] ? obj[param.toLowerCase()] : 'Beer'
}

// Smallest unused ID

function nextId(ids) {
  let sortedArr = ids.sort((a, b) => a - b)
  sortedArr = [...new Set(sortedArr)]
  let uniqueId = 0
  let last = sortedArr[sortedArr.length - 1]
  for (let i = 0; i <= last; i++) {
    if (sortedArr[i] !== i) {
      uniqueId = i
      return uniqueId
    }
  }
  return last + 1
}

// Better Solution
function nextId(ids) {
  var x = 0
  while (ids.includes(x)) x++
  return x
}

// Are arrow functions odd?
function odds(values) {
  // arrow it
  return values.filter((item) => item % 2 !== 0)
}

// NBA full 48 minutes average
function pointsPer48(ppg, mpg) {
  return Number(((48 / mpg) * ppg).toFixed(1)) || 0
}

// Dollars and Cents

function formatMoney(amount) {
  return `$${(Math.round(amount * 100) / 100).toFixed(2)}`
}

// The falling speed of petals

function sakuraFall(v) {
  return v < 1 ? 0 : 400 / v
}

// SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
  const helper = (arr) =>
    arr
      .map((item) => (arr === a ? item ** 2 : item ** 3))
      .reduce((acc, curr) => acc + curr, 0)
  return helper(a) > helper(b)
}

// Grasshopper - Create the rooms
var rooms = {
  name: { room1: 'cool', room2: 'lasers', room3: 'gameroom' },
  description: { room1: 'black', room2: 'pink', room3: 'cyan' },
  completed: { room1: false, room2: true, room3: false },
}

// Polish alphabet
function correctPolishLetters(string) {
  let newStr = ''
  let obj = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  }
  for (let letter of string) {
    if (obj[letter]) {
      newStr += obj[letter]
    } else {
      newStr += letter
    }
  }
  return newStr
}

// Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages) {
  ages.sort((a, b) => a - b)
  let newArr = [ages[0], ages[ages.length - 1]]
  return [...newArr, newArr[1] - newArr[0]]
}

// get ascii value of character
function getASCII(c) {
  return c.charCodeAt(0)
}

// Triple Trouble

function tripleTrouble(one, two, three) {
  let newStr = ''
  for (let i = 0; i < one.length; i++) {
    newStr += `${one[i]}${two[i]}${three[i]}`
  }
  return newStr
}

// No zeros for heros
function noBoringZeros(n) {
  let index = n.toString().length - 1
  while (n.toString()[index] === '0') {
    index--
  }
  return Number(n.toString().substring(0, index + 1))
}

// Tip Calculator

function calculateTip(amount, rating) {
  let tip = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  }
  return tip[rating.toLowerCase()] === undefined
    ? 'Rating not recognised'
    : Math.ceil(amount * tip[rating.toLowerCase()])
}

// Draw stairs
function drawStairs(n) {
  let newStr = ''
  let stair = 'I'
  for (let i = 0; i < n; i++) {
    if (i === 0 && n === 1) {
      newStr += 'I'
    } else {
      newStr += `${stair.padStart(i + 1, ' ')}`
      if (i !== n - 1) {
        newStr += '\n'
      }
    }
  }
  return newStr
}

// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
var quote = function (fighter) {
  let obj = {
    'conor mcgregor':
      "I'd like to take this chance to apologize.. To absolutely NOBODY!",
    'george saint pierre': 'I am not impressed by your performance.',
  }
  return obj[fighter.toLowerCase()]
}

// Find the Integral
function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`
}

// Surface Area and Volume of a Box
function getSize(width, height, depth) {
  let area = 2 * (depth * width + depth * height + height * width)
  let volume = width * height * depth
  return [area, volume]
}

// 8kyu interpreters: HQ9+
function HQ9(code) {
  if (code === 'H') return 'Hello World!'
  if (code === 'Q') return code
  if (code !== '9') return
  let newStr = ''
  for (let i = 99; i > -1; i--) {
    if (i !== 0 && i !== 1 && i !== 2) {
      newStr += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${
        i - 1
      } bottles of beer on the wall.\n`
    } else if (i === 2) {
      newStr += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${
        i - 1
      } bottle of beer on the wall.\n`
    } else if (i === 1) {
      newStr += `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
    } else {
      newStr += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    }
  }
  return newStr
}

// Grasshopper - Terminal game combat function
function combat(health, damage) {
  return damage > health ? 0 : health - damage
}

// Who is going to pay for the wall?
function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name]
}

// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s, n) {
  let newStr = ''
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (count >= n) {
      newStr += s[i]
    } else {
      if (s[i] === '!') {
        count++
      } else {
        newStr += s[i]
      }
    }
  }

  return newStr
}

// Training JS #5: Basic data types--Object

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

// Enumerable Magic #2 - True for Any?

function any(arr, fun) {
  return arr.some(fun)
}

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s) {
  let reg = /[aeiou]/gi
  return s.replace(reg, '!')
}

// Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n) {
  let newArr = n.toString().split('.')
  if (newArr[0].length === newArr[1].length) return Math.round(n)
  if (Number(newArr[0]) < Number(newArr[1]) && newArr[1].length !== 1)
    return Math.ceil(n)
  return Math.floor(n)
}

// easy logs
function logs(x, a, b) {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)
}

// Quadrants
function quadrant(x, y) {
  let obj = {
    1: [1, 1],
    2: [-1, 1],
    3: [-1, -1],
    4: [1, -1],
  }
  for (let key in obj) {
    if (
      Math.sign(x) === Math.sign(obj[key][0]) &&
      Math.sign(y) === Math.sign(obj[key][1])
    ) {
      return Number(key)
    }
  }
}

// Coding 3min : Jumping Dutch act

function sc(floor) {
  if (floor > 6) return `${'Aa~ '.repeat(floor - 1)}Pa!`
  if (floor <= 1) return ''
  return `${'Aa~ '.repeat(floor - 1)}Pa! Aa!`
}

// Sleigh Authentication
Sleigh.prototype.authenticate = function (name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!'
}

// Who Ate The Cookie?

function cookie(x) {
  const helper = (name) => `Who ate the last cookie? It was ${name}!`
  if (typeof x === 'string') return helper('Zach')
  if (typeof x === 'number') return helper('Monica')
  return helper('the dog')
}

function helloWorld(name) {
  return 'Hello ' * name
}

// Potenciation
function power(x, y) {
  return x ** y
}

// Remove the time

function shortenToDate(longDate) {
  return longDate.split(',')[0]
}

// Geometry Basics: Circle Circumference in 2D

function circleCircumference(circle) {
  return 2 * circle.radius * Math.PI
}

// Basic subclasses - Adam and Eve

class Human {}

class Man extends Human {}

class Woman extends Human {}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()]
  }
}
// code

// Geometry Basics: Circle Area in 2D
function circleArea(circle) {
  return Math.PI * circle.radius ** 2
}

// !a == a ?!
const a = []

// Is integer safe to use?

function SafeInteger(n) {
  return n < Number.MAX_SAFE_INTEGER
}

// Grasshopper - Bug Squashing
var health = 100
var position = 0
var coins = 0

function main() {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

// simple calculator
function calculator(a, b, sign) {
  const signs = ['+', '-', '*', '/']
  return signs.includes(sign) && typeof a === 'number' && typeof b === 'number'
    ? eval(`${a}${sign}${b}`)
    : 'unknown value'
}

// Classy Classes

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  get info() {
    return `${this.name}s age is ${this.age}`
  }
}

// Age Range Compatibility Equation

function datingRange(age) {
  let min = 0
  let max = 0
  if (age > 14) {
    min = Math.floor(age / 2 + 7)
    max = Math.floor((age - 7) * 2)
  } else {
    min = Math.floor(age - 0.1 * age)
    max = Math.floor(age + 0.1 * age)
  }
  return `${min}-${max}`
}

// Grader
function grader(score) {
  let obj = {
    0.9: 'A',
    0.8: 'B',
    0.7: 'C',
    0.6: 'D',
  }
  for (let key in obj) {
    if (score >= key && score <= 1) {
      return obj[key]
    }
  }
  return 'F'
}

// Broken Counter

function Counter() {
  this.value = 0
}

Counter.prototype.increase = function () {
  this.value++
}

Counter.prototype.getValue = function () {
  return this.value
}

Counter.prototype.reset = function () {
  this.value = 0
}

// Grasshopper - Terminal Game Turn Function
function doTurn() {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

// Multiply the number
function multiply(number) {
  return number * 5 ** Math.abs(number).toString().length
}

// Evil or Odious
function evil(n) {
  let count = n
    .toString(2)
    .split('')
    .filter((item) => item === '1').length
  return count % 2 === 0 ? "It's Evil!" : "It's Odious!"
}

// Simple Fun #261: Whose Move

function whoseMove(lastPlayer, win) {
  return win === true ? lastPlayer : lastPlayer === 'white' ? 'black' : 'white'
}

// Finish Guess the Number Game
class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }

  guess(n) {
    if (this.lives === 0) throw new Error()
    if (n === this.number) return true
    this.lives--
    return false
  }
}

// Push a hash/an object into array
items = []
items.push({ a: 'b', c: 'd' })

// Reversing Words in a String
function reverse(string) {
  return string.split(' ').reverse().join(' ')
}

// Fix the Bugs (Syntax) - My First Kata
function myFirstKata(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false
  } else {
    return (a % b) + (b % a)
  }
}

// Get number from string
function getNumberFromString(s) {
  const numsArray = s.split('').filter((item) => Number(item) || item === '0')
  return Number(numsArray.join(''))
}

// validate code with simple regex

function validateCode(code) {
  return /^[123]/.test(code)
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val) {
  if (val) {
    return 'true'
  } else {
    return 'false'
  }
}

// Simple Comparison?

function add(a, b) {
  return a == b
}

// Grasshopper - Combine strings
function combineNames(first, last) {
  return `${first} ${last}`
}

// Days in the year
function yearDays(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} has 366 days`
      } else {
        return `${year} has 365 days`
      }
    }
    return `${year} has 366 days`
  } else {
    return `${year} has 365 days`
  }
}

// Formatting decimal places #0
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2))
}

// Printing Array elements with Comma delimiters
function printArray(array) {
  return array.join(',')
}

// Fuel Calculator: Total Cost

function fuelPrice(litres, pricePerLitre) {
  const discounts = {
    2: 0.05,
    4: 0.1,
    6: 0.15,
    8: 0.2,
    10: 0.25,
  }
  let discount
  for (let key in discounts) {
    if (litres >= key) {
      discount = discounts[key]
    }
  }
  return Number(((pricePerLitre - discount) * litres).toFixed(2))
}

// Leonardo Dicaprio and Oscars

function leo(oscar) {
  switch (true) {
    case oscar === 88:
      return 'Leo finally won the oscar! Leo is happy'
    case oscar === 86:
      return 'Not even for Wolf of wallstreet?!'
    case oscar > 88:
      return 'Leo got one already!'
    case oscar < 88:
      return 'When will you give Leo an Oscar?'
  }
}

// Find the Slope

function slope(points) {
  const results = (points[3] - points[1]) / (points[2] - points[0])
  return isFinite(results) ? `${results}` : 'undefined'
}

// Arguments to Binary addition

function arr2bin(arr) {
  let sum = 0
  arr.forEach((element) => {
    if (typeof element === 'number') {
      sum += element
    }
  })
  return sum.toString(2)
}

// Training JS #34: methods of Math---pow() sqrt() and cbrt()

function cutCube(volume, n) {
  return (
    Number.isInteger(Math.cbrt(n)) &&
    volume % n === 0 &&
    Number.isInteger(Math.cbrt(volume))
  )
}

// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array"
  if (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) return "It's a black array"
  return "It's a white array"
}

// Training JS #29: methods of arrayObject---concat() and join()

function bigToSmall(arr) {
  const newArr = [].concat(...arr)
  return newArr.sort((a, b) => b - a).join('>')
}

// Training JS #21: Methods of String object--trim() and the string template
function fiveLine(s) {
  let newStr = ''
  for (let i = 1; i <= 5; i++) {
    if (i > 1) {
      newStr += '\n'
    }
    newStr += `${s.trim().repeat(i)}`
  }
  return newStr
}

// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(str, c) {
  if (str.indexOf(c) < 0) return -1
  return str.lastIndexOf(c) - str.indexOf(c)
}

// Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr) {
  let smallest = Infinity
  arr.forEach((item) =>
    item.length < smallest ? (smallest = item.length) : null
  )
  return arr.map((item) => item.slice(0, smallest))
}

// Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(r, g, b) {
  let str = ''
  Array.from([r, g, b]).forEach((element, index) => {
    if (element.toString(16).length === 1) {
      if (index === 5) {
        str += `${element.toString(16)}`
      } else {
        str += `0${element.toString(16)}`
      }
    } else {
      str += `${element.toString(16)}`
    }
  })

  return `#${str}`
}

// Training JS #13: Number object and its properties

function whatNumberIsIt(n) {
  if (n === Number.NEGATIVE_INFINITY)
    return 'Input number is Number.NEGATIVE_INFINITY'
  if (n === Number.POSITIVE_INFINITY)
    return 'Input number is Number.POSITIVE_INFINITY'
  if (n >= Number.MAX_VALUE) return 'Input number is Number.MAX_VALUE'
  if (n <= Number.MIN_VALUE && n !== 0)
    return 'Input number is Number.MIN_VALUE'
  if (isNaN(n)) return 'Input number is Number.NaN'
  return `Input number is ${n}`
}

// Training JS #11: loop statement --break,continue

function grabDoll(dolls) {
  var bag = []
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length === 3) break
    if (dolls[i] !== 'Hello Kitty' && dolls[i] !== 'Barbie doll') {
      continue
    }
    bag.push(dolls[i])
  }
  return bag
}

// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
function howManySmaller(arr, n) {
  let total = 0
  arr.forEach((item) => (item.toFixed(2) < n ? total++ : null))
  return total
}

//  noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)
function greaterThanLessThan(a, b, c) {
  return a < b < c
}

// Training JS #4: Basic data types--Array
function getLength(arr) {
  return arr.length
}
function getFirst(arr) {
  return arr.shift()
}
function getLast(arr) {
  return arr.pop()
}
function pushElement(arr) {
  var el = 1
  arr.push(el)
  return arr
}
function popElement(arr) {
  arr.pop()
  return arr
}

//  Training JS #3: Basic data types--String

var a1 = 'A',
  a2 = 'a',
  b1 = 'B',
  b2 = 'b',
  c1 = 'C',
  c2 = 'c',
  d1 = 'D',
  d2 = 'd',
  e1 = 'E',
  e2 = 'e',
  n1 = 'N',
  n2 = 'n'
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return 'no'
}
function answer2() {
  //the answer should be "yes" or "no"
  return 'no'
}
function answer3() {
  //the answer should be "yes" or "no"
  return 'yes'
}

// Blood-Alcohol Content
function bloodAlcoholContent(drinks, weight, sex, time) {
  const multiplier = sex === 'male' ? 0.73 : 0.66
  return Number(
    (
      ((drinks['ounces'] * drinks['abv'] * 5.14) / weight) * multiplier -
      0.015 * time
    ).toFixed(4)
  )
}

// Fix your code before the garden dies!
function rainAmount(mm) {
  if (mm < 40) {
    return 'You need to give your plant ' + (40 - mm) + 'mm of water'
  } else {
    return 'Your plant has had more than enough water for today!'
  }
}

// Count words

function countWords(str) {
  if (str.includes('﻿'))
    return str
      .trim()
      .split('﻿')
      .filter((item) => item.length > 0).length
  return str
    .trim()
    .split(' ')
    .filter((item) => item.length > 0).length
}

// Not so black box

JSopenSesame()

// Circular Objects #1 - Running around in circles
circular = { value: 'Hello World' }
circular.self = circular

// Generate user links
function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}

// Be Concise III - Sum Squares
function sumSquares(array) {
  return array.reduce((acc, curr) => acc + curr ** 2, 0)
}

// Be Concise II - I Need Squares
function squaresOnly(array) {
  return array.filter((num) => Number.isInteger(Math.sqrt(num)))
}

// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender)
    this.size = 'Large'
    this.species = 'Labrador'
    this.loyal = true
    this.master = master
  }
}

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true)
  }
}

// Do something "n.times" (Simplifying "for" loops)

Number.prototype.times = function (f) {
  for (let i = 0; i < Number(this); i++) {
    f(i)
  }
}

// Implement Array.prototype.filter()
Array.prototype.filter = function (func) {
  let newArr = []
  this.forEach((item) => (func(item) ? newArr.push(item) : null))
  return newArr
}

// Grasshopper - Object syntax debug
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient',
    },
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water',
    },
  },
}

// Job Matching #1

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw new Error()
  return job.maxSalary >= candidate.minSalary - candidate.minSalary * 0.1
}

// Improving Math.round(x)

Math.roundTo = function (number, precision) {
  return +number.toFixed(precision)
}

// Regex count lowercase letters
function lowercaseCount(str) {
  let count = 0
  for (let key of str) {
    if (key.charCodeAt(0) > 96 && key.charCodeAt(0) < 123) {
      count++
    }
  }
  return count
}

// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

function yourFutureCareer() {
  var career = Math.random()
  if (career <= 0.32) {
    return 'FrontEnd Developer'
  } else if (career <= 0.65) {
    return 'BackEnd Developer'
  } else {
    return 'Full-Stack Developer'
  }
}

yourFutureCareer()

// Grasshopper - Order of operations
function orderOperations() {
  return (2 + 2) * (2 + 2) * 2
}

// Find variable which breaks strict comparison!

function findStrangeValue() {
  return NaN
}

// Invalid Login - Bug Fixing #11
function validate(username, password) {
  if (/[/|]/g.test(password)) return 'Wrong username or password!'
  var database = new Database()
  return database.login(username, password)
}

// Grasshopper - Array Mean
var findAverage = function (nums) {
  return nums.reduce((acc, curr) => acc + curr, 0) / nums.length
}

// Lexical this

var Person = function () {
  var person = {
    _name: 'Leroy',
    _friends: [],
    fillFriends(f) {
      this._friends = [].concat(...arguments)
    },
  }
  return person
}

// Are there any arrows left?
function anyArrows(arrows) {
  return arrows.some((item) => !item.damaged)
}

// Take an Arrow to the knee, Functionally
var ArrowFunc = function (arr) {
  return arr.map((element) => String.fromCharCode(element)).join('') //Complete this function
}

// Barking mad

function Dog(breed) {
  this.breed = breed
  this.bark = function () {
    return 'Woof'
  }
}

var snoopy = new Dog('Beagle')

snoopy.bark = function () {
  return 'Woof'
}

var scoobydoo = new Dog('Great Dane')

// "this" is a problem
function NameMe(first, last) {
  this.firstName = first
  this.lastName = last
  this.name = `${first} ${last}`
}

// Hello Happy Codevarrior!
function Warrior(n) {
  this.name = function (name) {
    if (name) {
      n = name
      return name
    } else {
      return n
    }
  }
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.name()
}

// Color Ghost

var Ghost = function () {
  this.colors = ['white', 'yellow', 'purple', 'red']
  this.color = this.colors[Math.floor(Math.random() * 5)]
}

// Max Headroom and JavaScript style
function getMax1() {
  var max = { name: 'Max Headroom' }
  return max
}

function getMax2() {
  return { name: 'Max Headroom' }
}

// Shifty Closures

var greet_abe = function () {
  let name = 'Abe'
  return 'Hello, ' + name + '!'
}

var greet_ben = function () {
  let name = 'Ben'
  return 'Hello, ' + name + '!'
}

// Miles per gallon to kilometers per liter

function converter(mpg) {
  return +((mpg * 1.609344) / 4.54609188).toFixed(2)
}

// How much water do I need?
function howMuchWater(water, load, clothes) {
  if (clothes > load * 2) return 'Too much clothes'
  if (clothes < load) return 'Not enough clothes'
  return +(water * 1.1 ** (clothes - load)).toFixed(2)
}

// Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map((item) => item.split('').join(separator))
    .join(' ')
}

// Closest elevator

function elevator(left, right, call) {
  if (!right && !left) return 'right'
  return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right'
}

// Is your period late?
function periodIsLate(last, today, cycleLength) {
  return today - last > cycleLength * 86400000
}

// Simple Change Machine

function changeMe(moneyIn) {
  let obj = {
    '20p': ['10p', '10p'],
    '50p': ['20p', '20p', '10p'],
    '£1': ['20p', '20p', '20p', '20p', '20p'],
    '£2': [
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
    ],
    '£5': [
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
      '20p',
    ],
  }
  return obj[moneyIn] ? obj[moneyIn].join(' ') : moneyIn
}

// const obj = {
//   1:'kiwi', 2:'pear', 3:'kiwi', 4:'banana', 5:'melon', 6:'banana', 7:'melon',
//   8:'pineapple', 9:'apple', 10:'pineapple', 11:'cucumber', 12:'pineapple',
//   13:'cucumber', 14:'orange', 15:'grape', 16:'orange', 17:'grape', 18:'apple',
//   19:'grape', 20:'cherry', 21:'pear', 22:'cherry', 23:'pear', 24:'kiwi', 25:'banana',
//   26:'kiwi', 27:'apple', 28:'melon', 29:'banana', 30:'melon', 31:'pineapple',
//   32:'melon', 33:'pineapple', 34:'cucumber', 35:'orange', 36:'apple', 37:'orange',
//   38:'grape', 39:'orange', 40:'grape', 41:'cherry', 42:'pear', 43:'cherry', 44:'pear',
//   45:'apple', 46:'pear', 47:'kiwi', 48:'banana', 49:'kiwi', 50:'banana', 51:'melon',
//   52:'pineapple', 53:'melon', 54:'apple', 55:'cucumber', 56:'pineapple', 57:'cucumber',
//   58:'orange', 59:'cucumber', 60:'orange', 61:'grape', 62:'cherry', 63:'apple', 64:'cherry',
//   65:'pear', 66:'cherry', 67:'pear', 68:'kiwi', 69:'pear', 70:'kiwi', 71:'banana',
//   72:'apple', 73:'banana', 74:'melon', 75:'pineapple', 76:'melon', 77:'pineapple',
//   78:'cucumber',79:'pineapple',80:'cucumber',81:'apple',82:'grape',83:'orange',84:'grape',
//   85:'cherry',86:'grape',87:'cherry',88:'pear',89:'cherry',90:'apple',91:'kiwi',
//   92:'banana',93:'kiwi',94:'banana',95:'melon',96:'banana',97:'melon',98:'pineapple',
//   99:'apple',100:'pineapple',
// }
// let total = n.toString().split('').map(item => +item).reduce((acc, curr) => acc + curr, 0)
// console.log(total)
//   while(!obj[total]){
//   total = total.toString().split('').map(item => +item).reduce((acc, curr) => acc + curr, 0)
// }
// return obj[total]

// Subtract the Sum

function SubtractSum(n) {
  return 'apple'
}

// Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (!pontoonDistance || !sharkSpeed) return 'Alive!'
  if (!sharkDistance || !youSpeed) return 'Shark Bait!'
  if (dolphin) sharkSpeed = sharkSpeed / 2
  while (pontoonDistance > 0 && sharkDistance > 0) {
    pontoonDistance = pontoonDistance - youSpeed
    sharkDistance = sharkDistance - sharkSpeed
  }
  if (sharkDistance > pontoonDistance) return 'Alive!'
  return 'Shark Bait!'
}

// Check same case

function sameCase(a, b) {
  let aCase
  let bCase
  let obj = {
    aTest: a.charCodeAt(0),
    bTest: b.charCodeAt(0),
    A: 65,
    Z: 90,
    a: 97,
    z: 122,
  }
  if (obj['aTest'] >= obj['a'] && obj['aTest'] <= obj['z']) aCase = 'lowercase'
  if (obj['bTest'] >= obj['a'] && obj['bTest'] <= obj['z']) bCase = 'lowercase'
  if (obj['aTest'] >= obj['A'] && obj['aTest'] <= obj['Z']) aCase = 'uppercase'
  if (obj['bTest'] >= obj['A'] && obj['bTest'] <= obj['Z']) bCase = 'uppercase'
  if (aCase && bCase && aCase === bCase) return 1
  if (aCase && bCase) return 0
  return -1
}

// Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - (col - 1)) * (nRows - row)
}

// Sum without highest and lowest number

function sumArray(array) {
  if (!array || array.length < 3) return 0
  array.sort((a, b) => a - b).pop()
  array.shift()
  return array.reduce((acc, curr) => acc + curr, 0)
}

// How many stairs will Suzuki climb in 20 years?

function stairsIn20(s) {
  let totalStairs = [
    ...s[0],
    ...s[1],
    ...s[2],
    ...s[3],
    ...s[4],
    ...s[5],
    ...s[6],
  ]
  const yearlyStairs = totalStairs.reduce((a, b) => a + b, 0)
  return yearlyStairs * 20
}

// Heads and Legs

function animals(heads, legs) {
  let cows = (legs - 2 * heads) / 2
  if (!Number.isInteger(cows) || cows < 0 || heads - cows < 0)
    return 'No solutions'
  return [heads - cows, cows]
}

// Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
  for (let key in gunners) {
    if (gunners[key] !== 'aye') {
      return 'Shiver me timbers!'
    }
  }
  return 'Fire!'
}

// Enumerable Magic #1 - True for All?
function all(arr, fun) {
  if (!arr.length) return true
  let results
  arr.every((item) => {
    if (!fun(item)) {
      results = false
      return false
    } else {
      results = true
      return true
    }
  })
  return results
}

// Is it a number?
function isDigit(s) {
  if (s === ' ') return false
  if (s.length === 0) return false
  return !isNaN(+s.trim())
}

// Parse float

function parseF(s) {
  return isNaN(Number.parseFloat(s)) ? null : Number.parseFloat(s)
}

// Simple Fun #352: Reagent Formula
function isValid(formula) {
  let func = (input) => formula.includes(input)
  if (func(1) && func(2)) {
    return false
  } else if (func(3) && func(4)) {
    return false
  } else if ((func(5) && !func(6)) || (!func(5) && func(6))) {
    return false
  } else if (func(5) && func(6)) {
    return true
  } else if (func(7) || func(8)) {
    return true
  }
  return false
}

// Logical calculator

function logicalCalc(array, op) {
  let i = 0
  let results = array[i]
  while (i < array.length - 1) {
    if (op === 'AND') {
      if (results === false) {
        results = false
      } else {
        results = results === array[i + 1]
      }
    } else if (op === 'OR') {
      results = results || array[i + 1]
    } else {
      results = (!results && array[i + 1]) || (results && !array[i + 1])
    }
    i++
  }
  return results
}

// Area of a Square
function squareArea(A) {
  return Math.pow((2 * A) / Math.PI, 2)
}

// Regexp Basics - is it a digit?
String.prototype.digit = function () {
  const reggie = /^[0-9]$/
  return reggie.test(this)
}

// Total pressure calculation

solution = (m1, m2, M1, M2, v, t) => {
  return ((M1 / m1 + M2 / m2) * 0.082 * (t + 273.15)) / v
}

// Find the force of gravity between two objects
function solution([m1, m2, d], [um1, um2, ud]) {
  const G = 6.67e-11
  const conversion = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048,
  }
  return (
    (G * m1 * conversion[um1] * m2 * conversion[um2]) /
    (d * conversion[ud]) ** 2
  )
}

// Find the capitals
var capitals = function (word) {
  const newArr = []
  word
    .split('')
    .forEach((item, index) =>
      item.toUpperCase() === item ? newArr.push(index) : null
    )
  return newArr
}
