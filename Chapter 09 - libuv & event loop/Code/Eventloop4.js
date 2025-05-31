const fs = require("fs");

setImmediate(() => console.log("SetImmediate"));

setTimeout(() => console.log("Timer expired", 0));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("file reading CB");
});

process.nextTick(() => {
  process.nextTick(() => {
    process.nextTick(() => console.log("3rd -Inner nextTick"));
    console.log("Inner nextTick");
    setImmediate(() => console.log("2nd - SetImmediate"));
  });
  console.log("nextTick");
});

console.log("Last line of the file");

/**
 * Last line of the file
 * nextTick
 * inner nextTick
 * Promise
 * Timer expired
 * setImmediate
 * File reading CB
 */
