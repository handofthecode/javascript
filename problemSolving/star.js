// input: number (size)
// output: 8-pointed star
// definition of star: 
//   size middle line of astrix and height
//   then three astrix with no spaces
//   then separated by 1 space, then 2 spaces etc.
//   size must be ODD??

// algorithm:
//   firstline spaces = (size - 3) / 2
//   firstline star spaces star spaces star
//   for ((size - 1) / 2) times print and store in array: 
//     firstline star spaces star spaces star
//     secondline = ' ' + firstline.slice(0, -1)
//     thirdline = ' ' + secondline.slice(0, -1)
//   end
//   then print size number of '*';
//   then rewind previous loop.

function star(size) {
  var result = [];
  var first = '*' + ' '.repeat((size - 3) / 2);
  for (var i = 0; i < (size - 1) / 2; i++) {
    var line = first + '*' + first.split('').reverse().join('');
    console.log(line);
    result.push(line);
    first = ' ' + first.slice(0, -1);
  }
  console.log('*'.repeat(size))
  for (var i = result.length - 1; i >= 0; i--) {
    console.log(result[i]);
  }
}


star(7)
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *


star(9)
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
star(20);