# Section 3: Understanding the Basics

## **37. Blocking and Non-Blocking Code**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561906#overview)
- [code](code/03-blocking-and-non-blocking-code/03-blocking-and-non-blocking-code/app.js)

---

### **What Is Blocking and Non-Blocking Code?**

**Blocking code** halts the execution of subsequent instructions until the current operation completes, while **non-blocking code** allows other instructions to run while waiting for the operation to finish.

---

### **Key Differences**

| **Feature**           | **Blocking Code**                                     | **Non-Blocking Code**                         |
| --------------------- | ----------------------------------------------------- | --------------------------------------------- |
| **Execution**         | Waits for the operation to complete before moving on. | Moves to the next operation immediately.      |
| **Concurrency**       | Single task executed at a time.                       | Multiple tasks executed concurrently.         |
| **Performance**       | Slower for I/O-heavy tasks.                           | Optimized for I/O-heavy tasks.                |
| **Example Use Cases** | Simple scripts, synchronous file reads.               | Servers handling multiple clients, async I/O. |

---

### **Examples of Blocking vs Non-Blocking Code in Node.js**

#### **1. File System Operations**

- **Blocking:**

  ```javascript
  const fs = require("fs");

  // Synchronous (blocking) file read
  const data = fs.readFileSync("example.txt", "utf-8");
  console.log("File Content:", data);

  console.log("This runs after file is read.");
  ```

  - Output:
    ```
    File Content: <content of example.txt>
    This runs after file is read.
    ```

- **Non-Blocking:**

  ```javascript
  const fs = require("fs");

  // Asynchronous (non-blocking) file read
  fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File Content:", data);
  });

  console.log("This runs while file is being read.");
  ```

  - Output:
    ```
    This runs while file is being read.
    File Content: <content of example.txt>
    ```

#### **2. Network Requests**

- **Blocking (Simulated):**

  ```javascript
  const blockingRequest = () => {
    const start = Date.now();
    while (Date.now() - start < 3000) {} // Simulates a 3-second block
    console.log("Request finished!");
  };

  console.log("Start blocking request...");
  blockingRequest();
  console.log("This runs after the blocking request.");
  ```

- **Non-Blocking:**

  ```javascript
  console.log("Start non-blocking request...");

  setTimeout(() => {
    console.log("Request finished!");
  }, 3000);

  console.log("This runs while the request is in progress.");
  ```

---

### **Why Use Non-Blocking Code?**

1. **Scalability:**

   - Non-blocking code allows servers to handle thousands of requests simultaneously without waiting for one task to finish.

2. **Performance:**

   - Maximizes the use of system resources by not idling during I/O operations.

3. **Improved User Experience:**
   - Keeps applications responsive, especially for tasks like fetching data or reading files.

---

### **Challenges of Non-Blocking Code**

1. **Callback Hell:**

   - Nesting multiple callbacks can make the code hard to read and maintain.

   ```javascript
   asyncTask1(() => {
     asyncTask2(() => {
       asyncTask3(() => {
         console.log("All tasks completed!");
       });
     });
   });
   ```

   - **Solution:** Use Promises or `async/await` to manage asynchronous code.

2. **Error Handling:**
   - Errors in asynchronous code can be harder to catch without proper error-handling mechanisms.

---

### **Using Promises to Avoid Callback Hell**

```javascript
const fs = require("fs").promises;

fs.readFile("example.txt", "utf-8")
  .then((data) => {
    console.log("File Content:", data);
    return fs.writeFile("output.txt", data.toUpperCase());
  })
  .then(() => {
    console.log("File written successfully!");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
```

---

### **Using `async/await` for Simplicity**

```javascript
const fs = require("fs").promises;

const processFile = async () => {
  try {
    // Read the content of the file
    const data = await fs.readFile("example.txt", "utf-8");
    console.log("File Content:", data);

    // Transform the data (convert to uppercase) and write to a new file
    const transformedData = data.toUpperCase();
    await fs.writeFile("output.txt", transformedData);
    console.log("File written successfully!");

    // Verify the new file content
    const verificationData = await fs.readFile("output.txt", "utf-8");
    console.log("Verified Output:", verificationData);
  } catch (err) {
    console.error("Error occurred during file processing:", err);
  }
};

processFile();
```

---

### **Best Practices**

1. **Use Non-Blocking Methods Whenever Possible:**

   - Prefer asynchronous versions of APIs (e.g., `fs.readFile` over `fs.readFileSync`).

2. **Use `async/await` for Readability:**

   - Simplify complex asynchronous workflows.

3. **Handle Errors Gracefully:**

   - Ensure proper error handling in callbacks, Promises, and `async/await`.

4. **Optimize for Performance:**
   - Use non-blocking techniques to keep applications responsive and scalable.

---

### **Mini-Exercise**

1. Create a Node.js script that:

   - Reads a file synchronously and logs its content.
   - Reads another file asynchronously and logs its content after completion.

2. Enhance the script to:
   - Convert the asynchronous file read to use `Promises` and `async/await`.

---

### **Vocabulary for Technical English**

- **Blocking Code:** Code execution stops until the current task is completed.
- **Non-Blocking Code:** Code execution continues without waiting for the current task to finish.
- **Callback Hell:** A nested structure of callbacks that makes code hard to read.
- **Scalability:** The ability to handle increasing amounts of work or requests efficiently.

---

Next, we’ll explore **38. Understanding Buffers and Streams**! Let me know when you’re ready!
