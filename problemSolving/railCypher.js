/*
Input: String to encode and rail size.
Output: Incrypted message.
 
Example:
                              t . . . e . . . t   => tet    
encode('top secret', 3)   =>  . o . s . c . e .   => osce   => 'tetoscepr'
                              . . p . . . r . .   => pr

encode('top secret code', 4)  =>  t . . . . . r . . . . . e
                                  . o . . . c . e . . . d .
                                  . . p . e . . . t . o . .
                                  . . . s . . . . . c . . . 

when rail is 2 => skip every 2, then 2.
when rail is 3 => skip every 4, then 2, then 4.
when rail is 4 => skip every 6, then 4/2, then 2/4, then 6
when rail is 5 => skip every 8, then 6/2, then 4/4, then 2/6, then 8. 
when rail is 6 = > skip every 10, then 8/2, then 6/4, then 4/6. then 2/8, then 10.


Algorithm: rail size determines skip size. 
  skipSize = rail * 2 - 2.

  add first letter to result.
  use skipSize to find the next letter. and copy each to result arr.
    -if skip size overshoots word, go to next letter in word with new skip size.
  -new skipSize = skipSize - 2 AND altSkip +=2

  Now use skipSize and alternate with altSkip to capture each letter.
    -When skipSize = 0, just use altSkip.


*/

function encode(message, rails) {
  message = message.replace(/\W/g, '');
  var result = [];
  var skip = rails * 2 - 2;
  var altSkip = 0;
  var startIdx = 0;
  var idx = startIdx;
  for (var i = 0; i < message.length; i++) {
    result.push(message[idx]);
    i++;
    idx += skip === 0 ? altSkip : skip;
      if (idx >= message.length) {
        skip -= 2;
        altSkip +=2
        startIdx++;
        idx = startIdx;
      }
      else {
        result.push(message[idx]);
        idx += altSkip === 0 ? skip : altSkip;
        if (idx >= message.length) {
          skip -= 2;
          altSkip +=2
          startIdx++;
          idx = startIdx;
        }
      }
  }

  return result;
}


console.log(encode('top se &^v cret', 2)); // tpertosce
console.log(encode('top secret', 3)); // tetoscepr
console.log(encode('top secret code', 4)); //
console.log(encode('abcdefghijklmnopqrstuvwxwz', 10));

