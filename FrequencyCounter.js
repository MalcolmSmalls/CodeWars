/* 

Problem Solving Steps:
01. Understand the problem. Before you type or write, ask yourself questions..

Can I restate the problem in my own words ?
What are the inputs that go into the problem?
What are the outputs that should come from the solution to the problem? 
Can the outputs be determined from the inputs? In other wrds, do I have enough information to solve the problem? [You may not be able to answer this question until you set about solving the problem, that's okay]
How should I label the important pieces of data that are a part of the problem?

02. Explore Concrete Examples
- Coming up with examples can help you understand the problem better
- Examples also provide sanity checks that your eventual solution works how it should
Start with simple examples
Progress to more complex examples
Explore examples with empty inputs
Explore examples with invalid inputs

These help you understand the problem more...

03. Break It Down
- Take down the steps, and write it down like pseudo-code/comments. 
- Explicity write out the steps you need to take.
This forces you to think about the code before you write it and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about the details.

04. Solve/Simplify 
If you can't solve the problem, solve the simpler problems first.

05. Look back / Refactor
Can you check the result?
Can you derive the result differently? 
Can you understand it at a glance?
Can you use the result or method for some other problem?
Can you imrpove the performance of your solution?
Can you think of other ways to refactor?
How have other people solved this problem?




*/

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

// UDEMY SOLUTION!

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]

    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

console.log(validAnagram('iceman', 'cinema'))
