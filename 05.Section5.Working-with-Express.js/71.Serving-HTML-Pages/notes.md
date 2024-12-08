# Section 5: Working with Express.js

## **71. Serving HTML Pages**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566310#overview)
- [code](code/08-serving-the-html-files/app.js)
- [code - add-poduct.html](code/add-product.html)
- [code - shop.html](code/shop.html)

---

---

### **Overview**

Express.js makes it easy to serve **static HTML pages** and **dynamic HTML content** in your web applications. In this lesson, we will cover how to:

1. **Serve static HTML pages** using `express.static()`.
2. **Serve specific HTML files** using `res.sendFile()`.
3. Understand the difference between the two approaches.

---

### **1. Serving Static HTML Pages with `express.static()`**

`express.static()` is middleware that allows you to serve static files like HTML, CSS, images, and JavaScript from a specific directory.

#### **Step-by-Step Example**

1. **Project Setup**

   ```bash
   mkdir express-serve-html
   cd express-serve-html
   npm init -y
   npm install express
   ```

2. **Create Project Structure**

   ```bash
   mkdir public
   touch app.js public/index.html public/about.html
   ```

3. **Create `public/index.html`**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <title>Home Page</title>
     </head>
     <body>
       <h1>Welcome to the Home Page</h1>
       <p>This is a static HTML page.</p>
       <a href="/about.html">Go to About Page</a>
     </body>
   </html>
   ```

4. **Create `public/about.html`**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <title>About Page</title>
     </head>
     <body>
       <h1>About Us</h1>
       <p>This is the about page.</p>
       <a href="/index.html">Go to Home Page</a>
     </body>
   </html>
   ```

5. **Serve Static Files with `express.static()` in `app.js`**

   ```javascript
   const express = require("express");
   const path = require("path");
   const app = express();
   const port = 3000;

   // Serve static files from the "public" directory
   app.use(express.static(path.join(__dirname, "public")));

   app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
   });
   ```

6. **Run the Server**

   ```bash
   node app.js
   ```

7. **Access the Pages**

   - **Home Page:** [http://localhost:3000/index.html](http://localhost:3000/index.html)
   - **About Page:** [http://localhost:3000/about.html](http://localhost:3000/about.html)

---

### **2. Serving Specific HTML Files with `res.sendFile()`**

Sometimes, you may want to serve specific HTML files through explicit routes instead of using `express.static()`.

#### **Step-by-Step Example**

1. **Update `app.js` to Serve HTML Files Manually**

   ```javascript
   const express = require("express");
   const path = require("path");
   const app = express();
   const port = 3000;

   // Home route
   app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "public", "index.html"));
   });

   // About route
   app.get("/about", (req, res) => {
     res.sendFile(path.join(__dirname, "public", "about.html"));
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
   });
   ```

2. **Run the Server**

   ```bash
   node app.js
   ```

3. **Access the Pages**

   - **Home Page:** [http://localhost:3000/](http://localhost:3000/)
   - **About Page:** [http://localhost:3000/about](http://localhost:3000/about)

---

### **Comparison of `express.static()` vs. `res.sendFile()`**

| **Feature**       | **`express.static()`**                    | **`res.sendFile()`**                         |
| ----------------- | ----------------------------------------- | -------------------------------------------- |
| **Use Case**      | Serve entire directories of static files  | Serve specific files for defined routes      |
| **Ease of Use**   | Simple, one-liner for multiple files      | Requires explicit routing for each file      |
| **Path Matching** | Matches URLs automatically                | Matches only the routes you define           |
| **Best For**      | Serving assets like HTML, CSS, JS, images | Serving individual files conditionally       |
| **Example**       | `app.use(express.static("public"))`       | `res.sendFile(path.join(__dirname, "file"))` |

---

### **Best Practices for Serving HTML Pages**

1. **Organize Files in a `public` Directory**

   - Store all static assets (HTML, CSS, JS) in a `public` or `static` folder.

2. **Use `express.static()` for Simplicity**

   - For serving multiple static files, `express.static()` is more efficient and cleaner.

3. **Use `res.sendFile()` for Conditional or Dynamic Serving**

   - When you need to serve specific HTML files based on custom logic, use `res.sendFile()`.

4. **Error Handling**

   - Add a 404 page for unmatched routes:

     ```javascript
     app.use((req, res) => {
       res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
     });
     ```

---

### **Summary**

- **`express.static()`**: Serve an entire directory of static HTML files.
- **`res.sendFile()`**: Serve specific HTML files for defined routes.
- Combining both methods allows you to handle a wide range of use cases in your Express applications.

---

### **Useful Resources**

1. **Express Static Files Documentation:**  
   [Serving Static Files](https://expressjs.com/en/starter/static-files.html)

2. **Express `res.sendFile()` Documentation:**  
   [res.sendFile()](https://expressjs.com/en/4x/api.html#res.sendFile)

---

### **Next Steps**

In the next lesson, we’ll explore **Returning a 404 Page**. 🚀
