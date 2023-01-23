/* 
For when you have to compare the data in two arrays and see if they match whatever criteria chosen. Usually you would use two nested arrays which would lead to an O(n^2) performance. This uses objects instead which is much faster to access data and instead only uses 3 loops which leads to O(3n) or O(n) performance.


*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let freqCounter1 = {}
  let freqCounter2 = {}
  for (let letter of str1) {
    freqCounter1[letter] = (freqCounter1[letter] || 0) + 1
  }
  for (let letter of str2) {
    freqCounter2[letter] = (freqCounter2[letter] || 0) + 1
  }
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false
    }
    if (freqCounter2[key] !== freqCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(anagram('aaz', 'zza'))
