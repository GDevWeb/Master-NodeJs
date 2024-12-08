# Section 5: Working with Express.js

## **75. Styling Our Pages**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566316#overview)
- [code](code/11-styling-our-pages/app.js)

---

### **Overview**

In this lesson, we'll learn how to **add CSS styles** to HTML pages served by Express.js. Styling your pages improves the **user experience** and makes your application look professional.

We'll go through the following steps:

1. **Create a CSS file**.
2. **Link the CSS file** to your HTML pages.
3. **Serve static CSS files** with Express's `express.static()` middleware.
4. Add some **basic styling** to your pages.

---

### **Step-by-Step Guide**

#### **1. Project Setup**

1. **Create a Project Directory**:

   ```bash
   mkdir express-styling-demo
   cd express-styling-demo
   npm init -y
   npm install express
   ```

2. **Create Project Structure**:

   ```bash
   mkdir public
   mkdir public/css
   touch app.js public/index.html public/css/styles.css
   ```

---

#### **2. Create the CSS File**

**`public/css/styles.css`**:

```css
/* Basic styles for the page */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 0;
  text-align: center;
}

h1 {
  color: #007bff;
}

p {
  font-size: 1.2em;
}

a {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
}

a:hover {
  background-color: #0056b3;
}
```

---

#### **3. Create the HTML File**

**`public/index.html`**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Styled Home Page</title>
    <link rel="stylesheet" href="/css/styles.css" />
  </head>
  <body>
    <h1>Welcome to the Styled Home Page!</h1>
    <p>This page has been styled using an external CSS file.</p>
    <a href="/about">Go to About Page</a>
  </body>
</html>
```

---

#### **4. Update the Express Server**

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

#### **5. Run the Server**

Start the server with:

```bash
node app.js
```

---

#### **6. Access the Styled Page**

1. Open your browser and go to:  
   [http://localhost:3000](http://localhost:3000)

2. You should see a **styled home page** with:

   - Blue header text.
   - A paragraph with larger font size.
   - A styled button-like link.

---

### **Explanation**

1. **CSS File**:

   - Created `styles.css` in the `public/css` folder with basic styles.

2. **HTML File**:

   - Linked the CSS file using:
     ```html
     <link rel="stylesheet" href="/css/styles.css" />
     ```

3. **Static Middleware**:

   - Used `express.static()` to serve the `public` folder and its contents:
     ```javascript
     app.use(express.static(path.join(__dirname, "public")));
     ```

4. **Serving the Page**:
   - The `GET` route sends `index.html` when you visit `/`.

---

### **Adding More Pages**

1. **Create an About Page**:

   **`public/about.html`**:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>About Page</title>
       <link rel="stylesheet" href="/css/styles.css" />
     </head>
     <body>
       <h1>About Us</h1>
       <p>This is the About page with the same CSS styling.</p>
       <a href="/">Go to Home Page</a>
     </body>
   </html>
   ```

2. **Add a Route for the About Page**:

   Update **`app.js`**:

   ```javascript
   app.get("/about", (req, res) => {
     res.sendFile(path.join(__dirname, "public", "about.html"));
   });
   ```

3. **Restart the Server** and Visit:  
   [http://localhost:3000/about](http://localhost:3000/about)

---

### **Best Practices for Styling in Express**

1. **Organize Static Files**:

   - Store CSS, JS, and images in a `public` folder with subdirectories for each type (e.g., `public/css`, `public/js`, `public/images`).

2. **Use `express.static()`**:

   - Simplifies serving static assets like stylesheets and scripts.

3. **Consistent Styling**:

   - Apply consistent styling across all pages by linking the same CSS file.

4. **Minify CSS**:

   - In production, minify CSS files for better performance.

5. **Error Handling**:
   - Add a 404 page to handle missing routes and keep the user experience smooth.

---

### **Summary**

- **Linked CSS** to HTML pages for styling.
- **Served static files** using `express.static()`.
- Created a **home page** and an **about page** with consistent styling.

---

### **Useful Resources**

1. **Express Static Middleware**:  
   [Serving Static Files](https://expressjs.com/en/starter/static-files.html)

2. **CSS Basics (MDN)**:  
   [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

---

### **Next Steps**

In the next lesson, we’ll explore **template engines** like **Pug** or **EJS** to dynamically generate HTML content in your Express applications. 🚀
