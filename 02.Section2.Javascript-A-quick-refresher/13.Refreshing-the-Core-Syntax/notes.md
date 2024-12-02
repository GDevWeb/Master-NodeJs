# Section 2: JavaScript - A Quick Refresher

## **13. Refreshing the Core Syntax**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561860#overview)
- [MDN - Js from scratch](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [Reference vs Primitive Values](https://academind.com/tutorials/reference-vs-primitive-values)

---

### **Why Core Syntax Matters**

Before diving deep into Node.js, it's essential to have a solid understanding of JavaScript’s core syntax. These basics are the foundation for everything you’ll write in Node.js, whether it’s handling HTTP requests or working with databases.

---

#### **Key JavaScript Syntax to Refresh**

1. **Variables and Constants**

   - Variables store data for later use. JavaScript provides three ways to declare them:
     ```javascript
     let age = 25; // Mutable variable
     const name = "Alice"; // Immutable variable
     var isAdmin = true; // Old syntax (not recommended)
     ```
   - `let` and `const` are block-scoped and modern. Avoid `var` unless necessary.

2. **Data Types**

   - JavaScript has six primitive types and one object type:
     ```javascript
     let number = 42; // Number
     let text = "Hello"; // String
     let isActive = true; // Boolean
     let nothing = null; // Null
     let notDefined; // Undefined
     let uniqueId = Symbol("id"); // Symbol
     let obj = { key: "value" }; // Object
     ```

3. **Template Literals**

   - Use backticks (`) to embed expressions and variables directly into strings:
     ```javascript
     const name = "John";
     const greeting = `Hello, ${name}!`;
     console.log(greeting); // Output: Hello, John!
     ```

4. **Functions**

   - **Function Declaration:**
     ```javascript
     function add(a, b) {
       return a + b;
     }
     ```
   - **Function Expression:**
     ```javascript
     const subtract = function (a, b) {
       return a - b;
     };
     ```
   - **Arrow Functions:**
     - Introduced in ES6, arrow functions provide a concise syntax:
       ```javascript
       const multiply = (a, b) => a * b;
       ```

5. **Conditionals**

   - Use `if`, `else if`, and `else` for branching logic:

     ```javascript
     const age = 18;

     if (age >= 18) {
       console.log("Adult");
     } else {
       console.log("Minor");
     }
     ```

6. **Loops**

   - Commonly used loops include `for`, `while`, and `for...of`:

     ```javascript
     const fruits = ["apple", "banana", "cherry"];

     for (let fruit of fruits) {
       console.log(fruit);
     }
     ```

7. **Objects and Arrays**

   - Objects store key-value pairs:
     ```javascript
     const user = { name: "Alice", age: 30 };
     console.log(user.name); // Output: Alice
     ```
   - Arrays store lists of items:
     ```javascript
     const colors = ["red", "green", "blue"];
     console.log(colors[1]); // Output: green
     ```

8. **Destructuring**

   - Extract values from objects or arrays:
     ```javascript
     const { name, age } = user;
     const [firstColor, secondColor] = colors;
     ```

9. **Spread and Rest Operators**

   - **Spread (`...`)** expands elements:
     ```javascript
     const newColors = [...colors, "yellow"];
     ```
   - **Rest (`...`)** collects multiple elements:
     ```javascript
     const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
     ```

10. **Promises and Async/Await**
    - Handle asynchronous code:
      ```javascript
      const fetchData = async () => {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
      };
      ```

---

#### **Practical Example**

Let’s combine some syntax features:

1. **Create an Object with a Method:**

   ```javascript
   const user = {
     name: "John",
     greet() {
       console.log(`Hello, my name is ${this.name}`);
     },
   };

   user.greet(); // Output: Hello, my name is John
   ```

2. **Use Destructuring and Template Literals:**

   ```javascript
   const { name } = user;
   console.log(`Welcome, ${name}!`);
   ```

3. **Write an Async Function:**

   ```javascript
   const fetchData = async () => {
     return new Promise((resolve) => {
       setTimeout(() => resolve("Data fetched!"), 2000);
     });
   };

   fetchData().then(console.log); // Output after 2s: Data fetched!
   ```

---

#### **Mini-Exercise**

1. Write a function that takes an array of numbers and returns the sum of all numbers using the `reduce` method.
2. Create an object representing a book (with properties like title, author, and year), then destructure its properties into variables.

---

#### **Vocabulary for Technical English**

- **Variable:** A named storage for data.
- **Function:** A block of reusable code that performs a specific task.
- **Asynchronous:** Code that doesn’t execute in a sequential order but instead waits for certain operations to complete.

---
