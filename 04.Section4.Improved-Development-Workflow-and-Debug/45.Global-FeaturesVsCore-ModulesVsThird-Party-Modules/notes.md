# Section 4: Improved Development Workflow and Debug

## **45. Global Features vs Core Modules vs Third-Party Modules**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12251346#overview)

---

### **Understanding Node.js Features**

Node.js provides a rich ecosystem of functionality, which can be categorized into three main types:

1. **Global Features**
2. **Core Node.js Modules**
3. **Third-Party Modules**

Each type serves a specific purpose and has different ways of being accessed or used.

---

### **1. Global Features**

**Global features** are built-in objects, functions, and keywords that are available in all Node.js files without requiring an import.

#### **Examples of Global Features**

1. **Keywords:**

   - `const`, `let`, `function`, `class`

2. **Global Objects:**

   - **`process`**: Provides information about the current Node.js process.
     ```javascript
     console.log(process.version); // Logs the Node.js version
     ```
   - **`console`**: Outputs information to the console.
     ```javascript
     console.log("Hello, World!");
     ```

3. **Global Functions:**

   - **`setTimeout`**: Executes a function after a specified delay.
     ```javascript
     setTimeout(() => {
       console.log("Delayed message");
     }, 1000);
     ```

4. **Global Variables:**
   - **`__dirname`**: The directory name of the current module.
     ```javascript
     console.log(__dirname);
     ```
   - **`__filename`**: The full path of the current module.
     ```javascript
     console.log(__filename);
     ```

**Key Point:**  
You do **not** need to import global features; they are available automatically.

---

### **2. Core Node.js Modules**

**Core modules** are built into Node.js and provide essential functionality for tasks like file operations, networking, and path manipulation.

#### **Characteristics of Core Modules**

- **No Installation Required:** They come bundled with Node.js.
- **Import Required:** You need to import them using `require`.

#### **Common Core Modules**

1. **File System (`fs`):**

   - Used for file operations like reading and writing.

   ```javascript
   const fs = require("fs");

   fs.writeFileSync("example.txt", "Hello, Node.js!");
   console.log(fs.readFileSync("example.txt", "utf-8"));
   ```

2. **Path (`path`):**

   - Handles and transforms file paths.

   ```javascript
   const path = require("path");

   console.log(path.join(__dirname, "example.txt"));
   ```

3. **HTTP (`http`):**

   - Create web servers and handle HTTP requests.

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, World!");
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

4. **Events (`events`):**

   - Work with event-driven programming.

   ```javascript
   const EventEmitter = require("events");

   const eventEmitter = new EventEmitter();
   eventEmitter.on("greet", () => console.log("Hello, Event!"));
   eventEmitter.emit("greet");
   ```

**Key Point:**  
Core modules require an import but **do not need to be installed via npm**.

---

### **3. Third-Party Modules**

**Third-party modules** are external libraries created by the community and installed via npm (Node Package Manager). They extend Node.js capabilities beyond the core modules.

#### **Characteristics of Third-Party Modules**

- **Installation Required:** Install using `npm install <package-name>`.
- **Import Required:** Import them using `require` or `import`.

#### **Examples of Third-Party Modules**

1. **Express:**  
   A web framework for Node.js.

   ```bash
   npm install express
   ```

   ```javascript
   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
     res.send("Hello, Express!");
   });

   app.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **Lodash:**  
   A utility library for arrays, objects, and functions.

   ```bash
   npm install lodash
   ```

   ```javascript
   const _ = require("lodash");

   const numbers = [1, 2, 3, 4];
   console.log(_.reverse(numbers)); // Output: [4, 3, 2, 1]
   ```

3. **Dotenv:**  
   Load environment variables from a `.env` file.

   ```bash
   npm install dotenv
   ```

   ```javascript
   require("dotenv").config();

   console.log(process.env.MY_VARIABLE);
   ```

**Key Point:**  
Third-party modules need to be **installed via npm** and **imported** into your project.

---

### **Comparison Table**

| **Feature Type**        | **Installation**    | **Import Required** | **Examples**                      |
| ----------------------- | ------------------- | ------------------- | --------------------------------- |
| **Global Features**     | No                  | No                  | `console`, `process`, `__dirname` |
| **Core Modules**        | No                  | Yes                 | `fs`, `path`, `http`, `events`    |
| **Third-Party Modules** | Yes (`npm install`) | Yes                 | `express`, `lodash`, `dotenv`     |

---

### **Summary**

1. **Global Features:**

   - Available automatically (e.g., `console`, `process`, `setTimeout`).

2. **Core Modules:**

   - Bundled with Node.js, but require an import (e.g., `fs`, `http`).

3. **Third-Party Modules:**
   - Installed via `npm` and require an import (e.g., `express`, `lodash`).

---

### **Mini-Exercise**

1. **Create a New Node.js Project:**

   ```bash
   mkdir node-basics
   cd node-basics
   npm init -y
   ```

2. **Create a `server.js` File:**

   - Use a core module (`http`) and a third-party module (`lodash`).

   ```bash
   npm install lodash
   ```

   ```javascript
   const http = require("http");
   const _ = require("lodash");

   const numbers = [1, 2, 3, 4];
   const reversedNumbers = _.reverse([...numbers]);

   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end(`Reversed Numbers: ${reversedNumbers.join(", ")}`);
   });

   server.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
   });
   ```

3. **Run the Server:**

   ```bash
   node server.js
   ```

4. **Test the Server:**  
   Visit `http://localhost:3000` to see the reversed numbers.

---

### **Vocabulary for Technical English**

- **Global Feature:** A built-in part of the JavaScript or Node.js runtime.
- **Core Module:** A module provided by Node.js that doesn’t require installation.
- **Third-Party Module:** An external library installed via npm.
- **Import:** Including a module in your file using `require` or `import`.

---

Next, we’ll dive into **46. Debugging Node.js Applications**! Let me know when you’re ready! 🚀
