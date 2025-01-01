# Section 10: SQL Introduction

## **Lesson 143: Retrieving Data**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738964#overview)

---

### **Objective**

In this lesson, you’ll learn how to retrieve data from the `products` table using SQL commands and integrate these queries into your Node.js app.

---

### **Step-by-Step Guide**

---

### **1. Retrieve All Products**

The **SELECT** statement is used to fetch data from a table. To retrieve all rows from the `products` table:

```sql
SELECT * FROM products;
```

#### **Explanation**:

- `SELECT *`: Fetches all columns in the table.
- `FROM products`: Specifies the table to retrieve data from.

---

### **2. Retrieve Specific Columns**

If you only need certain columns (e.g., name and price):

```sql
SELECT name, price FROM products;
```

#### **Explanation**:

- Limits the retrieved columns to `name` and `price`.

---

### **3. Order Data**

To order the results by price in ascending or descending order:

- **Ascending (default)**:

  ```sql
  SELECT * FROM products ORDER BY price;
  ```

- **Descending**:
  ```sql
  SELECT * FROM products ORDER BY price DESC;
  ```

---

### **4. Filter Data**

Use the **WHERE** clause to filter results. For example, retrieve products priced over $500:

```sql
SELECT * FROM products WHERE price > 500;
```

#### **Explanation**:

- `WHERE price > 500`: Filters rows where the `price` column is greater than 500.

---

### **5. Query the Database in Node.js**

Let’s integrate these queries into your Node.js project.

#### Update the Product Model

Add methods to retrieve filtered and ordered data.

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

  // Fetch products filtered by price
  static async fetchByPrice(minPrice) {
    const { rows } = await pool.query(
      "SELECT * FROM products WHERE price > $1 ORDER BY price DESC",
      [minPrice]
    );
    return rows;
  }

  // Fetch specific columns
  static async fetchNamesAndPrices() {
    const { rows } = await pool.query("SELECT name, price FROM products");
    return rows;
  }
}

module.exports = Product;
```

---

#### Add Routes and Controllers

Update the routes and controllers to handle the new queries.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.render("shop/index", { title: "Shop", products });
  } catch (err) {
    console.error("Error fetching all products:", err);
    res.status(500).send("Error fetching products");
  }
};

// Fetch products by price
exports.getProductsByPrice = async (req, res) => {
  const minPrice = req.query.minPrice || 0; // Default to 0 if no minPrice is provided
  try {
    const products = await Product.fetchByPrice(minPrice);
    res.render("shop/index", {
      title: `Products Above $${minPrice}`,
      products,
    });
  } catch (err) {
    console.error("Error fetching products by price:", err);
    res.status(500).send("Error fetching products by price");
  }
};

// Fetch product names and prices
exports.getNamesAndPrices = async (req, res) => {
  try {
    const products = await Product.fetchNamesAndPrices();
    res.json(products); // Return as JSON for simplicity
  } catch (err) {
    console.error("Error fetching product names and prices:", err);
    res.status(500).send("Error fetching product names and prices");
  }
};
```

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Routes
router.get("/products", productController.getAllProducts);
router.get("/products/price", productController.getProductsByPrice);
router.get("/products/names-prices", productController.getNamesAndPrices);

module.exports = router;
```

---

#### Test the Routes

1. **Get All Products**:

   - Visit [http://localhost:3000/products](http://localhost:3000/products).

2. **Filter by Price**:

   - Visit [http://localhost:3000/products/price?minPrice=500](http://localhost:3000/products/price?minPrice=500).

3. **Get Names and Prices**:
   - Visit [http://localhost:3000/products/names-prices](http://localhost:3000/products/names-prices).

---

### **6. Test with SQL Queries**

1. Open PostgreSQL CLI or pgAdmin.
2. Run the queries manually to confirm results, e.g.:

```sql
SELECT * FROM products WHERE price > 500 ORDER BY price DESC;
```

---

### **Key SQL Concepts Introduced**

1. **SELECT**:

   - Fetches data from a table.
   - Syntax:
     ```sql
     SELECT column1, column2 FROM table_name;
     ```

2. **ORDER BY**:

   - Sorts results in ascending or descending order.
   - Syntax:
     ```sql
     SELECT * FROM table_name ORDER BY column_name [ASC|DESC];
     ```

3. **WHERE**:
   - Filters results based on a condition.
   - Syntax:
     ```sql
     SELECT * FROM table_name WHERE condition;
     ```

---

### **Summary**

In this lesson, you:

1. Learned to retrieve data using `SELECT`, `WHERE`, and `ORDER BY`.
2. Integrated these queries into the **Shop Project**.
3. Tested the queries using routes in Node.js and directly in PostgreSQL.

---

Are you ready to move on to **Lesson 144: Fetching Products in the Shop Project**? 🚀
