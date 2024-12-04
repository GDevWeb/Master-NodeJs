const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by 0");

module.exports = {
  addition,
  subtraction,
  multiply,
  divide,
};
