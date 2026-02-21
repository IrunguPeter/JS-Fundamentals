const firstArg = process.argv[2];
const convertedInt = parseInt(firstArg);

if (Number.isNaN(convertedInt)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${convertedInt}`);
}