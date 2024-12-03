# Section 3: Understanding the Basics

## **31. Sending Responses**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561892#overview)

---

### **What Is an HTTP Response?**

An **HTTP response** is the server's reply to an HTTP request made by a client (e.g., a browser or API consumer). It contains information about the result of the request, such as the status code, headers, and body.

---

### **Structure of an HTTP Response**

1. **Status Line:**

   - Includes the HTTP version, status code, and a status message.
   - Example:
     ```
     HTTP/1.1 200 OK
     ```

2. **Headers:**

   - Provide metadata about the response (e.g., `Content-Type`, `Content-Length`).
   - Example:
     ```
     Content-Type: application/json
     ```

3. **Body:**
   - Contains the actual data returned to the client (e.g., HTML, JSON, text).

---

### **Using the `res` Object in Node.js**

In Node.js, the `http` module provides the `res` object to send responses.

1. **Setting the Status Code:**

   - Use `res.writeHead(statusCode)` or `res.statusCode` to specify the HTTP status code.

   ```javascript
   res.writeHead(200); // OK
   res.statusCode = 404; // Not Found
   ```

2. **Setting Headers:**

   - Use `res.setHeader(key, value)` to define response headers.

   ```javascript
   res.setHeader("Content-Type", "application/json");
   ```

3. **Sending the Body:**
   - Use `res.end()` to send the response and end the request.
   ```javascript
   res.end("Hello, World!");
   ```

---

### **Sending Different Types of Responses**

1. **Plain Text:**

   ```javascript
   const server = require("http").createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end("Hello, World!");
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **HTML:**

   ```javascript
   const server = require("http").createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "text/html" });
     res.end("<h1>Welcome to My Website</h1>");
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

3. **JSON:**

   ```javascript
   const server = require("http").createServer((req, res) => {
     res.writeHead(200, { "Content-Type": "application/json" });
     res.end(JSON.stringify({ message: "Hello, JSON!" }));
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

4. **Files (Static Content):**

   ```javascript
   const fs = require("fs");
   const server = require("http").createServer((req, res) => {
     if (req.url === "/file") {
       fs.readFile("./example.txt", (err, data) => {
         if (err) {
           res.writeHead(500, { "Content-Type": "text/plain" });
           res.end("Internal Server Error");
         } else {
           res.writeHead(200, { "Content-Type": "text/plain" });
           res.end(data);
         }
       });
     } else {
       res.writeHead(404, { "Content-Type": "text/plain" });
       res.end("404 - Not Found");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Understanding HTTP Status Codes**

1. **1xx Informational:**

   - Indicates the request was received and processing is continuing.
   - Example: `100 Continue`.

2. **2xx Success:**

   - Indicates the request was successfully processed.
   - Example: `200 OK`, `201 Created`.

3. **3xx Redirection:**

   - Indicates the client must take additional action to complete the request.
   - Example: `301 Moved Permanently`, `302 Found`.

4. **4xx Client Errors:**

   - Indicates an issue with the client’s request.
   - Example: `400 Bad Request`, `404 Not Found`.

5. **5xx Server Errors:**
   - Indicates an issue with the server.
   - Example: `500 Internal Server Error`, `503 Service Unavailable`.

---

### **Practical Example: Handling Multiple Routes**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Us</h1>");
  } else if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Welcome to the API!" }));
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

### **Best Practices**

1. **Set Appropriate Content Types:**

   - Ensure the `Content-Type` header matches the response content.

2. **Use Proper Status Codes:**

   - Provide meaningful status codes to indicate the result of a request.

3. **Log Errors and Exceptions:**

   - Log unexpected errors for debugging purposes.

4. **Handle Undefined Routes Gracefully:**
   - Always return a `404 Not Found` for undefined routes.

---

### **Mini-Exercise**

1. Create a Node.js server that:

   - Responds with plain text for `/`.
   - Returns JSON data for `/api`.
   - Serves an HTML page for `/about`.
   - Handles 404 errors for undefined routes.

2. Add a feature to:
   - Log all incoming requests with their method and URL.
   - Serve a static file (like `styles.css`) when requested.

---

### **Vocabulary for Technical English**

- **Response:** The server's reply to a client's request.
- **Status Code:** A number indicating the result of the request.
- **Content-Type:** A header specifying the format of the response body (e.g., `text/html`, `application/json`).
- **Header:** Metadata sent with the response, like `Content-Length` or `Authorization`.

---
