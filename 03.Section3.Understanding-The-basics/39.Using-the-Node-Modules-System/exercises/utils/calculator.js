/* 1. Create a module (`calculator.js`) that exports functions for addition, subtraction, multiplication, and division.
 */

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error("Division by zero is not allowed !");
  return a / b;
};

// module.exports = calculator;

module.exports = {
  addition,
  subtraction,
  multiplication,
  divide,
};
