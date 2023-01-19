// Trimming a string


function trim(str, size){
    const arr = str.split('')
    return arr.length <= size ? str : arr.length <= 3 ? arr.slice(0, size).join('') + '...' : arr.slice(0, size-3).join('') + '...'   
}

// function trim(str, size) {
//     const array = str.split('')
//     let newArr = []
//     if(array.length <= size){
//         return str
//     } else if(array.length <= 3){
//         for(let i = 0; i < size+3; i++){
//             if(i < size){
//                 newArr.push(array[i])
//             }else{
//                 newArr.push('.')
//             }
//         }
//     } else {
//         for(let i = 0; i <= size-1; i++){
//             if(i <= size-4){
//                 newArr.push(array[i])
//             }else{
//                 newArr.push('.')
//             }
    
    
//         }
        
//     }

//     return newArr.join('')
// }

console.log(trim("Creating kata is fun", 14))


