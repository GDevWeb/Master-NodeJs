# Section 4: Improved Development Workflow and Debug

## **53. Restarting the Debugger Automatically After Editing Our App**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11563042#overview)

---

### **Why Restart the Debugger Automatically?**

During development, it’s common to:

- Make changes to your code frequently.
- Need to restart the debugger to see the effects of those changes.

Manually restarting the debugger every time you make a change can be time-consuming. Fortunately, tools like **Nodemon** and **Visual Studio Code (VSCode)** can automatically restart the debugger when code changes are detected.

---

### **Using Nodemon for Automatic Debugger Restarts**

**Nodemon** monitors changes in your files and automatically restarts the Node.js application, including when you’re running the debugger.

#### **Steps to Use Nodemon with the Debugger**

1. **Install Nodemon (If Not Installed):**

   ```bash
   npm install --save-dev nodemon
   ```

2. **Update `package.json` with a Debug Script:**

   Add a script in your `package.json` to run Nodemon in debug mode:

   ```json
   {
     "scripts": {
       "debug": "nodemon --inspect server.js"
     }
   }
   ```

3. **Run the Debug Script:**

   ```bash
   npm run debug
   ```

4. **Connect the Debugger:**

   - In VSCode, go to the **Run and Debug** panel (`Ctrl + Shift + D` / `Cmd + Shift + D`).
   - Select **"Node.js: Attach to Process"**.
   - Press **F5** to start debugging.

5. **Make Changes:**

   - After making changes to your code, Nodemon automatically restarts the server.
   - The debugger re-attaches and continues debugging.

---

### **Configuring VSCode for Automatic Debugging with Nodemon**

1. **Create or Update `launch.json`:**

   - Go to the **Run and Debug** panel.
   - Click **"Create a launch.json file"** if it doesn’t exist.
   - Select **"Node.js"**.
   - Add a Nodemon configuration:

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "launch",
         "name": "Debug with Nodemon",
         "runtimeExecutable": "nodemon",
         "program": "${workspaceFolder}/server.js",
         "restart": true,
         "console": "integratedTerminal",
         "internalConsoleOptions": "neverOpen"
       }
     ]
   }
   ```

2. **Start Debugging:**

   - Select **"Debug with Nodemon"** from the dropdown in the **Run and Debug** panel.
   - Press **F5** to start debugging.

3. **Automatic Restarts:**

   - When you make changes to your code and save, Nodemon restarts the application automatically, and the debugger re-attaches.

---

### **Example Project Setup**

1. **Create a Simple Server (`server.js`):**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, World!");
   });

   server.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
   });
   ```

2. **Add a Debug Script to `package.json`:**

   ```json
   {
     "scripts": {
       "debug": "nodemon --inspect server.js"
     }
   }
   ```

3. **Start the Debugger:**

   ```bash
   npm run debug
   ```

4. **Edit `server.js`:**

   Change the response message:

   ```javascript
   res.end("Hello, Nodemon Debugger!");
   ```

5. **Automatic Restart:**

   - Nodemon restarts the server.
   - The debugger re-attaches, and you can continue debugging.

---

### **Benefits of Automatic Debugger Restarts**

1. **Increased Productivity:**

   - Saves time by eliminating manual restarts.

2. **Continuous Debugging:**

   - Allows you to debug seamlessly while making changes.

3. **Immediate Feedback:**

   - See the effects of your changes instantly.

4. **Reduced Friction:**
   - Simplifies the debugging process, especially for complex applications.

---

### **Troubleshooting**

1. **Nodemon Not Found:**

   - Ensure Nodemon is installed:
     ```bash
     npm install --save-dev nodemon
     ```

2. **Port Already in Use:**

   - If the server doesn’t restart due to a port conflict, terminate the existing process:
     ```bash
     lsof -i :3000  # On macOS/Linux
     kill -9 <PID>  # Kill the process using the port
     ```

3. **Debugger Not Attaching:**

   - Ensure the `--inspect` flag is used:
     ```bash
     nodemon --inspect server.js
     ```

4. **Check `launch.json` Configuration:**

   - Verify that the `runtimeExecutable` is set to `nodemon`.

---

### **Vocabulary for Technical English**

- **Debugger:** A tool for pausing code execution and inspecting variables.
- **Breakpoint:** A marker that stops execution at a specific line.
- **Nodemon:** A utility that automatically restarts the Node.js application when files change.
- **Hot Reloading:** Automatically reloading the application when changes are detected.

---
