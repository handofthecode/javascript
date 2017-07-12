/*
input: string of numbers separated by ',' (for lists) or ['..', '-', ':'] (for ranges).
output: array of integers
algorithm: 
  -regex to clean and simplify ['..', '-', ':'] to just '-'
  -declair result array.
  -split input by ','
  -push each el into result unless it contains '-'
    -if '-' is encountered. Split by '-'.
      -send first and last idx to a range function that will build-out the range of numbers.
      -push each number from the return into the result array.
    -send array to longHand function.
    -return result array.

longHand algorithm:
  -declare empty result array
  -iterate through shorthand arr
    -if num includes '-'
      -split by '-' and use num[0] and num.slice(-1);
    -if num is greater than last result val push to result
    -if num is lesser than last result val, replace last digit of last result with 0 and add num.
      -if num is still lesser, add 10.

buildRange algorithm:
  -declair empty result array;
  -split by ('-') and send to shortToLong function with previous number from result as a base.
  
  -loop between first and last numbers and push each to result array.
*/

function convertShortHand(input) {
  array = input.replace(' ', '').replace(/(\.\.)|(:)/g, '-').split(',');
  return shortToLongHand(mergeNumsAndRanges(array));
}

function mergeNumsAndRanges(array) {
  var merged = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].includes('-')) {
      buildRange(array[i], merged.slice(-1)).forEach(function(num) {
        merged.push(num) 
      });
    }
    else { merged.push(array[i]) }
  }

  return merged;
}

function shortToLongHand(short) {
  var long = [short[0]];
  for (var i = 1; i < short.length; i++) {
    if (+long.slice(-1)[0] > +short[i]) { 
      short[i] = makeLarger(short[i], long.slice(-1)[0])
    }
    long.push(short[i]);
  }
  return long;
}

function makeLarger(num, base) {
  var numDig = num.length;
  num = base.slice(0, -numDig) + num;
  if (+base > +num) { num = String(+num + 10**numDig) }
  return num;
}

function buildRange(rangeStr, base) {
  if (base.length === 0) { base = [String(+rangeStr.split('-')[0] - 1)] }
  var long = shortToLongHand(base.concat(rangeStr.split('-')));
  var result = [];
  for (var i = +long[1]; i <= +long.slice(-1)[0]; i++) { result.push(String(i)); }
  return result;
}


console.log(convertShortHand('1,3,7,2,4,1')); // '[1, 3, 7, 12, 14, 21]
console.log(convertShortHand('1-3, 1-2')); // [1,2,3,11,12]
console.log(convertShortHand('1:5:2')); // [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(convertShortHand('104-2')); // [104, 105 ... 112]
console.log(convertShortHand('104..02')); // [104, 105 ... 202]
console.log(convertShortHand('545, 64:11')); // [545, 564 ... 611]
