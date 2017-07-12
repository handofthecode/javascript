function concat(array1, arg2) {
  var result = array1.slice();
  if (Array.isArray(arg2)) {
    for (var i = 0; i < arg2.length; i++) { result.push(arg2[i]) }
  }
  else { result.push(arg2) }

  return result;
}

var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);      // [2, 3, { a: 2, b: 3 }]
console.log(newArray[2]);
obj.a = 'two';
console.log(newArray[2]);                                // [2, 3, { a: 'two', b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3[5]);                                    // [1, 2, 3, 4, 5, { a: 'two', b: 3 }]
obj.b = 'three';
console.log(arr3[5]);                                    // [1, 2, 3, 4, 5, { a: 'two', b: 'three' }]

arr3[5].b = 3;                           // or arr3[5]['b'] = 3
console.log(obj);                                     // { a: 'two', b: 3 }