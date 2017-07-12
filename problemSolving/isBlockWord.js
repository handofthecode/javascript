function isBlockWord(string) {
  var blocks = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm']
  
  for (var i = 0; i < string.length; i++) {
    var blockExists = false;

    blocks.forEach(function(el, idx) {
      if (el.includes(string[i].toLowerCase())) {
        blocks.splice(idx, 1);
        blockExists = true;
      }
    });

    if (blockExists === false) return false;
  }

  return true;
}

// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to just those words that do 
// not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word as a string, and returns true if it can spell 
// the argument passed in from the set of blocks, false otherwise. You can consider 
// the letters to be case insensitive when you apply the rules.

// Input: string
// Output: boolean
// requirements: detect if word requires more than one use of any letter block. 
// If so return false
// Datastructure for blocks: array of strings (2char) 
// Algorithm: 
//   loop through chars
//     for each char, loop throgh array
//       if array.includes char, remove that "block"
//       else, return false
//     end
//   return true.


function isBlockWord(string) {
  var blocks = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm']
  
  for (var i = 0; i < string.length; i++) {
    var blockExists = false;

    blocks.forEach(function(el, idx) {
      if (el.includes(string[i].toLowerCase())) {
        blocks.splice(idx, 1);
        blockExists = true;
      }
    });

    if (blockExists === false) return false;
  }

  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest'));  // true