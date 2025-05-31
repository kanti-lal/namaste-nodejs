const fs = require("fs");
const a = 100;

setImmediate(() => console.log("SetImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => console.log("Process.nextTick"));

function printA() {
  console.log("a =", a);
}

printA();
console.log("Last line of the file.");

Promise.resolve(() => console.log("Promise"));

// a = 100
// Last line of the file
// Process.nextTick
// Promise
// Timer expired
// setImmediate
// File reading cB
