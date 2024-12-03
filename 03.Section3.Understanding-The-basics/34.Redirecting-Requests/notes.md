# Section 3: Understanding the Basics

## **34. Redirecting Requests**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561896#overview)

---

### **What Is Request Redirection?**

Redirecting a request means telling the client (e.g., browser or API consumer) to navigate to a different URL. It’s commonly used for:

1. **Moving Resources:** When a resource’s location changes.
2. **URL Shortening:** Redirecting short URLs to full URLs.
3. **Authentication Flows:** Redirecting to login pages or dashboards.
4. **SEO Optimization:** Avoiding duplicate content by consolidating URLs.

---

### **How HTTP Redirection Works**

1. **Server Response:**

   - The server sends a response with a `3xx` status code (e.g., `301`, `302`) and a `Location` header specifying the new URL.

2. **Client Behavior:**
   - Upon receiving the redirect response, the client automatically navigates to the new URL.

---

### **Common Redirect Status Codes**

1. **`301 Moved Permanently`:**

   - Indicates the resource has been permanently moved to a new URL.

   ```http
   HTTP/1.1 301 Moved Permanently
   Location: https://new-url.com
   ```

2. **`302 Found`:**

   - Indicates a temporary redirect; the resource may return to the original URL.

   ```http
   HTTP/1.1 302 Found
   Location: https://temporary-url.com
   ```

3. **`307 Temporary Redirect`:**

   - Similar to `302`, but ensures the HTTP method remains unchanged.

4. **`308 Permanent Redirect`:**
   - Similar to `301`, but ensures the HTTP method remains unchanged.

---

### **Redirecting Requests in Node.js**

1. **Basic Redirect:**

   - Use the `Location` header to specify the new URL and send the appropriate status code.

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     if (req.url === "/old-page") {
       res.writeHead(301, { Location: "/new-page" });
       res.end();
     } else if (req.url === "/new-page") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>Welcome to the New Page</h1>");
     } else {
       res.writeHead(404, { "Content-Type": "text/html" });
       res.end("<h1>404 - Page Not Found</h1>");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **Temporary Redirect (`302`):**

   - Indicate a temporary change in resource location.

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     if (req.url === "/temporary") {
       res.writeHead(302, { Location: "/another-page" });
       res.end();
     } else if (req.url === "/another-page") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>Temporary Redirect Target</h1>");
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

### **Practical Examples**

1. **Redirecting to an External URL:**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     if (req.url === "/google") {
       res.writeHead(302, { Location: "https://www.google.com" });
       res.end();
     } else {
       res.writeHead(404, { "Content-Type": "text/html" });
       res.end("<h1>404 - Page Not Found</h1>");
     }
   });

   server.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **SEO-Friendly Permanent Redirect:**

   - Redirect `/blog` to `/articles` permanently:

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     if (req.url === "/blog") {
       res.writeHead(301, { Location: "/articles" });
       res.end();
     } else if (req.url === "/articles") {
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end("<h1>Welcome to the Articles Section</h1>");
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

### **Best Practices for Redirecting Requests**

1. **Use Proper Status Codes:**

   - Choose the right status code (`301` for permanent, `302` or `307` for temporary).

2. **Avoid Redirect Loops:**

   - Ensure the redirect destination doesn’t point back to the original URL.

3. **Keep Redirect Chains Short:**

   - Minimize the number of intermediate redirects for better performance.

4. **SEO Considerations:**
   - Use `301` for permanent changes to preserve search engine rankings.

---

### **Mini-Exercise**

1. Create a Node.js server that:

   - Redirects `/old` to `/new` with a `301 Moved Permanently` status.
   - Redirects `/temporary` to `/temp-destination` with a `302 Found` status.

2. Enhance the server to:
   - Redirect `/search?q=node` to an external URL like `https://www.google.com/search?q=node`.

---

### **Vocabulary for Technical English**

- **Redirect:** Sending a client to a different URL.
- **Permanent Redirect:** A redirect indicating a resource’s URL has permanently changed (`301`).
- **Temporary Redirect:** A redirect indicating the resource is temporarily located elsewhere (`302`, `307`).
- **Location Header:** The HTTP header that specifies the target URL for the redirect.

---

Next, we’ll dive into **35. Handling Errors**! Let me know when you’re ready!
