# Section 10: SQL Introduction

## **Lesson 144: Fetching Products in the Shop Project**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738966#overview)

---

### **Objective**

In this lesson, you’ll integrate database queries to dynamically fetch products for the **Shop Project**, replacing file-based data with PostgreSQL.

---

### **Step-by-Step Guide**

---

### **1. Update the Product Model**

Ensure the **`Product`** model has methods to fetch all products and product details.

**`models/Product.js`**:

```javascript
const pool = require("../config/db");

class Product {
  // Fetch all products
  static async fetchAll() {
    const { rows } = await pool.query(
      "SELECT * FROM products ORDER BY created_at DESC"
    );
    return rows;
  }

  // Fetch a single product by ID
  static async findById(id) {
    const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return rows[0];
  }
}

module.exports = Product;
```

---

### **2. Update the Product Controller**

Modify the **product controller** to use the database methods for fetching products.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Fetch all products for the shop page
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.render("shop/index", { title: "Shop", products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Error fetching products");
  }
};

// Fetch product details for a specific product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.render("shop/product-detail", { title: product.name, product });
  } catch (err) {
    console.error("Error fetching product details:", err);
    res.status(500).send("Error fetching product details");
  }
};
```

---

### **3. Update the Routes**

Ensure the routes are configured to fetch products from the database.

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to fetch all products
router.get("/", productController.getProducts);

// Route to fetch product details
router.get("/products/:id", productController.getProduct);

module.exports = router;
```

---

### **4. Update the Views**

Modify the views to dynamically display the fetched products and their details.

#### **Shop Page**

**`views/shop/index.pug`**:

```pug
extends ../layout

block content
  h1 #{title}

  if products.length
    ul
      each product in products
        li
          img(src=product.imageUrl alt=`Image of ${product.name}` width="100")
          | #{product.name} - $#{product.price}
          a(href=`/products/${product.id}`) Details
  else
    p No products available.

  a(href="/add-product") Add a New Product
```

#### **Product Detail Page**

**`views/shop/product-detail.pug`**:

```pug
extends ../layout

block content
  h1 #{product.name}

  img(src=product.imageUrl alt=`Image of ${product.name}` width="300")
  p Price: $#{product.price}
  if product.description
    p Description: #{product.description}

  form(action="/cart" method="POST")
    input(type="hidden" name="productId" value=product.id)
    button(type="submit") Add to Cart

  a(href="/") Back to Shop
```

---

### **5. Test the Integration**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:

   - URL: [http://localhost:3000/](http://localhost:3000/)
   - Verify that all products from the database are displayed.

3. **View Product Details**:

   - Click on the "Details" link for a product.
   - Verify that the product detail page displays the correct information.

4. **Check Error Handling**:
   - Test with an invalid product ID, e.g., [http://localhost:3000/products/999](http://localhost:3000/products/999).
   - Ensure a "Product not found" message is displayed.

---

### **6. Verify Data in PostgreSQL**

Use the PostgreSQL CLI or **pgAdmin** to confirm that the data in the `products` table matches what’s displayed in the app:

```sql
SELECT * FROM products;
```

---

### **Expected Output**

#### **Shop Page**:

```
Laptop - $999.99 [Details]
Phone - $499.99 [Details]
Tablet - $299.99 [Details]
```

#### **Product Detail Page**:

```
Laptop
Price: $999.99
Description: A powerful laptop for work and play.
[Add to Cart] [Back to Shop]
```

---

### **Summary**

In this lesson, you:

1. Updated the **Shop Project** to fetch products dynamically from PostgreSQL.
2. Modified the views to display database data.
3. Tested the functionality to ensure data is retrieved correctly.

---

Are you ready to move on to **Lesson 145: Hands-On Practice for Fetching Products**? 🚀
