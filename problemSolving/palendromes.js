function substringsAtStart(string) {
  return string.split('').map((_, i) => string.slice(0, i + 1));
}

// console.log(substringsAtStart('abc'));  // ['a', 'ab', 'abc']
// substringsAtStart('a')     // ['a']
// console.log(substringsAtStart('xyzzy')); // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

function substrings(s) {
    return s.split('').map((_, i) => substringsAtStart(s.slice(i))).reduce((r, c) => r.concat(c));
}
// console.log(substrings('abcde'));
// result
// [ 'a', 'ab', 'abc', 'abcd', 'abcde',
//   'b', 'bc', 'bcd', 'bcde',
//   'c', 'cd', 'cde',
//   'd', 'de',
//   'e' ]
  
function palindromes(string) {
  return substrings(string).filter((s) => s.length > 1 && s === s.split('').reverse().join(''));
}

  
// console.log(palindromes('abcd'));  // []
console.log(palindromes('madam')); // ['madam', 'ada']
// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // result
// [ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
//   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
//   '-madam-', 'madam', 'ada', 'oo' ]

palindromes('knitting cassettes');
// result
[ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]