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