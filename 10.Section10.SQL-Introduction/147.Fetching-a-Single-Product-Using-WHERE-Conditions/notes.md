# Section 10: SQL Introduction

## **Lesson 147: Fetching a Single Product Using WHERE Conditions**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738984#overview)
- [Udemy - code](code/04-fetching-a-single-product.zip)

---

### **Objective**

In this lesson, you’ll learn how to retrieve a single product from the database using the **WHERE** clause. This will be integrated into the **Shop Project** to display product details dynamically.

---

### **Step-by-Step Guide**

---

### **1. Understand the WHERE Clause**

The **WHERE** clause in SQL is used to filter results based on a condition. For example:

```sql
SELECT * FROM products WHERE id = 1;
```

#### **Explanation**:

- `id = 1`: Filters the rows to include only those where the `id` column matches `1`.

---

### **2. Update the Product Model**

Add a method to retrieve a single product by its `id`.

**`models/Product.js`**:

```javascript
const pool = require("../config/db");

class Product {
  // Fetch a single product by ID
  static async findById(id) {
    const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return rows[0]; // Return the first row (or undefined if no match)
  }
}

module.exports = Product;
```

---

### **3. Update the Product Controller**

Use the `findById` method in the controller to fetch and render product details.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Fetch product details for a specific product
exports.getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

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

#### **Explanation**:

- `req.params.id`: Retrieves the product ID from the URL.
- `Product.findById(productId)`: Fetches the product from the database.
- If the product is not found, a **404 error** is returned.
- If found, the product details are rendered using a view.

---

### **4. Add a Route for Product Details**

Create a route to handle requests for individual product details.

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to fetch product details
router.get("/products/:id", productController.getProduct);

module.exports = router;
```

---

### **5. Update the Product Detail View**

Modify the view to dynamically display the product’s details.

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

### **6. Test the Functionality**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit a Product Detail Page**:

   - URL: [http://localhost:3000/products/1](http://localhost:3000/products/1)
   - Replace `1` with the `id` of a product in your database.

3. **Verify the Output**:

   - The product’s name, price, description, and image should be displayed.

4. **Test Non-Existent Products**:
   - Visit a URL with a non-existent product ID, e.g., [http://localhost:3000/products/999](http://localhost:3000/products/999).
   - Ensure a **404 error** is displayed.

---

### **7. Verify the Database Query**

Use the PostgreSQL CLI or pgAdmin to confirm the query works as expected:

```sql
SELECT * FROM products WHERE id = 1;
```

Expected Output:

```
 id |   name    |  price   |     description      |               imageUrl                |        created_at
----+-----------+----------+----------------------+---------------------------------------+-------------------------
  1 | Laptop    |  999.99  | A powerful laptop.   | https://via.placeholder.com/150?text= | 2025-01-01 12:00:00
```

---

### **8. Error Handling**

1. **Product Not Found**:

   - If the product ID does not exist, return a **404 error**:
     ```javascript
     if (!product) {
       return res.status(404).send("Product not found");
     }
     ```

2. **Invalid Product ID**:
   - If an invalid ID is provided (e.g., `/products/abc`), the query will fail, and a **500 error** is returned. You can handle this gracefully by validating the ID before querying.

---

### **Expected Output**

#### **Valid Product**:

```
Laptop
Price: $999.99
Description: A powerful laptop for work and play.
[Add to Cart] [Back to Shop]
```

#### **Invalid Product**:

```
Product not found
```

---

### **Key SQL Concepts Introduced**

1. **WHERE Clause**:

   - Filters rows based on a condition.
   - Syntax:
     ```sql
     SELECT * FROM table_name WHERE column_name = value;
     ```

2. **Parameterized Queries**:
   - Prevent SQL injection by using placeholders (e.g., `$1`).
   - Example:
     ```sql
     SELECT * FROM products WHERE id = $1;
     ```

---

### **Summary**

In this lesson, you:

1. Learned to retrieve a single row from the database using the **WHERE** clause.
2. Integrated the functionality into the **Shop Project**.
3. Tested the feature to ensure dynamic and secure product detail retrieval.

---

Are you ready to move on to **Lesson 148: Wrap-Up for SQL Basics**? 🚀
