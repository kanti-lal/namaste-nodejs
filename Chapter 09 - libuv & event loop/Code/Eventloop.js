const fs = require("fs");
const a = 100;

setImmediate(() => console.log("SetImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading CB");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);

function printA() {
  console.log("a =", a);
}

printA();
console.log("Last line of the file.");

// Output -
// a = 100
// Last line of the file.
// Timer expired
// SetImmediate
// File reading CB
