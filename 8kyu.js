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