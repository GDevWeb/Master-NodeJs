# Section 3: Understanding the Basics

## **39. Using the Node.js Module System**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561940#overview)
- [NodeJS.org - modules](https://nodejs.org/docs/v22.12.0/api/modules.html#module)
- [code](code/04-using-the-node-modules-system/app.js)
- [code](code/05-fixed-missing-head-tag/app.js)

---

### **What Is the Node.js Module System?**

Node.js uses a **module system** to manage reusable pieces of code. It allows developers to encapsulate functionality in separate files and import or export them as needed.

---

### **Types of Modules in Node.js**

1. **Core Modules:**

   - Built into Node.js, providing functionalities like file I/O (`fs`), networking (`http`), and more.
   - Example: `fs`, `path`, `http`, `events`.

2. **Local Modules:**

   - Created by the developer to organize application-specific logic.

3. **Third-Party Modules:**
   - Installed via npm (Node Package Manager).
   - Examples: `express`, `lodash`, `axios`.

---

### **How the Module System Works**

1. **Importing Modules:**

   - Use `require()` to import modules.

   ```javascript
   const fs = require("fs"); // Core module
   const myModule = require("./myModule"); // Local module
   ```

2. **Exporting Modules:**
   - Use `module.exports` or `exports` to define what a module exposes.

---

### **Using Core Modules**

Core modules are available without installation.

1. **File System (`fs`):**

   ```javascript
   const fs = require("fs");

   fs.writeFileSync("example.txt", "Hello, Node.js!");
   console.log(fs.readFileSync("example.txt", "utf-8")); // Output: Hello, Node.js!
   ```

2. **Path (`path`):**

   ```javascript
   const path = require("path");

   console.log(path.join(__dirname, "example.txt")); // Output: Full path to example.txt
   ```

3. **HTTP (`http`):**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, HTTP Module!");
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Creating Local Modules**

1. **Defining a Module (`math.js`):**

   ```javascript
   const add = (a, b) => a + b;
   const subtract = (a, b) => a - b;

   module.exports = { add, subtract };
   ```

2. **Using the Module:**

   ```javascript
   const math = require("./math");

   console.log(math.add(5, 3)); // Output: 8
   console.log(math.subtract(5, 3)); // Output: 2
   ```

---

### **Using Third-Party Modules**

Third-party modules are installed via npm.

1. **Installing a Module:**

   ```bash
   npm install lodash
   ```

2. **Using the Module:**

   ```javascript
   const _ = require("lodash");

   const numbers = [1, 2, 3, 4];
   console.log(_.reverse(numbers)); // Output: [4, 3, 2, 1]
   ```

---

### **Module Caching**

1. **Modules Are Cached:**

   - When a module is required, it’s loaded and cached, meaning subsequent `require` calls use the cached version.

   ```javascript
   const myModule = require("./myModule"); // Loaded and cached
   const sameModule = require("./myModule"); // Uses cached version
   ```

2. **Avoid Module Reload Issues:**
   - If you need a fresh instance, require inside a function or clear the cache manually.

---

### **Export Patterns**

1. **Exporting an Object:**

   ```javascript
   module.exports = {
     greet: () => console.log("Hello!"),
   };
   ```

2. **Exporting Individual Properties:**

   ```javascript
   exports.sayHello = () => console.log("Hello!");
   exports.sayGoodbye = () => console.log("Goodbye!");
   ```

3. **Default Exports:**
   - Assign directly to `module.exports` to export a single value.
   ```javascript
   module.exports = () => console.log("Default Export!");
   ```

---

### **Best Practices**

1. **Keep Modules Focused:**

   - A module should handle a specific functionality (e.g., database logic, utility functions).

2. **Use Meaningful Names:**

   - Use descriptive names for your modules and functions.

3. **Avoid Polluting Globals:**

   - Always use `module.exports` to explicitly define what’s exposed.

4. **Use Third-Party Modules Judiciously:**

   - Choose well-maintained and popular npm packages.

5. **Organize Modules:**
   - Structure your project into directories like `routes`, `controllers`, `models`, etc.

---

### **Mini-Exercise**

1. Create a module (`calculator.js`) that exports functions for addition, subtraction, multiplication, and division.
2. Import the module into another file and use it to perform calculations.
3. Install a third-party module (`chalk`) to style the output in the console.

---

### **Vocabulary for Technical English**

- **Module:** A reusable block of code encapsulated in a file.
- **Core Module:** Built-in Node.js modules like `fs` or `http`.
- **Local Module:** Modules created by the developer for specific application logic.
- **Third-Party Module:** External packages installed via npm.
- **Cache:** A stored copy of a required module to prevent redundant loading.

---
