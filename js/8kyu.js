//Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// const solution = str => {
//     return str.split("").reverse().join("")
// }

// console.log(solution('world'))


//-------------------------------------------------------------------------------------------------------------------Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// MY SOLUTION
// const fakeBin = x => {
//     let toArr = x.split("")
//     let newArr = []
//     console.log(toArr)
//     toArr.forEach((x,i) => {
//         if(Number(x)<5){
//             newArr.push(0)
//         }else{
//             newArr.push(1)}
//     })
//     return newArr.join("")
// }

// console.log(fakeBin('45385593107843568'))

//THEIR SOLUTIONS

// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// function fakeBin(str){
//     var newStr = "";
//     for(var i=0;i<str.length;i++){
//       if(Number(str[i])>=5){
//         newStr += "1"
//       }
//       else{
//         newStr += "0";
//       }
//     }
//     return newStr;
//   }



//-------------------------------------------------------------------------------------------------------------------Sort and Star

// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// MY SOLUTION

// const twoSort = s => {
//     let sortedArr = s.sort()
//     console.log(sortedArr)
//     return sortedArr[0].split("").join("***")
// }

// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

// OTHER SOLUTIONS
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   }


//------------------------------------------------------------------------------------------Find the smallest integer in the array



// const findSmallestInt = args => args.sort((a,b)=>a-b)[0]
    
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a,b)=>a-b)[0]
//   }
// }

// console.log(findSmallestInt([78,56,232,12,8]))


// OTHER SOLUTIONS

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

//-----------------------------------------------------------------------------------------------------------------Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// const makeNegative = num => num > 0 ? -num : num < 0 ? num: 0

// console.log(makeNegative(9))

// OTHER SOLUTIONS

// function makeNegative(num) {
//     return -Math.abs(num);
//   }