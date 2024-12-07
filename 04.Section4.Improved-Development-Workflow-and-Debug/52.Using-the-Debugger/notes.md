# Section 4: Improved Development Workflow and Debug

## **52. Using the Debugger**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11563038#overview)

---

### **What Is a Debugger?**

A **debugger** is a tool that helps you identify and fix errors by allowing you to pause the execution of your code, inspect variables, and step through the code line by line. Node.js has a built-in debugger, and many modern editors like **Visual Studio Code (VSCode)** provide integrated debugging tools.

---

### **Why Use a Debugger?**

1. **Pause Execution:**

   - Stop code execution at specific points to inspect the current state.

2. **Inspect Variables:**

   - Check the values of variables at different points in the program.

3. **Step Through Code:**

   - Execute code one step at a time to understand the flow.

4. **Find Logical Errors:**
   - Easily spot issues that `console.log` statements might miss.

---

### **Using the Built-In Node.js Debugger**

Node.js comes with a built-in debugger that you can use directly from the terminal.

#### **Steps to Use the Node.js Debugger**

1. **Add a Breakpoint:**  
   Insert the `debugger` statement in your code to indicate where you want to pause execution.

   ```javascript
   function add(a, b) {
     debugger; // Execution will pause here
     return a + b;
   }

   console.log(add(5, 10));
   ```

2. **Run the Debugger:**  
   Use the `node inspect` command to start debugging.

   ```bash
   node inspect app.js
   ```

3. **Debugger Commands:**

   | **Command**   | **Description**                      |
   | ------------- | ------------------------------------ |
   | `cont` / `c`  | Continue execution                   |
   | `next` / `n`  | Step to the next line                |
   | `step` / `s`  | Step into a function                 |
   | `out` / `o`   | Step out of the current function     |
   | `pause`       | Pause running code                   |
   | `list` / `l`  | List the source code around the line |
   | `break` / `b` | Set a breakpoint                     |
   | `watch(expr)` | Watch the value of an expression     |
   | `repl`        | Open a REPL to inspect variables     |

4. **Example Debugging Session:**

   ```bash
   node inspect app.js
   ```

   ```
   debug> cont
   debug> next
   debug> repl
   ```

   In the REPL, you can type expressions to inspect variables:

   ```
   debug> a
   5
   debug> b
   10
   ```

---

### **Using VSCode Debugger**

Visual Studio Code (VSCode) provides an easy-to-use interface for debugging Node.js applications.

#### **Steps to Debug with VSCode**

1. **Add a `launch.json` Configuration:**

   - Go to the **Run and Debug** panel (`Ctrl + Shift + D` / `Cmd + Shift + D`).
   - Click on **"Create a launch.json file"**.
   - Select **Node.js**.

   Example `launch.json`:

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "launch",
         "name": "Launch Program",
         "skipFiles": ["<node_internals>/**"],
         "program": "${workspaceFolder}/app.js"
       }
     ]
   }
   ```

2. **Set Breakpoints:**

   - Click on the left margin next to a line number to set a red breakpoint dot.

3. **Start Debugging:**

   - Press **F5** or click the green play button to start debugging.

4. **Debugging Tools:**

   - **Pause/Resume:** Control execution flow.
   - **Step Over (F10):** Execute the current line and move to the next.
   - **Step Into (F11):** Step into function calls.
   - **Step Out (Shift + F11):** Step out of the current function.
   - **Inspect Variables:** View variables in the **"Variables"** pane.
   - **Watch Expressions:** Add expressions to the **"Watch"** panel.
   - **Call Stack:** See the call stack to understand execution flow.
   - **Debug Console:** Execute JavaScript commands to inspect variables.

---

### **Practical Example Using VSCode Debugger**

1. **Code Example (`app.js`):**

   ```javascript
   function add(a, b) {
     const sum = a + b;
     console.log("Sum:", sum);
     return sum;
   }

   function main() {
     const result = add(5, 10);
     console.log("Result:", result);
   }

   main();
   ```

2. **Debugging Steps:**

   - Set a breakpoint on the line `const sum = a + b;`.
   - Start debugging with **F5**.
   - Step through the code and inspect the values of `a`, `b`, and `sum`.

---

### **Best Practices for Debugging**

1. **Use Breakpoints Wisely:**

   - Set breakpoints at critical points, such as function entries, condition checks, and loops.

2. **Avoid `console.log` Overuse:**

   - Use the debugger instead of `console.log` for more efficient debugging.

3. **Inspect Variable State:**

   - Use the REPL or variable panes to check the state of variables.

4. **Step Through Code:**

   - Step through code execution to understand the program flow and identify logic issues.

5. **Use Watch Expressions:**

   - Track specific variables or expressions while debugging.

6. **Check the Call Stack:**
   - Understand the sequence of function calls leading to the current state.

---

### **Mini-Exercise**

1. **Create a Debugging Example:**

   - File: `app.js`

     ```javascript
     function multiply(a, b) {
       debugger;
       return a * b;
     }

     function main() {
       const result = multiply(3, 4);
       console.log("Result:", result);
     }

     main();
     ```

2. **Use the Built-In Debugger:**

   ```bash
   node inspect app.js
   ```

3. **Use the VSCode Debugger:**

   - Set a breakpoint on `debugger;`.
   - Start debugging with **F5**.
   - Step through the code and inspect variables.

---

### **Vocabulary for Technical English**

- **Debugger:** A tool that helps you identify and fix bugs by pausing execution and inspecting variables.
- **Breakpoint:** A marker that pauses code execution at a specific line.
- **Step Over:** Execute the current line and move to the next line.
- **Step Into:** Step into the function being called.
- **REPL:** Read-Eval-Print-Loop; a prompt to evaluate code during debugging.

---
