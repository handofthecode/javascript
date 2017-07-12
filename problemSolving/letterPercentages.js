// input: string of chars
// output: object with percentages of 3 char types;

// algorithm: 
//   regex match each char type
//   divide length of array by length of input string

function letterPercentages(text) {
  return {
    lowercase: charPercent(/[a-z]/g, text),
    uppercase: charPercent(/[A-Z]/g, text),
    neither: charPercent(/[^a-z]/gi, text),
  };
}
  function charPercent(reg, text) {
    return ((text.match(reg) || []).length / text.length * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123')) // { lowercase: 50.00, uppercase: 10.00, neither: 40.00 }
console.log(letterPercentages('AbCd +Ef'))   // { lowercase: 37.50, uppercase: 37.50, neither: 25.00 }
console.log(letterPercentages('123'))        // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }