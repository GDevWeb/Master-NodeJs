# Section 2: JavaScript - A Quick Refresher

## **21. Async Code & Promises**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12250734#overview)
- [MDN - more on constructors functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

---

### **What Is Asynchronous Code?**

Asynchronous code allows certain operations (like fetching data from an API) to run in the background without blocking the execution of other tasks. This is essential for improving performance and responsiveness, especially in tasks like network requests or reading files.

---

### **Key Concepts in Async Programming**

1. **Synchronous Code:**

   - Code executes line by line; each line waits for the previous one to finish.

   ```javascript
   console.log("Start");
   console.log("End");
   // Output:
   // Start
   // End
   ```

2. **Asynchronous Code:**

   - Code executes without waiting for some operations (like time-consuming tasks) to complete.

   ```javascript
   console.log("Start");

   setTimeout(() => {
     console.log("Middle");
   }, 2000);

   console.log("End");
   // Output:
   // Start
   // End
   // Middle (after 2 seconds)
   ```

---

### **What Are Promises?**

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

1. **States of a Promise:**

   - **Pending:** The operation is still ongoing.
   - **Fulfilled:** The operation completed successfully.
   - **Rejected:** The operation failed.

2. **Creating a Promise:**

   ```javascript
   const promise = new Promise((resolve, reject) => {
     const success = true;

     if (success) {
       resolve("Operation succeeded!");
     } else {
       reject("Operation failed!");
     }
   });
   ```

---

### **Using Promises**

1. **Handling Fulfilled and Rejected Promises:**

   ```javascript
   promise
     .then((result) => {
       console.log(result); // Output: Operation succeeded!
     })
     .catch((error) => {
       console.error(error); // Output: Operation failed! (if rejected)
     });
   ```

2. **Chaining Promises:**
   - Promises can be chained for sequential async operations.
   ```javascript
   fetch("https://api.example.com/data")
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
   ```

---

### **Async/Await: A Cleaner Way to Handle Promises**

`async/await` simplifies working with promises by allowing you to write asynchronous code that looks synchronous.

1. **Using `async` and `await`:**

   - Declare a function as `async` to use `await` inside it.
   - `await` pauses the execution until the promise resolves.

   ```javascript
   const fetchData = async () => {
     try {
       const response = await fetch("https://api.example.com/data");
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   fetchData();
   ```

2. **Error Handling in `async/await`:**
   - Use `try...catch` blocks to handle errors.
   ```javascript
   const processData = async () => {
     try {
       const result = await someAsyncOperation();
       console.log("Result:", result);
     } catch (error) {
       console.error("Error:", error);
     }
   };
   ```

---

### **Parallel Execution with `Promise.all`**

Use `Promise.all` to execute multiple promises in parallel and wait for all of them to complete.

1. **Example:**

   ```javascript
   const promise1 = Promise.resolve("First");
   const promise2 = Promise.resolve("Second");
   const promise3 = Promise.resolve("Third");

   Promise.all([promise1, promise2, promise3])
     .then((results) => {
       console.log(results); // Output: ["First", "Second", "Third"]
     })
     .catch((error) => {
       console.error("Error:", error);
     });
   ```

2. **`Promise.allSettled`:**
   - Waits for all promises to settle (fulfilled or rejected) and provides their statuses.
   ```javascript
   Promise.allSettled([promise1, Promise.reject("Error"), promise3]).then(
     (results) => console.log(results)
   );
   ```

---

### **Practical Examples**

1. **Simulating an Async Operation:**

   ```javascript
   const fetchData = () => {
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve("Data fetched!");
       }, 2000);
     });
   };

   fetchData().then((data) => console.log(data)); // Output after 2s: Data fetched!
   ```

2. **Combining `async/await` with Loops:**

   ```javascript
   const fetchUsers = async () => {
     const users = ["Alice", "Bob", "Charlie"];

     for (const user of users) {
       await new Promise((resolve) => setTimeout(resolve, 1000));
       console.log(`Fetched user: ${user}`);
     }
   };

   fetchUsers();
   ```

---

### **Mini-Exercise**

1. Write a function using `Promise` that resolves after 3 seconds with the message: "Promise resolved!"
2. Create a function with `async/await` to fetch data from an API and handle potential errors.
3. Use `Promise.all` to fetch multiple pieces of data in parallel.

---

### **Vocabulary for Technical English**

- **Asynchronous:** Operations that do not block the execution of other tasks.
- **Promise:** An object representing the completion or failure of an async operation.
- **Await:** A keyword that pauses execution until a promise resolves.

---
