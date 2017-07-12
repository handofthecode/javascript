var mem = {};
function fibonacci(n) {
  if (n <= 2) return 1;
  else if (!!mem.n) { return mem.n; }
  else { 
    mem.n = fibonacci(n - 2) + fibonacci(n - 1);
    return mem.n;
  }
}

// function fibonacci2(count) {
//   var fib = 1;
//   var stack = 0;
//   for (var i = count; i > 1; i--) {
//     fib = stack + fib;
//     stack = fib - stack;
//   }

//   return fib;
// }


console.log(fibonacci(1000))