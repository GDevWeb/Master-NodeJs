# Section 5: Working with Express.js

## **Difference Between `app.get()` and `app.use()` in Express.js**

In Express.js, `app.get()` and `app.use()` are both used to handle incoming requests, but they serve different purposes. Let's break down their differences:

---

### **1. `app.get()`**

#### **Purpose**

- **`app.get()`** is used to handle **GET requests** for a specific route or URL path.
- It only responds to requests made using the HTTP **GET** method.

#### **Syntax**

```javascript
app.get(PATH, HANDLER);
```

- **`PATH`**: The URL path (e.g., `/`, `/about`).
- **`HANDLER`**: A function that handles the request and sends a response.

#### **Example**

```javascript
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello, GET request!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

- **Accessing `http://localhost:3000/hello`** will return: `Hello, GET request!`

#### **Key Points**

- Handles only **GET** requests.
- Matches the specified **path exactly**.
- Typically used for **retrieving data** (e.g., displaying a web page, fetching information).

---

### **2. `app.use()`**

#### **Purpose**

- **`app.use()`** is used to apply **middleware** or mount a router for a specific path.
- It handles **all HTTP methods** (GET, POST, PUT, DELETE, etc.).
- Useful for applying middleware functions globally or for a specific route prefix.

#### **Syntax**

```javascript
app.use(PATH, MIDDLEWARE_OR_ROUTER);
```

- **`PATH`** (optional): The base path where the middleware or router applies. If omitted, the middleware applies to all routes.
- **`MIDDLEWARE_OR_ROUTER`**: A middleware function or a router instance.

#### **Example: Middleware**

```javascript
const express = require("express");
const app = express();

// Middleware that applies to all routes
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

#### **Example: Mounting a Router**

```javascript
const userRouter = require("./routes/users");
app.use("/users", userRouter);
```

#### **Key Points**

- Handles **all HTTP methods** (GET, POST, PUT, DELETE, etc.).
- Applies to a **path prefix** if specified.
- Commonly used for:
  - **Middleware functions** (e.g., logging, authentication).
  - **Serving static files**.
  - **Mounting routers** to organize routes.

---

### **Summary of Differences**

| **Feature**          | **`app.get()`**                         | **`app.use()`**                                |
| -------------------- | --------------------------------------- | ---------------------------------------------- |
| **Purpose**          | Handle GET requests for specific routes | Apply middleware or mount routers              |
| **HTTP Methods**     | Only handles GET requests               | Handles all HTTP methods                       |
| **Path Matching**    | Exact path match                        | Path prefix or all routes if no path specified |
| **Typical Use Case** | Retrieving data, defining GET routes    | Applying middleware, mounting routers          |
| **Example**          | `app.get("/path", handler)`             | `app.use("/path", middleware)`                 |

---

### **When to Use Each**

- **Use `app.get()`** when:

  - You want to respond to **GET requests** for a specific route.
  - You are building routes for retrieving or displaying data.

- **Use `app.use()`** when:
  - You want to apply **middleware** (e.g., logging, parsing, authentication).
  - You are **mounting routers** to organize your routes.
  - You want to handle **all HTTP methods** for a path.

---

### **Example Demonstrating Both**

```javascript
const express = require("express");
const app = express();

// Middleware using app.use()
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

// Route using app.get()
app.get("/hello", (req, res) => {
  res.send("Hello from GET route!");
});

// Middleware that applies to all routes under /admin
app.use("/admin", (req, res, next) => {
  console.log("Admin middleware");
  next();
});

app.get("/admin/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

#### **Behavior:**

1. **Visit `http://localhost:3000/hello`**

   - Logs the request method and URL.
   - Responds: `Hello from GET route!`

2. **Visit `http://localhost:3000/admin/dashboard`**
   - Logs the request method and URL.
   - Logs: `Admin middleware`.
   - Responds: `Admin Dashboard`

---

### **Conclusion**

- Use `app.get()` for handling **specific GET requests**.
- Use `app.use()` for **middleware** and when you need to handle **all HTTP methods** or organize routes with a router.

Happy coding with Express! 🚀
