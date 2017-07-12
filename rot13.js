function rot13(string) {
  result = '';
  var asc;
  for (var i = 0; i < string.length; i++) {
	  var asc = string.charCodeAt(i);
	  if (asc >= 65 && asc <= 77 || asc >= 97 && asc <= 109) { asc += 13 }
	  else if (asc >= 78 && asc <= 90 || asc >= 110 && asc <= 122) { asc -= 13 }
	  result += String.fromCharCode(asc);
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.