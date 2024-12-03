# Section 3: Understanding the Basics

## **29. Controlling the Node.js Process**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12192546#overview)

---

### **What Is the Node.js Process?**

The **Node.js process** is an instance of the Node.js runtime responsible for executing JavaScript code. It provides a global `process` object that allows you to interact with and control the current Node.js application.

---

### **Key Features of the `process` Object**

1. **Global Availability:**

   - The `process` object is global and does not require importing.

   ```javascript
   console.log(process); // Outputs process details
   ```

2. **Environment Information:**
   - Access system and runtime data, such as environment variables, arguments, and memory usage.

---

### **Controlling the Process**

1. **Accessing Command-Line Arguments (`process.argv`):**

   - The `argv` property is an array containing the command-line arguments passed to the Node.js process.

   ```javascript
   console.log(process.argv);
   ```

   - Example:
     ```bash
     node app.js hello world
     ```
     - Output:
       ```
       [ '/path/to/node', '/path/to/app.js', 'hello', 'world' ]
       ```

2. **Reading Environment Variables (`process.env`):**

   - Access environment variables to configure your app dynamically.

   ```javascript
   console.log(process.env);
   console.log(process.env.PORT); // Access a specific variable
   ```

   - Example:
     ```bash
     PORT=3000 node app.js
     ```
     - Output:
       ```
       3000
       ```

3. **Exit the Process (`process.exit`):**

   - End the process programmatically.

   ```javascript
   console.log("Goodbye!");
   process.exit(0); // Exit with success code (0)
   ```

   - Exit codes:
     - `0`: Success.
     - Non-zero: Indicates an error or specific exit reason.

4. **Handling Uncaught Exceptions:**

   - Use `process.on` to handle unexpected errors and prevent the application from crashing.

   ```javascript
   process.on("uncaughtException", (err) => {
     console.error("There was an uncaught error:", err);
     process.exit(1);
   });

   // Example of an uncaught error
   undefinedFunction(); // This would normally crash the process
   ```

5. **Graceful Shutdowns:**
   - Handle cleanup tasks before the process exits (e.g., closing database connections or cleaning up resources).
   ```javascript
   process.on("SIGINT", () => {
     console.log("Received SIGINT. Gracefully shutting down...");
     process.exit(0);
   });
   ```

---

### **Monitoring the Process**

1. **Memory Usage (`process.memoryUsage`):**

   - Monitor memory consumption of your application.

   ```javascript
   console.log(process.memoryUsage());
   ```

2. **Current Working Directory (`process.cwd`):**

   - Get the directory where the Node.js process was started.

   ```javascript
   console.log(process.cwd());
   ```

3. **Change Working Directory (`process.chdir`):**

   - Change the working directory of the process.

   ```javascript
   process.chdir("/path/to/new/dir");
   console.log(process.cwd());
   ```

4. **Process Uptime (`process.uptime`):**
   - Get the number of seconds the process has been running.
   ```javascript
   console.log(`Process uptime: ${process.uptime()} seconds`);
   ```

---

### **Practical Example**

1. **Custom Greeting Based on Command-Line Arguments:**

   ```javascript
   const args = process.argv.slice(2);
   const name = args[0] || "Guest";

   console.log(`Hello, ${name}!`);
   ```

   - Run:
     ```bash
     node app.js Alice
     ```
     - Output:
       ```
       Hello, Alice!
       ```

2. **Graceful Shutdown on `SIGINT`:**

   ```javascript
   console.log("Server is running... Press Ctrl+C to stop");

   process.on("SIGINT", () => {
     console.log("Gracefully shutting down...");
     process.exit(0);
   });
   ```

---

### **Best Practices**

1. **Always Handle Uncaught Exceptions:**

   - Prevent your app from crashing unexpectedly by using `process.on("uncaughtException")`.

2. **Use Environment Variables for Configuration:**

   - Store sensitive or environment-specific data (e.g., API keys, database URLs) in `process.env`.

3. **Clean Up Resources Before Exiting:**

   - Close open connections, clear caches, or save state before the process exits.

4. **Avoid Arbitrary Process Exits:**
   - Exit the process (`process.exit`) only when necessary.

---

### **Mini-Exercise**

1. Write a Node.js script that:

   - Logs command-line arguments passed to it.
   - Reads and logs an environment variable (e.g., `API_KEY`).

2. Enhance the script to:
   - Handle `SIGINT` and log a message before exiting gracefully.
   - Display the process uptime before exiting.

---

### **Vocabulary for Technical English**

- **Process:** An instance of a program running on a computer.
- **Environment Variable:** A dynamic value that configures the runtime environment.
- **Uptime:** The amount of time a process has been running.
- **SIGINT:** A signal sent to terminate a process (e.g., pressing Ctrl+C).

---

Next, we’ll dive into **30. Understanding Routing**! Let me know when you’re ready!
