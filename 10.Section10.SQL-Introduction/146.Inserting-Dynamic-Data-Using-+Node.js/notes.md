# Section 10: SQL Introduction

## **Lesson 146: Inserting Dynamic Data Using Node.js**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738976#overview)
- [Udemy - code](code/03-inserting-data.zip)

---

### **Objective**

In this lesson, you’ll learn how to insert dynamic data into the database using user input from your **Shop Project**. This will replace file-based additions with a database-backed approach.

---

### **Step-by-Step Guide**

---

### **1. Update the Product Model**

Add a method to insert new products into the `products` table.

**`models/Product.js`**:

```javascript
const pool = require("../config/db");

class Product {
  // Insert a new product
  static async create(name, price, description, imageUrl) {
    const { rows } = await pool.query(
      "INSERT INTO products (name, price, description, imageUrl) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, description, imageUrl]
    );
    return rows[0];
  }
}

module.exports = Product;
```

---

### **2. Update the Add Product Controller**

Modify the controller to handle user input and insert data into the database.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Render the Add Product Page
exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", { title: "Add Product" });
};

// Handle Form Submission and Insert Product into Database
exports.postAddProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  try {
    await Product.create(name, price, description, imageUrl);
    res.redirect("/"); // Redirect to the shop page
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).send("Error adding product");
  }
};
```

---

### **3. Add Routes for Adding Products**

Update the routes to include endpoints for displaying the add-product form and handling form submissions.

**`routes/adminRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Add Product Routes
router.get("/add-product", productController.getAddProduct);
router.post("/add-product", productController.postAddProduct);

module.exports = router;
```

---

### **4. Create the Add Product View**

Design a form for users to enter product details.

**`views/admin/add-product.pug`**:

```pug
extends ../layout

block content
  h1 #{title}

  form(action="/admin/add-product" method="POST")
    div
      label(for="name") Name:
      input(type="text" name="name" required)

    div
      label(for="price") Price:
      input(type="number" name="price" step="0.01" required)

    div
      label(for="description") Description:
      textarea(name="description" rows="5")

    div
      label(for="imageUrl") Image URL:
      input(type="text" name="imageUrl")

    button(type="submit") Add Product
```

---

### **5. Test the Add Product Functionality**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Navigate to the Add Product Page**:

   - URL: [http://localhost:3000/admin/add-product](http://localhost:3000/admin/add-product)

3. **Submit the Form**:

   - Fill in the product details and submit.

4. **Verify the Database**:

   - Use PostgreSQL CLI or pgAdmin to confirm the new product is added:
     ```sql
     SELECT * FROM products;
     ```

5. **Check the Shop Page**:
   - Visit the shop page ([http://localhost:3000](http://localhost:3000)) to verify the new product is displayed.

---

### **6. Add Validation (Optional)**

To ensure proper data is entered, you can validate inputs before inserting into the database.

#### Example: Basic Validation in the Controller

```javascript
if (!name || !price || isNaN(price)) {
  return res.status(400).send("Invalid input. Please check your data.");
}
```

---

### **7. Test Error Handling**

1. **Leave Required Fields Empty**:

   - Submit the form without entering a `name` or `price`.
   - Verify that an error message is displayed.

2. **Enter Invalid Data**:
   - Enter a non-numeric value for the `price`.
   - Verify that the server handles the error gracefully.

---

### **Expected Output**

1. **Add Product Page**:

   - A form allows you to enter the product's `name`, `price`, `description`, and `imageUrl`.

2. **Database**:

   - The submitted product is added to the `products` table.

   Example:

   ```sql
   SELECT * FROM products;
   ```

   Result:

   ```
   id |    name     |  price   |     description      |               imageUrl                |        created_at
   ---+-------------+----------+----------------------+---------------------------------------+-------------------------
    1 | Laptop      | 999.99   | A powerful laptop.   | https://via.placeholder.com/150?text= | 2025-01-01 12:00:00
    2 | New Product | 199.99   | A brand new item.    | https://example.com/image.jpg         | 2025-01-01 12:10:00
   ```

3. **Shop Page**:
   - The new product is displayed with existing products.

---

### **Key SQL Concepts Introduced**

1. **INSERT INTO**:

   - Adds new rows to a table.
   - Syntax:
     ```sql
     INSERT INTO table_name (column1, column2) VALUES (value1, value2);
     ```

2. **RETURNING**:
   - Retrieves the newly inserted row.
   - Example:
     ```sql
     INSERT INTO products (name, price) VALUES ('Laptop', 999.99) RETURNING *;
     ```

---

### **Summary**

In this lesson, you:

1. Added functionality to insert dynamic data into the database.
2. Created a form for adding products to the shop.
3. Tested the functionality to ensure products are stored in PostgreSQL and displayed dynamically.

---
