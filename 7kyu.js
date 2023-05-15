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