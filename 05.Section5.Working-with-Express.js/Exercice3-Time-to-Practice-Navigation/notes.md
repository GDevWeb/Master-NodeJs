# Section 5: Working with Express.js

## **Exercise 3: Time to Practice - Navigation**

- [Udemy - exercises 3](https://www.udemy.com/course/nodejs-the-complete-guide/learn/practice/1057488#overview)

---

### **Objective**

In this exercise, you will:

1. Create an Express.js application with **multiple routes** for navigation.
2. Use **a helper function** to dynamically resolve paths.
3. Create **HTML pages** for different sections (Home, About, and Contact).
4. Add **CSS styling** to make your pages visually appealing.
5. Implement **navigation links** to move between pages.

---

### **Step-by-Step Instructions**

#### **1. Project Setup**

1. **Initialize the Project**:

   ```bash
   mkdir express-navigation-demo
   cd express-navigation-demo
   npm init -y
   npm install express
   ```

2. **Create Project Structure**:

   ```bash
   mkdir public
   mkdir public/css
   touch app.js helpers.js public/index.html public/about.html public/contact.html public/css/styles.css
   ```

---

#### **2. Create the Helper Function**

**`helpers.js`**:

```javascript
const path = require("path");

// Helper function to get the root directory
module.exports = path.dirname(require.main.filename);
```

---

#### **3. Create HTML Pages**

1. **`public/index.html`** (Home Page):

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Home Page</title>
       <link rel="stylesheet" href="/css/styles.css" />
     </head>
     <body>
       <h1>Home Page</h1>
       <p>Welcome to the Home Page!</p>
       <nav>
         <a href="/about">About</a>
         <a href="/contact">Contact</a>
       </nav>
     </body>
   </html>
   ```

2. **`public/about.html`** (About Page):

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
       <h1>About Page</h1>
       <p>Learn more about us on this page.</p>
       <nav>
         <a href="/">Home</a>
         <a href="/contact">Contact</a>
       </nav>
     </body>
   </html>
   ```

3. **`public/contact.html`** (Contact Page):

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Contact Page</title>
       <link rel="stylesheet" href="/css/styles.css" />
     </head>
     <body>
       <h1>Contact Page</h1>
       <p>Get in touch with us!</p>
       <nav>
         <a href="/">Home</a>
         <a href="/about">About</a>
       </nav>
     </body>
   </html>
   ```

---

#### **4. Create the CSS File**

**`public/css/styles.css`**:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #007bff;
}

nav {
  margin: 20px 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
}

nav a:hover {
  background-color: #0056b3;
}
```

---

#### **5. Set Up the Express Server**

**`app.js`**:

```javascript
const express = require("express");
const path = require("path");
const rootDir = require("./helpers");

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Routes for different pages
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(rootDir, "public", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(rootDir, "public", "contact.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

---

#### **6. Run the Application**

Start the server with:

```bash
node app.js
```

---

### **Test the Navigation**

1. **Home Page**:  
   Go to [http://localhost:3000/](http://localhost:3000/)

   - You should see the Home Page with links to the About and Contact pages.

2. **About Page**:  
   Go to [http://localhost:3000/about](http://localhost:3000/about)

   - You should see the About Page with navigation links.

3. **Contact Page**:  
   Go to [http://localhost:3000/contact](http://localhost:3000/contact)
   - You should see the Contact Page with navigation links.

---

### **Optional Challenge**

1. **Add a 404 Page**:  
   Create a `404.html` page and add a catch-all route to handle non-existent paths.

   **`public/404.html`**:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>404 - Page Not Found</title>
       <link rel="stylesheet" href="/css/styles.css" />
     </head>
     <body>
       <h1>404 - Page Not Found</h1>
       <p>Sorry, the page you're looking for doesn't exist.</p>
       <a href="/">Return to Home</a>
     </body>
   </html>
   ```

   **Update `app.js`**:

   ```javascript
   app.use((req, res) => {
     res.status(404).sendFile(path.join(rootDir, "public", "404.html"));
   });
   ```

---

### **Summary**

In this exercise, you practiced:

1. **Creating multiple routes** in Express.
2. **Using a helper function** to resolve file paths dynamically.
3. **Serving static HTML pages** with CSS styling.
4. **Implementing navigation** between pages.

---

### **Next Steps**

In the next lesson, we'll explore **template engines** like **Pug** or **EJS** for generating dynamic HTML content in Express applications. 🚀
