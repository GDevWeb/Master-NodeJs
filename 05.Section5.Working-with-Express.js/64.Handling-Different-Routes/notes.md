# Section 5: Working with Express.js

## **64. Handling Different Routes**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566276#overview)
- [code](code/03-handling-different-routes/app.js)

---

### **What are Routes in Express.js?**

In Express.js, **routes** define how the application responds to different HTTP requests based on the URL and the HTTP method (GET, POST, PUT, DELETE, etc.). A route consists of:

1. **URL Path**: The endpoint or route (e.g., `/`, `/about`, `/users`).
2. **HTTP Method**: The request type (e.g., `GET`, `POST`).
3. **Callback Function**: The function that handles the request and sends a response.

---

### **Basic Syntax for Routes**

```javascript
app.METHOD(PATH, HANDLER);
```

- **`app`**: The Express application instance.
- **`METHOD`**: The HTTP method (e.g., `get`, `post`, `put`, `delete`).
- **`PATH`**: The URL path (e.g., `/`, `/about`, `/users`).
- **`HANDLER`**: The function to handle the request (`req`) and response (`res`).

Example:

```javascript
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
```

---

### **Common HTTP Methods**

- **GET**: Retrieve data.
- **POST**: Send data to the server (create a new resource).
- **PUT**: Update an existing resource.
- **DELETE**: Delete a resource.

---

### **Examples of Different Routes**

1. **GET Route**

   ```javascript
   app.get("/", (req, res) => {
     res.send("Welcome to the Home Page!");
   });
   ```

2. **POST Route**

   ```javascript
   app.post("/submit", (req, res) => {
     res.send("Form submitted!");
   });
   ```

3. **PUT Route**

   ```javascript
   app.put("/update", (req, res) => {
     res.send("Resource updated!");
   });
   ```

4. **DELETE Route**

   ```javascript
   app.delete("/delete", (req, res) => {
     res.send("Resource deleted!");
   });
   ```

---

### **Route Parameters**

**Route parameters** are used to capture values in the URL and make them available to the handler function.

**Example:**

```javascript
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

- **URL to Access**: `http://localhost:3000/users/42`
- **Output**: `User ID: 42`

---

### **Query Parameters**

**Query parameters** are used to send additional data in the URL after the `?` symbol.

**Example:**

```javascript
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Search results for: ${keyword}`);
});
```

- **URL to Access**: `http://localhost:3000/search?keyword=express`
- **Output**: `Search results for: express`

---

### **Combining Route Parameters and Query Parameters**

```javascript
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const sort = req.query.sort;
  res.send(`User ID: ${userId}, Sort by: ${sort}`);
});
```

- **URL to Access**: `http://localhost:3000/users/42?sort=asc`
- **Output**: `User ID: 42, Sort by: asc`

---

### **Handling Multiple Routes**

```javascript
const express = require("express");
const app = express();

// Home Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// About Route
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// User Profile Route with Parameter
app.get("/users/:username", (req, res) => {
  res.send(`Profile of user: ${req.params.username}`);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

---

### **Router-Level Middleware**

For better organization, you can use the `express.Router` to group routes.

**Example:**

1. **Create a Router File (`routes/users.js`):**

   ```javascript
   const express = require("express");
   const router = express.Router();

   router.get("/", (req, res) => {
     res.send("List of users");
   });

   router.get("/:id", (req, res) => {
     res.send(`User ID: ${req.params.id}`);
   });

   module.exports = router;
   ```

2. **Use the Router in `app.js`:**

   ```javascript
   const express = require("express");
   const app = express();
   const userRoutes = require("./routes/users");

   app.use("/users", userRoutes);

   app.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
   });
   ```

- **Access URLs:**
  - `http://localhost:3000/users` → List of users
  - `http://localhost:3000/users/42` → User ID: 42

---

### **Best Practices for Routes**

1. **Organize Routes in Separate Files:**

   - Use `express.Router` to split routes into modules.

2. **Use Descriptive Route Names:**

   - Make routes self-explanatory (e.g., `/users/:id/profile`).

3. **Handle Errors Gracefully:**

   - Add error-handling middleware for invalid routes.

4. **RESTful API Design:**
   - Follow REST conventions for CRUD operations:
     - **GET** `/users` → Retrieve users
     - **POST** `/users` → Create a user
     - **GET** `/users/:id` → Retrieve a specific user
     - **PUT** `/users/:id` → Update a user
     - **DELETE** `/users/:id` → Delete a user

---

### **Useful Resources**

1. **Express Routing Guide:**  
   [Express.js Routing](https://expressjs.com/en/guide/routing.html)

2. **RESTful API Design Principles:**  
   [REST API Design](https://restfulapi.net/)

---

### **Next Steps**

In the next lesson, we’ll explore **serving static files in Express.js**. This will enable us to deliver HTML, CSS, JavaScript, and images to clients. 🚀
