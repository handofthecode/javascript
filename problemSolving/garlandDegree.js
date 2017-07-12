
// A garland word is one that starts and ends with the same N letters in the same order, 
// for some N greater than 0, but less than the length of the word. I’ll call the maximum 
// N for which this works the garland word’s degree. For instance, “onion” is a garland 
// word of degree 2, because its first 2 letters “on” are the same as its last 2 letters.

// Write a function that takes one argument of a word, and return its garland word degree.


// input: string
// output: number (garlandDegree)

// algorithm:
//   var idx = (start at 1)
//   var end string slice from idx to - 1
//   var beginning string slice from 0 to -idx
//   iterate
//       if beginning === end
//         return length - idx - 1
//   end

//   return 0;

function garlandDegree(string) {
  var beg;
  var end;

  for (var i = 1; i < string.length; i++) {
    end = string.slice(i);
    beg = string.slice(0, -i);

    if (beg === end) {
      return beg.length;
    }
  }

  return 0;
}



console.log(garlandDegree('onion')); // 2
console.log(garlandDegree('that')) // 1
console.log(garlandDegree('12boot12')) // 2
console.log(garlandDegree('ab3-ab3-')) // 4
console.log(garlandDegree('bread')) // 0
console.log(garlandDegree('ababab')) // 4
console.log(garlandDegree('ababababab')) // 8
console.log(garlandDegree('111111')) // 5
console.log(garlandDegree('123123123123')) // 9
console.log(garlandDegree('')) // 0
console.log(garlandDegree('1')) // 0

