// input: arr and value (query)
// output: number (index of value within arr)
// algorithm:
//   find middle of array and set to var second. var first = 0, end = length.
//   if query is greater than second
//     first becomes second, second becomes num between first and end.
//   else
//     second becomes halfway between first and second and end becomes middle.

//   repeat until value is at second and return second (which will be the index).


function binarySearch(arr, query) {
  var first = 0;
  var second = Math.floor(arr.length / 2);
  var end = arr.length - 1;
  while(arr[second] !== query) {
    if (second === first || second === end) return -1;
    if (arr[second] < query) {
      first = second;
      second = second + Math.round((end - second) / 2);
    }
    else {
      end = second;
      second = first + Math.floor((end - first) / 2);
    }
  }

  return second;
}

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));                                // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));                      // 7
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter')); // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'))  ; // 6