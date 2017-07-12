// function shift(arr) {
//   if (arr.length === 0) { return undefined }
//   var first = arr[0];
//   arr.splice(0, 1);
//   return first;
// }

function shift(arr) {
  if (arr.length === 0) { return undefined }
  var first = arr[0]
  for (var i = 0; i < arr.length - 1; i++) { arr[i] = arr[i + 1] }
  arr.length = arr.length - 1;
  return first;
}

function unshift(arr) {
  var newMax = arr.length + arguments.length - 2;
  var newMin = newMax - (arr.length - 1);
  var oldMax = arr.length - 1;

  for (var i = newMax; i >= newMin; i--) {
    arr[i] = arr[oldMax];
    oldMax--;
  }
  for (var i = arguments.length - 1; i > 0; i--) {
    arr[newMin - 1] = arguments[i];
    newMin--;
  }

  return arr.length;
}



console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4 ,5]));        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2 ,3]);      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5, 6, 8));           // 3
console.log(testArray);                       // [5, 2, 3]