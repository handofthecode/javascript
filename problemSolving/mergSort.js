function merge(arr1, arr2) {
  var result = [];
  [arr1, arr2]  = [arr1.slice(), arr2.slice()];
  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  return result.concat(arr1.length === 0 ? arr2 : arr1);
}

function mergeSort(arr) {
  arr = arr.map(a => [a]);
  while (arr.length > 1) {
    arr.push(merge(arr.shift(), arr.shift()));
  }
  return arr[0];
}

    // result.push(merge(arr[i], arr[i + 1]));


// console.log(merge([2], [1]));
// console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2])    // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5])        // [1, 4, 5]
// merge([1, 4, 5], [])        // [1, 4, 5]

console.log(mergeSort([9, 5, 7, 1]));                // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                      // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));             // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

