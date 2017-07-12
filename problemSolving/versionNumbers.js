function compareVersions(v1, v2) {
  if (!validVersions(v1, v2)) return null;
  v1 = v1.split('.').map(Number);
  v2 = v2.split('.').map(Number);
  uniformArrayLength(v1, v2);
  for (var i = 0; i < v1.length; i++) {
    if (v1[i] > v2[i]) return 1;
    else if (v1[i] < v2[i]) return -1;
  }

  return 0;
}

function uniformArrayLength(arr1, arr2) {
  var small = arr1.length < arr2.length ? arr1 : arr2;
  var size = Math.max(arr1.length, arr2.length);
  for (var i = 0; i < size; i++) { if (small[i] === undefined) small[i] = 0; }
}

function validVersions(...args) {
  for (var i = 0; i < args.length; i++) {
    if (!(/^\d+(\.?\d+)*$/).test(args[i])) { return false; }
  }

  return true;
}

console.log(compareVersions('1', '1'));          // 0
console.log(compareVersions('1.1', '1.0'));      // 1
console.log(compareVersions('2.3.4', '2.3.5'));  // -1
console.log(compareVersions('1.a', '1'));        // null
console.log(compareVersions('.1', '1'));         // null
console.log(compareVersions('1.', '2'));         // null
console.log(compareVersions('1..0', '2.0'));     // null
console.log(compareVersions('1.0', '1.0.0'));    // 0
console.log(compareVersions('1.0.0', '1.1'));    // -1
console.log(compareVersions('1.0', '1.0.5'));    // -1

// Input: 2 version numbers represented as strings.
// output: 1 (if version1 is greater), 
//         0 (if version are equal), 
//         -1 (if version2 is greater),
//         null (if either version contains invalid inputs)

// Description for comparing two version numbers:
//   -inputs must be valid or they should return null.
//     -first check for strings.
//     -then regex for invalid characters.

//   -Strings should be split by '.' (converted to an array).
//     -Durring conversion, the elements should be maped to a new array, converting each element to a number.
  
//   -The longest arr should determine the number of iterations. This guards against unequal version 
//     number pairs lengths where the shorter version serves as the base for a longer version number. 
//   -the same index of each array should be compared. If the first version1 element that is greater 
//     than version2 element, return 1 etc (follow output guidelines).
//   -array indecises should be checked for undefined. If so, that will determine the end of the array.
