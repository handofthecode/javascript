function triangle(a, b, c) {
  var sides = [a, b, c].sort((a, b) => a - b);
  if (sides[0] <= 0 || sides[0] + sides[1] <= sides[2]) return 'invalid';
  var uniqSides = sides.filter((val, i) => sides.indexOf(val) === i).length;
  if (uniqSides === 1) return 'equilateral';
  else if (uniqSides === 2) return 'isosceles';
  return 'scalene';
}

// console.log(triangle(3, 3, 3))   // equilateral
// console.log(triangle(3, 3, 1.5)) // isosceles
// console.log(triangle(3, 4, 5))   // scalene
// console.log(triangle(0, 3, 3))   // invalid
// console.log(triangle(3, 1, 1))   // invalid

function triangle(a, b, c) {
  var angles = [a, b, c].sort((a, b) => a - b);
  var total = angles.reduce((sum, val) => sum + val);
  if (angles[0] <= 0 || total != 180) return 'invalid';
  else if (angles.indexOf(90) > -1) return 'right';
  else if (angles[2] > 90) return 'obtuse';
  return 'acute';
}

console.log(triangle(60, 70, 50))   // acute
console.log(triangle(30, 90, 60))   // right
console.log(triangle(120, 50, 10))  // obtuse
console.log(triangle(0, 90, 90))    // invalid
console.log(triangle(50, 50, 50))   // invalid