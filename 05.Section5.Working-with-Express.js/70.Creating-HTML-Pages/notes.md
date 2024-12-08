# Section 5: Working with Express.js

## **70. Creating HTML Pages (Without a Template Engine)**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566306#overview)
- [code](code/07-creating-the-html-files/app.js)

---

### **Serving Static HTML Pages in Express.js**

You don't always need a template engine to create and serve HTML pages with Express.js. For simple static pages, you can use **HTML files** and serve them directly using Express's built-in static file serving capabilities.

---

### **Step-by-Step Guide to Serve HTML Pages**

#### **1. Project Setup**

1. **Initialize a New Project:**

   ```bash
   mkdir express-html-demo
   cd express-html-demo
   npm init -y
   ```

2. **Install Express:**

   ```bash
   npm install express
   ```

3. **Create Project Structure:**

   ```bash
   mkdir public
   touch app.js public/index.html public/about.html
   ```

---

#### **2. Create HTML Pages**

1. **`public/index.html`**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Home Page</title>
     </head>
     <body>
       <h1>Welcome to the Home Page</h1>
       <p>This is the home page served without a template engine.</p>
       <a href="/about">Go to About Page</a>
     </body>
   </html>
   ```

2. **`public/about.html`**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>About Page</title>
     </head>
     <body>
       <h1>About Us</h1>
       <p>This is the about page served without a template engine.</p>
       <a href="/">Go to Home Page</a>
     </body>
   </html>
   ```

---

#### **3. Create the Express Server**

Add the following code to `app.js`:

```javascript
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for the about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

---

#### **4. Run the Server**

Start the server with:

```bash
node app.js
```

---

#### **5. Access the Pages**

1. **Home Page:**  
   Open [http://localhost:3000/](http://localhost:3000/)

   - Displays the `index.html` page.

2. **About Page:**  
   Open [http://localhost:3000/about](http://localhost:3000/about)
   - Displays the `about.html` page.

---

### **How It Works**

1. **Static Middleware:**

   ```javascript
   app.use(express.static(path.join(__dirname, "public")));
   ```

   This middleware tells Express to serve any files in the `public` directory automatically.

2. **Routes:**

   - The `app.get()` routes use `res.sendFile()` to send specific HTML files as responses.

3. **Directory Structure:**

   ```
   express-html-demo/
   │
   ├── app.js
   └── public/
       ├── index.html
       └── about.html
   ```

---

### **Best Practices for Serving Static HTML Files**

1. **Organize Files in a `public` Directory:**

   - Keep your HTML, CSS, JavaScript, and image files in the `public` folder for easy access.

2. **Use `express.static()` for Static Files:**

   - Simplifies serving multiple static assets (HTML, CSS, JS, images).

3. **Add Error Handling for Missing Files:**

   - Handle 404 errors for missing pages with a custom error page.

4. **Security Considerations:**
   - Avoid serving sensitive files through `express.static()`.

---

### **Adding More Static Assets**

You can serve **CSS** and **JavaScript** files alongside HTML.

1. **Create `public/styles.css`:**

   ```css
   body {
     font-family: Arial, sans-serif;
     background-color: #f4f4f4;
     color: #333;
     text-align: center;
   }
   ```

2. **Link CSS in `index.html`:**

   ```html
   <link rel="stylesheet" href="/styles.css" />
   ```

3. **Refresh the Page:**  
   Your HTML page now includes the CSS styles.

---

### **Summary**

- **Express can serve static HTML files** without a template engine using `express.static()`.
- **Use `res.sendFile()`** to send specific HTML files in response to route requests.
- **Organize assets** in a `public` folder for cleaner and more maintainable code.

---

### **Useful Resources**

1. **Express Static Files Documentation:**  
   [Serving Static Files](https://expressjs.com/en/starter/static-files.html)

2. **MDN HTML Guide:**  
   [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

---

### **Next Steps**

In the next lesson, we’ll explore **Serving HTML Pages** 🚀
