# Section 5: Working with Express.js

## **68. Adding a 404 Error Page**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566300#overview)

---

### **What is a 404 Error?**

A **404 error** indicates that a resource (such as a page or endpoint) was **not found** on the server. In Express.js, you can handle 404 errors by adding a **catch-all route** that responds when no other route matches the incoming request.

---

### **Why Add a Custom 404 Page?**

1. **User Experience**:

   - Provide a friendly and informative message when a user accesses a non-existent page.

2. **Branding**:

   - Customize the look and feel of the 404 page to match your application.

3. **Debugging**:
   - Help developers understand when a route is missing or incorrectly defined.

---

### **Step-by-Step Guide to Adding a 404 Error Page**

Let's create a custom 404 error page in an Express.js application.

---

#### **1. Basic Setup**

1. **Initialize a Project and Install Express**

   ```bash
   mkdir express-404-demo
   cd express-404-demo
   npm init -y
   npm install express
   ```

2. **Create `app.js`**

   ```bash
   touch app.js
   ```

---

#### **2. Create the Express Server**

Add the following code to `app.js`:

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Define some sample routes
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page!");
});

// Custom 404 Error Page Middleware (Catch-All Route)
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <a href="/">Go Back to Home</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

#### **3. Explanation of the Code**

1. **Define Sample Routes**

   - `/`: Responds with "Welcome to the Home Page!"
   - `/about`: Responds with "This is the About Page!"

2. **404 Middleware**

   - The `app.use()` function defines a catch-all route that handles any requests that don't match the defined routes.
   - `res.status(404)`: Sets the HTTP status code to **404**.
   - `res.send()`: Sends an HTML response with a custom 404 message.

3. **Start the Server**
   - The server listens on port **3000**.

---

#### **4. Run the Server**

Start the server:

```bash
node app.js
```

---

#### **5. Test the 404 Error Page**

1. **Valid Routes:**

   - Visit [http://localhost:3000/](http://localhost:3000/) → Displays: `Welcome to the Home Page!`
   - Visit [http://localhost:3000/about](http://localhost:3000/about) → Displays: `This is the About Page!`

2. **Invalid Route:**

   - Visit [http://localhost:3000/invalid](http://localhost:3000/invalid)

     - Displays the custom 404 error page:

       ```
       404 - Page Not Found
       Sorry, the page you're looking for doesn't exist.
       [Go Back to Home]
       ```

---

### **Serving a 404 HTML File**

You can serve a static HTML file instead of sending HTML directly in the response.

1. **Create a `public` Folder and a `404.html` File**

   ```bash
   mkdir public
   touch public/404.html
   ```

2. **Add Content to `404.html`**

   ```html
   <!-- public/404.html -->
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>404 - Page Not Found</title>
     </head>
     <body>
       <h1>404 - Page Not Found</h1>
       <p>Oops! The page you're looking for doesn't exist.</p>
       <a href="/">Return to Home</a>
     </body>
   </html>
   ```

3. **Update `app.js` to Serve the 404 File**

   ```javascript
   const express = require("express");
   const path = require("path");
   const app = express();
   const port = 3000;

   // Define sample routes
   app.get("/", (req, res) => {
     res.send("Welcome to the Home Page!");
   });

   app.get("/about", (req, res) => {
     res.send("This is the About Page!");
   });

   // Serve the 404.html file for unmatched routes
   app.use((req, res) => {
     res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

---

### **Best Practices for 404 Error Handling**

1. **Place the 404 Middleware Last:**

   - Ensure that the 404 handler is defined **after all other routes**. Express processes routes in the order they are defined.

2. **Provide Helpful Navigation:**

   - Include links to navigate back to the home page or other key sections.

3. **Log 404 Errors (Optional):**

   - Log 404 errors for monitoring purposes.

   ```javascript
   app.use((req, res) => {
     console.error(`404 Error: ${req.url} not found`);
     res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
   });
   ```

4. **Style the 404 Page:**
   - Customize the 404 page with CSS to match your site's branding.

---

### **Summary**

- **Purpose:** Handle requests for non-existent routes with a custom 404 page.
- **Middleware:** Use `app.use()` to define a catch-all route for unmatched requests.
- **Static File:** Serve a `404.html` file for cleaner and more maintainable code.

---

### **Useful Resources**

1. **Express Error Handling Guide:**  
   [Express Error Handling](https://expressjs.com/en/guide/error-handling.html)

2. **MDN HTTP Status Codes:**  
   [HTTP 404 - Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)

---

### **Next Steps**

In the next lesson, we’ll explore **handling errors with custom error-handling middleware** to manage different types of errors gracefully. 🚀
