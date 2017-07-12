function myReduce(array, func, initial) {
  var arrCopy = array.slice();
  initial !== undefined && arrCopy.unshift(initial);
  var result = arrCopy[0];
  for (var i = 0; i < arrCopy.length - 1; i++) {
    result = func(result, arrCopy[i + 1]);
  }

  return result;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1

console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
console.log(myReduce([5, 12, 15, 1, 6], sum))