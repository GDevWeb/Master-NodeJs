# Section 3: Understanding the Basics

## **33. Routing Requests**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561894#overview)
- [code](code/01-routing-requests/01-routing-requests/app.js)

---

### **What Is Routing?**

Routing is the process of determining how an application responds to a specific HTTP request. Based on the URL path and method (e.g., `GET`, `POST`), the server directs the request to the appropriate handler.

---

### **Why Is Routing Important?**

1. **Organizes Application Logic:**

   - Separates different parts of your app based on their functionality (e.g., homepage, API endpoints).

2. **Handles Different HTTP Methods:**

   - Provides flexibility for processing `GET`, `POST`, `PUT`, `DELETE`, etc.

3. **Dynamic and Static Routes:**
   - Handles static paths like `/about` and dynamic ones like `/user/:id`.

---

### **Routing in a Node.js Server**

1. **Basic Routing:**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     const { url, method } = req;

     if (url === "/" && method === "GET") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>Welcome to the Home Page!</h1>");
     } else if (url === "/about" && method === "GET") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>About Us</h1>");
     } else {
       res.writeHead(404, { "Content-Type": "text/html" });
       res.end("<h1>404 - Page Not Found</h1>");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **Dynamic Routing:**

   - Use `url` and `query` parsing to handle dynamic requests.

   ```javascript
   const url = require("url");

   const server = http.createServer((req, res) => {
     const parsedUrl = url.parse(req.url, true);

     if (parsedUrl.pathname === "/user" && req.method === "GET") {
       const { id } = parsedUrl.query;
       if (id) {
         res.writeHead(200, { "Content-Type": "text/plain" });
         res.end(`User ID: ${id}`);
       } else {
         res.writeHead(400, { "Content-Type": "text/plain" });
         res.end("User ID is required");
       }
     } else {
       res.writeHead(404, { "Content-Type": "text/plain" });
       res.end("Route Not Found");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Advanced Routing Concepts**

1. **Route Parameters:**

   - Extract dynamic values from the URL (e.g., `/user/:id`).

   ```javascript
   const server = http.createServer((req, res) => {
     const match = req.url.match(/^\/user\/(\d+)$/);
     if (match && req.method === "GET") {
       const userId = match[1];
       res.writeHead(200, { "Content-Type": "text/plain" });
       res.end(`User ID: ${userId}`);
     } else {
       res.writeHead(404, { "Content-Type": "text/plain" });
       res.end("Route Not Found");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **Handling HTTP Methods:**

   - Use the `req.method` property to differentiate between `GET`, `POST`, etc.

   ```javascript
   const server = http.createServer((req, res) => {
     if (req.url === "/submit" && req.method === "POST") {
       let body = "";
       req.on("data", (chunk) => (body += chunk));
       req.on("end", () => {
         res.writeHead(200, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: "Data received", data: body }));
       });
     } else {
       res.writeHead(404, { "Content-Type": "text/plain" });
       res.end("Route Not Found");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

3. **Wildcard Routes:**

   - Handle undefined routes with a wildcard.

   ```javascript
   const server = http.createServer((req, res) => {
     if (req.url === "/" && req.method === "GET") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>Welcome!</h1>");
     } else {
       res.writeHead(404, { "Content-Type": "text/html" });
       res.end("<h1>404 - Page Not Found</h1>");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Best Practices for Routing**

1. **Modularize Routes:**

   - Separate routes into individual files for maintainability.

2. **Use a Framework for Large Applications:**

   - Use Express.js or similar frameworks for simplified routing.

3. **Return Meaningful HTTP Status Codes:**

   - Use proper status codes like `200 OK`, `404 Not Found`, `403 Forbidden`.

4. **Secure Dynamic Routes:**
   - Validate and sanitize inputs in dynamic routes to prevent security vulnerabilities.

---

### **Mini-Exercise**

1. Create a Node.js server with the following routes:

   - `/` (GET): Respond with "Welcome to the Home Page".
   - `/user?id=<id>` (GET): Respond with "User ID: <id>" or "User ID is required" if no ID is provided.
   - `/submit` (POST): Respond with the data sent in the request body.

2. Add a wildcard route to handle all other undefined paths with a 404 message.

---

### **Vocabulary for Technical English**

- **Route:** A URL pattern and HTTP method combination that triggers a specific action.
- **Dynamic Route:** A route that contains variable segments (e.g., `/user/:id`).
- **Wildcard Route:** A fallback route for undefined paths.
- **Query Parameters:** Key-value pairs passed in the URL (e.g., `?id=123`).

---
