function fridayThe13ths(year) {
  var fridays = 0;
  for (var m = 1; m <= 12; m++) {
    if (new Date(year, m, 13).getDay() === 5) fridays++;
  }

  return fridays;
}


console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(1986)); // 1