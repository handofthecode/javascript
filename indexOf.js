function indexOf(firstString, secondString) {
	for (var i = 0; i < firstString.length; i++) {
		if (firstString[i] === secondString[0]) {
			for (var j = 0; j < secondString.length; j++) {
				if (secondString[j] !== firstString[i + j]) { break }
				else if (j + 1 === secondString.length) { return i }
			}
		}
	}
  
  return -1;
}

function reverseString(string) {
	result = ''
	var size = string.length - 1
	for (var i = size; i >= 0; i--) {
		result += string[i];
	}
	
	return result;
}

function lastIndexOf(firstString, secondString) {
	revInd = indexOf(reverseString(firstString), reverseString(secondString));
	if (revInd === -1) { return -1 }
	return firstString.length - (revInd + secondString.length);
}

// function lastIndexOf(firstString, secondString) {
// 	for (var i = firstString.length - 1; i > 0; i--) {
// 		if (firstString[i] === secondString[0]) {
// 			for (var j = 0; j < secondString.length; j++) {
// 				if (secondString[j] !== firstString[i + j]) { break }
// 				else if (j + 1 === secondString.length) { return i }
// 			}
// 		}
// 	}
  
//   return -1;
// }

console.log(indexOf('Some strings', 's'));     // 5
console.log(indexOf('Blue Whale', 'Whale'));    // 5
console.log(indexOf('Blue Whale', 'Blute'));    // -1
console.log(indexOf('Blue Whale', 'leB'));      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1