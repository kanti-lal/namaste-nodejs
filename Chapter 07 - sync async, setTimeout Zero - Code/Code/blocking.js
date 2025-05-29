const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2 - Password Base Key Derivative function

// Synchronous Function - WILL BLOCK THE MAIN THREAD - DON'T USE IT
console.log("===========");
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First Key is generated");

setTimeout(() => {
  console.log("call me right now!!!! ");
}, 0); //it will only be called once call stack main thread is empty

// Async fn
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}
const c = multiplyFn(a, b);

console.log("Multiplication ans is:" + c);
