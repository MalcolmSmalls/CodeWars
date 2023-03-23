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
