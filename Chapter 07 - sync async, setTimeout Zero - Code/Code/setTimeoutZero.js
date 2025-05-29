console.log("Hello world");

var a = 1078698;
var b = 20986;

// This callback will only bee pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
  console.log("call me right now");
}, 0); //Trust issue with setTimeout

setTimeout(() => {
  console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
