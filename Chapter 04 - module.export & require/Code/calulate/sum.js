//Modules protects their variables and function to leak
console.log("Reached at the sum module");
// var x = "Hello from Kanti"

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

console.log(module.exports);

//Below are all the same type of module exports
// module.exports.x=x;
// module.exports.calculateSum=calculateSum

module.exports = { calculateSum };
