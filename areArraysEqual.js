function areArraysEqual(array1, array2) {
  var testArray = array2.slice();
  var index;

  if (array1.length !== array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    index = testArray.indexOf(array1[i]);
    if (index > 0) {
      testArray.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}


console.log(areArraysEqual([1, 2, 2], [1, 1, 2]));  // should probably return false

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false