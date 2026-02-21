/**
 * Computes the factorial of a number recursively
 */
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n <= 1 || Number.isNaN(n)) {
    return 1;
  }
  // Recursive step: n * factorial(n - 1)
  return n * factorial(n - 1);
}

const input = parseInt(process.argv[2]);

console.log(factorial(input));