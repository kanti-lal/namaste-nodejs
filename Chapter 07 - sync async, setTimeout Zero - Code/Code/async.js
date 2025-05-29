const fs = require("node:fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}
const c = multiplyFn(a, b);
console.log("Multiplication ans is:" + c);
