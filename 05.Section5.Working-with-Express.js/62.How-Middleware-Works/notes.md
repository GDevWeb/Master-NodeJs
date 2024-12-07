# Section 5: Working with Express.js

## **62. How Middleware Works**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566260#overview)

---

### **What is Middleware?**

In Express.js, **middleware** is a function that executes during the **request-response cycle**. Middleware has access to the following:

1. **Request Object (`req`)**: The incoming HTTP request.
2. **Response Object (`res`)**: The HTTP response that Express will send.
3. **Next Function (`next`)**: A function that passes control to the next middleware in the stack.

Middleware functions are used to perform tasks such as:

- Logging requests
- Parsing request bodies
- Authenticating users
- Handling errors

---

### **Middleware Syntax**

A middleware function typically looks like this:

```javascript
app.use((req, res, next) => {
  // Perform some operation
  console.log("Middleware executed");

  // Pass control to the next middleware or route handler
  next();
});
```

- **`req`**: Represents the HTTP request.
- **`res`**: Represents the HTTP response.
- **`next()`**: Calls the next middleware function or route handler. If `next()` is not called, the request-response cycle will be halted.

---

### **Order of Execution**

Middleware functions are executed in the **order they are defined**. The sequence matters because middleware can modify the request and response objects or end the response cycle.

Example:

```javascript
const express = require("express");
const app = express();

// First middleware
app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

// Second middleware
app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

**Output in Console:**

```
First middleware
Second middleware
```

When you visit `http://localhost:3000`, the response is:

```
Hello, World!
```

---

### **Types of Middleware**

1. **Application-Level Middleware**
2. **Router-Level Middleware**
3. **Built-In Middleware**
4. **Third-Party Middleware**
5. **Error-Handling Middleware**

---

### **Flow of Middleware Execution**

1. **Request Comes In**
2. **First Middleware Executes** → Calls `next()`.
3. **Second Middleware Executes** → Calls `next()`.
4. **Route Handler Executes** → Sends Response.
5. **Response Sent to Client.**

---

### **Example with Detailed Flow**

```javascript
const express = require("express");
const app = express();

// Middleware 1: Logging request method and URL
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

// Middleware 2: Add a custom header
app.use((req, res, next) => {
  res.setHeader("X-Custom-Header", "MiddlewareDemo");
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, Middleware World!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

**When you access `http://localhost:3000`:**

1. **Middleware 1:** Logs request details.
2. **Middleware 2:** Adds a custom response header.
3. **Route Handler:** Sends the response `"Hello, Middleware World!"`.

**Console Output:**

```
Request Method: GET, URL: /
```

**Response Headers:**

```
X-Custom-Header: MiddlewareDemo
```

---

### **How Middleware Can Modify `req` and `res`**

Middleware can modify the request and response objects to add data or customize behavior.

Example:

```javascript
app.use((req, res, next) => {
  req.user = { name: "Alice", role: "admin" }; // Add user data to the request
  next();
});

app.get("/", (req, res) => {
  res.send(`Hello, ${req.user.name}!`);
});
```

---

### **Ending the Request-Response Cycle in Middleware**

If middleware sends a response and does not call `next()`, it ends the request-response cycle.

Example:

```javascript
app.use((req, res, next) => {
  res.send("Request ended by middleware");
});
```

In this case, the route handler will **not** be executed because the middleware ended the cycle.

---

### **Error-Handling Middleware**

Error-handling middleware handles errors during the request-response cycle. It has four parameters: `(err, req, res, next)`.

Example:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

### **Summary**

1. **Middleware Functions:**

   - Functions that have access to `req`, `res`, and `next`.

2. **Order Matters:**

   - Middleware executes in the order it is defined.

3. **Modify `req` and `res`:**

   - Middleware can modify request and response objects.

4. **Call `next()` to Proceed:**

   - `next()` is required to pass control to the next middleware or route handler.

5. **End the Cycle:**
   - Middleware can terminate the request-response cycle by sending a response.

---

### **Useful Resources**

1. **Express Middleware Guide:**  
   [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)

2. **MDN Web Docs: Middleware Concepts:**  
   [MDN Middleware](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#middleware)

---

### **Next Steps**

In the next lesson, we’ll explore **how to create and use different types of routes in Express.js**. Let's continue building dynamic applications! 🚀
