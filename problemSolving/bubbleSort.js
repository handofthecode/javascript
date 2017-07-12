function bubbleSort(array) {
  var length = array.length;
  var start = 0;

  while (start !== undefined) {
    var i = start;
    start = undefined;

    for (i; i < length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        if (start === undefined && i > 0) start = i - 1;
      }
    }
    length--;
  }

  return array;
}


array = [6, 2, 7, 1, 4]
bubbleSort(array);
console.log(array);     // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);     // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']