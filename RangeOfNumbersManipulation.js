/* Beginner Series #3 Sum of Numbers



Create a function that takes in two numbers and then adds all the numbers in between them and returns that.

compare a < b and if true, make that minVal and b maxVal else vice-versa
create total with a value of 0
iterate from min value to max value by 1
inside iteration add i to total

return total

*/
// function getSum(a, b) {
//   let minVal
//   let maxVal
//   let total = 0
//   if (a <= b) {
//     minVal = a
//     maxVal = b
//   } else {
//     minVal = b
//     maxVal = a
//   }
//   for (let i = minVal; i <= maxVal; i++) {
//     total += i
//   }
//   return total
// }

// console.log(getSum(1, 1))

// MORE EFFICIENT, O(1) RATHER THAN O(n)
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b)
//   return ((max - min + 1) * (min + max)) / 2
// }
