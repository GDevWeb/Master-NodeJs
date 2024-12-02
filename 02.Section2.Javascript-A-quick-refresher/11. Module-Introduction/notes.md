# Section 2: JavaScript - A Quick Refresher

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561858#overview)

## **11. Module Introduction**

---

### **Why Refresh JavaScript for Node.js?**

Node.js uses JavaScript as its primary language, but working with JavaScript in a Node.js environment is different from working with it in the browser. To make the most of Node.js, a solid foundation in JavaScript concepts is essential.

---

#### **What is a Module?**

In JavaScript (and Node.js), a module is a reusable block of code that can be imported and exported across different parts of your application.

1. **Why Use Modules?**

   - **Separation of Concerns:** Break your application into smaller, manageable pieces.
   - **Reusability:** Share code between different parts of your app or even across projects.
   - **Avoiding Global Scope Pollution:** Prevent variables and functions from interfering with each other.

2. **Types of Modules in JavaScript:**
   - **Built-in Modules:** Predefined modules provided by JavaScript or Node.js, such as `fs` or `http` in Node.js.
   - **User-Defined Modules:** Modules you create for your application.
   - **Third-Party Modules:** External packages installed via npm (Node Package Manager).

---

#### **How JavaScript Modules Work**

In modern JavaScript, modules are based on the **ES6 module system**:

1. **Exporting Code:**

   - Use the `export` keyword to make code available for other files:
     ```javascript
     // math.js
     export const add = (a, b) => a + b;
     export const subtract = (a, b) => a - b;
     ```

2. **Importing Code:**

   - Use the `import` keyword to bring in code from another file:

     ```javascript
     // app.js
     import { add, subtract } from "./math.js";

     console.log(add(5, 3)); // 8
     console.log(subtract(5, 3)); // 2
     ```

---

#### **CommonJS Modules (Node.js Default)**

Node.js uses the CommonJS module system by default. Instead of `import` and `export`, it uses `require` and `module.exports`.

1. **Exporting Code:**

   ```javascript
   // math.js
   const add = (a, b) => a + b;
   const subtract = (a, b) => a - b;

   module.exports = { add, subtract };
   ```

2. **Importing Code:**

   ```javascript
   // app.js
   const { add, subtract } = require("./math");

   console.log(add(5, 3)); // 8
   console.log(subtract(5, 3)); // 2
   ```

---

#### **Differences Between ES Modules and CommonJS**

| **Feature**          | **ES Modules**           | **CommonJS**             |
| -------------------- | ------------------------ | ------------------------ |
| Syntax               | `import/export`          | `require/module.exports` |
| Default in Node.js   | No (needs configuration) | Yes                      |
| Asynchronous Loading | Yes                      | No                       |

---

#### **Practical Example: Using Modules in Node.js**

Let’s create a simple example to demonstrate modules in Node.js:

1. **Create a File:** `greet.js`:

   ```javascript
   const greet = (name) => {
     return `Hello, ${name}!`;
   };

   module.exports = greet;
   ```

2. **Use the Module in `app.js`:**

   ```javascript
   const greet = require("./greet");

   console.log(greet("John")); // Output: Hello, John!
   ```

3. **Run the File:**
   ```bash
   node app.js
   ```

---

#### **Mini-Exercise:**

1. Create a module that exports a function to calculate the area of a circle.
2. Import and use that module in another file to calculate the area for a radius of 5.

---

#### **Vocabulary for Technical English:**

- **Module:** A file or block of reusable code.
- **Import/Export:** JavaScript syntax to share or retrieve code between modules.
- **Scope:** The part of a program where a variable or function is accessible.
