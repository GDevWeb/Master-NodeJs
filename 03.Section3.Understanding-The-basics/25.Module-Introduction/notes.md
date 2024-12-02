# Section 3: Understanding the Basics

## **25. Module Introduction**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561884#overview)

---

### **What Are Modules in Node.js?**

Modules in Node.js are building blocks of functionality that help organize code into reusable pieces. They allow you to split your application into smaller, maintainable chunks and share or reuse functionality across files.

---

### **Why Use Modules?**

1. **Code Organization:**  
   Split large applications into smaller, manageable files.

2. **Reusability:**  
   Share the same functionality across multiple parts of your application or different projects.

3. **Encapsulation:**  
   Prevent variables and functions from polluting the global scope.

4. **Built-in Functionality:**  
   Use Node.js’s powerful built-in modules (e.g., `fs`, `http`, `path`) to save development time.

---

### **Types of Modules in Node.js**

1. **Core Modules:**

   - Provided by Node.js and can be used without installation.
   - Examples: `fs` (file system), `http` (server creation), `os` (operating system utilities).

2. **User-Defined Modules:**

   - Modules you create to organize your application.

3. **Third-Party Modules:**
   - Modules from external sources installed via npm (Node Package Manager).
   - Examples: `express` (web framework), `lodash` (utility functions).

---

### **How Node.js Modules Work**

1. **Creating a Module:**

   - Any file in Node.js is treated as a module.
   - Use `module.exports` to make parts of a file accessible in other files.

   ```javascript
   // math.js
   const add = (a, b) => a + b;
   const subtract = (a, b) => a - b;

   module.exports = { add, subtract };
   ```

2. **Using a Module:**
   - Use `require` to import a module.
   ```javascript
   // app.js
   const math = require("./math");
   console.log(math.add(5, 3)); // Output: 8
   console.log(math.subtract(5, 3)); // Output: 2
   ```

---

### **Core Module Example**

1. **Using the `fs` Module:**

   - The `fs` (file system) module allows interaction with the file system.

   ```javascript
   const fs = require("fs");

   fs.writeFileSync("hello.txt", "Hello, Node.js!");
   console.log("File created.");
   ```

2. **Using the `http` Module:**

   - Create a basic HTTP server:

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, World!");
   });

   server.listen(3000, () => {
     console.log("Server is running on http://localhost:3000");
   });
   ```

---

### **Best Practices for Modules**

1. **Use Descriptive Names:**  
   Name files and modules to reflect their purpose (e.g., `auth.js` for authentication logic).

2. **Export Only What’s Necessary:**  
   Limit exported functions and objects to only what other parts of the app need.

3. **Organize Modules by Features:**  
   Group related functionality into the same module or folder.

---

### **Mini-Exercise**

1. Create a module (`greetings.js`) that exports two functions: `sayHello` and `sayGoodbye`. Import and use them in a new file.
2. Use the `http` module to create a server that responds with a message from a custom module.

---

### **Vocabulary for Technical English**

- **Module:** A reusable block of code.
- **Core Module:** A built-in module provided by Node.js.
- **Export:** Make a function or variable available for other files.
- **Require:** Import functionality from another module.

---
