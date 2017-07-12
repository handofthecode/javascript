function pop(arr) {
  if (arr.length === 0) { return undefined }
  var lastElement = arr[arr.length - 1]
  arr.length = arr.length - 1;
  return lastElement;
}

function push(arr) {
  for (var i = 1; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (var j = 0; j < arguments[i].length; j++) { arr.push(arguments[i][j]) }
    }
    else { arr.push(arguments[i]) }
  }
  return arr.length;
}

// var array = [1, 2, 3];
// console.log(pop(array));                   // 3
// console.log(array);           // [1, 2]
// console.log(pop([]));                      // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']])); // [ 'a', 'b', 'c' ]

var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));         // 6
console.log(array);           // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));     // 3
console.log(push([], 1));                  // 1
console.log(push([]));                     // 0