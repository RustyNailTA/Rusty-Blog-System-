function sum(a, b) {
    return a + b;
}

function fib(n) {

    //console.log('fibonachi')
   if (n < 2) {
     return 1;
   } else {
     return fib(n - 2) + fib(n - 1);
   }
}

export { sum, fib };

