# Section 8: Optional - Enhancing the App

## **109. Working on the Navigation**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602984#overview)
- [Udemy - code](code/01-working-on-the-navigation.zip)

---

### **Objective**

In this lesson, we’ll enhance the **navigation** for our Express.js shop application to ensure users can easily move between different pages like the **shop**, **add product**, and **edit product** pages.

---

### **Step-by-Step Guide to Enhance Navigation**

#### **1. Update the Layout with Navigation Links**

Modify the `layout.pug` file to include a navigation bar with links to the main pages of your shop.

**`views/layout.pug`**:

```pug
doctype html
html
  head
    title #{title}
    link(rel="stylesheet", href="/styles.css")
  body
    nav
      ul
        li: a(href="/") Home
        li: a(href="/add-product") Add Product
    block content
```

#### **Explanation**:

- **Home Link**: Links to the main shop page (`/`).
- **Add Product Link**: Links to the page for adding a new product (`/add-product`).

---

#### **2. Add Basic CSS for Navigation**

Create a CSS file to style the navigation bar.

**`public/styles.css`**:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

nav {
  background-color: #007bff;
  padding: 1em;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1em;
}

nav ul li {
  display: inline;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav ul li a:hover {
  background-color: #0056b3;
}

h1 {
  color: #007bff;
  margin: 1em;
}

form {
  margin: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
```

---

#### **3. Serve Static Files**

Ensure your **`app.js`** serves static files (CSS) from the `public` folder.

**`app.js`**:

```javascript
const express = require("express");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const shopRoutes = require("./routes/shopRoutes");

const app = express();
const port = 3000;

// Set the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/", shopRoutes);
app.use("/products", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

#### **4. Update Shop and Add Product Views**

Ensure that the **shop** and **add product** views are using the layout with navigation.

1. **`views/shop/index.pug`**:

   ```pug
   extends ../layout

   block content
     h1 #{title}
     ul
       each product in products
         li #{product.name} - $#{product.price}
   ```

2. **`views/shop/add-product.pug`**:

   ```pug
   extends ../layout

   block content
     h1 #{title}
     form(action="/products" method="POST")
       label(for="name") Name:
       input(type="text" name="name" required)
       label(for="price") Price:
       input(type="number" name="price" required)
       button(type="submit") Add Product
   ```

---

### **5. Test the Navigation**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Home Page**:  
   Go to [http://localhost:3000](http://localhost:3000).

   - You should see the **shop page** with a list of products and a **navigation bar**.

3. **Test Navigation Links**:
   - Click on the **"Add Product"** link to navigate to the **Add Product** page.
   - Ensure you can navigate back to the **Home** page using the **"Home"** link.

---

### **Summary**

In this lesson, you:

1. Added a **navigation bar** to the `layout.pug` file.
2. Created basic **CSS styling** for the navigation.
3. Served the CSS file from the `public` folder.
4. Tested navigation between the **Home** and **Add Product** pages.

---

### 🚀 **Next Step**: In the next lesson, we’ll focus on **registering routes** to handle shop-related actions. 🛒💻
