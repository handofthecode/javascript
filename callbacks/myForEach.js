function myForEach(array, func) {
  array.forEach(function(a) {
    func(a);
  });
  return undefined;
}

var min = Infinity;
var getMin = function(value) {
  min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 3], getMin);     // undefined
console.log(min);                         // 3