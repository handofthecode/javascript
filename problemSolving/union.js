
function union(arr1, arr2) {
  var joined = arr1.concat(arr2);
  return joined.reduce((a, n) => a.includes(n) ? a : a.concat([n]),
    []).sort((a, b) => a - b);

}


console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]