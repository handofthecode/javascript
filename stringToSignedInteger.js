function stringToSignedInteger(string) {
  var isNegative = false;
  var digits = { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0, };
  var result = 0;
  var decimal = 1;
  if (isNaN(string[0])) {
    if (string[0] === '-') { isNegative = true }
      
    string = string.slice(1);
  }
  for (var i = string.length - 1; i >= 0; i--) {
    result += digits[string[i]] * decimal;
    decimal *= 10;
  }

  return isNegative ? -result : result;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
