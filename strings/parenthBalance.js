function isBalanced(string) {
  var open = 0;
  var closed = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') open++;
    else if (string[i] === ')') closed++;
    if (closed > open) return false;
  }

  return open === closed;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false