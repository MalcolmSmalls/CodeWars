// Remove All The Marked Elements of a List


Array.prototype.remove_ = function(integer_list, values_list){
    let newArr = []
    integer_list.forEach(item => !values_list.includes(item) && newArr.push(item))
    return newArr
  }