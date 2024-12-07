# Section 5: Working with Express.js

## **61. Adding Middleware**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566256#overview)
- [code](code/01-adding-middleware/app.js)

---

### **What is Middleware in Express.js?**

**Middleware** in Express.js is a function that has access to the **request object (`req`)**, the **response object (`res`)**, and the **next function (`next`)** in the request-response cycle. Middleware functions can:

1. **Execute Code** during the request-response cycle.
2. **Modify Request and Response Objects**.
3. **End the Request-Response Cycle**.
4. **Call the Next Middleware** in the stack using `next()`.

---

### **Why Use Middleware?**

Middleware is useful for:

1. **Logging** requests.
2. **Authentication and Authorization**.
3. **Parsing Request Data** (e.g., JSON, form data).
4. **Serving Static Files**.
5. **Error Handling**.

---

### **Types of Middleware**

1. **Application-Level Middleware**
2. **Router-Level Middleware**
3. **Built-In Middleware**
4. **Third-Party Middleware**
5. **Error-Handling Middleware**

---

### **How Middleware Works**

Middleware functions are executed in the order they are defined. They can modify the request and response objects or pass control to the next middleware by calling `next()`.

---

### **Basic Example of Middleware**

Let's create a simple middleware example.

1. **Install Express (If Not Installed):**

   ```bash
   npm install express
   ```

2. **Create `app.js`:**

   ```javascript
   const express = require("express");
   const app = express();

   // Application-level middleware
   app.use((req, res, next) => {
     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
     next(); // Pass control to the next middleware or route handler
   });

   // Route handler
   app.get("/", (req, res) => {
     res.send("Hello, World!");
   });

   // Start the server
   app.listen(3000, () => {
     console.log("Server is running on http://localhost:3000");
   });
   ```

3. **Run the Application:**

   ```bash
   node app.js
   ```

4. **Visit in Browser:**
   - Go to `http://localhost:3000`
   - You should see **"Hello, World!"**
   - In the console, you’ll see the log:
     ```
     Request Method: GET, Request URL: /
     ```

---

### **Types of Middleware in Detail**

#### **1. Application-Level Middleware**

This middleware applies to the entire application.

```javascript
app.use((req, res, next) => {
  console.log("Application-level middleware executed");
  next();
});
```

#### **2. Router-Level Middleware**

This middleware applies to specific routes using an Express **Router**.

```javascript
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router-level middleware executed");
  next();
});

router.get("/about", (req, res) => {
  res.send("About Page");
});

app.use(router);
```

#### **3. Built-In Middleware**

Express comes with several built-in middleware functions:

- **`express.json()`** – Parses incoming JSON requests.
- **`express.urlencoded({ extended: true })`** – Parses URL-encoded form data.
- **`express.static()`** – Serves static files.

**Example:**

```javascript
// Parse JSON requests
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static("public"));
```

#### **4. Third-Party Middleware**

You can install and use third-party middleware via `npm`.

**Example: Using `morgan` for Logging**

1. **Install `morgan`:**

   ```bash
   npm install morgan
   ```

2. **Use `morgan` Middleware:**

   ```javascript
   const morgan = require("morgan");

   app.use(morgan("dev")); // Logs requests to the console
   ```

#### **5. Error-Handling Middleware**

Handles errors and prevents the server from crashing.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

### **Example with Multiple Middleware**

```javascript
const express = require("express");
const morgan = require("morgan");
const app = express();

// Built-in middleware to parse JSON requests
app.use(express.json());

// Third-party middleware for logging
app.use(morgan("dev"));

// Custom application-level middleware
app.use((req, res, next) => {
  console.log("Custom middleware executed");
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

---

### **Order of Middleware Execution**

The order in which you define middleware matters:

1. **Global Middleware** should be defined before routes.
2. **Error-Handling Middleware** should be defined after routes.

---

### **Summary**

1. **Middleware Functions:**

   - Have access to `req`, `res`, and `next`.
   - Call `next()` to pass control to the next function.

2. **Types of Middleware:**

   - **Application-Level:** `app.use()`
   - **Router-Level:** `router.use()`
   - **Built-In:** `express.json()`, `express.static()`
   - **Third-Party:** `morgan`, `cors`
   - **Error-Handling:** `(err, req, res, next)`

3. **Order Matters:**
   - Define global middleware before routes.
   - Place error-handling middleware at the end.

---

### **Useful Resources**

1. **Official Express Middleware Guide:**  
   [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)

2. **Third-Party Middleware List:**  
   [Express Middleware List](https://expressjs.com/en/resources/middleware.html)

---

### **Next Steps**

In the next lesson, we’ll explore **how to use and create routes in Express.js**. Get ready to build more interactive applications! 🚀
