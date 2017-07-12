function trim(string) {
	var isChar = false;
	frontTrim = '';
	for (var i = 0; i < string.length; i++) {
		if (string[i] !== ' ') { isChar = true } 
		if (isChar) { frontTrim += string[i] }
	}
	isChar = false;
	revTrim = '';
	for (var i = frontTrim.length - 1; i >= 0; i--) {
		if (frontTrim[i] !== ' ') { isChar = true } 
		if (isChar) { revTrim = frontTrim[i] + revTrim }
	}
	
	return revTrim;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""