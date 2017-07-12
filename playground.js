// var myObj = {};
// myObj[myFunc()] = 'hello, ';
// function myFunc() {
//   return 'funcProp';
// }

// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);


var rate = 3;

function counter(count) {
  function otherMethod(num) {
    return num;
  }
  return otherMethod;
}

console.log(counter(4)(5));