# Section 4: Improved Development Workflow and Debug

## **50. Dealing with Runtime Errors**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11563028#overview)

---

### **What Are Runtime Errors?**

**Runtime errors** occur while the code is executing, even though it has no syntax errors. These errors happen when the program encounters an unexpected condition, such as invalid input, missing files, or network issues.

Unlike syntax errors, runtime errors do not prevent the code from being parsed but can cause the application to crash if not handled properly.

---

### **Common Causes of Runtime Errors**

1. **Accessing Undefined Variables:**

   ```javascript
   console.log(user.name); // `user` is undefined
   ```

2. **Invalid Data Types:**

   ```javascript
   const num = 42;
   num.toUpperCase(); // `num` is a number, not a string
   ```

3. **Null or Undefined Values:**

   ```javascript
   const obj = null;
   console.log(obj.name); // Cannot read properties of null
   ```

4. **File or Network Errors:**

   ```javascript
   const fs = require("fs");
   fs.readFile("nonexistent.txt", (err, data) => {
     if (err) throw err; // File not found
   });
   ```

5. **Division by Zero:**
   ```javascript
   const result = 10 / 0; // Results in Infinity
   ```

---

### **How to Handle Runtime Errors**

1. **Using `try...catch` for Synchronous Code**

   - Wrap code that may throw an error in a `try` block and handle the error in the `catch` block.

   ```javascript
   try {
     const result = JSON.parse("{ invalid json }");
     console.log(result);
   } catch (error) {
     console.error("Error parsing JSON:", error.message);
   }
   ```

2. **Handling Errors in Asynchronous Code**

   - For asynchronous operations, use error-first callbacks.

   ```javascript
   const fs = require("fs");

   fs.readFile("file.txt", "utf-8", (err, data) => {
     if (err) {
       console.error("Error reading file:", err.message);
     } else {
       console.log("File content:", data);
     }
   });
   ```

3. **Using Promises and `.catch()`**

   - Handle errors in asynchronous code using Promises.

   ```javascript
   const fs = require("fs").promises;

   fs.readFile("file.txt", "utf-8")
     .then((data) => {
       console.log("File content:", data);
     })
     .catch((err) => {
       console.error("Error reading file:", err.message);
     });
   ```

4. **Using `async/await` with `try...catch`**

   - Handle errors gracefully in `async/await` functions.

   ```javascript
   const fs = require("fs").promises;

   async function readFile() {
     try {
       const data = await fs.readFile("file.txt", "utf-8");
       console.log("File content:", data);
     } catch (error) {
       console.error("Error reading file:", error.message);
     }
   }

   readFile();
   ```

5. **Graceful Shutdown for Uncaught Exceptions**

   - Handle unexpected exceptions to prevent crashes and allow for a graceful shutdown.

   ```javascript
   process.on("uncaughtException", (err) => {
     console.error("Uncaught Exception:", err);
     process.exit(1);
   });

   // Example of an uncaught exception
   throw new Error("Something went wrong!");
   ```

---

### **Best Practices for Handling Runtime Errors**

1. **Anticipate Potential Issues:**

   - Validate inputs and check for edge cases.

   ```javascript
   function divide(a, b) {
     if (b === 0) {
       throw new Error("Division by zero is not allowed.");
     }
     return a / b;
   }
   ```

2. **Provide Descriptive Error Messages:**

   - Make error messages informative for easier debugging.

   ```javascript
   if (!user) {
     throw new Error("User object is required.");
   }
   ```

3. **Use Logging for Debugging:**

   - Use logging libraries like **Winston** to log errors for future analysis.

   ```javascript
   const winston = require("winston");

   const logger = winston.createLogger({
     transports: [new winston.transports.Console()],
   });

   logger.error("An error occurred");
   ```

4. **Graceful Degradation:**

   - If an error occurs, degrade the functionality instead of crashing the entire app.

   ```javascript
   try {
     performCriticalTask();
   } catch (error) {
     console.error("Critical task failed. Switching to fallback.");
     performFallbackTask();
   }
   ```

5. **Catch Errors in Promises:**

   - Always include `.catch()` when working with Promises.

6. **Don’t Swallow Errors:**
   - Log or handle errors appropriately rather than ignoring them.

---

### **Mini-Exercise**

1. **Synchronous Error Handling:**

   - Write a function that parses a JSON string. If the JSON is invalid, catch the error and log a friendly message.

   ```javascript
   function parseJSON(jsonString) {
     try {
       const result = JSON.parse(jsonString);
       console.log("Parsed JSON:", result);
     } catch (error) {
       console.error("Invalid JSON:", error.message);
     }
   }

   parseJSON("{ invalid json }");
   ```

2. **Asynchronous Error Handling:**

   - Write a function that reads a file asynchronously and handles any errors.

   ```javascript
   const fs = require("fs").promises;

   async function readFile(filename) {
     try {
       const data = await fs.readFile(filename, "utf-8");
       console.log("File content:", data);
     } catch (error) {
       console.error("Error reading file:", error.message);
     }
   }

   readFile("nonexistent.txt");
   ```

---

### **Vocabulary for Technical English**

- **Runtime Error:** An error that occurs during the execution of a program.
- **Try-Catch Block:** A mechanism to handle errors in synchronous code.
- **Graceful Degradation:** Maintaining partial functionality when an error occurs.
- **Uncaught Exception:** An error that is not handled by any `try...catch` block.
- **Fallback:** An alternative solution when the primary action fails.

---
