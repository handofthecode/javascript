function splitString(string, delimiter) {
	if (delimiter === undefined) {
  	console.log('ERROR: No delimiter');
  	return;
  }

  var result = [''];
  var wordIndex = 0;
  for (var i = 0; i < string.length; i++) {
  	if (string[i] === delimiter || delimiter === '') {
  		wordIndex++;
  		result[wordIndex] = '';
  		if (delimiter === '') { result[wordIndex] += string[i] }
  	}
  	else {
  		result[wordIndex] += string[i];
  	}
  }

  result.forEach(function(element) {
  	console.log(element);
  });
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello