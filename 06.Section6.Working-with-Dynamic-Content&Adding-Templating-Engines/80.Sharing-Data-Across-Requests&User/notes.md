# Section 6: Working with Dynamic Content & Adding Templating Engines

## **80. Sharing Data Across Requests & Users**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11577382#overview)
- [code - starting ressources](code/starting-resources/)
- [code - starting project](code/starting-resources/)

---

### **Introduction**

When building web applications with Express.js, you often need to **share data** across multiple requests or users. This can be useful for:

1. **Global Settings**: Making configuration settings or metadata available to all routes.
2. **User Sessions**: Storing user-specific data like authentication status.
3. **Flash Messages**: Displaying temporary notifications across different pages.
4. **Middleware**: Providing dynamic data to templates consistently.

In this lecture, we'll explore different techniques to share data across requests and users in an Express.js application.

---

### **Techniques for Sharing Data**

1. **Local Variables (`res.locals`)**
2. **Sessions**
3. **Global Middleware**

---

### **1. Local Variables (`res.locals`)**

`res.locals` is an object that is available within the **lifetime of a single request**. You can use it to pass data to templates without needing to explicitly send the data in each route handler.

#### **Example: Setting `res.locals` in Middleware**

1. **`app.js`**:

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   // Middleware to set a global variable for all templates
   app.use((req, res, next) => {
     res.locals.siteName = "My Express App";
     next();
   });

   // Route to render a home page
   app.get("/", (req, res) => {
     res.send(`<h1>Welcome to ${res.locals.siteName}</h1>`);
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

#### **Explanation**:

- **Middleware**: Sets `res.locals.siteName` before handling any request.
- **Access in Template**: The value `res.locals.siteName` is available in the route handler or template.

---

### **2. Using Sessions**

**Sessions** allow you to store data that persists **across multiple requests** for a particular user. This is useful for handling things like user authentication, shopping carts, and user-specific settings.

#### **Setup with `express-session`**

1. **Install `express-session`**:

   ```bash
   npm install express-session
   ```

2. **Configure Sessions in `app.js`**:

   ```javascript
   const express = require("express");
   const session = require("express-session");
   const app = express();
   const port = 3000;

   // Configure express-session
   app.use(
     session({
       secret: "my-secret-key",
       resave: false,
       saveUninitialized: true,
     })
   );

   // Route to set a session value
   app.get("/set-session", (req, res) => {
     req.session.username = "JohnDoe";
     res.send("Session value set!");
   });

   // Route to access the session value
   app.get("/get-session", (req, res) => {
     res.send(`Hello, ${req.session.username || "Guest"}!`);
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

#### **Explanation**:

- **Set Session**: Visiting `/set-session` sets `req.session.username` to "JohnDoe".
- **Get Session**: Visiting `/get-session` retrieves the session value and displays it.

---

### **3. Global Middleware for Sharing Data**

You can create middleware to add global data that needs to be accessible across all routes and templates.

#### **Example: User Authentication Status**

1. **`app.js`**:

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   // Middleware to simulate user authentication status
   app.use((req, res, next) => {
     req.user = { name: "JaneDoe", authenticated: true };
     res.locals.user = req.user;
     next();
   });

   // Route to display user info
   app.get("/", (req, res) => {
     if (res.locals.user.authenticated) {
       res.send(`<h1>Welcome, ${res.locals.user.name}!</h1>`);
     } else {
       res.send("<h1>Welcome, Guest!</h1>");
     }
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

#### **Explanation**:

- **Middleware**: Sets `req.user` and `res.locals.user` to simulate an authenticated user.
- **Access in Route**: The authentication status and user name are available in the route.

---

### **Comparison of Techniques**

| **Technique**    | **Use Case**                         | **Persistence**           |
| ---------------- | ------------------------------------ | ------------------------- |
| **`res.locals`** | Data available for a single request  | Single request            |
| **Sessions**     | Data stored across multiple requests | Multiple requests         |
| **Middleware**   | Global data shared across all routes | Depends on implementation |

---

### **Best Practices**

1. **Use `res.locals`** for data that only needs to be shared within a single request, such as flash messages or page-specific data.
2. **Use Sessions** for data that needs to persist across multiple requests, such as user login states or shopping cart data.
3. **Global Middleware** is useful for setting up data that all routes and templates need to access, such as site metadata or authentication status.

---

### **Summary**

In this lesson, you learned how to:

1. Share data across requests using **`res.locals`**.
2. Persist data across multiple requests using **sessions**.
3. Utilize **global middleware** for consistent data across all routes.

These techniques are essential for building robust, dynamic web applications with Express.js.

---

### **Next Steps**

In the next lecture, we’ll start exploring **how to set up a templating engine** (like Pug or EJS) to dynamically render content in your Express applications. 🚀
