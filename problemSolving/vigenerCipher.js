/*
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the vigenere cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

algorithm:
  converts shiftWord to numArray based on tabula recta.
  iterates through message and repeated shift nums.
  only letters are sent to caesarEncrypt. All chars are stored in return in array.
  return joined array.
*/
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

function tabulaRecta(word) {
  return word.split('').map(function(char) {
    var code = char.charCodeAt(0);
    return  code - (code > 90 ? 97 : 65);
  });
}

function vigenerCipher(message, shiftText) {
  var shift = tabulaRecta(shiftText);
  var idx = 0;
  return message.split('').map(function(char) {
    if ((/\w/).test(char)) {
      return caesarEncrypt(char, shift[idx]);
      idx === shift.length - 1 ? (idx = 0) : idx++;
    }
    else { return char }
  }).join('');
}

console.log(vigenerCipher('AAaa', 'BBbb')); // CCcc
console.log(vigenerCipher("Pineapples don't go on pizzas!", 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!

