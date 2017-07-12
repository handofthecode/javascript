// Without using sort
function anagram(word, list) {
  var result = [];
  var tempWord = word.split('');
  for (var i = 0; i < list.length; i++) {
    if (list[i].length === word.length) {
      tempWord = word.split('');
      for (var j = 0; j < list[i].length; j++) {
        for (var k = 0; k < tempWord.length; k++) {
          if (list[i][j] === tempWord[k]) {
            tempWord.splice(k, 1);
            break;
          }
        }
      }
    }
    if (tempWord.length === 0) result.push(list[i]);
  }

  return result;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]