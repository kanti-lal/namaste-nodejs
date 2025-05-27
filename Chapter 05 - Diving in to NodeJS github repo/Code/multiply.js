function calculateSum(a, b) {
  const result = a + b;
  console.log(result);
}

calculateSum(5, 4);

setTimeout(() => {
  console.log("set timeout print");
}, 3000);

module.exports = { calculateSum };
