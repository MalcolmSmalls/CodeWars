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
