const { time } = require("console");
const fs = require("fs");
const { nextTick } = require("process");
setImmediate(() => console.log("SetImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);

  process.nextTick(() => console.log("2nd next click"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("FIle reading CB");
});

process.nextTick(() => console.log("nextTick "));

console.log("Last line on the file");

// last line of the file
// nextTick
// Promise
// Timer expired
// setImmediate
// File reading cb
// 2nd Next Tick
// 2nd setImmediate
// 2nd timer
