function substring(string, start, end) {
	if (end === undefined) { end = string.length }
	if (start !== Math.abs(start) || isNaN(start)) { start = 0 }
	if (end !== Math.abs(end) || isNaN(end)) { end = 0 }
	if (end < start) { [end, start] = [start, end] }

	var result = '';
  for (var i = start; i < end; i++) {
  	if (string[i] === undefined) { break }
  	result += string[i];
  }

  return result;
}

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"