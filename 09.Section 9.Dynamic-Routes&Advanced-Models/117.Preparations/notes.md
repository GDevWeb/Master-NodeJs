# Section 9: Dynamic Routes & Advanced Models

## **117. Preparations**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738846#overview)

---

### **Objective**

In this lesson, we’ll make sure our project is set up correctly to handle dynamic routes and advanced models. We’ll review the project structure and ensure we have the necessary files and configurations in place.

---

### **1. Project Structure Recap**

Ensure your project structure is organized as follows:

```
mvc-project/
│
├── app.js
├── controllers/
│   ├── productController.js
│   └── shopController.js
├── routes/
│   ├── productRoutes.js
│   └── shopRoutes.js
├── models/
│   └── Product.js
│   └── Cart.js        <-- (New Cart model to be created soon)
├── views/
│   ├── shop/
│   │   ├── index.pug
│   │   ├── add-product.pug
│   │   ├── edit-product.pug
│   │   └── product-detail.pug   <-- (New view for product details)
└── data/
    └── products.json
```

---

### **2. Ensure Dependencies Are Installed**

Make sure you have the required dependencies installed:

```bash
npm install express body-parser
```

If you’re using **Pug** as your templating engine:

```bash
npm install pug
```

---

### **3. Middleware Configuration**

Ensure your **`app.js`** is set up with the necessary middleware.

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

### **4. Placeholder for the Cart Model**

We will be creating a **Cart Model** later in this section. For now, create a placeholder file.

**`models/Cart.js`**:

```javascript
class Cart {
  // Placeholder for cart functionality
}

module.exports = Cart;
```

---

### **5. Placeholder for Product Detail View**

Create a new **Pug template** for displaying product details.

**`views/shop/product-detail.pug`**:

```pug
extends ../layout

block content
  h1 #{title}
  p Product details will be displayed here.
```

---

### **6. Verify Routes**

Check that your **shop routes** and **product routes** are properly set up.

1. **`routes/shopRoutes.js`**:

   ```javascript
   const express = require("express");
   const router = express.Router();
   const shopController = require("../controllers/shopController");

   router.get("/", shopController.getShop);
   router.get("/add-product", shopController.getAddProduct);
   router.get("/edit-product/:id", shopController.getEditProduct);

   module.exports = router;
   ```

2. **`routes/productRoutes.js`**:

   ```javascript
   const express = require("express");
   const router = express.Router();
   const productController = require("../controllers/productController");

   router.post("/", productController.createProduct);
   router.put("/:id", productController.updateProduct);
   router.delete("/:id", productController.deleteProduct);

   module.exports = router;
   ```

---

### **Next Steps**

With the project structure, middleware, and placeholder files in place, we are ready to start working on **dynamic routes** and more advanced features.

---

### 🚀 **Let’s Proceed!** In the next lesson, we’ll start by adding the **product ID to the path**. 💻
