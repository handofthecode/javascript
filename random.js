function randomize(min, max) {
  if (min === max) { return min }
  if (max < min) { [max, min] = [min, max] }
  return Math.random() * (max - min);
}

console.log(randomize(100, 1));