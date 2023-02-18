function minSubArrayLen(nums, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity
  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end]
      end++
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= nums[start]
      start++
    } else {
      break
    }
  }
  return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([1, 3, 5, 2], 7))

function findLongestSubstring(str) {
  let longest = 0
  let seen = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }
  return longest
}

console.log(findLongestSubstring('thisis'))

function longestSubString(str) {
  let start = 0
  let seen = {}
  let longest = 0
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }
  return longest
}

function flatten(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i])
    } else {
      newArr = newArr.concat(flatten(arr[i]))
    }
  }
  return newArr
}

console.log(flatten([1, 2, 3, [4, 5]]))
