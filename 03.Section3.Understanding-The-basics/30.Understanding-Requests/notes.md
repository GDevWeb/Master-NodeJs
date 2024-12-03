# Section 3: Understanding the Basics

## **30. Understanding Requests**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561890#overview)

---

### **What Is an HTTP Request?**

An **HTTP request** is a message sent by the client (such as a browser or API consumer) to the server, asking for a specific resource or service. Understanding requests is essential for building Node.js servers that handle and respond to these requests appropriately.

---

### **Structure of an HTTP Request**

An HTTP request consists of the following components:

1. **Request Line:**

   - Specifies the HTTP method, the resource path (URL), and the HTTP version.
   - Example:
     ```
     GET /about HTTP/1.1
     ```

2. **Headers:**

   - Provide metadata about the request, such as content type, authentication, or cookies.
   - Example:
     ```
     Content-Type: application/json
     Authorization: Bearer <token>
     ```

3. **Body (Optional):**
   - Contains data sent with the request (e.g., form data, JSON payloads).
   - Typically used with methods like `POST` or `PUT`.

---

### **Common HTTP Methods**

1. **GET:**

   - Retrieve data from the server.
   - Example: Loading a webpage or fetching API data.

2. **POST:**

   - Send data to the server (e.g., submitting a form, creating a resource).

3. **PUT:**

   - Update or replace a resource on the server.

4. **PATCH:**

   - Partially update a resource.

5. **DELETE:**

   - Remove a resource from the server.

6. **OPTIONS:**
   - Retrieve information about available HTTP methods and options for a resource.

---

### **Accessing Requests in Node.js**

Node.js provides the `http` module to handle incoming HTTP requests.

1. **Accessing the Request Object (`req`):**

   - The `req` object contains details about the request:
     - URL (`req.url`)
     - HTTP method (`req.method`)
     - Headers (`req.headers`)

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     console.log("URL:", req.url);
     console.log("Method:", req.method);
     console.log("Headers:", req.headers);

     res.end("Request logged!");
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Handling Query Parameters**

Query parameters are part of the URL and provide additional data to the server.

1. **Example URL:**

   ```
   http://localhost:3000/search?query=javascript&limit=10
   ```

2. **Parsing Query Parameters:**

   - Use the `url` module to extract query parameters.

   ```javascript
   const url = require("url");

   const server = http.createServer((req, res) => {
     const parsedUrl = url.parse(req.url, true);
     const query = parsedUrl.query;

     console.log("Query Parameters:", query);

     res.end(`You searched for: ${query.query || "nothing"}`);
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Accessing Request Body**

The request body contains data sent with `POST`, `PUT`, or `PATCH` requests.

1. **Handling JSON Data:**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     if (
       req.method === "POST" &&
       req.headers["content-type"] === "application/json"
     ) {
       let body = "";

       req.on("data", (chunk) => {
         body += chunk;
       });

       req.on("end", () => {
         const data = JSON.parse(body);
         console.log("Request Body:", data);

         res.writeHead(200, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: "Data received!", data }));
       });
     } else {
       res.writeHead(400, { "Content-Type": "text/plain" });
       res.end("Invalid Request");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Practical Example**

1. **Handling Multiple Routes:**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     const { url, method } = req;

     if (url === "/" && method === "GET") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>Welcome to the Home Page</h1>");
     } else if (url === "/api" && method === "GET") {
       res.writeHead(200, { "Content-Type": "application/json" });
       res.end(JSON.stringify({ message: "Hello, API!" }));
     } else if (url === "/submit" && method === "POST") {
       let body = "";

       req.on("data", (chunk) => {
         body += chunk;
       });

       req.on("end", () => {
         console.log("Data Received:", body);
         res.writeHead(200, { "Content-Type": "text/plain" });
         res.end("Form Submitted!");
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

### **Best Practices**

1. **Validate Inputs:**

   - Always validate query parameters and request bodies to prevent errors or security vulnerabilities.

2. **Use Middleware:**

   - For large applications, use frameworks like Express.js for cleaner request handling.

3. **Log Requests:**

   - Maintain logs of incoming requests for debugging and monitoring purposes.

4. **Handle Errors Gracefully:**
   - Respond with meaningful error messages and proper HTTP status codes.

---

### **Mini-Exercise**

1. Create a Node.js server that:

   - Responds with a greeting message for `/hello`.
   - Extracts and logs query parameters for `/search`.
   - Accepts and logs JSON data sent to `/submit`.

2. Enhance the server to:
   - Handle invalid JSON gracefully.
   - Respond with a 404 message for undefined routes.

---

### **Vocabulary for Technical English**

- **Request:** A message sent by the client to the server asking for a resource or service.
- **Headers:** Metadata sent with a request or response.
- **Body:** Data sent with the request, often in JSON or form-data format.
- **Query Parameters:** Key-value pairs appended to a URL for additional context.

---
