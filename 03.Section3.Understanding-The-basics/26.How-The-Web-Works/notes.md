# Section 3: Understanding the Basics

## **26. How the Web Works**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561884#overview)

---

### **Overview**

Understanding how the web works is fundamental for backend development. It involves knowing how clients (like browsers) and servers communicate using the **HTTP protocol** to exchange data.

---

### **Key Components of the Web**

1. **Client (Frontend):**

   - The device or application that makes a request. Typically, it’s a web browser like Chrome or Firefox.
   - Example: A user visiting `https://example.com`.

2. **Server (Backend):**

   - The machine or application that responds to client requests.
   - Example: A Node.js server processing the request and sending back HTML, JSON, or files.

3. **Internet:**
   - The network that connects clients and servers, enabling data exchange.

---

### **The HTTP Protocol**

1. **What is HTTP?**

   - **HTTP** (Hypertext Transfer Protocol) is a stateless protocol that governs communication between clients and servers.
   - Each request-response cycle is independent.

2. **Common HTTP Methods:**

   - **GET:** Retrieve data from the server (e.g., loading a webpage).
   - **POST:** Send data to the server (e.g., submitting a form).
   - **PUT:** Update data on the server.
   - **DELETE:** Remove data from the server.

3. **HTTP Request Structure:**

   - A request from the client includes:
     - **URL:** The resource’s address (e.g., `/about` or `/api/users`).
     - **Method:** The HTTP method (e.g., GET, POST).
     - **Headers:** Metadata like `Content-Type` or authentication tokens.
     - **Body (optional):** Data sent with POST or PUT requests.

4. **HTTP Response Structure:**
   - A response from the server includes:
     - **Status Code:** Indicates success or failure (e.g., `200 OK`, `404 Not Found`).
     - **Headers:** Metadata like `Content-Type` or `Content-Length`.
     - **Body:** The actual content (HTML, JSON, etc.).

---

### **How a Web Request Works**

1. **Step 1: DNS Lookup**

   - The browser converts the domain (e.g., `example.com`) into an IP address using DNS (Domain Name System).

2. **Step 2: Establishing a Connection**

   - The browser establishes a connection with the server using TCP/IP.

3. **Step 3: Sending an HTTP Request**

   - The browser sends a request to the server:
     ```http
     GET /index.html HTTP/1.1
     Host: example.com
     ```

4. **Step 4: Server Processes the Request**

   - The server locates the requested resource or executes logic to generate the response.

5. **Step 5: Server Sends an HTTP Response**

   - The server responds with:

     ```http
     HTTP/1.1 200 OK
     Content-Type: text/html

     <html>
       <body>Hello, World!</body>
     </html>
     ```

6. **Step 6: Rendering the Response**
   - The browser renders the response for the user.

---

### **Static vs Dynamic Content**

1. **Static Content:**

   - Predefined files (HTML, CSS, images) served as-is from the server.
   - Example: A simple webpage.

2. **Dynamic Content:**
   - Generated in real-time based on logic, database queries, or user input.
   - Example: Personalized dashboards, search results.

---

### **Practical Example: Request and Response with Node.js**

1. **Basic HTTP Server:**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     if (req.url === "/") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>Welcome to my website!</h1>");
     } else if (req.url === "/about") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>About Us</h1>");
     } else {
       res.writeHead(404, { "Content-Type": "text/html" });
       res.end("<h1>Page Not Found</h1>");
     }
   });

   server.listen(3000, () => {
     console.log("Server is running on http://localhost:3000");
   });
   ```

2. **Handling Query Parameters:**

   ```javascript
   const url = require("url");

   const server = http.createServer((req, res) => {
     const query = url.parse(req.url, true).query;
     res.writeHead(200, { "Content-Type": "text/html" });
     res.end(`<h1>Hello, ${query.name || "Guest"}!</h1>`);
   });

   server.listen(3000);
   ```

---

### **Mini-Exercise**

1. Create an HTTP server using Node.js that:

   - Responds with "Hello, World!" for the root URL (`/`).
   - Responds with "About Page" for `/about`.
   - Returns a 404 message for any other URL.

2. Enhance the server to accept a query parameter `name` and respond with a personalized greeting.

---

### **Vocabulary for Technical English**

- **Client:** A device or program that requests resources from a server.
- **Server:** A device or program that processes and responds to client requests.
- **Request:** A message sent by the client to the server.
- **Response:** A message sent by the server to the client.
- **Protocol:** A set of rules for communication (e.g., HTTP, HTTPS).

---
