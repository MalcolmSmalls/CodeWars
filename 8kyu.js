// Determine offspring sex based on genes XX and XY chromosomes

// Take in a str. If XX = female, if XY = male. What if the string is neither, or if it is YY ?

// create a variable If str === XX return daughter else son
// Return 'Congratulations! You're going to have a ___.

function chromosomeCheck(sperm) {
  const gender = sperm === 'XX' ? 'daughter' : 'son'
  return `Congratulations! You're going to have a ${gender}`
}
