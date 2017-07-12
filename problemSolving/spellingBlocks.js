/*
Input: String
Output: Boolean
Algorithm:
  -Data structure is an object with 2 char strings and boolean values.
  -Create array of keys to iterate through.
  -convert wordString to lowercase.
  -iterate through wordString.
    -iterate through object keys.
      -if object keyString includes char, set value to false;
      -if value is false already, function returns false.
      -if iterations complete with not false triggers, return true.
*/



function isBlockWord(word) {
  var blocks = { bo: true, xk: true, dq: true, cp: true, na: true, gt: true, re: true, fs: true, jw: true, hu: true, vi: true, ly: true, zm: true, };
  var keys = Object.keys(blocks);
  word = word.toLowerCase();
  for (var j = 0; j < word.length; j++) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].includes(word[j])) {
        if (blocks[keys[i]] === false) return false;
        blocks[keys[i]] = false;
      } 
    }
  }

  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest'));  // true


