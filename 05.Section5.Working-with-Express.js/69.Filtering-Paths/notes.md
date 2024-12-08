# Section 5: Working with Express.js

## **69. Filtering Paths**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566302#overview)
- [code](code/06-filtering-paths/app.js)

---

### **What is Path Filtering in Express.js?**

**Path filtering** in Express.js allows you to selectively apply middleware or route handlers based on specific URL patterns or conditions. This is useful when you want to:

1. Apply middleware only to certain routes.
2. Match routes based on dynamic segments.
3. Exclude or include routes conditionally.

---

### **Using `app.use()` with Path Filtering**

You can use `app.use(PATH, MIDDLEWARE)` to apply middleware only to specific paths or path prefixes.

#### **Example: Applying Middleware to a Path Prefix**

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Middleware that applies only to routes starting with "/admin"
app.use("/admin", (req, res, next) => {
  console.log("Admin middleware executed");
  next();
});

app.get("/admin/dashboard", (req, res) => {
  res.send("Welcome to the Admin Dashboard");
});

app.get("/user/profile", (req, res) => {
  res.send("User Profile Page");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

**Behavior:**

- **`GET /admin/dashboard`**:  
  Logs "Admin middleware executed" and responds with "Welcome to the Admin Dashboard".
- **`GET /user/profile`**:  
  Does not execute the admin middleware.

---

### **Filtering Paths with Route Parameters**

You can define dynamic segments in paths and filter based on them.

#### **Example: Route with Parameters**

```javascript
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});
```

- **`GET /users/123`**: Responds with `User ID: 123`.
- **`GET /users/456`**: Responds with `User ID: 456`.

---

### **Filtering Paths with Regular Expressions**

You can use **regular expressions** to match specific patterns in URLs.

#### **Example: Regular Expression for Path Filtering**

```javascript
app.get(/^\/products\/[0-9]+$/, (req, res) => {
  res.send("Product ID Route Matched");
});
```

**Behavior:**

- **`GET /products/123`**: Matches the route.
- **`GET /products/abc`**: Does not match the route.

---

### **Conditional Path Filtering**

You can conditionally filter paths using custom logic inside middleware.

#### **Example: Conditional Middleware**

```javascript
app.use((req, res, next) => {
  if (req.path.startsWith("/admin") && req.method === "GET") {
    console.log("Admin GET request detected");
  }
  next();
});

app.get("/admin/settings", (req, res) => {
  res.send("Admin Settings Page");
});

app.post("/admin/settings", (req, res) => {
  res.send("Admin Settings Updated");
});
```

**Behavior:**

- **`GET /admin/settings`**: Logs "Admin GET request detected" and responds with "Admin Settings Page".
- **`POST /admin/settings`**: Middleware does not log anything and responds with "Admin Settings Updated".

---

### **Combining Multiple Filters**

You can combine multiple filtering techniques to achieve more specific control.

#### **Example: Middleware for Specific Paths and Methods**

```javascript
app.use("/api/:version", (req, res, next) => {
  console.log(`API version: ${req.params.version}`);
  next();
});

app.get("/api/v1/users", (req, res) => {
  res.send("API v1 - User List");
});

app.get("/api/v2/users", (req, res) => {
  res.send("API v2 - User List");
});
```

**Behavior:**

- **`GET /api/v1/users`**: Logs "API version: v1" and responds with "API v1 - User List".
- **`GET /api/v2/users`**: Logs "API version: v2" and responds with "API v2 - User List".

---

### **Best Practices for Path Filtering**

1. **Organize Middleware by Path Prefix:**

   - Use `app.use("/prefix", middleware)` to apply middleware to groups of related routes.

2. **Use Regular Expressions for Complex Matching:**

   - When paths follow a pattern, use regex to simplify route definitions.

3. **Combine Conditions in Middleware:**

   - Add custom logic inside middleware to filter based on paths and methods.

4. **Keep Route Definitions Clear:**
   - Avoid overly complex paths; split routes into separate modules using `express.Router()`.

---

### **Summary**

- **Path Filtering** allows you to apply middleware and route handlers selectively.
- **Techniques Include:**
  - **Path Prefixes:** `app.use("/admin", middleware)`
  - **Dynamic Segments:** `app.get("/users/:id", handler)`
  - **Regular Expressions:** `app.get(/^\/products\/[0-9]+$/, handler)`
  - **Conditional Logic:** Custom logic within middleware.

---

### **Useful Resources**

1. **Express Routing Guide:**  
   [Express Routing](https://expressjs.com/en/guide/routing.html)

2. **Express Middleware Guide:**  
   [Using Middleware](https://expressjs.com/en/guide/using-middleware.html)

3. **MDN Regular Expressions Reference:**  
   [MDN Regex Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---

### **Next Steps**

In the next lesson, we’ll explore **Creating HTML Pages**. 🚀
