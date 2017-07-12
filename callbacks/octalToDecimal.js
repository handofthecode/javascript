function octalToDecimal(number) {
  var exponent = 0;
  var total = 0;
  for (var i = number.length - 1; i >= 0; i--) {
    total += number[i] * Math.pow(8, exponent);
    exponent++;
  }

  return total;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9