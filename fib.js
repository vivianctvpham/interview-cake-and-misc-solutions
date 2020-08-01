function fib(n) {

  // Compute the nth Fibonacci number
  if (n < 0) throw new Error("Cannot be negative");
  
  return n < 2 ? n : fib(n - 1) + fib(n - 2)

}
