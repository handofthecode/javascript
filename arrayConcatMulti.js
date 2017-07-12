function concat() {
  var result = [];
  for (var i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (var j = 0; j < arguments[i].length; j++) { result.push(arguments[i][j]) }
    }
    else { result.push(arguments[i]) }
  }
  return result;
}

console.log(concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]));           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(concat([1, 2], "a", ["one", "two"]));               // [ 1, 2, "a", "one", "two" ]
console.log(concat([1, 2], ["three"], 4));                      // [ 1, 2, "three", 4 ]