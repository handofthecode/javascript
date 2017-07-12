function caesarEncrypt(message, shiftAmount) {
  shiftAmount = shiftAmount % 26;
  return message.split('').map(function(char) { 
    return (/\w/).test(char) ? char.charCodeAt(0) : char;
  }).map(function(code) {
    if ((/\d+/).test(code)) {
      var newCode = code + shiftAmount;
      if (code < 91 && newCode > 90 || newCode > 122) { newCode -= 26; }
      return String.fromCharCode(newCode);
    }
    else { return code; }
  }).join('');
}

console.log(caesarEncrypt('A', 26));       // 'A'
console.log(caesarEncrypt('A', 3));       // 'D'

// Wrap around
console.log(caesarEncrypt('y', 5));       // 'd'
console.log(caesarEncrypt('a', 47));      // 'v'

// All letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// ZABCDEFGHIJKLMNOPQRSTUVWXY
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// Many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?