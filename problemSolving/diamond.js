/*
Input: number (always odd. max width of the diamond)
Output: printed semetrical diamond shape.

algorithm:
  create string: diamond padded by half the width of max diamond width ((input num + 1) / 2) 
  loop width/2 times => print string and add to result array. 
                        add two diamonds to string and increment padding +1.
  Print result backwards from pentultimate string.

*/

function diamond(num) {
  var string = '*';
  var pad = (num + 1) / 2;
  var result = [];
  var line;
// PRINT AND STORE
  for (var i = 0; i < num/2; i++) {
    line = string.padStart(pad);
    console.log(line);
    result.push(line);
    string = '**' + string;
    pad++;
  }
// REWIND PRINT
  for (var i = result.length - 2; i >= 0; i--) {
    console.log(result[i]);
  }
}

diamond(30);
diamond(9);
/* logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/