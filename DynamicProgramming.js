// Memoized Fibonacci

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1
  var res = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = res
  return res
}

// FIB ANUVA WAY

function fib2(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n]
  var res = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = res
  return res
}

console.log(fib2(100))

// TABULATED FIB

function fib_tab(n) {
  if (n <= 2) return 1
  let fibNums = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }
  return fibNums[n]
}

console.log(fib_tab(100))
