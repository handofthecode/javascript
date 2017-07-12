// input: string
// output: true or false

// ALGORITHM
// -Scrub string of any non digits.
// 
// -reverse iterate, convert to num, double every other value and output to array.
//    -if value is >= 10, subtract 9.
// -finally, sum all digits.
//    -if total mod 10 === 0. return true. Else, false.


function luhnRemainder(string) {
  var array, total;
  nums = string.replace(/\D/g, '').split('').reverse();
  if (nums.length === 0) return false;
  total = nums.map(Number).reduce(function(sum, val, idx) {
    if (idx % 2 !== 0) {
      val *= 2;
      if (val >= 10) {
        val -= 9;
      }
    }

  return sum + val;
  });

  return total % 10;
}

function luhn(string) {
  return luhnRemainder(string) === 0;
}

console.log(luhn('')); //false
console.log(luhn('1')); //false
console.log(luhn('10')); //false
console.log(luhn('5#7) 0a'));//true
console.log(luhn('55')); //false
console.log(luhn('5()!@%- 5')); //false
console.log(luhn('75489')); //false
console.log(luhn('57489')); //true

// Write a function that can add a 'check digit' to make an invalid number, a valid luhn number.

// input: string
// output: string + one char


// algorithm: 
// -first check if already a luhn number. Return string if true.
// -IF not: append 0 and return luhnRemainder function.
// -Subtract remainder from 10 use that number as the check.
// 

function addCheck(string) {
  var check, remainder;
  if (luhn(string)) return string;
  remainder = luhnRemainder(string + '0');
  check = 10 - remainder;
  return string + check;
}
console.log(addCheck('57489')); // '57489'
console.log(addCheck('5')); // '59'
console.log(addCheck('4')); // '42'
console.log(addCheck('10')); // '109'

