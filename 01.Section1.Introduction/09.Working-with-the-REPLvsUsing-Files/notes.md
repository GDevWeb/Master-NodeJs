# Section 1: Node.js - Introduction

## **09. Working with the REPL vs Using Files**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12281308#overview)
- [running nodejs code](pdf/running-nodejs-code.png)
- [REPL](pdf/repl.png)

---

### **What is REPL in Node.js?**

REPL stands for **Read-Eval-Print-Loop**, a command-line interface provided by Node.js. It allows developers to execute JavaScript code interactively, one line at a time.

1. **How REPL Works:**

   - **Read:** Takes your input (JavaScript code).
   - **Eval:** Evaluates or executes the code.
   - **Print:** Displays the output.
   - **Loop:** Returns to the prompt, waiting for the next input.

2. **Starting the REPL:**

   - Open your terminal and type:
     ```bash
     node
     ```
   - You’ll enter the REPL environment, where you can directly execute JavaScript.

3. **Basic REPL Commands:**

   - Perform calculations:
     ```javascript
     > 2 + 3
     5
     ```
   - Define variables:
     ```javascript
     > const message = "Hello, REPL!";
     > message
     "Hello, REPL!"
     ```
   - Use Node.js core modules:
     ```javascript
     > const os = require('os');
     > os.platform();
     "linux"
     ```

4. **Exit REPL:**
   - Type `.exit` or press `Ctrl + C` twice.

---

#### **When to Use REPL**

1. **Quick Testing and Debugging:**

   - Test JavaScript snippets or experiment with Node.js modules without creating files.

2. **Learning and Exploration:**

   - Great for beginners to experiment with Node.js features interactively.

3. **Immediate Feedback:**
   - Instant feedback on code execution helps debug small errors or test logic.

---

#### **Using Files in Node.js**

1. **Why Use Files Instead of REPL?**

   - Files allow you to write, save, and organize more complex code.
   - Persistent storage ensures your work isn’t lost when the session ends.

2. **Creating and Running Files:**

   - Create a file named `app.js`:
     ```javascript
     console.log("Hello, File-based Node.js!");
     ```
   - Run the file using the terminal:
     ```bash
     node app.js
     ```
   - Output:
     ```
     Hello, File-based Node.js!
     ```

3. **Benefits of File-Based Development:**
   - Ideal for creating reusable modules and scalable applications.
   - Tracks changes with version control systems like Git.
   - Allows for testing with tools like Jest or Mocha.

---

#### **When to Use Files vs REPL**

| **Use REPL**                    | **Use Files**                       |
| ------------------------------- | ----------------------------------- |
| Quick tests or experiments.     | Building full-fledged applications. |
| Learning Node.js concepts.      | Writing complex logic or projects.  |
| Debugging single lines of code. | Organizing and saving code.         |

---

#### **Mini-Exercise:**

1. Open the REPL and:

   - Define a function to calculate the square of a number.
   - Test the function by passing a value.
   - Exit the REPL.

2. Create a file `math.js` that contains the same function and logs the result for a given number.

---

#### **Vocabulary for Technical English:**

- **REPL:** Interactive shell for executing JavaScript code.
- **Persistent:** Data or code that is saved and doesn’t disappear when the program ends.
- **Debug:** Identify and fix errors in code.

---
