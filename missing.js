function missing(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var diff = Math.abs(array[i] - array[i + 1]);
    if (diff > 1) {
      for (var j = 1; j < diff; j++) {
        result.push(array[i] + j)
      }
    }
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []