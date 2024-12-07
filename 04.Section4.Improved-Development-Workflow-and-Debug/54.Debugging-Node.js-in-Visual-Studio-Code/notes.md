# Section 4: Improved Development Workflow and Debug

## **54. Debugging Node.js in Visual Studio Code**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11563070#overview)

---

### **Why Use VSCode for Debugging Node.js?**

**Visual Studio Code (VSCode)** provides a powerful and user-friendly debugging experience for Node.js. It allows you to:

1. **Set Breakpoints:** Pause execution at specific lines.
2. **Inspect Variables:** View and modify variable values in real-time.
3. **Step Through Code:** Execute code one step at a time.
4. **View the Call Stack:** See the sequence of function calls.
5. **Watch Expressions:** Track the values of specific expressions during execution.
6. **Integrated Terminal:** Seamlessly combine coding and debugging.

---

### **Setting Up Debugging in VSCode**

#### **1. Create a Simple Node.js Project**

1. **Initialize a New Project:**

   ```bash
   mkdir debug-demo
   cd debug-demo
   npm init -y
   ```

2. **Create a Sample File (`app.js`):**

   ```javascript
   function add(a, b) {
     return a + b;
   }

   function main() {
     const result = add(5, 10);
     console.log("Result:", result);
   }

   main();
   ```

---

#### **2. Configure Debugging in VSCode**

1. **Open the Project in VSCode:**

   - Open the `debug-demo` folder in Visual Studio Code.

2. **Add a `launch.json` File:**

   - Go to the **Run and Debug** panel (`Ctrl + Shift + D` / `Cmd + Shift + D`).
   - Click **"Create a launch.json file"**.
   - Select **"Node.js"** from the list.

   This will create a `.vscode` folder with a `launch.json` file.

   **Example `launch.json`:**

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

---

### **Using the Debugger**

#### **1. Setting Breakpoints**

- **Set a Breakpoint:**  
  Click on the left margin next to the line number where you want the code to pause. A red dot will appear.

#### **2. Starting the Debugger**

- **Run Debugging:**
  - Press **F5** or click the green play button in the **Run and Debug** panel.
  - The debugger will start, and the code will pause at the breakpoint.

#### **3. Debugging Controls**

- **Pause/Continue Execution (F5):**  
  Continue running the program after pausing at a breakpoint.

- **Step Over (F10):**  
  Execute the current line and move to the next line.

- **Step Into (F11):**  
  Enter the function being called on the current line.

- **Step Out (Shift + F11):**  
  Exit the current function and return to the caller.

- **Restart Debugging (Ctrl + Shift + F5):**  
  Restart the debugging session.

- **Stop Debugging (Shift + F5):**  
  Stop the debugger.

---

### **Debugging Features in VSCode**

1. **Inspecting Variables:**

   - View variable values in the **"Variables"** panel.
   - Hover over variables in the editor to see their values.

2. **Call Stack:**

   - The **"Call Stack"** panel shows the sequence of function calls that led to the current breakpoint.

3. **Watch Expressions:**

   - Add expressions to the **"Watch"** panel to track their values during execution.
   - Example: `result`, `a + b`

4. **Debug Console:**

   - Use the **"Debug Console"** to execute JavaScript code and inspect variables.
   - Example:
     ```javascript
     result * 2;
     ```

5. **Logpoints:**
   - Logpoints are like breakpoints but log messages to the console instead of stopping execution.
   - Right-click the margin and select **"Add Logpoint"**.

---

### **Example Debugging Session**

1. **Set a Breakpoint:**

   - Set a breakpoint on the line `const result = add(5, 10);` in `app.js`.

2. **Start Debugging:**

   - Press **F5** to launch the debugger.

3. **Inspect Variables:**

   - Hover over `result` to see its value.
   - Check the **"Variables"** panel for `a` and `b`.

4. **Step Through Code:**

   - Press **F10** to step over each line.

5. **Use the Debug Console:**
   - Type `result * 2` to evaluate an expression dynamically.

---

### **Debugging Asynchronous Code**

When working with asynchronous functions, debugging can be a bit different.

**Example (`asyncApp.js`):**

```javascript
const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("example.txt", "utf-8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

readFile();
```

1. **Set Breakpoints:**

   - Place a breakpoint inside the `try` block.

2. **Run Debugger:**
   - Press **F5** and step through the asynchronous code.

---

### **Common Debugging Tips**

1. **Use Breakpoints Strategically:**

   - Place breakpoints at function entry points, loops, and conditional statements.

2. **Inspect the Call Stack:**

   - Understand how you reached the current execution point.

3. **Use Conditional Breakpoints:**

   - Right-click on a breakpoint and set a condition (e.g., `i === 5`).

4. **Logpoints for Quick Debugging:**

   - Use Logpoints to print messages without modifying the code.

5. **Restart the Debugger Automatically:**
   - Use **Nodemon** for automatic restarts during debugging.

---

### **Mini-Exercise**

1. **Create a File (`app.js`):**

   ```javascript
   function multiply(a, b) {
     return a * b;
   }

   function main() {
     const result = multiply(4, 5);
     console.log("Result:", result);
   }

   main();
   ```

2. **Set Up Debugging:**

   - Create a `launch.json` configuration for Node.js.

3. **Debug the Code:**
   - Set a breakpoint on the `return a * b;` line.
   - Start debugging and step through the code.
   - Inspect the values of `a`, `b`, and `result`.

---

### **Vocabulary for Technical English**

- **Debugger:** A tool that helps you pause execution and inspect code.
- **Breakpoint:** A marker that pauses execution at a specific line.
- **Call Stack:** The sequence of function calls leading to the current execution point.
- **Step Over:** Execute the current line and move to the next.
- **Step Into:** Enter a function being called to debug inside it.
- **Debug Console:** An interactive console to evaluate expressions during debugging.

---

Next, we’ll explore **55. Debugging Tips and Best Practices**! Let me know when you’re ready! 🚀
