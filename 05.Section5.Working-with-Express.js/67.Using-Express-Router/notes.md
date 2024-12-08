# Section 5: Working with Express.js

## **67. Using Express Router**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566296#overview)
- [code](code/05-using-express-router/app.js)

---

### **What is Express Router?**

**Express Router** is a powerful tool that allows you to organize your routes into modular, manageable pieces. Instead of defining all routes in a single file (`app.js`), you can split them into separate router modules, making your code cleaner and more maintainable.

---

### **Benefits of Using Express Router**

1. **Modularity**: Organize routes by feature (e.g., user routes, product routes).
2. **Cleaner Code**: Reduce clutter in `app.js` by moving route definitions to separate files.
3. **Maintainability**: Easier to maintain and scale as your application grows.
4. **Middleware**: Apply middleware to specific routes or route groups.

---

### **Basic Syntax of Express Router**

```javascript
const express = require("express");
const router = express.Router();

router.get("/path", (req, res) => {
  res.send("Response for /path");
});

module.exports = router;
```

---

### **Step-by-Step Guide to Using Express Router**

#### **1. Create an Express Project**

1. **Initialize the Project:**

   ```bash
   mkdir express-router-demo
   cd express-router-demo
   npm init -y
   npm install express
   ```

2. **Create the Project Structure:**

   ```bash
   mkdir routes
   touch app.js routes/users.js routes/products.js
   ```

#### **2. Define Routes Using Express Router**

1. **`routes/users.js`:**

   ```javascript
   const express = require("express");
   const router = express.Router();

   // User routes
   router.get("/", (req, res) => {
     res.send("List of users");
   });

   router.get("/:id", (req, res) => {
     res.send(`User ID: ${req.params.id}`);
   });

   module.exports = router;
   ```

2. **`routes/products.js`:**

   ```javascript
   const express = require("express");
   const router = express.Router();

   // Product routes
   router.get("/", (req, res) => {
     res.send("List of products");
   });

   router.get("/:id", (req, res) => {
     res.send(`Product ID: ${req.params.id}`);
   });

   module.exports = router;
   ```

#### **3. Use Routers in `app.js`**

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Import routers
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

// Use the routers
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Router Demo!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

---

### **How the Routing Works**

1. **Users Route**

   - `GET /users` → Responds with "List of users"
   - `GET /users/123` → Responds with "User ID: 123"

2. **Products Route**

   - `GET /products` → Responds with "List of products"
   - `GET /products/456` → Responds with "Product ID: 456"

3. **Home Route**
   - `GET /` → Responds with "Welcome to the Express Router Demo!"

---

### **Using Middleware with Express Router**

You can add middleware to specific routers.

**Example:**

```javascript
const express = require("express");
const router = express.Router();

// Middleware for user routes
router.use((req, res, next) => {
  console.log(`User Route Accessed: ${req.originalUrl}`);
  next();
});

router.get("/", (req, res) => {
  res.send("List of users with middleware");
});

module.exports = router;
```

---

### **Organizing Routers in Subdirectories**

You can further organize routers into subdirectories for larger applications.

**Project Structure Example:**

```
express-router-demo/
│
├── app.js
├── routes/
│   ├── users/
│   │   └── index.js
│   └── products/
│       └── index.js
└── package.json
```

**`app.js`:**

```javascript
const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

---

### **Summary**

1. **Express Router** helps modularize routes and organize them by feature.
2. **Router Modules** simplify maintenance and scalability.
3. **Middleware** can be applied to specific routers.
4. **Use `app.use()`** to mount routers to specific paths.

---

### **Useful Resources**

1. **Express Router Documentation:**  
   [Express Routing Guide](https://expressjs.com/en/guide/routing.html)

2. **Middleware in Express:**  
   [Using Middleware](https://expressjs.com/en/guide/using-middleware.html)

---

### **Next Steps**

In the next lesson, we’ll explore **serving static files** with Express.js to handle HTML, CSS, JavaScript, and images. 🚀
