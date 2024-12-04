# Section 3: Understanding the Basics

## **38. Node.js - Looking Behind the Scenes**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561908#overview)
- [❗important for beginner - schema - single thread & event loop & blocking code](pdf/single-Thread-evvent-loop&blocking-code.png)
- [Nodejs.org - the event loop](https://nodejs.org/fr/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [schema - the event loop](pdf/the-event-loop-schema.png)

---

### **What Is Node.js?**

Node.js is a runtime environment built on **Google’s V8 JavaScript engine**. It allows you to run JavaScript on the server side, enabling features like file handling, networking, and databases. Its event-driven, non-blocking I/O model makes it lightweight and efficient for handling concurrent operations.

---

### **Key Components of Node.js**

1. **V8 Engine:**

   - Converts JavaScript code into machine code for fast execution.
   - Originally developed for Google Chrome but adapted for Node.js.

2. **Node.js APIs:**

   - Provide functionality beyond JavaScript, such as file system manipulation (`fs`), networking (`http`), and process control (`process`).

3. **libuv:**

   - A library that handles non-blocking I/O operations.
   - Supports asynchronous file I/O, network operations, and timers.

4. **Event Loop:**
   - The core mechanism for managing asynchronous tasks in Node.js.

---

### **How Node.js Works Internally**

1. **Execution Starts:**

   - The JavaScript code is executed using the V8 engine.

2. **Node.js APIs:**

   - When your code calls a function like `fs.readFile`, it delegates the operation to libuv.

3. **Thread Pool:**

   - libuv uses a pool of threads to handle tasks like file I/O or DNS queries. Once complete, the results are sent back to the event loop.

4. **Event Loop:**
   - Continuously checks for completed tasks, timers, or incoming events and dispatches callbacks.

---

### **The Event Loop: A Closer Look**

The event loop is divided into several phases:

1. **Timers Phase:**

   - Executes callbacks scheduled by `setTimeout` and `setInterval`.

2. **Pending Callbacks Phase:**

   - Handles I/O callbacks deferred to the next loop iteration.

3. **Idle, Prepare Phase:**

   - Internal operations (rarely used directly by developers).

4. **Poll Phase:**

   - Processes new I/O events and executes callbacks for completed operations.

5. **Check Phase:**

   - Executes callbacks from `setImmediate`.

6. **Close Callbacks Phase:**
   - Handles callbacks for closed resources (e.g., sockets).

---

### **Blocking vs Non-Blocking Code Revisited**

- **Blocking Code:**  
  Executes synchronously, halting other tasks until completion.

  ```javascript
  const fs = require("fs");
  const data = fs.readFileSync("file.txt", "utf-8");
  console.log(data); // Blocking
  ```

- **Non-Blocking Code:**  
  Executes asynchronously, allowing other operations to proceed.
  ```javascript
  fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data); // Non-blocking
  });
  console.log("This runs immediately.");
  ```

---

### **Node.js Core Modules**

Node.js includes built-in modules to extend JavaScript’s capabilities.

1. **`fs`:** Handles file system operations.

   ```javascript
   const fs = require("fs");
   fs.readFile("example.txt", "utf-8", (err, data) => {
     if (err) throw err;
     console.log(data);
   });
   ```

2. **`http`:** Creates servers and handles HTTP requests/responses.

   ```javascript
   const http = require("http");
   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, World!");
   });
   server.listen(3000);
   ```

3. **`events`:** Manages custom events using `EventEmitter`.

   ```javascript
   const EventEmitter = require("events");
   const eventEmitter = new EventEmitter();

   eventEmitter.on("start", () => console.log("Event triggered!"));
   eventEmitter.emit("start");
   ```

---

### **Behind the Scenes: libuv**

1. **Thread Pool:**

   - Handles CPU-intensive tasks like file I/O.
   - Default size: 4 threads (can be configured).

2. **Non-Blocking I/O:**

   - Handles network operations and timers asynchronously.

3. **Timers and Delays:**
   - Works alongside the event loop to schedule tasks (`setTimeout`, `setImmediate`).

---

### **Real-World Example**

Handling multiple tasks asynchronously:

```javascript
const fs = require("fs");
const http = require("http");

// Read a file asynchronously
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("File Content:", data);
});

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js!");
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);

console.log("This runs while file is being read and server starts.");
```

---

### **Best Practices for Node.js**

1. **Use Asynchronous APIs:**

   - Always prefer non-blocking methods to keep the application responsive.

2. **Avoid Blocking the Event Loop:**

   - Long-running operations should be delegated to worker threads or external services.

3. **Error Handling:**

   - Use proper error-handling techniques to manage exceptions in asynchronous code.

4. **Optimize Thread Pool Size:**
   - For I/O-heavy applications, adjust the thread pool size using the `UV_THREADPOOL_SIZE` environment variable.

---

### **Mini-Exercise**

1. Write a Node.js script that:

   - Reads two files asynchronously and logs their contents.
   - Creates an HTTP server that responds with "Hello, Event Loop!".

2. Modify the script to:
   - Use `setTimeout` and `setImmediate` to demonstrate their execution order.

---

### **Vocabulary for Technical English**

- **Runtime Environment:** Software that provides the resources for code execution.
- **Event Loop:** The mechanism that handles asynchronous events and callbacks.
- **libuv:** A library for non-blocking I/O operations in Node.js.
- **Thread Pool:** A group of worker threads that handle tasks in parallel.

---
