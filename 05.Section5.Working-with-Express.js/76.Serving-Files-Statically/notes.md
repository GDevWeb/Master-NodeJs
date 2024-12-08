# Section 5: Working with Express.js

## **76. Serving Files Statically**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566318#overview)
- [code](code/12-serving-files-statically/app.js)

---

### **What Does It Mean to Serve Files Statically?**

**Serving files statically** means making static assets (such as HTML, CSS, JavaScript, images, and fonts) accessible to clients without any server-side processing. Express.js provides a simple way to serve these files using the `express.static()` middleware.

Static files are files that don’t change dynamically on the server. They are sent directly to the client when requested.

---

### **Why Serve Files Statically?**

1. **Performance**: Static files are served quickly since no server-side processing is required.
2. **Ease of Use**: Simplifies the handling of assets like CSS, JavaScript, and images.
3. **Organization**: Keeps your static assets separate from your server logic.

---

### **Step-by-Step Guide to Serving Static Files**

#### **1. Project Setup**

1. **Create a Project Directory**:

   ```bash
   mkdir express-static-demo
   cd express-static-demo
   npm init -y
   npm install express
   ```

2. **Create the Project Structure**:

   ```bash
   mkdir public
   mkdir public/css public/js public/images
   touch app.js public/index.html public/css/styles.css public/js/script.js
   ```

---

#### **2. Create Static Files**

1. **`public/index.html`**:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Home Page</title>
       <link rel="stylesheet" href="/css/styles.css" />
       <script src="/js/script.js" defer></script>
     </head>
     <body>
       <h1>Welcome to the Static Files Demo</h1>
       <p>This page serves static HTML, CSS, and JavaScript files.</p>
       <img src="/images/logo.png" alt="Logo" width="150" />
     </body>
   </html>
   ```

2. **`public/css/styles.css`**:

   ```css
   body {
     font-family: Arial, sans-serif;
     background-color: #f4f4f4;
     color: #333;
     text-align: center;
     margin: 50px;
   }

   h1 {
     color: #007bff;
   }

   img {
     margin-top: 20px;
   }
   ```

3. **`public/js/script.js`**:

   ```javascript
   console.log("Static JavaScript file loaded successfully!");
   ```

4. **Add an Image**:

   - Place an image file (e.g., `logo.png`) in the `public/images` folder. You can use any image or download one.

---

#### **3. Set Up the Express Server**

**`app.js`**:

```javascript
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

---

### **4. How `express.static()` Works**

- **Middleware**:

  ```javascript
  app.use(express.static(path.join(__dirname, "public")));
  ```

  This line tells Express to serve all files in the `public` directory and its subdirectories.

- **Access Files**:  
  Static files are accessible via their relative paths:
  - **CSS**: `http://localhost:3000/css/styles.css`
  - **JavaScript**: `http://localhost:3000/js/script.js`
  - **Images**: `http://localhost:3000/images/logo.png`

---

### **5. Run the Server**

Start the server:

```bash
node app.js
```

---

### **6. Access the Page**

Open your browser and go to:

[http://localhost:3000](http://localhost:3000)

You should see:

- **Styled HTML** with a blue header.
- The **image** displayed on the page.
- A message logged in the browser's console from the JavaScript file.

---

### **Directory Structure Recap**

```
express-static-demo/
│
├── app.js
└── public/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    └── images/
        └── logo.png
```

---

### **Best Practices for Serving Static Files**

1. **Organize Assets**:

   - Keep CSS, JavaScript, and images in separate subdirectories (e.g., `public/css`, `public/js`, `public/images`).

2. **Cache Control**:

   - Use caching for performance optimization in production environments.

3. **Security**:

   - Only expose files in the `public` directory to avoid accidentally serving sensitive files.

4. **Minify Assets**:

   - Minify CSS and JavaScript files for faster load times in production.

5. **Error Handling**:
   - Add a 404 page for missing static assets.

---

### **Serving Multiple Static Directories**

You can serve multiple directories by calling `express.static()` multiple times:

```javascript
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));
```

This way, Express will look for files in both the `public` and `assets` directories.

---

### **Summary**

- **`express.static()`** is used to serve static files like HTML, CSS, JavaScript, and images.
- Static assets are accessible via their relative paths.
- Organize assets in directories like `public/css`, `public/js`, and `public/images` for better maintainability.

---

### **Useful Resources**

1. **Express Static Files Documentation**:  
   [Serving Static Files](https://expressjs.com/en/starter/static-files.html)

2. **MDN Web Docs on CSS**:  
   [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

---

### **Next Steps**

In the next lesson, we’ll explore using **template engines** like **Pug** or **EJS** to dynamically generate HTML content in your Express applications. 🚀
