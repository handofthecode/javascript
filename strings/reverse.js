function reverse(string) {
  result = [];
  for (var i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }

  return result.join('');
}


console.log(reverse('hello'));