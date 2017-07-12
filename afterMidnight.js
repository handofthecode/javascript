function timeOfDay(deltaMin) {
  return new Date(0, 0, 0, 0, deltaMin).toTimeString().slice(0, 5);
}

var MILL_PER_MIN = 60000;
function afterMidnight(timeStr) {
  return Date.parse('January 1, 1970, ' + timeStr + ':00 UTC') / MILL_PER_MIN;
}

function beforeMidnight(timeStr) {
  return Date.parse('Dec 31, 1969, ' + timeStr + ':00 UTC') / -MILL_PER_MIN;
}

console.log(afterMidnight('00:00'));        // 0
console.log(beforeMidnight('00:00'));       // 0
console.log(afterMidnight('12:34'));        // 754
console.log(beforeMidnight('12:34'));       // 686


console.log(timeOfDay(0));       // "00:00"
console.log(timeOfDay(-3));      // "23:57"
console.log(timeOfDay(35));      // "00:35"
console.log(timeOfDay(-1437));   // "00:03"
console.log(timeOfDay(3000));    // "02:00"
console.log(timeOfDay(800));     // "13:20"
console.log(timeOfDay(-4231));   // "01:29"