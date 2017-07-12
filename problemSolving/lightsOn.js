function lightsOn(switchNum) {
  var switches = new Array(switchNum).fill(true);
  var startIdx = 1;
  var skip = 2;

  while (startIdx < switches.length) {
    for (var i = startIdx; i < switches.length; i += skip) {
      switches[i] = switches[i] === true ? false : true;
    }

    startIdx++;
    skip++;
  }

  return switches.reduce(trueIdx, []);
}

function trueIdx(arr, bool, idx) {
  return bool === true ? arr.concat([idx + 1]) : arr;
}

/*
Input: Number (switches)
output: array of numbers indicating index + 1 of on switches

algorithm:
  create new array of switches length and fill with true;

  while startIdx < array.length 
    iterate through array
      start idx = 1
      incrimentAmount i += *2*
      flip true to false & False to true
      when i === array.length - 1
        start idx++
        incrementAmount++

  reduce array of booleans to array of index + 1 where true
*/




lightsOn(2); // [1]
console.log(lightsOn(3)); // [1, 3]
console.log(lightsOn(4)); // [1, 4]
console.log(lightsOn(5)); // [1, 4];

// detailed result of each round for 5 lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off; 1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]