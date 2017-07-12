// input: size (number);
// output: hollow diamond shape (sequence of strings ' ' and *)

// algorith:
// first line should print and push ((size - 1) / 2 spaces) + '*' to array.
// second line and on = first spaces then astrix + ' ' + middle space + '*'
//   middleSpace++
//   continue
//   when middleSpaces === size - 2 unwind the array


function hollowDiamond(size) {
  var firstHalf = [];
  var line1 = ' '.repeat((size - 1) / 2) + '*';
  var line2 = ' *';
  var wholeLine;
  console.log(line1);
  firstHalf.push(line1);
  line1 = line1.slice(1);
  console.log(line1 + line2);
  firstHalf.push(line1 + line2);
  
  for (var i = 0; i < (size - 3) / 2; i++) {
    line1 = line1.slice(1);
    line2 = '  ' + line2;
    wholeLine = line1 + line2;
    firstHalf.push(wholeLine);
    console.log(wholeLine);
  }

  for (var i = firstHalf.length - 2; i >= 0; i--) {
    console.log(firstHalf[i]);
  }
}

hollowDiamond(101);
// logs
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *******
//   *****
//    ***
//     *