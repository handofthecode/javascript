BADINPUT = '0000000000';
function cleanPhoneNumber(numStr) {
  numStr = numStr.replace(/\D/g, '');
  if (numStr.length === 10) return numStr;
  else if (numStr.length === 11 && numStr[0] === '1') return numStr.slice(1);
  else return BADINPUT;
}

// Input: string.
// Output: 10 digit string.

// example:
 console.log(cleanPhoneNumber('1234567890')) //--> '1234567890'
  console.log(cleanPhoneNumber('12345678901')) //--> '2345678901'
  console.log(cleanPhoneNumber('22345678901')) //--> '0000000000'
  console.log(cleanPhoneNumber('123456789012')) //--> '0000000000'
  console.log(cleanPhoneNumber('!234567890')) //--> '0000000000'
  console.log(cleanPhoneNumber('111')) //--> '0000000000'
  console.log(cleanPhoneNumber('123-456 7(8).90')) //--> '1234567890'
  console.log(cleanPhoneNumber('123-456 7(8).901')) //--> '2345678901'

//        --ALGORITHM--
// -Clean string of any non-digits.
// -Count digits.
//   -if digits > 11 || < 10 --> '0000000000'
//   -else if digits === 11 && digits[1] === 1 Trim the 1.
// -Return string