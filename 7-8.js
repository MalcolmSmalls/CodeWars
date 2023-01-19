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

function shortcut (string) {
    const vowels = ['a','e','i','o','u']
    let newArr = string.split('').map(item => {
        if(vowels.includes(item) === false){
            return item
        }
    })
    return newArr.join("")
}

  console.log(shortcut('HELLO'))

//   function shortcut(string){
//     return string.replace(/[aeiou]/g,'')
//   }