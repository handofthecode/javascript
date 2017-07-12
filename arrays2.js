function lastNOf(arr, count) {
  if (count > arr.length) { return arr }
  return arr.slice(arr.length - count);
}

var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 8)); // Returns [16, 23, 42]

function oddElementsOf(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) { result.push(array[i]) }
  }
  return result;
}

// console.log(oddElementsOf([1,2,3,4]));

function combinedArray(even, odd) {
  var result = [];
  while(odd.length != 0) {
    result.push(even.shift());
    result.push(odd.shift());
  }
  return result;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

// console.log(combinedArray(digits, letters));

function forwardBackward(array) {
  return array.concat(array.slice().reverse());
}

// console.log(forwardBackward([1,2,3,4]));

function sortDescending(arr) {
  var result = arr.slice();
  return result.slice().sort(function(a, b) { return b - a; });
}

// var array = [23, 4, 16, 42, 8, 15]
// var result = sortDescending(array); // Returns [42, 23, 16, 15, 8, 4]
// console.log(result);   // Logs [42, 23, 16, 15, 8, 4]
// console.log(array);    // Logs [23, 4, 16, 42, 8, 15])

function matrixSums(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result[i] = arr[i].reduce(function(a, b) { return a + b }, 0);
  }

  return result;
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // Returns [15, 60, 12]

function uniqueElements(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) { result.push(arr[i]) }
  }

  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // Returns [1, 2, 4, 3, 5]


