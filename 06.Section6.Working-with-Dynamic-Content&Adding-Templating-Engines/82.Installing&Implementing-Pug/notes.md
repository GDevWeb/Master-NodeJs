# Section 6: Working with Dynamic Content & Adding Templating Engines

## **82. Installing & Implementing Pug**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11577394#overview)
- [code - added pug](code/02-added-pug/app.js)

---

### **What is Pug?**

**Pug** (formerly known as Jade) is a **templating engine** for Node.js that helps you generate dynamic HTML. Pug uses a minimalistic, indentation-based syntax, making it concise and easy to read.

---

### **Why Use Pug?**

1. **Clean Syntax**: No need for closing tags or angle brackets.
2. **Dynamic Content**: Inject data into templates easily.
3. **Reusability**: Supports layouts and partials to avoid code duplication.
4. **Built-in Logic**: Use conditionals, loops, and JavaScript expressions within templates.

---

### **Step-by-Step Guide to Installing and Implementing Pug**

#### **1. Project Setup**

1. **Create a New Project Directory**:

   ```bash
   mkdir express-pug-demo
   cd express-pug-demo
   npm init -y
   ```

2. **Install Express and Pug**:

   ```bash
   npm install express pug
   ```

3. **Create Project Structure**:

   ```bash
   mkdir views public
   touch app.js views/index.pug views/about.pug public/style.css
   ```

---

#### **2. Set Up the Express Server**

**`app.js`**:

```javascript
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Set Pug as the templating engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to the Home Page!",
  });
});

// About route
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    message: "Learn more about us on this page.",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

---

#### **3. Create Pug Templates**

1. **`views/index.pug`**:

   ```pug
   doctype html
   html(lang="en")
     head
       title= title
       link(rel="stylesheet", href="/style.css")
     body
       h1= message
       nav
         a(href="/") Home
         a(href="/about") About
   ```

2. **`views/about.pug`**:

   ```pug
   doctype html
   html(lang="en")
     head
       title= title
       link(rel="stylesheet", href="/style.css")
     body
       h1= message
       nav
         a(href="/") Home
         a(href="/about") About
   ```

---

#### **4. Add CSS for Styling**

**`public/style.css`**:

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

nav {
  margin-top: 20px;
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

#### **5. Run the Server**

Start the server with:

```bash
node app.js
```

---

### **Test the Application**

1. **Home Page**:  
   Visit [http://localhost:3000/](http://localhost:3000/)

   - You should see a styled **Home Page** with the message "Welcome to the Home Page!" and links to navigate.

2. **About Page**:  
   Visit [http://localhost:3000/about](http://localhost:3000/about)
   - You should see a styled **About Page** with the message "Learn more about us on this page."

---

### **How It Works**

1. **Set Pug as the View Engine**:

   ```javascript
   app.set("view engine", "pug");
   app.set("views", path.join(__dirname, "views"));
   ```

   - This tells Express to use Pug and where to find the templates.

2. **Render Templates**:

   - `res.render("index", { title: "Home Page", message: "Welcome to the Home Page!" })`
     - Renders `views/index.pug` and passes the `title` and `message` variables to the template.

3. **Pug Templates**:

   - Pug uses indentation to define HTML structure.
   - Variables are injected using `=`, e.g., `title= title` and `h1= message`.

4. **Static Files**:
   - CSS is served from the `public` directory using `express.static()`.

---

### **Key Pug Syntax Elements**

1. **Plain Text**:

   ```pug
   p This is a paragraph.
   ```

2. **Variables**:

   ```pug
   h1= title
   ```

3. **Attributes**:

   ```pug
   a(href="/about") About Us
   ```

4. **Loops**:

   ```pug
   ul
     each item in items
       li= item
   ```

5. **Conditionals**:
   ```pug
   if user
     p Welcome, #{user.name}
   else
     p Please log in.
   ```

---

### **Summary**

In this lesson, you learned how to:

1. **Install and configure Pug** in an Express.js application.
2. **Create Pug templates** for dynamic HTML content.
3. **Pass data** to Pug templates from Express routes.
4. **Add CSS styling** to your pages.

Pug makes it easy to generate dynamic HTML with a clean and readable syntax.

---

### **Next Steps**

In the next lecture, we’ll explore **using conditionals and loops** in Pug templates to make your content even more dynamic and flexible. 🚀
