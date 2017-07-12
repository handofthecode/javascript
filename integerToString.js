function integerToString(int) {
  var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var result = '';

  while (int !== 0) {
    index = int % 10;
    result = NUMBERS[index] + result;
    int = (int - index) / 10;
  }

  return !result ? '0' : result;
}


console.log(integerToString(4321));    // "4321"
console.log(integerToString(0));       // "0"
console.log(integerToString(5000));    // "5000"

function integerToSignedString(int) {
  if (int === 0) { return '0' }
  var posInt = Math.abs(int);
  result = integerToString(posInt);
  return int < 0 ? ('-' + result) : ('+' + result);
}

console.log(integerToSignedString(4321));      // "+4321"
console.log(integerToSignedString(-123));      // "-123"
console.log(integerToSignedString(0));         // "0"