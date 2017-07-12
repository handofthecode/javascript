function totalArea(rectangles) {
  var areas = rectangles.map(function(v) {
    if (v[0] === v[1]) {return v[0] * v[1]}
    else { return 0 }
  });
  var result = areas.reduce(function(a, b) {
    return a + b;
  });

  return result;
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles)); // 141