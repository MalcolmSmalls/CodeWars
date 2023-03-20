// function minSubArrayLen(nums, sum) {
//   let total = 0
//   let start = 0
//   let end = 0
//   let minLen = Infinity
//   while (start < nums.length) {
//     if (total < sum && end < nums.length) {
//       total += nums[end]
//       end++
//     } else if (total >= sum) {
//       minLen = Math.min(minLen, end - start)
//       total -= nums[start]
//       start++
//     } else {
//       break
//     }
//   }
//   return minLen === Infinity ? 0 : minLen
// }

// console.log(minSubArrayLen([1, 3, 5, 2], 7))

// function findLongestSubstring(str) {
//   let longest = 0
//   let seen = {}
//   let start = 0

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     if (seen[char]) {
//       start = Math.max(start, seen[char])
//     }
//     longest = Math.max(longest, i - start + 1)
//     seen[char] = i + 1
//   }
//   return longest
// }

// console.log(findLongestSubstring('thisis'))

// function longestSubString(str) {
//   let start = 0
//   let seen = {}
//   let longest = 0
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     if (seen[char]) {
//       start = Math.max(start, seen[char])
//     }
//     longest = Math.max(longest, i - start + 1)
//     seen[char] = i + 1
//   }
//   return longest
// }

// function flatten(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       newArr.push(arr[i])
//     } else {
//       newArr = newArr.concat(flatten(arr[i]))
//     }
//   }
//   return newArr
// }

// console.log(flatten([1, 2, 3, [4, 5]]))

function insertionSort(arr) {
  var currentVal
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSort([3, 4, 1]))

function insertionSorter(arr) {
  let currentVal
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSorter([3, 4, 1]))

function minSubArrayLen(arr) {
  let start = 0
  let end = 0
  let minLen = Infinity
}

// Leet Code

function maxArea(heights) {
  let leftPointer = 0
  let rightPointer = heights.length - 1
  let maxAreaCalculated = findArea(leftPointer, rightPointer, heights)
  while (leftPointer < rightPointer) {
    if (heights[leftPointer] < heights[rightPointer]) {
      leftPointer++
    } else {
      rightPointer--
    }
    let currentArea = findArea(leftPointer, rightPointer, heights)
    maxAreaCalculated = Math.max(currentArea, maxAreaCalculated)
  }
  return maxAreaCalculated
}

function findArea(left, right, height) {
  let width = right - left
  let length = Math.min(height[left], height[right])
  let area = width * length
  return area
}
