/* 
**Mini-Exercise**

1. Create a Node.js script that:

   - Reads a file synchronously and logs its content.
   - Reads another file asynchronously and logs its content after completion.

2. Enhance the script to:
   - Convert the asynchronous file read to use `Promises` and `async/await`.
*/

const fs = require("fs");
const fsP = require("fs").promises;

const myFile = "./docs/myfile.txt";

/* ***Sync*** */
const data = fs.readFileSync(myFile, "utf-8");
console.log("'myFile.txt' Read sync - Myfile content:", data);

/* ***Async*** */
fs.readFile(myFile, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("Read asynchronously myFile.txt:", data);
});

// Asynchronously using async/await

const processFile = async () => {
  try {
    // Read the content of the file
    const data = await fsP.readFile("./docs/myFile.txt", "utf8");
    console.log("File Content:", data);

    // Transform the data (convert to uppercase) and write to a new file
    const transformedData = data.toUpperCase();
    await fsP.writeFile("./docs/output.txt", transformedData);
    console.log("File written successfully!");

    // Verify the new file content
    const verificationData = await fsP.readFile("output.txt", "utf8");
    console.log("Verified Output:", verificationData);
  } catch (err) {
    console.error("Error occurred during file processing:", err.message);
  }
};

processFile();
