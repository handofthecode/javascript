function repeat(string, times) {
	if (isNaN(times) || Math.abs(times) !== times) { return undefined }

	result = '';
  for (var i = 0; i < times; i++) {
  	result += string;
  }
  return result;
}


console.log(repeat('abc', 1));    // "abc"
console.log(repeat('abc', 2));    // "abcabc"
console.log(repeat('abc', -1));   // undefined
console.log(repeat('abc', 0));    // ""
console.log(repeat('abc', 'a'));  // undefined