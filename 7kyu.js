// Remove All The Marked Elements of a List

Array.prototype.remove_ = function (integer_list, values_list) {
  let newArr = []
  integer_list.forEach(
    (item) => !values_list.includes(item) && newArr.push(item)
  )
  return newArr
}

// Composing squared strings
function compose(s1, s2) {
  console.log(s1, s2)
  let newS1 = s1.split('\n')
  let newS2 = s2.split('\n')
  let str1Chars = 1
  let str2Chars = newS2[newS2.length - 1].length
  let compoundedStr = ''
  newS1.forEach((item, index) => {
    compoundedStr += `${item.slice(0, str1Chars)}${newS2[
      newS2.length - (1 + index)
    ].slice(0, str2Chars)}\n`
    str1Chars++
    str2Chars--
  })
  return compoundedStr.slice(0, compoundedStr.length - 1)
}

// Likes Vs Dislikes

function likeOrDislike(buttons) {
  let status = 'Nothing'
  buttons.forEach((item) => {
    if (status === 'Nothing') {
      status = item
    } else if (status === item) {
      status = 'Nothing'
    } else {
      status = item
    }
  })
  return status
}

// The Office I - Outed

function outed(meet, boss) {
  let total = 0
  for (let key in meet) {
    if (key === boss) {
      total += meet[key] * 2
    } else {
      total += meet[key]
    }
  }
  return total / Object.keys(meet).length <= 5
    ? 'Get Out Now!'
    : 'Nice Work Champ!'
}

// Playing Cards Draw Order – Part 1

const draw = (deck) => {
  const drawnCards = []
  let i = 0
  while (deck[0] !== undefined) {
    drawnCards.push(deck[i])
    deck.push(deck[i + 1])
    deck.splice(0, 1)
    i++
  }
  return drawnCards.filter((item) => item)
}

// How Green Is My Valley?
function makeValley(arr) {
  arr.sort((a, b) => b - a)
  const mid = arr.length / 2
  const leftArr = []
  const rightArr = []
  for (let i = 0; leftArr.length < mid; i++) {
    if (arr[i] === arr[i + 1]) {
      leftArr.push(arr.shift())
      rightArr.push(arr.shift())
      i++
    } else {
      leftArr.push(arr.shift())
      rightArr.push(arr.shift())
      i++
    }
  }
  leftArr.sort((a, b) => b - a)
  rightArr.sort((a, b) => a - b)
  return [...leftArr, ...rightArr].filter((item) => item !== undefined)
}

// The Span Function

function span(arr, predicate) {
  const newArr = [...arr]
  const leftArr = []
  const rightArr = []
  arr.every((item) => {
    if (predicate(item)) {
      leftArr.push(newArr.shift())
      return true
    } else {
      return false
    }
  })
  return [[...leftArr], [...newArr]]
}

// Adding Arrays

function arrAdder(arr) {
  let newArr = new Array(arr[0].length)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      newArr[j] += arr[i][j]
    }
  }
  return newArr.join('').split('undefined').join(' ').trim()
}

// The dropWhile Function

function dropWhile(arr, pred) {
  let failIndex = arr.length
  arr.every((item, index) => {
    if (pred(item)) {
      return true
    } else {
      failIndex = index
      return false
    }
  })
  return arr.slice(failIndex)
}

// Vowel Count
function getCount(str) {
  let total = 0
  let obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  }
  for (let letter of str) {
    if (obj[letter] === 0 || obj[letter]) {
      obj[letter]++
    }
  }
  for (let key in obj) {
    total += obj[key]
  }
  return total
}

// Disemvowel Trolls

function disemvowel(str) {
  let regex = /([aeiou])+/gi
  return str.replace(regex, '')
}

// Most Likely

function mostLikely(prob1, prob2) {
  const nums1 = prob1.split(':')
  const nums2 = prob2.split(':')
  return nums1[0] / nums1[1] > nums2[0] / nums2[1]
}

// Length and two values.
function alternate(n, firstValue, secondValue) {
  const arr = []
  for (let i = 0; i < n / 2; i++) {
    arr.push(firstValue)
    arr.push(secondValue)
  }
  return arr.length > n ? arr.slice(0, n) : arr
}

// Digit*Digit

function squareDigits(num) {
  let arr = num.toString().split('')
  return +arr.map((item) => item * item).join('')
}

// Highest and Lowest
function highAndLow(numbers) {
  let lowest = Infinity
  let highest = -Infinity
  let arr = [highest, lowest]
  numbers.split(' ').forEach((item) => {
    arr[0] = Math.max(arr[0], item)
    arr[1] = Math.min(arr[1], item)
  })
  return `${arr[0]} ${arr[1]}`
}

// Descending Order
function descendingOrder(n) {
  return +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
}

// Get the Middle Character
function getMiddle(s) {
  let mid = Math.floor(s.length / 2)
  return s.length % 2 === 0 ? `${s[mid - 1]}${s[mid]}` : `${s[mid]}`
}

// Mumbling

function accum(s) {
  let str = ''
  let i = 0
  for (let letter of s) {
    str += letter.toUpperCase()
    str += letter.toLowerCase().repeat(i)
    str += '-'
    i++
  }
  return str.slice(0, str.length - 1)
}

// You're a square!
var isSquare = function (n) {
  return Math.sqrt(n) >= 0 && Number.isInteger(Math.sqrt(n)) ? true : false
}

// List Filtering
function filter_list(l) {
  return l.filter((item) => typeof item !== 'string')
}

// Isograms

function isIsogram(str) {
  let obj = {}
  for (let letter of str.toLowerCase()) {
    obj[letter] = (obj[letter] || 0) + 1
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      return false
    }
  }
  return true
}

// Exes and Ohs
function XO(str) {
  const xs = str
    .toLowerCase()
    .split('')
    .filter((item) => item === 'x')
  const os = str
    .toLowerCase()
    .split('')
    .filter((item) => item === 'o')
  return xs.length === os.length
}

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(' ')
}

// Shortest Word
function findShort(s) {
  let arr = s.split(' ')
  let least = arr[0].length
  arr.forEach((item) => (item.length < least ? (least = item.length) : null))
  return least
}

// Complementary DNA
function DNAStrand(dna) {
  let obj = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  }
  let str = ''
  for (let key of dna) {
    str += obj[key]
  }
  return str
}

// Credit Card Mask
function maskify(cc) {
  if (cc.length > 4) {
    let str = '#'.repeat(cc.length - 4)
    str += cc.substring(cc.length - 4)
    return str
  }
  return cc
}

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}

// Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  let arr = [Math.min(a, b), Math.max(a, b)]
  let newArr = []
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i)
  }
  return newArr.reduce((acc, curr) => acc + curr, 0)
}

// Two to One
function longest(s1, s2) {
  return [...new Set([...s1, ...s2])].sort().join('')
}

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Friend or Foe?
function friend(friends) {
  return friends.filter((item) => item.length === 4)
}

// Categorize New Member
function openOrSenior(data) {
  const newArr = []
  data.forEach((item) => {
    if (item[0] >= 55 && item[1] > 7) {
      newArr.push('Senior')
    } else {
      newArr.push('Open')
    }
  })
  return newArr
}

// Find the next perfect square!
function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1) ** 2
  }
  return -1
}

// Growth of a Population

function nbYear(p0, percent, aug, p) {
  let yearsNeeded = 0
  while (p0 < p) {
    console.log(p0, p, yearsNeeded)
    p0 = p0 + Math.floor(p0 * (percent * 0.01)) + aug
    yearsNeeded++
  }

  return yearsNeeded
}

// Regex validate PIN code

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) return false
  if (/^\d+$/.test(pin)) return true
  return false
}

// Binary Addition
function addBinary(a, b) {
  return (a + b).toString(2)
}

// Is this a triangle?
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) return true
  return false
}

// Ones and Zeros
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2)
}

// String ends with?

function solution(str, ending) {
  return str.endsWith(ending)
}

// Number of People in the Bus
var number = function (busStops) {
  let total = 0
  busStops
    .flat()
    .forEach((item, index) =>
      index % 2 === 0 ? (total += item) : (total -= item)
    )
  return total
}

// Reverse words
function reverseWords(str) {
  const newArr = []
  str.split('').forEach((item) => newArr.unshift(item))
  return newArr.join('').split(' ').reverse().join(' ')
}

// Odd or Even?
function oddOrEven(array) {
  const total = array.reduce((acc, curr) => acc + curr, 0)
  return total % 2 === 0 ? 'even' : 'odd'
}

// Find the divisors!
function divisors(integer) {
  const arr = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i)
    }
  }
  return !arr[0] ? `${integer} is prime` : arr
}

// Sum of the first nth term of Series

function SeriesSum(n) {
  if (n === 0) return '0.00'
  let total = 1
  let i = 1
  let z = 0
  while (i < n) {
    i++
    total += 1 / (i * 2 + z)
    z++
  }
  return total.toFixed(2)
}

// Remove the minimum

function removeSmallest(numbers) {
  let lowest = Infinity
  numbers.forEach((item) => (lowest = Math.min(item, lowest)))
  const lowestIndx = numbers.indexOf(lowest)
  const lower = numbers.slice(0, lowestIndx)
  const higher = numbers.slice(lowestIndx + 1)
  return [...lower, ...higher]
}

// Testing 1-2-3

var number = function (array) {
  return array.map((item, index) => `${index + 1}: ${item}`)
}

// The highest profit wins!
function minMax(arr) {
  arr.sort((a, b) => a - b)
  return [arr[0], arr[arr.length - 1]] // fix me!
}

// Don't Give Me Five
function dontGiveMeFive(start, end) {
  const arr = []
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) {
      arr.push(i)
    }
  }
  return arr.length
}

// Find the stray number
function stray(numbers) {
  if (numbers.slice(1).includes(numbers[0])) {
    return numbers.filter((item) => item !== numbers[0])[0]
  } else {
    return numbers[0]
  }
}

// Count the divisors of a number
function getDivisorsCnt(n) {
  if (n === 1) return 1
  let count = 0
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (!(n % i)) {
      count++
    }
  }
  return Number.isInteger(Math.sqrt(n)) ? count * 2 + 1 : count * 2
}

// Money, Money, Money

function calculateYears(principal, interest, tax, desired) {
  let investment = principal
  let y = 0
  while (investment < desired) {
    investment =
      investment + investment * interest - investment * interest * tax
    y++
  }
  return y
}

// Breaking chocolate problem
function breakChocolate(n, m) {
  return !n || !m ? 0 : n * m - 1
}

// Sort array by string length
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length)
}

// Count the Digit

function nbDig(n, d) {
  let arr = []
  let count = 0
  for (let i = 0; i <= n; i++) {
    arr.push(`${i ** 2}`)
  }
  for (const item of arr) {
    for (const digit of item) {
      if (+digit === d) {
        count++
      }
    }
  }
  return count
}

// Make a function that does arithmetic!

function arithmetic(a, b, operator) {
  const obj = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  }
  return obj[operator]
}

// Find the middle element
function gimme(triplet) {
  let arr = [...triplet]
  const num = arr.sort((a, b) => a - b)[1]
  return triplet.indexOf(num)
}

// Round up to the next multiple of 5
function roundToNext5(n) {
  while (n % 5 !== 0) {
    n++
  }
  return n
}

//Sum of a sequence

const sequenceSum = (begin, end, step) => {
  const newArr = []
  while (begin <= end) {
    newArr.push(begin)
    begin += step
  }
  return newArr.reduce((acc, curr) => acc + curr, 0)
}

// Anagram Detection

var isAnagram = function (test, original) {
  if (test.length !== original.length) return false
  let obj1 = {}
  let obj2 = {}
  for (let key of test.toLowerCase()) {
    obj1[key] = (obj1[key] || 0) + 1
  }
  for (let key of original.toLowerCase()) {
    obj2[key] = (obj2[key] || 0) + 1
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

// Sort Numbers

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : []
}

// Alternating between three values
function f(x, cc) {
  return cc['a'] === x ? cc['b'] : cc['b'] === x ? cc['c'] : cc['a']
}

// Remove anchor from URL

function removeUrlAnchor(url) {
  const index = url.indexOf('#')
  return index >= 0 ? url.split('').splice(0, index).join('') : url
}

// Two Oldest Ages
function twoOldestAges(ages) {
  ages.sort((a, b) => a - b)
  return [ages[ages.length - 2], ages[ages.length - 1]]
}

// Small enough? - Beginner
function smallEnough(a, limit) {
  return a.every((item) => item <= limit)
}

// Two fighters, one winner.

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (fighter1.name === firstAttacker && fighter1.health) {
      fighter2.health -= fighter1.damagePerAttack
    } else if (fighter2.name === firstAttacker && fighter2.health) {
      fighter1.health -= fighter2.damagePerAttack
    }
    if (fighter1.health <= 0 || fighter2.health <= 0) {
      break
    } else {
      if (fighter1.name !== firstAttacker && fighter1.health) {
        fighter2.health -= fighter1.damagePerAttack
      } else if (fighter2.name !== firstAttacker && fighter2.health) {
        fighter1.health -= fighter2.damagePerAttack
      }
    }
  }
  return fighter1.health <= 0 ? fighter2.name : fighter1.name
}

// Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  let newArr = [...str.matchAll(/[a-zA-Z]/gm)]
  let returnArr = []
  newArr.forEach((item, index) => {
    if (item[0] === item[0].toUpperCase()) {
      returnArr.push(item[0].toLowerCase())
    } else if (item[0]) {
      returnArr.push(item[0])
    }
  })
  return returnArr.reverse().join('')
}

// Simple Fun #74: Growing Plant

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 0
  let growth = 0
  while (growth < desiredHeight) {
    growth += upSpeed
    day++
    if (growth >= desiredHeight) {
      break
    } else {
      growth -= downSpeed
    }
  }
  return day
}

// Check the exam

function checkExam(array1, array2) {
  let score = 0
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4
    } else if (array1[i] !== array2[i] && array2[i]) score -= 1
  }
  return score > 0 ? score : 0
}

// Summing a number's digits

function sumDigits(number) {
  let total = 0
  number
    .toString()
    .split('')
    .map((item) => {
      if (!isNaN(+item)) {
        total += +item
      }
    })
  return total
}

// Maximum Multiple
function maxMultiple(divisor, bound) {
  while (bound % divisor !== 0) {
    bound--
  }
  return bound
}

// Fix string case
function solve(s) {
  if (s.toUpperCase() === s || s.toLowerCase() === s) return s
  const lowerReg = /[a-z]/g
  const upperReg = /[A-Z]/g
  if (s.match(lowerReg).length >= s.match(upperReg).length) {
    return s.toLowerCase()
  } else {
    return s.toUpperCase()
  }
}

// Factorial
function factorial(n) {
  if (n > 12 || n < 0) throw new RangeError()
  if (n === 0) return 1
  return n * factorial(n - 1)
}

// Form The Minimum
function minValue(values) {
  return Number([...new Set(values)].sort((a, b) => a - b).join(''))
}

// Alternate capitalization
function capitalize(s) {
  let wordOne = ''
  let wordTwo = ''
  s.split('').forEach((item, index) => {
    if (index % 2 === 0) {
      wordOne += item.toUpperCase()
      wordTwo += item
    } else {
      wordTwo += item.toUpperCase()
      wordOne += item
    }
  })
  return [wordOne, wordTwo]
}

// Largest 5 digit number in a series

function solution(digits) {
  let newArr = []
  const digitsArr = digits.toString().split('')
  let i = 0
  while (i <= digitsArr.length - 5) {
    newArr.push(digitsArr.slice(i, i + 5))
    i++
  }
  return Number(newArr.sort()[newArr.length - 1].join(''))
}

// Are the numbers in order?
function inAscOrder(arr) {
  const newArr = [...arr].sort((a, b) => a - b)
  return arr.every((item, index) => item === newArr[index])
}

// Power of 4

function powerOf4(n) {
  let total = 1
  while (total <= n) {
    if (total === n) return true
    total *= 4
  }
  return false
}

// Leap Years
function isLeapYear(year) {
  if ((!(year % 100) && year % 400) || year % 4) return false
  return true
}

// Flatten and sort an array
function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b)
}

// Sum of Minimums!

function sumOfMinimums(arr) {
  let total = 0
  arr.forEach((item) => (total += item.sort((a, b) => a - b)[0]))
  return total
}

// The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let obj = {
    January: 1,
    Feburary: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  }
  if (enteredCode !== correctCode) return false
  let curr = currentDate.replace(',', '').split(' ')
  let exp = expirationDate.replace(',', '').split(' ')
  if (+curr[2] > +exp[2]) return false
  if (obj[curr[0]] > obj[exp[0]] && +curr[2] > +exp[2]) return false
  if (curr[0] === exp[0] && curr[2] === exp[2] && +curr[1] > +exp[1])
    return false
  return true
}

// DONT FORGET YOU CAN PARSE DATES

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
// }

// Row Weights
function rowWeights(array) {
  let team1 = []
  let team2 = []
  const getTotal = (arr) => arr.reduce((acc, curr) => acc + curr, 0)
  array.forEach((item, index) =>
    index % 2 === 0 ? team1.push(item) : team2.push(item)
  )
  return [getTotal(team1), getTotal(team2)]
}

// Remove duplicate words

function removeDuplicateWords(s) {
  const set = new Set([...s.split(' ')])
  return [...set].join(' ')
}

///// You can do [...new Set()] in one go.

// Factorial
function factorial(n) {
  if (!n) return 1
  return n * factorial(n - 1)
}

// JavaScript Array Filter
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((item) => !(item % 2))
}

// Love vs friendship

function wordsToMarks(string) {
  let total = 0
  string.split('').forEach((item) => (total += item.charCodeAt(0) - 96))
  return total
}

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  let total = 0
  list.forEach((item) =>
    item['language'] === 'JavaScript' && item['continent'] === 'Europe'
      ? total++
      : null
  )
  return total
}

// Largest pair sum in array

function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a)
  return numbers[0] + numbers[1]
}

// Sorted? yes? no? how?

function isSortedAndHow(array) {
  let descendingArr = [...array].sort((a, b) => b - a)
  let ascendingArr = [...array].sort((a, b) => a - b)
  if (array.every((item, index) => item === ascendingArr[index]))
    return 'yes, ascending'
  if (array.every((item, index) => item === descendingArr[index]))
    return 'yes, descending'
  return 'no'
}

// No oddities here
function noOdds(values) {
  return values.filter((item) => item % 2 === 0)
}

// Predict your age!
function predictAge(...args) {
  let total = 0
  args.forEach((item) => (total += item * item))
  return Math.floor(Math.sqrt(total) / 2)
}

// Alphabet war
function alphabetWar(fight) {
  let leftLetters = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  }

  let rightLetters = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  }
  let leftTotal = 0
  let rightTotal = 0
  for (let letter of fight) {
    if (leftLetters[letter]) {
      leftTotal += leftLetters[letter]
    } else if (rightLetters[letter]) {
      rightTotal += rightLetters[letter]
    }
  }
  return rightTotal > leftTotal
    ? 'Right side wins!'
    : rightTotal < leftTotal
    ? 'Left side wins!'
    : "Let's fight again!"
}

// Even numbers in an array
function evenNumbers(array, number) {
  let newArr = []
  let i = array.length
  while (newArr.length < number && i >= 0) {
    if (array[i] % 2 === 0) {
      newArr.unshift(array[i])
    }
    i--
  }
  return newArr
}

// Bumps in the Road

function bump(x) {
  let total = x.split('').filter((item) => item === 'n').length
  return total <= 15 ? 'Woohoo!' : 'Car Dead'
}

// esreveR
const reverse = function (array) {
  const reversedArr = []
  array.forEach((item) => reversedArr.unshift(item))
  return reversedArr
}

// Fizz Buzz
function fizzbuzz(n) {
  const newArr = []
  for (let i = 1; i <= n; i++) {
    if (!(i % 3) && !(i % 5)) {
      newArr.push('FizzBuzz')
    } else if (!(i % 3)) {
      newArr.push('Fizz')
    } else if (!(i % 5)) {
      newArr.push('Buzz')
    } else {
      newArr.push(i)
    }
  }
  return newArr
}

// Maximum Product
function adjacentElementsProduct(array) {
  let max = -Infinity
  let i = 0
  while (i < array.length - 1) {
    max = Math.max(max, array[i] * array[i + 1])
    i++
  }
  return max
}

// Greet Me

var greet = function (name) {
  let newArr = []
  name
    .toLowerCase()
    .split('')
    .forEach((item, index) =>
      index === 0
        ? newArr.push(item.toUpperCase())
        : newArr.push(item.toLowerCase())
    )
  return `Hello ${newArr.join('')}!`
}

// Printer Errors
function printerError(s) {
  let errorCount = 0
  s.split('').forEach((item) => {
    if (item.charCodeAt(0) > 109) {
      errorCount++
    }
  })
  return `${errorCount}/${s.length}`
}

// Maximum Length Difference
function mxdiflg(a1, a2) {
  if (a1.length < 1 || a2.length < 1) return -1
  let maxX = -Infinity
  let maxY = -Infinity
  let lowestX = Infinity
  let lowestY = Infinity
  a1.forEach((item) => {
    maxX = Math.max(maxX, item.length)
    lowestX = Math.min(lowestX, item.length)
  })
  a2.forEach((item) => {
    maxY = Math.max(maxY, item.length)
    lowestY = Math.min(lowestY, item.length)
  })
  return Math.max(Math.abs(lowestX - maxY), Math.abs(lowestY - maxX))
}

// Find the vowels
function vowelIndices(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const endResults = []
  word
    .toLowerCase()
    .split('')
    .forEach((item, index) => {
      if (vowels.includes(item)) {
        endResults.push(index + 1)
      }
    })
  return endResults
}

// Sum of odd numbers

function rowSumOddNumbers(n) {
  let i = 1
  let startN = n * (n - 1) + 1
  let total = 0
  let step = startN
  while (i <= n) {
    if (step % 2 !== 0) {
      i++
      total += step
      step += 2
    }
  }
  return total
}

// Sum of angles

function angle(n) {
  const interiorAngle = ((n - 2) * 180) / n
  return Math.round(interiorAngle * n)
}

// Deodorant Evaporator

function evaporator(content, evap_per_day, threshold) {
  let volume = content
  let days = 0
  while (volume >= content * (threshold / 100)) {
    volume -= volume * (evap_per_day / 100)
    days++
  }
  return days
}

// Most digits

function findLongest(array) {
  const newArr = array.map((item) => item.toString())
  let longest = newArr[0]
  newArr.forEach((item) => {
    if (item.length > longest.length) {
      longest = item
    }
  })
  return +longest
}

// Power of two

function isPowerOfTwo(n) {
  if (n === 1) return true
  if (n === 0) return false
  let runningProduct = 2
  while (runningProduct < n) {
    runningProduct *= 2
  }
  return runningProduct === n
}

// Sum of Cubes
function sumCubes(n) {
  let runningProduct = 0
  let startingNumber = 1
  while (startingNumber <= n) {
    runningProduct += Math.pow(startingNumber, 3)
    startingNumber++
  }
  return runningProduct
}

//  Number of Decimal Digits
function digits(n) {
  return n.toString().length
}

// Reverse a number
function reverseNumber(n) {
  const reversedNum = Math.abs(n).toString().split('').reverse().join('')
  return Number(reversedNum) * Math.sign(n)
}

// Minimize Sum Of Array (Array Series #1)

function minSum(arr) {
  arr.sort((a, b) => a - b)
  let runningProduct = 0
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    runningProduct += arr[i] * arr[j]
    i++
    j--
  }
  return runningProduct
}

// Parts of a list

function partlist(arr) {
  const arrLength = arr.length - 1
  let shiftedWords = []
  let mainArray = []
  let i = 0
  while (i < arrLength) {
    shiftedWords.push(arr.shift())
    mainArray.push([shiftedWords.join(' '), arr.join(' ')])
    i++
  }
  return mainArray
}

// Sum of Triangular Numbers

function sumTriangularNumbers(n) {
  if (n < 0) return 0
  let sum = 0
  let startingN = 1
  let interval = 2
  let i = 1
  while (i <= n) {
    sum += startingN
    startingN = startingN + interval
    interval++
    i++
  }
  return sum
}

// Area of a Circle

function circleArea(radius) {
  if (radius < 1) throw new Error()
  return Math.PI * Math.pow(radius, 2)
}

// Switcheroo

function switcheroo(x) {
  let newStr = ''
  x.split('').forEach((item) => {
    if (item === 'a') {
      newStr += 'b'
    } else if (item === 'b') {
      newStr += 'a'
    } else {
      newStr += 'c'
    }
  })
  return newStr
}

// Build a Square

function generateShape(integer) {
  let newStr = ''
  for (let i = 0; i < integer * integer; i++) {
    if (i % integer === 0 && i !== 0) {
      newStr += '\n+'
    } else {
      newStr += '+'
    }
  }
  return newStr
}

// Moves in squared strings (I)
function vertMirror(strng) {
  const newArr = []
  strng
    .split('\n')
    .forEach((item) => newArr.push(item.split('').reverse().join('')))
  return newArr.join('\n')
}
function horMirror(strng) {
  const newArr = []
  strng.split('\n').forEach((item) => newArr.unshift(item))
  return newArr.join('\n')
}
function oper(fct, s) {
  return fct(s)
}

// Sort the Gift Code

function sortGiftCode(code) {
  return code.split('').sort().join('')
}

// Character Concatenation
function charConcat(string) {
  const newArr = []
  let i = 0
  let j = string.length - 1
  while (i < j) {
    newArr.push(string[i])
    newArr.push(string[j])
    newArr.push(i + 1)
    i++
    j--
  }
  return newArr.join('')
}

// Numbers in strings
function solve(s) {
  let number = -Infinity
  const numberArr = []
  const newArr = s.split('')
  let numSeq = ''
  newArr.forEach((item, index) => {
    if (!isNaN(item)) {
      while (isNaN(newArr[index]) !== true) {
        numSeq += newArr[index]
        index++
      }
      if (numSeq) {
        numberArr.push(numSeq)
        numSeq = ''
      } else {
        numberArr.push(item)
      }
    }
  })
  return +numberArr.sort((a, b) => a - b)[numberArr.length - 1]
}

// Convert an array of strings to array of numbers
function toNumberArray(stringarray) {
  return stringarray.map((item) => +item)
}

// Divide and Conquer
function divCon(x) {
  let total = 0
  x.forEach((item) => {
    if (typeof item === 'string') {
      total -= +item
    } else {
      total += item
    }
  })
  return total
}

// Alphabet symmetry
function solve(arr) {
  const newArr = []
  let total = 0
  arr.forEach((item) => {
    item
      .toLowerCase()
      .split('')
      .forEach((letter, index) => {
        if (letter.charCodeAt(0) - 97 === index) {
          total++
        }
      })
    newArr.push(total)
    total = 0
  })
  return newArr
}

// Sum even numbers

function sumEvenNumbers(input) {
  let total = 0
  input.forEach((item) => {
    if (item % 2 === 0) {
      total += item
    }
  })
  return total
}

// All unique

function hasUniqueChars(str) {
  return [...new Set(str)].length === str.split('').length
}

// Halving Sum
function halvingSum(n) {
  let total = n
  while (n > 0) {
    total += Math.floor(n / 2)
    n = Math.floor(n / 2)
  }
  return total
}

// Palindrome chain length

var palindromeChainLength = function (n) {
  let total = n
  let steps = 0
  while (total.toString() !== total.toString().split('').reverse().join('')) {
    total = total + Number(total.toString().split('').reverse().join(''))
    steps++
  }
  return steps
}

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
  let status = false
  for (const key in list) {
    if (list[key].language === 'Ruby') {
      status = true
    }
  }
  return status
}

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

function greetDevelopers(list) {
  const newArr = []
  list.forEach((item) => {
    newArr.push({
      ...item,
      greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`,
    })
  })
  return newArr
}

// Sum of numbers from 0 to N
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let total = 0
    let i = 0
    let newArr = []
    if (count < 0) return `${count}<0`
    if (count === 0) return '0=0'
    while (i <= count) {
      total += i
      newArr.push(i)
      i++
    }
    return `${newArr.join('+')} = ${total}`
  }

  return SequenceSum
})()

// Filter the number
var filterString = function (value) {
  const numbs = []
  value.split('').forEach((item) => {
    if (!isNaN(+item)) {
      numbs.push(+item)
    }
  })
  return +numbs.join('')
}

// Number-Star ladder
function pattern(n) {
  var output = ''
  let i = 1
  let star = ''
  while (i <= n) {
    output += `1${star}${i > 1 ? i : ''}${i === n ? '' : '\n'}`
    star += '*'
    i++
  }
  return output
}

// Ordered Count of Characters

const orderedCount = function (text) {
  const copyArr = text.split('')
  const settedArr = new Set([...copyArr])
  let completedArr = []
  settedArr.forEach((item) => {
    let tempArrLength = copyArr.filter((letter) => letter === item).length
    completedArr.push([item, tempArrLength])
  })
  return completedArr
}

// Boiled Eggs

function cookingTime(eggs) {
  return Math.ceil(eggs / 8) * 5
}

// Simple remove duplicates

function solve(arr) {
  const newArr = [...new Set(arr)]
  const holderArr = []
  const blankArr = []
  newArr.forEach((item) => {
    let i = arr.lastIndexOf(item)
    holderArr[i] = item
  })
  holderArr.map((item) => {
    if (item !== undefined) {
      blankArr.push(item)
    }
  })
  return blankArr
}

// Simple beads count
function countRedBeads(n) {
  return n === 0 ? 0 : (n - 1) * 2
}

// Nickname Generator
function nicknameGenerator(name) {
  if (name.length < 4) return 'Error: Name too short'
  const newArr = name.split('')
  const vowelsArr = ['a', 'e', 'i', 'o', 'u']
  let name4Letters = false
  vowelsArr.forEach((item) => {
    if (item === newArr[2]) {
      name4Letters = true
    }
  })
  return name4Letters
    ? newArr.slice(0, 4).join('')
    : newArr.slice(0, 3).join('')
}

// max diff - easy
function maxDiff(list) {
  if (list.length <= 1) return 0
  list.sort((a, b) => a - b)
  return list[list.length - 1] - list[0]
}

// Lost number in number sequence
function findDeletedNumber(arr, mixArr) {
  let tempNum = 0
  arr.forEach((item) => {
    if (!mixArr.includes(item)) {
      tempNum = item
    }
  })
  return tempNum
}

// Consecutive letters
function solve(s) {
  let newArr = []
  let status = true
  for (let letter in s) {
    newArr.push(s[letter].charCodeAt(0))
  }
  newArr.sort((a, b) => a - b)
  for (let i = 0; i < newArr.length - 1; i++) {
    if (!(newArr[i] + 1 === newArr[i + 1])) {
      status = false
    }
  }
  return status
}

// Odd-Even String Sort

function sortMyString(S) {
  let evenStr = ''
  let oddStr = ''
  S.split('').forEach((item, index) => {
    if (index % 2 === 0) {
      evenStr += item
    } else {
      oddStr += item
    }
  })
  return `${evenStr} ${oddStr}`
}

// Sum of Odd Cubed Numbers
function cubeOdd(arr) {
  let total = 0
  let strInput = false
  arr.forEach((number) => {
    if (typeof number !== 'number') {
      strInput = true
    }
    if (number % 2 !== 0) {
      total += number ** 3
    }
  })
  return strInput ? undefined : total
}

// My Language Skills

function myLanguages(results) {
  let numHolder = []
  let sortedArr = []
  for (let key in results) {
    if (results[key] >= 60) {
      numHolder.push(results[key])
    }
  }
  numHolder.sort((a, b) => b - a)
  numHolder.forEach((item, index) => {
    for (let key in results) {
      if (item === results[key]) {
        sortedArr[index] = key
      }
    }
  })
  return sortedArr
}

// function myLanguages(results) {
//   return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
// }

// Find the nth Digit of a Number
var findDigit = function (num, nth) {
  if (nth <= 0) return -1
  if (nth > Math.abs(num).toString().length) return 0
  const numArray = num.toString().split('')
  return +numArray[numArray.length - nth]
}

// Sum of array singles
function repeats(arr) {
  let i = 0
  let total = 0
  arr.sort((a, b) => a - b)
  while (i < arr.length) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      total += arr[i]
    }
    i++
  }
  return total
}

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

function getFirstPython(list) {
  const found = list.find((item) => item['language'] === 'Python')
  return found
    ? `${found['firstName']}, ${found['country']}`
    : 'There will be no Python developers'
}

// Nth Smallest Element (Array Series #4)
function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1]
}

// Nth Smallest Element (Array Series #4)

function automorphic(n) {
  const squareValue = (n * n).toString()
  let nStrung = n.toString()
  let i = squareValue.length - 1
  let x = nStrung.length - 1
  while (x >= 0) {
    if (squareValue[i] === nStrung[x]) {
      x--
      i--
    } else {
      return 'Not!!'
    }
  }
  return 'Automorphic'
}

// Simple Fun #152: Invite More Women?

function inviteMoreWomen(L) {
  let womenArr = L.filter((num) => num === -1)
  let menArr = L.filter((num) => num === 1)
  return menArr.length > womenArr.length ? true : false
}

// Spacify
function spacify(str) {
  let spacedStr = ''
  str.split('').forEach((item) => {
    spacedStr += item
    spacedStr += ' '
  })
  return spacedStr.trim()
}

// Tidy Number (Special Numbers Series #9)
function tidyNumber(n) {
  const tidedNumber = Number(
    n
      .toString()
      .split('')
      .sort((a, b) => a - b)
      .join('')
  )
  return tidedNumber === n ? true : false
}
