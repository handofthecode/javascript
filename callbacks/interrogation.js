function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) return false;
  }

  return true;
}


var isAString = function(value) {
  return typeof value === 'string';
};

console.log(myOwnEvery([5, 'a234', '1abc'], isAString));       // true