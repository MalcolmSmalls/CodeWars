function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))
  return merge(left, right)
}

console.log(mergeSort([3, 2, 4, 6, 19, 10, 58, 81, 6]))

// Another Way

// function merge (left, right) {
//     let newArr = []
//     while(left.length > 0 && right.length > 0){
//         if(left[0] < right[0]) {
//             newArr.push(left.shift())
//         }else{
//             newArr.push(right.shift())
//         }

//     }

//     return [...newArr, ...left, ...right]

// }

// function mergeSort(arr) {
//   let mid = Math.floor(arr.length / 2)
//   let left = arr.slice(0, mid)
//   let right = arr.slice(mid)
//   if (arr.length <= 1) {
//     return arr
//   }
//   return merge(mergeSort(left), mergeSort(right))
// }
// console.log(mergeSort([4, 3, 1, 8, 10, 20, 2, 5]))
