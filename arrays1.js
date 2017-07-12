function lastInArray(array) {
  return array[array.length - 1];
}

function reverseArray(array) {
  reversed = [];
  revIndex = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    reversed[revIndex] = array[i]
    revIndex--;
  }

  return reversed;
}

// console.log(reverseArray([1,2,3,4,5]));

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

// console.log(findIndex([1,2,3,4,5], 0))


function push(array, value) {
  array[array.length] = value;
  return array.length;
}
var array = [1,2,3]
// console.log(push(array, 5));
// console.log(array);

function pop(array) {
  var lastElement = array[array.length - 1]
  array.length = array.length -1
  return lastElement;
}
// console.log(array);
// console.log(pop(array));
// console.log(array);

function unshift(array, obj) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = obj;
  return array.length;
}

// console.log(array);
// console.log(unshift(array, 7));
// console.log(array);

function shift(array) {
  result = array[0];
  for (var i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return result;
}

// console.log(array);
// console.log(shift(array));
// console.log(array);

function slice(array, start, end) {
  result = [];
  resultIndex = 0;
  for (var i = start; i < end; i++) {
    result[resultIndex] = array[i];
    resultIndex++;
  }

  return result;
}

// console.log(slice([1,2,3,4], 1, 3));

function splice(array, start, remove) {
  var end = start + remove;
  var result = [];
  var resultInd = 0;
  for (var i = start; i < end; i++) {
    result[resultInd] = array[i];
    resultInd++;
  }
  for (var i = start; i < array.length; i++) {
    array[i] = array[end];
    end++;
  }
  array.length = array.length - remove;
  return result;
}

// var array = [1,2,3,4,5,6,7];
// console.log(splice(array, 1, 3));
// console.log(array);

function concat(arr1, arr2) {
  var result = [];
  var resultIndex = 0;
  for (var i = 0; i < arr1.length; i++) {
    result[resultIndex] = arr1[i]
    resultIndex++;
  }
  for (var i = 0; i < arr2.length; i++) {
    result[resultIndex] = arr2[i]
    resultIndex++;
  }

  return result;
}

// var arr1 = [1,2,3,4];
// var arr2 = [5,6,7];
// console.log(concat(arr1, arr2));

function join(array, delimiter) {
  result = '';
  for (var i = 0; i < array.length; i++) {
    result += String(array[i]);
    if (i + 1 !== array.length) { result += String(delimiter) }
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and ')); 
