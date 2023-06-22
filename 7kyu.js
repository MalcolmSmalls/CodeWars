// Remove All The Marked Elements of a List


Array.prototype.remove_ = function(integer_list, values_list){
    let newArr = []
    integer_list.forEach(item => !values_list.includes(item) && newArr.push(item))
    return newArr
  }


// Composing squared strings
  function compose(s1, s2) {
    console.log(s1, s2)
    let newS1 = s1.split('\n')
    let newS2 = s2.split('\n')
    let str1Chars = 1
    let str2Chars = newS2[newS2.length-1].length
    let compoundedStr = ''
    newS1.forEach((item, index) => {
      compoundedStr += `${item.slice(0, str1Chars)}${newS2[newS2.length - (1 + index)].slice(0, str2Chars)}\n`
      str1Chars++
      str2Chars--
    })
  return compoundedStr.slice(0, compoundedStr.length - 1)
}


// Likes Vs Dislikes

function likeOrDislike(buttons) {
  let status = 'Nothing'
  buttons.forEach(item => {
    if(status === 'Nothing'){
      status = item
    }else if(status === item){
      status = 'Nothing'
    }else{
      status = item
    }
  })
  return status
}

// The Office I - Outed

function outed(meet, boss){
  let total = 0
  for(let key in meet){
    if(key === boss){
      total += meet[key] * 2
    }else{
      total += meet[key]
    }
  }
  return total / Object.keys(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

// Playing Cards Draw Order – Part 1

const draw = (deck) => {
	const drawnCards = [];
  let i = 0
  while(deck[0] !== undefined){
    drawnCards.push(deck[i])
    deck.push(deck[i+1])
    deck.splice(0, 1)
    i++
  }
	return drawnCards.filter(item => item);
};


// How Green Is My Valley?
function makeValley(arr) {
  arr.sort((a,b) => b-a)
  const mid = (arr.length / 2) 
  const leftArr = []
  const rightArr = []
    for(let i = 0; leftArr.length < mid; i++){
      if(arr[i] === arr[i+1]){
        leftArr.push(arr.shift())
        rightArr.push(arr.shift())
        i++
      }else{
        leftArr.push(arr.shift())
        rightArr.push(arr.shift())
        i++
      }   
    }
  leftArr.sort((a,b) => b-a)
  rightArr.sort((a,b) => a-b)
  return [...leftArr, ...rightArr].filter(item => item !== undefined)
}


// The Span Function

function span(arr, predicate) {
  const newArr = [...arr]
  const leftArr = []
  const rightArr = []
  arr.every(item => {
    if(predicate(item)){
      leftArr.push(newArr.shift())
      return true
    }else{
      return false
    }
  })
  return [[...leftArr], [...newArr]]
}

// Adding Arrays

function arrAdder(arr) {
  let newArr = new Array(arr[0].length)
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[0].length; j++){
      newArr[j] += arr[i][j]
    }
  }
  return newArr.join('').split('undefined').join(' ').trim()
}


// The dropWhile Function

function dropWhile(arr, pred) {
  let failIndex = arr.length
  arr.every((item, index) => {
    if(pred(item)){
      return true
    }else{
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
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0,
  }
  for(let letter of str){
    if(obj[letter] === 0 || obj[letter]){
      obj[letter]++
    }
  }
  for(let key in obj){
    total += obj[key]
  }
  return total;
}



// Disemvowel Trolls

function disemvowel(str) {
  let regex = /([aeiou])+/gi
  return str.replace(regex, '')
}

// Most Likely

function mostLikely(prob1,prob2){
  const nums1 = prob1.split(':')
  const nums2 = prob2.split(':')
  return (nums1[0]/nums1[1] > nums2[0] / nums2[1])
}


// Length and two values.
function alternate(n, firstValue, secondValue){
  const arr = []
  for(let i = 0; i < n/2; i++){
    arr.push(firstValue)
    arr.push(secondValue)
  }
  return arr.length > n ? arr.slice(0,n) : arr
}

// Digit*Digit

function squareDigits(num){
  let arr = num.toString().split('')
  return +arr.map(item => item * item).join('')
}


// Highest and Lowest
function highAndLow(numbers){
  let lowest = Infinity
  let highest = -Infinity
  let arr = [highest, lowest]
  numbers.split(' ').forEach(item => {
    arr[0] = Math.max(arr[0], item)
    arr[1] = Math.min(arr[1], item)
  })
  return `${arr[0]} ${arr[1]}`
}

// Descending Order
function descendingOrder(n){
  return +n.toString().split('').sort((a,b) => b-a).join('')
}


// Get the Middle Character
function getMiddle(s){
  let mid = Math.floor(s.length / 2)
  return s.length % 2 === 0 ? `${s[mid-1]}${s[mid]}` : `${s[mid]}`
}

// Mumbling

function accum(s) {
	let str = ''
  let i = 0
  for(let letter of s){
    str += letter.toUpperCase()
    str += letter.toLowerCase().repeat(i)
    str+= '-'
    i++
  }
  return str.slice(0,str.length-1)
}

// You're a square!
var isSquare = function(n){
  return Math.sqrt(n) >= 0 && Number.isInteger(Math.sqrt(n)) ? true : false 
}


// List Filtering
function filter_list(l) {
  return l.filter(item => typeof item !== 'string')
}


// Isograms

function isIsogram(str){
  let obj = {
  }
  for(let letter of str.toLowerCase()){
    obj[letter] = (obj[letter] || 0 )+ 1
  }
  for(let key in obj){
    if(obj[key] > 1){
      return false
    }
  }
  return true
}


// Exes and Ohs
function XO(str) {
  const xs = str.toLowerCase().split('').filter(item => item === 'x')
  const os = str.toLowerCase().split('').filter(item => item === 'o')
  return xs.length === os.length
}


// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ').map(item => item[0].toUpperCase() + item.substring(1)).join(' ')
};

// Shortest Word
function findShort(s){
  let arr = s.split(' ')
  let least = arr[0].length
  arr.forEach(item => item.length < least ? least = item.length : null)
  return least
}


// Complementary DNA
function DNAStrand(dna){
  let obj = {
    'A' : 'T',
    'T' : 'A',
    'G' : 'C',
    'C' : 'G'
  }
  let str = ''
  for(let key of dna){
    str += obj[key]
  }
  return str
}



// Credit Card Mask
function maskify(cc) {
  if(cc.length > 4){
    let str = '#'.repeat(cc.length-4)
    str += cc.substring(cc.length-4)
    return str
  }
  return cc
}

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a-b)
  return numbers[0] + numbers[1]
}

// Beginner Series #3 Sum of Numbers
function getSum(a, b){
  let arr = [Math.min(a,b), Math.max(a,b)]
  let newArr = []
  for(let i = arr[0]; i <= arr[1]; i++){
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
function friend(friends){
  return friends.filter(item => item.length === 4)
}


// Categorize New Member
function openOrSenior(data){
  const newArr = []
  data.forEach(item => {
    if(item[0] >= 55 && item[1] > 7){
      newArr.push('Senior')
    }else{
      newArr.push('Open')
    }
  })
  return newArr
}

// Find the next perfect square!
function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))){
    return (Math.sqrt(sq) + 1) ** 2
  }
  return -1;
}


// Growth of a Population

function nbYear(p0, percent, aug, p) {
    let yearsNeeded = 0
    while(p0 < p){
      console.log(p0, p, yearsNeeded)
      p0 = p0 + Math.floor((p0 * (percent * .01))) + aug
      yearsNeeded++
    }

  return yearsNeeded
}


// Regex validate PIN code

function validatePIN (pin) {
  if(pin.length !== 4 && pin.length !== 6) return false
  if((/^\d+$/).test(pin)) return true
  return false
}


// Binary Addition
function addBinary(a,b) {
  return (a+b).toString(2)
}

// Is this a triangle?
function isTriangle(a,b,c){
  if(a+b > c && a+c > b && b+c > a) return true
  return false
}


// Ones and Zeros
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

// String ends with?

function solution(str, ending){
  return str.endsWith(ending)
}


// Number of People in the Bus
var number = function(busStops){
  let total = 0
  busStops.flat().forEach((item, index) => index % 2 === 0 ? total += item : total -= item)
  return total
}

// Reverse words
function reverseWords(str) {
  const newArr = []
  str.split('').forEach(item => newArr.unshift(item))
  return newArr.join('').split(' ').reverse().join(' ')
}

// Odd or Even?
function oddOrEven(array) {
  const total = array.reduce((acc,curr) => acc + curr, 0)
  return total % 2 === 0 ? 'even' : 'odd'
}


// Find the divisors!
function divisors(integer) {
  const arr = []
  for(let i = 2; i < integer; i++){
    if(integer % i === 0){
      arr.push(i)
    }
  }
  return !arr[0] ? `${integer} is prime` : arr
};


// Sum of the first nth term of Series

function SeriesSum(n){
  if(n === 0) return '0.00'
  let total = 1
  let i = 1
  let z = 0
  while(i < n){
    i++
    total += 1/(i*2 + z)
    z++
  }
  return total.toFixed(2)
}

// Remove the minimum

function removeSmallest(numbers) {
  let lowest = Infinity
  numbers.forEach(item => lowest = Math.min(item, lowest))
  const lowestIndx = numbers.indexOf(lowest)
  const lower = numbers.slice(0, lowestIndx)
  const higher = numbers.slice(lowestIndx+1)
  return [...lower, ...higher];
}


// Testing 1-2-3

var number=function(array){
  return array.map((item, index) => `${index+1}: ${item}`)
}


// The highest profit wins!
function minMax(arr){
  arr.sort((a,b) => a-b)
  return [arr[0],arr[arr.length-1]]; // fix me!
}

// Don't Give Me Five
function dontGiveMeFive(start, end)
{
  const arr = []
  for(let i = start; i <= end; i++){
    if(!i.toString().includes('5')){
      arr.push(i)
    }
  }
  return arr.length
}

// Find the stray number
function stray(numbers) {
  if(numbers.slice(1).includes(numbers[0])){
    return numbers.filter(item => item !== numbers[0])[0]
  }else{
    return numbers[0]
  }
}


// Count the divisors of a number
function getDivisorsCnt(n){
  if(n===1) return 1
    let count = 0
    for(let i = 1; i < Math.sqrt(n); i++){
      if(!(n % i)){
        count++
      }
    }
  return Number.isInteger(Math.sqrt(n)) ? count * 2 + 1 : count * 2
}

// Money, Money, Money

function calculateYears(principal, interest, tax, desired) {
  let investment = principal
  let y = 0
  while(investment < desired){
    investment = investment + (investment * interest) - (investment * interest * tax)
    y++
  }
  return y
}



// Breaking chocolate problem
function breakChocolate(n,m) {
  return !n || !m ? 0 : n * m - 1
}



// Sort array by string length
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
};

// Count the Digit

function nbDig(n, d) {
  let arr = []
  let count = 0
  for(let i = 0; i <= n; i++){
    arr.push(`${i**2}`)
  }
  for(const item of arr){
    for(const digit of item){
      if(+digit === d){
        count++
      }
    }
  }
return count
}


// Make a function that does arithmetic!

function arithmetic(a, b, operator){
  const obj = {
    'add': a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide': a / b
  }
  return obj[operator]
}

// Find the middle element
function gimme (triplet) {
  let arr = [...triplet]
  const num = arr.sort((a,b) => a-b)[1]
  return triplet.indexOf(num)
}

// Round up to the next multiple of 5
function roundToNext5(n){
  while(n % 5 !== 0){
    n++
  }
  return n
}

//Sum of a sequence


const sequenceSum = (begin, end, step) => {
  const newArr = []
  while(begin <= end){
    newArr.push(begin)
    begin += step
  }
  return newArr.reduce((acc, curr) => acc+curr, 0)
};


// Anagram Detection

var isAnagram = function(test, original) {
  if(test.length !== original.length) return false
  let obj1 = {}
  let obj2 = {}
  for(let key of test.toLowerCase()){
    obj1[key] = (obj1[key] || 0) + 1
  }
  for(let key of original.toLowerCase()){
    obj2[key] = (obj2[key] || 0) + 1 
  }
  for(let key in obj1){
    if(obj1[key] !== obj2[key]){
      return false
    }
  }
  return true
};
