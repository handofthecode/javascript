function reverse(input) {
  var result = [];
  for (var i = 0; i < input.length; i++) { result.unshift(input[i]) }
  return Array.isArray(input) ? result : result.join('');
}


console.log(reverse('Hello'));          // olleH
console.log(reverse('a'));              // a
console.log(reverse([1, 2, 3, 4]));     // [4, 3, 2, 1]
console.log(reverse([]));               // []