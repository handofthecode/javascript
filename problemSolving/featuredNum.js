function featured(num) {
  if (num >= 9876543201) return 'there is no next featured number';
  while (num % 7 !== 0 || num % 2 === 0) num++;
  while ((/(.)(.)*\1/).test(String(num))) num -= 14;
  return num;
}


console.log(featured(12))        // 21
console.log(featured(20))        // 21
console.log(featured(21))        // 35
console.log(featured(997))       // 1029
console.log(featured(1029))      // 1043
console.log(featured(999999))    // 1023547
console.log(featured(9876543200)) // 1023456987
