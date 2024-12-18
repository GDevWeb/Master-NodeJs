# Section 8: Optional - Enhancing the App

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602980#overview)

### Section 8: Optional - Enhancing the App

#### **108. Creating the Shop Structure**

---

### **Objective**

In this lesson, we'll create a basic **shop structure** for your Express.js application. This will involve organizing your project files to support shop-related features like displaying, adding, editing, and deleting products.

---

### **Step-by-Step Guide**

#### **1. Project Structure**

Let's start by creating a clear and organized folder structure for the shop-related features:

```
mvc-project/
│
├── app.js
├── controllers/
│   ├── productController.js
│   └── shopController.js      <-- New controller for shop-related logic
├── routes/
│   ├── productRoutes.js
│   └── shopRoutes.js          <-- New route file for the shop
├── models/
│   └── Product.js
├── views/
│   ├── shop/
│   │   ├── index.pug          <-- Main shop page
│   │   ├── add-product.pug    <-- Page to add a new product
│   │   └── edit-product.pug   <-- Page to edit a product
└── data/
    └── products.json
```

---

#### **2. Create the Shop Controller**

Add a new **shop controller** to handle shop-related logic.

**`controllers/shopController.js`**:

```javascript
const Product = require("../models/Product");

// Render the main shop page
exports.getShop = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.render("shop/index", { title: "Shop", products });
  } catch (err) {
    res.status(500).send("Error fetching products");
  }
};

// Render the add product page
exports.getAddProduct = (req, res) => {
  res.render("shop/add-product", { title: "Add Product" });
};

// Render the edit product page
exports.getEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.render("shop/edit-product", { title: "Edit Product", product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching product");
  }
};
```

---

#### **3. Create the Shop Routes**

Add a new route file for the shop.

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Route to display the shop
router.get("/", shopController.getShop);

// Route to display the add product form
router.get("/add-product", shopController.getAddProduct);

// Route to display the edit product form
router.get("/edit-product/:id", shopController.getEditProduct);

module.exports = router;
```

---

#### **4. Update `app.js` to Use Shop Routes**

Include the new shop routes in your **`app.js`** file.

**`app.js`**:

```javascript
const express = require("express");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const shopRoutes = require("./routes/shopRoutes");

const app = express();
const port = 3000;

// Set the view engine (Pug in this example)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Use shop routes
app.use("/", shopRoutes);

// Use product routes
app.use("/products", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

#### **5. Create Basic Views**

Create basic Pug templates for the shop pages.

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

3. **`views/shop/edit-product.pug`**:

   ```pug
   extends ../layout

   block content
     h1 #{title}
     form(action=`/products/${product.id}?_method=PUT` method="POST")
       label(for="name") Name:
       input(type="text" name="name" value=product.name required)
       label(for="price") Price:
       input(type="number" name="price" value=product.price required)
       button(type="submit") Update Product
   ```

4. **`views/layout.pug`** (basic layout):

   ```pug
   doctype html
   html
     head
       title #{title}
     body
       nav
         a(href="/") Home
         a(href="/add-product") Add Product
       block content
   ```

---

### **6. Run the Application**

Start the server:

```bash
node app.js
```

---

### **7. Test the Shop Structure**

1. **Home Page (Shop)**:

   - Visit [http://localhost:3000](http://localhost:3000)
   - You should see a list of products.

2. **Add Product Page**:

   - Visit [http://localhost:3000/add-product](http://localhost:3000/add-product)
   - You should see a form to add a new product.

3. **Edit Product Page**:
   - Visit [http://localhost:3000/edit-product/1](http://localhost:3000/edit-product/1)
   - You should see a form to edit the product with ID `1`.

---

### **Summary**

In this lesson, you:

1. **Created a Shop Structure** with a new controller and route file.
2. Added views for **displaying**, **adding**, and **editing** products.
3. Updated `app.js` to include the new shop routes.
4. Tested the structure by visiting different pages in your application.

---

### 🚀 **Next Step**: In the next lesson, we’ll work on enhancing **navigation** to connect different parts of the shop smoothly! 💻🛒
