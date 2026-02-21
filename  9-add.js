/**
 * Returns the sum of two integers
 */
function add(a, b) {
  return a + b;
}

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log('NaN');
} else {
  console.log(add(num1, num2));
}