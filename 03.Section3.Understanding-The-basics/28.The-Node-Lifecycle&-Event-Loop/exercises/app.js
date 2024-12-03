/* 
Mini-Exercise

Write a program that:
*/

/* 1.Uses setTimeout and setImmediate to demonstrate their execution order.*/

console.info("***Uses setTimeout and setImmediate***");
setTimeout(() => {
  console.log(`SetTimeout `);
}, 0);
setImmediate(() => console.log("Immediate")); //deprecated method !

/* 2.Reads a file asynchronously and logs its content after completing a Promise.*/

// synchronous :
const fs = require("fs");
const myFile = "./myFile.txt";
try {
  const readFile = fs.readFileSync(myFile, "utf-8");
  console.log(" readFile sync: ", readFile);
} catch (error) {
  console.error("Error reading the file:", error.message);
}

// asynchronous :

fs.readFile(myFile, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("asynchronous: ", data);
});

/* 3.Modify the program to add a synchronous blocking operation and observe its effect on the event loop.*/

// Read the file synchronously
const readFile = fs.readFileSync(myFile, "utf-8");
console.log("Read file sync:", readFile);

// Blocking operation
console.log("Starting blocking operation...");
const start = Date.now();
while (Date.now() - start < 5000) {
  // Synchronous blocking for 5 seconds
  // This loop blocks the event loop
}
console.log("Blocking operation complete");

// Adding a timeout to observe its delay due to blocking
setTimeout(() => {
  console.log("Timeout callback executed");
}, 1000);

console.log("Program end");
