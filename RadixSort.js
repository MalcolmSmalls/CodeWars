/*

Sorting algorithm that works on a list of numbers.

Doesn't make comparisons.

Can be faster than O(n log n)

Exploits the fact that information about the size of a number is encoded in the number of digits.

More digits = bigger number.

Put numbers by their last digit into a bucket of base-10. 

0 1 2 3 4 5 6 7 8 9

So 50 0 90 1020 430 would all be in the same bucket..
Now that is the order, combine them all together. Then move on the number left of it,

So 0 would be in 0, 1020 would be in 2, 430 would be in 3, 50 would be in 5, 90 would be in 9.

Now the order is, 0, 1020, 430, 50, 90

Then repeat again,

0 would be 0, 1020, 50(because it doesn't have digit before it), 90 then 4 would be 430

0 1020 50 90 430

Repeat again

0 = 0, 50, 90, 430
1 = 1020


It all depends on how long the largest number is since it goes through each digit. 
*/

// These are radix helper methods.

// This gets the digit at whetever i is, backwards, So 0 would be the end of the digit.

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// This gets how many digits a number has

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// This gets the number with the most digits

function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      buckets[digit].push(nums[i])
    }
    nums = [].concat(...buckets)
  }
  return nums
}
console.log(radixSort([1, 2, 3, 5, 100, 30, 30000, 10]))
