function slice(arr, start, end) {
  end = (end < 0 || end === undefined) ? arr.length : end;
  var result = [];
  for (var i = start; i < end; i++) {
    result.push(arr[i]);
  }

  return result;
}

function splice(arr, start, delCount, ...args) {
  start = start > arr.length - 1 ? arr.length - 1 : start;
  delCount = delCount + start > arr.length ? arr.length - start: delCount;
  
  var removed = arr.slice(start, start + delCount);
  var saved = arr.slice(start + delCount, arr.length);
  var newLength = arr.length + args.length - removed.length;

  // add new elements
  var afterNewEls = start + args.length;
  var count = 0;
  for (var i = start; i < afterNewEls; i++) {
    arr[i] = args[count];
    count++;
  }

  // re-add saved elements
  count = 0;
  for (var i = afterNewEls; i < afterNewEls + saved.length; i++) {
    arr[i] = saved[count];
    count++;
  }

  arr.length = newLength;
  return removed;
}

// console.log(splice([1, 2, 3], 1, 2));                   // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));                   // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));                   // []
// console.log(splice([1, 2, 3], 0, 1));                   // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'))               // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));                  // [2]
console.log(arr);                                       // [1, 'two', 3];

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'))          // [2 ,3]
console.log(arr);                                       // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                         // []
console.log(splice(arr, 1, 0, 'a'));                    // []
console.log(arr);                                       // [1, 'a', 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));                    // []
console.log(arr);                                       // ['a', 1, 2, 3]