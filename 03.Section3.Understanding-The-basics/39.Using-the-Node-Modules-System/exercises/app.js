/* 
**Mini-Exercise**

1. Create a module (`calculator.js`) that exports functions for addition, subtraction, multiplication, and division.
2. Import the module into another file and use it to perform calculations.
3. Install a third-party module (`chalk`) to style the output in the console.

*/

const calculator = require("./utils/calculator");

// Using the functions
console.log("Addition:", calculator.addition(5, 3)); // Output: 8
console.log("Subtraction:", calculator.subtraction(5, 3)); // Output: 2
console.log("Multiplication:", calculator.multiplication(5, 3)); // Output: 15
console.log("Division:", calculator.divide(5, 3)); // Output: 1.666...
