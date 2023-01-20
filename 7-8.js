// Trimming a string

/* 



*/


// function trim(str, size){
//     const arr = str.split('')
//     return arr.length <= size ? str : arr.length <= 3 ? arr.slice(0, size).join('') + '...' : arr.slice(0, size-3).join('') + '...'   
// }

// console.log(trim("Creating kata is fun", 14))







// Price of Mangoes

/* 

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free


*/

// function mango(quantity, price) {
//     return price * (quantity - Math.floor(quantity / 3))
// }


// console.log(mango(2, 3)) 
// console.log(mango(3, 3))
// console.log(mango(5, 3))
// console.log(mango(9, 5))




// Sum of odd numbers

// function rowSumOddNumbers(n) {
//     let total = 0
// 	for(let i = n * 2 + 1; i < n; i = i + 2){
//         if(i === 1){
//             total = n * 2 + 1

//         }
//         total = total + 2
//     }
//     return total
// }

// console.log(rowSumOddNumbers(3))



// Vowel remover

// function shortcut (string) {
//     const vowels = ['a','e','i','o','u']
//     let newArr = string.split('').map(item => {
//         if(vowels.includes(item) === false){
//             return item
//         }
//     })
//     return newArr.join("")
// }

//   console.log(shortcut('HELLO'))

//   function shortcut(string){
//     return string.replace(/[aeiou]/g,'')
//   }


// Removing Elements

// function removeEveryOther(arr){
//     return arr.filter((item, index) => index % 2 === 0)
// }


// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))




// All Star Code Challenge #18


// function strCount(str, letter){
//     let count = 0  
//     str.split('').forEach(item => item === letter ? count++ : null)
//     return count
// }

// console.log(strCount("Hello", "l"))

// function strCount(str, letter){  
//     return str.split(letter).length-1
//   }


// Cat years, Dog years

// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0
//     let dogYears = 0
//     for(let i = 1; i <= humanYears; i++){
//         if(i === 1){
//             dogYears += 15, catYears += 15
//         }else if(i === 2){
//             dogYears += 9, catYears += 9
//         }else{
//             catYears += 4, dogYears += 5
//         }
//     }
//     return [humanYears, catYears, dogYears];
//   }

//   console.log(humanYearsCatYearsDogYears(10))

// To square(root) or not to square(root)

// function squareOrSquareRoot(array) {
//     const newArr = array.map(item => {
//         if(Number.isInteger(Math.sqrt(item))){
//             return Math.sqrt(item)
//         }else{
//             return item**2
//         }
//     })
//     return newArr;  
//   }

// console.log(squareOrSquareRoot([4,3,9,7,2,1]))


//Student's Final Grade

// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10){
//       return 100
//     }else if(exam > 75 && projects >= 5){
//       return 90
//     }else if(exam > 50 && projects >= 2){
//       return 75
//     }else{
//       return 0
//     }
//   }


// Is it even?

// function testEven(n) {
//     if(n % 2 === 0){
//       return true
//     }else{
//       return false
//     }
// }


// Unfinished Loop - Bug Fixing #1

// function createArray(number){
//     var newArray = [];
    
//     for(var counter = 1; counter <= number; counter++){
//       newArray.push(counter);
//     }
    
//     return newArray;
//   }