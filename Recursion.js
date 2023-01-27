/*

Simple Countdown Recursive Function

*/

function countDown(num) {
  if (num <= 0) {
    console.log('Blast Off!')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

countDown(5)

/*

Add up to a number recursively

*/

function sumRange(num) {
  if (num === 0) {
    return num
  }
  return num + sumRange(num - 1)
}

console.log(sumRange(5))

function collectOddValues(arr) {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}
