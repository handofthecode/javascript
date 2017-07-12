function repeatedCharacters(string) {
  string = string.toLowerCase();
  result = {};
  for (var i = 0; i < string.length; i++) {
    if (!result[string[i]]) { result[string[i]] = 1 }
    else { result[string[i]] += 1 }
  }
  for (key in result) { 
    if (result[key] === 1) { delete result[key] }
  }
  return result;
}



console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }