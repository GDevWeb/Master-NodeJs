# Section 5: Working with Express.js

## **72. Returning a 404 Page**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566312#overview)
- [code](code/09-returning-a-404-html-page/app.js)

---

### **What is a 404 Page?**

A **404 page** is an error page displayed when a requested resource (such as a URL path) is **not found** on the server. In Express.js, a 404 error occurs when no defined routes match the incoming request.

---

### **Why is a Custom 404 Page Important?**

1. **Improves User Experience**:

   - Provides a friendly and informative message when users access a non-existent page.

2. **Branding Consistency**:

   - Maintain the look and feel of your site even on error pages.

3. **SEO Considerations**:
   - Helps search engines understand that a page is missing.

---

### **Creating a Custom 404 Page in Express.js**

Let's go through the steps to create a custom 404 error page in Express.

---

### **Step-by-Step Implementation**

1. **Project Setup**

   ```bash
   mkdir express-404-demo
   cd express-404-demo
   npm init -y
   npm install express
   ```

2. **Create Project Structure**

   ```bash
   mkdir public
   touch app.js public/404.html
   ```

3. **Create the 404 HTML Page**

   **`public/404.html`:**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>404 - Page Not Found</title>
       <style>
         body {
           font-family: Arial, sans-serif;
           text-align: center;
           margin-top: 50px;
         }
         h1 {
           font-size: 3em;
           color: #ff0000;
         }
         p {
           font-size: 1.2em;
         }
         a {
           text-decoration: none;
           color: #007bff;
         }
       </style>
     </head>
     <body>
       <h1>404 - Page Not Found</h1>
       <p>Sorry, the page you're looking for doesn't exist.</p>
       <a href="/">Return to Home Page</a>
     </body>
   </html>
   ```

4. **Create the Express Server**

   **`app.js`:**

   ```javascript
   const express = require("express");
   const path = require("path");
   const app = express();
   const port = 3000;

   // Serve static files from the "public" directory
   app.use(express.static(path.join(__dirname, "public")));

   // Define a sample home route
   app.get("/", (req, res) => {
     res.send("Welcome to the Home Page!");
   });

   // Catch-all route for 404 errors
   app.use((req, res) => {
     res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
   });
   ```

---

### **Explanation**

1. **Static Middleware**

   - `express.static()` serves any static files from the `public` directory (e.g., `404.html`).

2. **Sample Route**

   - `app.get("/")` defines a home route to demonstrate a valid endpoint.

3. **404 Middleware**

   - The **catch-all middleware** defined with `app.use()` handles all unmatched routes.
   - `res.status(404)` sets the response status to **404**.
   - `res.sendFile()` sends the custom `404.html` file.

4. **Order of Middleware**
   - The 404 middleware is placed **after all other routes** to ensure it only catches requests that didn't match any defined route.

---

### **Run the Server**

Start the server with:

```bash
node app.js
```

---

### **Test the 404 Page**

1. **Valid Route**  
   Visit [http://localhost:3000/](http://localhost:3000/)

   - Response: `Welcome to the Home Page!`

2. **Invalid Route**  
   Visit [http://localhost:3000/nonexistent](http://localhost:3000/nonexistent)
   - Response: Custom 404 page with the message:
     ```
     404 - Page Not Found
     Sorry, the page you're looking for doesn't exist.
     ```

---

### **Logging 404 Errors (Optional)**

You can log 404 errors to the console for debugging purposes.

**Updated `app.js`:**

```javascript
app.use((req, res) => {
  console.error(`404 Error: ${req.url} not found`);
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});
```

---

### **Best Practices for 404 Error Pages**

1. **Friendly Message**:

   - Provide a clear and helpful message to users.

2. **Navigation Links**:

   - Include links to help users navigate back to key sections (e.g., Home Page).

3. **Consistent Design**:

   - Style the 404 page to match your website’s branding.

4. **Logging**:
   - Log 404 errors to monitor missing routes and fix potential issues.

---

### **Summary**

- **Purpose**: Handle unmatched routes with a custom 404 page.
- **Implementation**:
  - Create a `404.html` file.
  - Use a catch-all middleware with `app.use()` to serve the 404 page.
- **Best Practices**: Keep the design consistent and provide helpful navigation.

---

### **Useful Resources**

1. **Express Error Handling Guide**:  
   [Express Error Handling](https://expressjs.com/en/guide/error-handling.html)

2. **MDN HTTP Status Codes**:  
   [HTTP 404 - Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)

---

### **Next Steps**

In the next lesson, we’ll explore **handling errors with custom error-handling middleware** to manage different types of errors gracefully. 🚀
