function toLowerCase(string) {
	var result = '';
  for (var i = 0; i < string.length; i++) {
  	if (/([A-Z])/.exec(string[i])) {
	  	var ascii = string[i].charCodeAt(0);
	  	ascii += 32;
	  	result += String.fromCharCode(ascii);
	  }
	  else {
	  	result += string[i];
	  }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));      // "alphabet"
console.log(toLowerCase('123'));           // "123"
console.log(toLowerCase('abcDEF'));        // "abcdef"