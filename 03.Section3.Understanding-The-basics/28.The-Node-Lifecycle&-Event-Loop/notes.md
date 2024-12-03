# Section 3: Understanding the Basics

## **28. The Node Lifecycle & Event Loop**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561888#overview)
- [NodeJs program lifecycle schema](pdf/nodejs-Program-Lifecycle.png)

---

### **What Is the Node.js Lifecycle?**

The **Node.js lifecycle** refers to how a Node.js application starts, executes, and shuts down. Unlike traditional blocking architectures, Node.js operates on an **event-driven, non-blocking I/O model**, allowing it to handle multiple requests simultaneously without waiting for one to finish before starting another.

---

### **Key Stages of the Node.js Lifecycle**

1. **Initialization Stage:**

   - The program starts executing the JavaScript file specified (e.g., `node app.js`).
   - Node.js loads required modules and sets up the environment.

2. **Event Loop Execution:**

   - Node.js enters the event loop, waiting for tasks, events, or operations to execute.

3. **Exit Stage:**
   - The program exits when:
     - All tasks and operations are completed.
     - There are no pending timers, callbacks, or event listeners.

---

### **What Is the Event Loop?**

The **Event Loop** is a core mechanism in Node.js that handles asynchronous operations and ensures non-blocking behavior. It allows Node.js to perform I/O operations without pausing execution of other tasks.

---

### **How the Event Loop Works**

1. **Call Stack:**

   - The JavaScript engine maintains a call stack to track function execution.
   - Synchronous functions are pushed onto and popped from the stack.

2. **Node APIs:**

   - Asynchronous tasks (like file I/O, HTTP requests) are delegated to Node APIs, freeing up the stack for other operations.

3. **Task Queue:**

   - Once an asynchronous operation is complete, its callback is pushed to the task queue.

4. **Event Loop:**
   - Continuously checks the stack and task queue.
   - Executes tasks from the task queue only when the stack is empty.

---

### **Phases of the Event Loop**

The Event Loop operates in distinct phases:

1. **Timers Phase:**

   - Executes callbacks scheduled by `setTimeout` and `setInterval`.

2. **Pending Callbacks Phase:**

   - Executes I/O callbacks that were deferred to the next loop iteration.

3. **Idle, Prepare Phase:**

   - Internal operations (rarely used in typical applications).

4. **Poll Phase:**

   - Retrieves new I/O events and executes their callbacks.

5. **Check Phase:**

   - Executes `setImmediate` callbacks.

6. **Close Callbacks Phase:**
   - Executes callbacks for closed events (e.g., sockets).

---

### **Key Concepts**

1. **Blocking vs Non-Blocking:**

   - **Blocking:** A task prevents further execution until it’s complete.
   - **Non-Blocking:** Tasks are offloaded, allowing the program to continue executing.

   Example:

   ```javascript
   // Blocking
   const fs = require("fs");
   const data = fs.readFileSync("file.txt", "utf-8");
   console.log(data);

   // Non-Blocking
   fs.readFile("file.txt", "utf-8", (err, data) => {
     if (err) throw err;
     console.log(data);
   });
   console.log("This runs while file is being read.");
   ```

2. **setTimeout vs setImmediate:**

   - `setTimeout`: Executes after the specified delay (minimum time, not exact).
   - `setImmediate`: Executes immediately after the current poll phase.

   Example:

   ```javascript
   setTimeout(() => console.log("Timeout"), 0);
   setImmediate(() => console.log("Immediate"));
   console.log("Start");
   // Output:
   // Start
   // Immediate
   // Timeout
   ```

3. **Promises and the Event Loop:**
   - Promises use the **microtask queue**, which has higher priority than the task queue.
   ```javascript
   setTimeout(() => console.log("Timeout"), 0);
   Promise.resolve().then(() => console.log("Promise"));
   console.log("Start");
   // Output:
   // Start
   // Promise
   // Timeout
   ```

---

### **Diagram: Event Loop Workflow**

1. Call Stack (Executes synchronous code).
2. Node APIs (Offloads async tasks).
3. Task Queue (Holds completed async tasks).
4. Event Loop (Coordinates stack and queues).

---

### **Practical Example**

1. **Simulating the Event Loop:**

   ```javascript
   console.log("Start");

   setTimeout(() => console.log("Timeout"), 0);
   setImmediate(() => console.log("Immediate"));

   Promise.resolve().then(() => console.log("Promise"));

   console.log("End");
   // Output:
   // Start
   // End
   // Promise
   // Immediate
   // Timeout
   ```

2. **Processing Multiple Timers:**

   ```javascript
   setTimeout(() => console.log("Timeout 1"), 100);
   setTimeout(() => console.log("Timeout 2"), 50);

   console.log("Start");
   // Output:
   // Start
   // Timeout 2
   // Timeout 1
   ```

---

### **Best Practices**

1. **Avoid Blocking Code:**

   - Use asynchronous methods whenever possible to keep the event loop free.

2. **Handle Long-Running Tasks:**

   - Offload CPU-intensive tasks to worker threads or external services.

3. **Use Promises or Async/Await:**
   - They simplify the handling of asynchronous operations compared to callbacks.

---

### **Mini-Exercise**

1. Write a program that:

   - Uses `setTimeout` and `setImmediate` to demonstrate their execution order.
   - Reads a file asynchronously and logs its content after completing a `Promise`.

2. Modify the program to add a synchronous blocking operation and observe its effect on the event loop.

---

### **Vocabulary for Technical English**

- **Call Stack:** The mechanism that tracks function execution.
- **Task Queue:** Holds callbacks for asynchronous tasks waiting to be executed.
- **Microtask Queue:** Holds high-priority callbacks like promises.
- **Blocking:** Prevents further code execution until a task finishes.
- **Non-Blocking:** Allows other tasks to execute while waiting for an operation to complete.

---
