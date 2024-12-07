# Section 5: Working with Express.js

## **63. Express.js - Looking Behind the Scenes**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566270#overview)
- [code](code/02-looking-behind-the-scenes/app.js)

---

### **What Happens Behind the Scenes in Express.js?**

When you build a web application using Express.js, a lot happens under the hood to handle requests, process them, and send responses. Let’s break down the key components and internal mechanisms that make Express.js work.

---

### **Core Concepts of Express.js Architecture**

1. **Express Application Object (`app`):**

   - Created by calling `express()`.
   - Represents your entire Express application.
   - Used to define routes, middleware, and configuration.

2. **Middleware Stack:**

   - Express maintains a **middleware stack**.
   - Each incoming request passes through this stack in the order the middleware is defined.
   - Middleware functions can modify the request (`req`) and response (`res`) objects or end the request-response cycle.

3. **Routing Mechanism:**

   - Routes define how the application responds to different HTTP methods and URL paths.
   - Express matches incoming requests to the appropriate route handler.

4. **Request-Response Lifecycle:**
   - The flow of an HTTP request through middleware, route handlers, and finally to the response.

---

### **Step-by-Step Breakdown**

Let's take a look behind the scenes of a typical Express application.

#### **1. Initializing an Express App**

When you create an Express app:

```javascript
const express = require("express");
const app = express();
```

- **What Happens:**
  - The `express()` function creates an instance of the Express application.
  - This `app` object contains methods for defining routes, middleware, and server settings.

---

#### **2. Adding Middleware**

```javascript
app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});
```

- **What Happens:**
  - The middleware function is added to the **middleware stack**.
  - When a request is received, Express executes this middleware in the order it was defined.

---

#### **3. Defining Routes**

```javascript
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
```

- **What Happens:**
  - This route is registered for `GET` requests to the root URL (`/`).
  - If a `GET` request to `/` matches this route, Express calls the handler function.

---

#### **4. Starting the Server**

```javascript
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

- **What Happens:**
  - The server starts listening on port `3000`.
  - When a request is received, Express processes it through the middleware stack and route handlers.

---

### **Request-Response Lifecycle in Express.js**

Here’s the detailed flow of a request through an Express app:

1. **Client Sends a Request:**

   - A browser or API client makes an HTTP request to the server.

2. **Express Receives the Request:**

   - The Express server (via Node.js) captures the incoming request.

3. **Middleware Stack Execution:**

   - Express passes the request through the middleware stack in the order the middleware was defined.
   - Middleware can:
     - **Modify** the `req` and `res` objects.
     - **End the request-response cycle** by sending a response.
     - **Call `next()`** to pass control to the next middleware or route handler.

4. **Routing:**

   - If no middleware ends the request, Express matches the request to a route handler based on the HTTP method and URL.

5. **Route Handler Execution:**

   - The matching route handler processes the request and sends a response using methods like `res.send()`, `res.json()`, or `res.render()`.

6. **Sending the Response:**

   - Express sends the response back to the client.

7. **Request-Response Cycle Ends:**
   - The connection is closed, and the server is ready to handle new requests.

---

### **Example Walkthrough**

```javascript
const express = require("express");
const app = express();

// Middleware 1: Logging
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Middleware 2: Add a custom header
app.use((req, res, next) => {
  res.setHeader("X-Custom-Header", "HelloMiddleware");
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

#### **Request Flow:**

1. **Request:**  
   `GET http://localhost:3000/`

2. **Middleware 1:**  
   Logs `Request URL: /`.

3. **Middleware 2:**  
   Adds a custom header `X-Custom-Header`.

4. **Route Handler:**  
   Sends the response `"Hello, Express!"`.

5. **Response:**  
   The client receives the response with the custom header.

---

### **Key Objects in Express.js**

1. **`req` (Request):**

   - Represents the HTTP request.
   - Contains data like headers, URL parameters, query strings, and the request body.

2. **`res` (Response):**

   - Represents the HTTP response.
   - Contains methods to send a response, such as `res.send()`, `res.json()`, and `res.status()`.

3. **`next` (Next Function):**
   - Passes control to the next middleware function or route handler.
   - If `next()` is not called, the request-response cycle is halted.

---

### **Express.js Internals**

- **Built on Node.js HTTP Module:**  
  Express builds on the native Node.js `http` module, adding higher-level abstractions.

- **Middleware Stack:**  
  Express maintains an internal stack where middleware and route handlers are pushed and executed sequentially.

- **Routing Layer:**  
  Handles matching requests to defined routes and calling the appropriate handlers.

---

### **Summary**

1. **Express Application:**  
   Created by `express()` and used to configure routes and middleware.

2. **Middleware Stack:**  
   A series of functions that process the request before sending a response.

3. **Request-Response Lifecycle:**

   - Request → Middleware → Route Handler → Response.
   - Each middleware can modify `req` and `res` or end the cycle.

4. **Behind the Scenes:**
   - Express abstracts the low-level details of the Node.js `http` module.
   - Provides a clean way to handle requests, routes, and middleware.

---

### **Useful Resources**

1. **Official Express.js Guide:**  
   [Express.js Documentation](https://expressjs.com/)

2. **Node.js HTTP Module:**  
   [Node.js HTTP Module Docs](https://nodejs.org/api/http.html)

3. **Middleware in Express:**  
   [Using Middleware](https://expressjs.com/en/guide/using-middleware.html)

---

### **Next Steps**

In the next lesson, we’ll learn how to **set up routes and handle different HTTP methods** in Express.js. Get ready to build your first set of routes! 🚀
