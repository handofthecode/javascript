function substr(string, start, length) {
	if (start !== Math.abs(start)) { start = string.length + start }
	var result = '';
  for (var i = start; i <= start + length - 1; i++) {
  	if (string[i] === undefined) { break }
  	result += string[i];
  }

  return result;
}

var string = 'hello world';

console.log(substr(string, 2, 4));     // "llo "
console.log(substr(string, -3, 2));    // "rl"
console.log(substr(string, 8, 20));    // "rld"
console.log(substr(string, 0, -20));   // ""
console.log(substr(string, 0, 0));     // ""