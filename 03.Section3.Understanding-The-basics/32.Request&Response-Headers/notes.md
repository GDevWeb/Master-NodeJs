# Section 3: Understanding the Basics

## **32. Request & Response Headers**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12192472#overview)
- [MDN - HHTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

### **What Are HTTP Headers?**

HTTP headers are key-value pairs sent along with HTTP requests and responses. They transport **metadata** that helps both the client and server understand the context, behavior, or requirements of the communication.

---

### **Why Are Headers Important?**

1. **Metadata Sharing:**

   - HTTP headers provide additional information about the request or response, such as content type, length, or authorization.

2. **Control Behavior:**

   - Headers influence how the client or server processes the request or response (e.g., caching, compression).

3. **Security & Authentication:**
   - Headers like `Authorization` are critical for secure communication between the client and server.

---

### **Types of Headers**

1. **Request Headers:**

   - Sent by the client to the server, providing context or additional information about the request.

2. **Response Headers:**
   - Sent by the server to the client, providing context or additional information about the response.

---

### **Commonly Used Headers**

#### **Request Headers**

1. **`Host`:**

   - Specifies the domain name of the server.

   ```http
   Host: example.com
   ```

2. **`User-Agent`:**

   - Contains information about the client (e.g., browser, operating system).

   ```http
   User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
   ```

3. **`Authorization`:**

   - Used for authentication (e.g., API tokens, Basic Auth).

   ```http
   Authorization: Bearer <token>
   ```

4. **`Accept`:**

   - Specifies the media types the client can handle.

   ```http
   Accept: application/json
   ```

5. **`Content-Type`:**
   - Indicates the format of the data being sent in the request body.
   ```http
   Content-Type: application/json
   ```

#### **Response Headers**

1. **`Content-Type`:**

   - Specifies the format of the response body (e.g., JSON, HTML).

   ```http
   Content-Type: text/html
   ```

2. **`Content-Length`:**

   - Indicates the size of the response body in bytes.

   ```http
   Content-Length: 1234
   ```

3. **`Cache-Control`:**

   - Directs how and for how long the response should be cached.

   ```http
   Cache-Control: no-cache
   ```

4. **`Set-Cookie`:**

   - Instructs the client to store cookies for future requests.

   ```http
   Set-Cookie: sessionId=abc123; HttpOnly
   ```

5. **`Location`:**
   - Indicates the URL to redirect the client.
   ```http
   Location: https://example.com/redirect
   ```

---

### **Accessing and Setting Headers in Node.js**

1. **Reading Request Headers:**

   - Use `req.headers` to access incoming request headers.

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     console.log(req.headers); // Logs all request headers
     console.log(req.headers["user-agent"]); // Logs the User-Agent header
     res.end("Headers received!");
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **Setting Response Headers:**

   - Use `res.setHeader` or pass headers as the second argument in `res.writeHead`.

   ```javascript
   const server = http.createServer((req, res) => {
     res.setHeader("Content-Type", "text/html");
     res.setHeader("Cache-Control", "no-cache");
     res.writeHead(200);
     res.end("<h1>Hello, Headers!</h1>");
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Practical Example**

1. **Custom Request and Response Headers:**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     console.log("Request Headers:", req.headers);

     res.writeHead(200, {
       "Content-Type": "application/json",
       "Custom-Header": "LearningNode",
     });

     res.end(JSON.stringify({ message: "Headers processed!" }));
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **Using the `Authorization` Header:**

   - Example of handling a custom `Authorization` header.

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     const authHeader = req.headers["authorization"];

     if (authHeader === "Bearer mySecretToken") {
       res.writeHead(200, { "Content-Type": "text/plain" });
       res.end("Access Granted");
     } else {
       res.writeHead(403, { "Content-Type": "text/plain" });
       res.end("Access Denied");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

---

### **Best Practices**

1. **Use Descriptive Headers:**

   - Ensure your headers convey accurate metadata (e.g., `Content-Type`, `Cache-Control`).

2. **Secure Sensitive Data:**

   - Use headers like `Authorization` and `Set-Cookie` with secure flags (e.g., `HttpOnly`, `Secure`).

3. **Avoid Excessive Headers:**

   - Keep headers minimal to reduce overhead and improve performance.

4. **Validate Headers:**
   - Always check and sanitize incoming header values to prevent injection attacks.

---

### **Mini-Exercise**

1. Create a Node.js server that:

   - Reads the `User-Agent` from request headers and responds with a message about the client.
   - Logs the `Authorization` header to the console.

2. Modify the server to:
   - Return JSON data with a `Custom-Header` in the response.
   - Reject requests missing an `Authorization` header with a `403 Forbidden` status.

---

### **Vocabulary for Technical English**

- **Metadata:** Data that provides information about other data.
- **Cache-Control:** A header that specifies caching policies.
- **Authorization:** A header used to authenticate a request.
- **Header:** A key-value pair in an HTTP message for metadata.

---

For additional information, refer to the [MDN HTTP Headers Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

Next, we’ll dive into **33. Understanding Routing**! Let me know when you’re ready!
