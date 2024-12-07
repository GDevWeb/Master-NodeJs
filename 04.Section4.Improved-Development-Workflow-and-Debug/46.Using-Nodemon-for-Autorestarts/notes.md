# Section 4: Improved Development Workflow and Debug

## **46. Using Nodemon for Autorestarts**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11563010#overview)

---

### **What Is Nodemon?**

**Nodemon** is a utility that monitors changes in your Node.js application files and automatically restarts the server when changes are detected. This tool significantly improves development efficiency by eliminating the need to stop and manually restart your server after each code modification.

---

### **Why Use Nodemon?**

1. **Increased Efficiency:**

   - No need to manually stop and restart the server during development.

2. **Automatic Restarts:**

   - Automatically detects file changes and restarts the server.

3. **Easy Setup:**

   - Simple installation and configuration.

4. **Support for Multiple File Types:**
   - Works with JavaScript, JSON, and other file types.

---

### **Installing Nodemon**

1. **Install Nodemon as a Development Dependency:**

   ```bash
   npm install --save-dev nodemon
   ```

2. **Global Installation (Optional):**

   ```bash
   npm install -g nodemon
   ```

   This makes Nodemon available system-wide, not just for a specific project.

---

### **Using Nodemon**

1. **Run a Server with Nodemon:**

   ```bash
   npx nodemon server.js
   ```

   If installed globally:

   ```bash
   nodemon server.js
   ```

2. **Add a Script to `package.json`:**

   Update the `scripts` section in `package.json`:

   ```json
   {
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
     }
   }
   ```

   Run the script with:

   ```bash
   npm run dev
   ```

---

### **Basic Example**

1. **Create a Simple Server:**

   - File: `server.js`

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

2. **Run the Server with Nodemon:**

   ```bash
   npx nodemon server.js
   ```

3. **Make Changes:**

   - Modify the response message in `server.js` and save the file:

     ```javascript
     res.end("Hello, Nodemon!");
     ```

4. **Automatic Restart:**

   - Nodemon detects the changes and restarts the server automatically.

---

### **Nodemon Configuration**

You can customize Nodemon’s behavior with a `nodemon.json` configuration file.

1. **Create a `nodemon.json` File:**

   ```json
   {
     "watch": ["server", "routes"],
     "ext": "js,json",
     "ignore": ["public/*"],
     "env": {
       "NODE_ENV": "development"
     }
   }
   ```

2. **Options:**

   - **`watch`**: Folders or files to monitor.
   - **`ext`**: File extensions to watch for changes.
   - **`ignore`**: Files or folders to ignore.
   - **`env`**: Environment variables to set during development.

---

### **Common Nodemon Commands**

1. **Restart Manually:**  
   Press `rs` in the terminal where Nodemon is running to manually restart the server.

2. **Run a Script with Nodemon:**

   ```bash
   nodemon --exec "npm run some-script"
   ```

3. **Specify a Delay Before Restart:**
   ```bash
   nodemon --delay 2 server.js
   ```
   - Delays the restart by 2 seconds.

---

### **Best Practices for Using Nodemon**

1. **Use a Dedicated `dev` Script:**

   - Keep the `start` script for production and `dev` for development.

   ```json
   {
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
     }
   }
   ```

2. **Ignore Unnecessary Files:**

   - Ignore folders like `node_modules` or `public` to improve performance.

   ```json
   {
     "ignore": ["node_modules", "public"]
   }
   ```

3. **Combine with Environment Variables:**
   - Use environment variables for different configurations.
   ```json
   {
     "env": {
       "PORT": "4000"
     }
   }
   ```

---

### **Mini-Exercise**

1. **Create a Project:**

   ```bash
   mkdir nodemon-demo
   cd nodemon-demo
   npm init -y
   ```

2. **Install Nodemon:**

   ```bash
   npm install --save-dev nodemon
   ```

3. **Create `server.js`:**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, Nodemon!");
   });

   server.listen(3000, () => {
     console.log("Server is running on http://localhost:3000");
   });
   ```

4. **Add a `dev` Script to `package.json`:**

   ```json
   {
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
     }
   }
   ```

5. **Run the Server with Nodemon:**

   ```bash
   npm run dev
   ```

6. **Modify `server.js` and Save:**

   ```javascript
   res.end("Hello, World with Nodemon!");
   ```

   - Nodemon should automatically restart the server.

---

### **Vocabulary for Technical English**

- **Autorestart:** Automatically restarting a process when changes are detected.
- **Development Dependency:** A package required only during development.
- **Monitor:** Watch for changes in files or directories.
- **Configuration:** Settings that control the behavior of a tool or application.

---

Next, we’ll cover **47. Debugging Node.js Applications**! Let me know when you’re ready to continue! 🚀
