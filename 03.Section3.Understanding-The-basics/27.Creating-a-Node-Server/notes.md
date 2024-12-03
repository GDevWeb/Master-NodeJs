# Section 3: Understanding the Basics

## **27. Creating a Node Server**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561886#overview)
- [core-module img](pdf/core-module.png)

---

### **What Is a Node Server?**

A **Node server** is a backend application built using Node.js that listens for incoming HTTP requests, processes them, and sends appropriate responses. It enables you to serve static files, provide dynamic content, or build APIs.

---

### **Steps to Create a Basic Node.js Server**

1. **Import the `http` Module:**

   - Node.js provides the `http` module to create servers and handle HTTP requests/responses.

   ```javascript
   const http = require("http");
   ```

2. **Create a Server:**

   - Use `http.createServer()` to create a server instance.

   ```javascript
   const server = http.createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, World!");
   });
   ```

3. **Start Listening on a Port:**

   - Use the `listen()` method to specify the port and start the server.

   ```javascript
   server.listen(3000, () => {
     console.log("Server is running on http://localhost:3000");
   });
   ```

---

### **Handling Requests and Responses**

1. **Understanding `req` (Request):**

   - Contains details about the incoming request, such as the URL and method.

   ```javascript
   console.log(req.url); // Logs the requested URL
   console.log(req.method); // Logs the HTTP method (GET, POST, etc.)
   ```

2. **Understanding `res` (Response):**

   - Used to send data back to the client.
   - Common methods:
     - `res.writeHead(statusCode, headers)`: Set the status code and headers.
     - `res.end(content)`: End the response with optional content.

3. **Responding Based on URL:**
   - Serve different content depending on the URL.
   ```javascript
   const server = http.createServer((req, res) => {
     if (req.url === "/") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>Welcome to the Home Page!</h1>");
     } else if (req.url === "/about") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>About Us</h1>");
     } else {
       res.writeHead(404, { "Content-Type": "text/html" });
       res.end("<h1>404 - Page Not Found</h1>");
     }
   });
   ```

---

### **Practical Example: Creating a Simple Server**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to My Node Server!</h1>");
  } else if (url === "/api" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, API!" }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
```

---

### **Enhancing the Server**

1. **Handling Query Parameters:**

   - Use the `url` module to parse the URL and extract query parameters.

   ```javascript
   const url = require("url");

   const server = http.createServer((req, res) => {
     const parsedUrl = url.parse(req.url, true);
     const query = parsedUrl.query;

     if (parsedUrl.pathname === "/greet") {
       res.writeHead(200, { "Content-Type": "text/plain" });
       res.end(`Hello, ${query.name || "Guest"}!`);
     } else {
       res.writeHead(404, { "Content-Type": "text/plain" });
       res.end("404 - Not Found");
     }
   });

   server.listen(3000, () =>
     console.log("Server is running on http://localhost:3000")
   );
   ```

2. **Serving Static Files:**

   - Use the `fs` module to serve static files like HTML, CSS, or images.

   ```javascript
   const fs = require("fs");

   const server = http.createServer((req, res) => {
     if (req.url === "/") {
       fs.readFile("./index.html", (err, data) => {
         if (err) {
           res.writeHead(500);
           res.end("Error loading page");
         } else {
           res.writeHead(200, { "Content-Type": "text/html" });
           res.end(data);
         }
       });
     }
   });

   server.listen(3000, () =>
     console.log("Static server running on http://localhost:3000")
   );
   ```

---

### **Best Practices**

1. **Organize Code:**

   - Separate routing, logic, and utilities into different files or modules.

2. **Use an HTTP Framework:**

   - Use frameworks like `Express.js` for easier server creation and request handling.

3. **Handle Errors Gracefully:**

   - Always include error-handling logic to ensure your server doesn’t crash.

4. **Log Server Activity:**
   - Log incoming requests, responses, and errors for better debugging.

---

### **Mini-Exercise**

1. Create a Node.js server that:

   - Serves a welcome page at `/`.
   - Returns JSON data for `/api/users`.
   - Handles 404 errors gracefully.

2. Enhance the server to accept a query parameter (e.g., `/greet?name=John`) and respond with a personalized message.

---

### **Vocabulary for Technical English**

- **Server:** A program that listens for and responds to client requests.
- **Port:** A communication endpoint for network connections.
- **Request:** A message sent by a client to the server.
- **Response:** The server's reply to the client.
- **Static Files:** Predefined files like HTML, CSS, and images.

---
