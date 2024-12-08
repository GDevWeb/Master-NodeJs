# Section 5: Working with Express.js

## **66. Limiting Middleware Execution to POST Requests**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566294#overview)
- [code](code/04-limiting-middleware-execution-to-post-requests/app.js)

---

### **What is Middleware Execution Limitation?**

Middleware in Express.js can be set to run only for specific HTTP methods, such as **POST** requests. This is useful when you want middleware to apply only for certain types of requests, like form submissions or API endpoints that create new data.

---

### **How to Limit Middleware to POST Requests**

In Express, you can limit middleware execution to specific HTTP methods by attaching it to the corresponding method (`app.post()`, `router.post()`, etc.) instead of using `app.use()`.

---

### **Basic Syntax**

```javascript
app.post(PATH, MIDDLEWARE, HANDLER);
```

- **`PATH`**: The URL path where the middleware should apply.
- **`MIDDLEWARE`**: The middleware function to execute.
- **`HANDLER`**: The route handler function that processes the request.

---

### **Example: Limiting Middleware to POST Requests**

Let's create an example where middleware only runs for POST requests.

1. **Setup Project and Install Express**

   ```bash
   mkdir post-middleware-demo
   cd post-middleware-demo
   npm init -y
   npm install express
   ```

2. **Create `app.js`**

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   // Middleware to parse JSON requests
   app.use(express.json());

   // Middleware limited to POST requests
   app.post("/submit", (req, res, next) => {
     console.log("Middleware for POST request executed");
     next();
   });

   // Route handler for POST requests
   app.post("/submit", (req, res) => {
     res.send(`Received POST data: ${JSON.stringify(req.body)}`);
   });

   // Route handler for GET requests (middleware won't execute here)
   app.get("/submit", (req, res) => {
     res.send("This is a GET request, middleware not executed.");
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **Run the Server**

   ```bash
   node app.js
   ```

4. **Test the Routes**

   - **POST Request:**  
     Use a tool like **Postman** or `curl` to send a POST request.

     ```bash
     curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name": "John"}'
     ```

     **Console Output:**

     ```
     Middleware for POST request executed
     ```

     **Response:**

     ```
     Received POST data: {"name":"John"}
     ```

   - **GET Request:**  
     Visit `http://localhost:3000/submit` in your browser or use `curl`:

     ```bash
     curl http://localhost:3000/submit
     ```

     **Response:**

     ```
     This is a GET request, middleware not executed.
     ```

---

### **Example with Multiple Middleware**

You can also chain multiple middleware functions for POST requests:

```javascript
app.post(
  "/submit",
  (req, res, next) => {
    console.log("First middleware for POST");
    next();
  },
  (req, res, next) => {
    console.log("Second middleware for POST");
    next();
  },
  (req, res) => {
    res.send("Final response after middleware");
  }
);
```

**Output in Console for a POST Request:**

```
First middleware for POST
Second middleware for POST
```

**Response:**

```
Final response after middleware
```

---

### **Using Router-Level Middleware for POST Requests**

You can also limit middleware to POST requests using `express.Router()`:

```javascript
const express = require("express");
const router = express.Router();

// Middleware for POST requests on /submit
router.post("/submit", (req, res, next) => {
  console.log("Router-level middleware for POST");
  next();
});

// Route handler
router.post("/submit", (req, res) => {
  res.send("Data submitted via POST request");
});

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

### **Best Practices**

1. **Use Specific Middleware for Specific Needs:**

   - Apply middleware only to routes that need it (e.g., authentication middleware for login routes).

2. **Chain Middleware Carefully:**

   - Ensure each middleware calls `next()` unless it terminates the request-response cycle.

3. **Avoid Global Middleware for POST-Only Logic:**
   - Using `app.use()` applies middleware globally. Limit middleware to `app.post()` when it should only run for POST requests.

---

### **Summary**

- **Limit Middleware to POST Requests:** Attach middleware to `app.post()` instead of `app.use()`.
- **Chained Middleware:** You can chain multiple middleware functions for a POST route.
- **Router-Level Middleware:** Use `router.post()` for modular route handling.

---

### **Useful Resources**

1. **Express.js Routing Guide:**  
   [Express Routing](https://expressjs.com/en/guide/routing.html)

2. **Middleware in Express:**  
   [Using Middleware](https://expressjs.com/en/guide/using-middleware.html)

---

### **Next Steps**

In the next lesson, we’ll explore **serving static files with Express.js** to handle HTML, CSS, images, and JavaScript files. 🚀
