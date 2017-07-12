
function teddyAge() {
  return Math.floor(20 + Math.random() * 180)
}
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trackRandom(times) {
  var results = {};
  var num;
  for (var i = 0; i < times; i++) {
    num = randomBetween(20, 200);
    results[num] = results[num] || 0;
    results[num]++;
  }
  
  return results;
}

console.log(trackRandom(1000));