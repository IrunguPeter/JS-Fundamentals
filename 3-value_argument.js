// Access the first user argument directly
const firstArg = process.argv[2];

if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}