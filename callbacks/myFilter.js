function myFilter(array, func) {
  result = [];
  for (var i = 0; i < array.length; i++) {
    func(array[i]) && result.push(array[i]);
  }
  return result;
}

var isPythagoreanTriple = function(triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

var result = myFilter([{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13},
          {a: 1, b: 2, c: 3}], isPythagoreanTriple);

console.log(result);
// returns [{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13}]
