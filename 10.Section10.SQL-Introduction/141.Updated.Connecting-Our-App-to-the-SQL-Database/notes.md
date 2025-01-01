# Section 10: SQL Introduction

## **Updated Lesson 141: Connecting Our App to the SQL Database**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738954#overview)

---

### **Objective**

In this updated lesson, you will:

1. Create a PostgreSQL database dynamically using Node.js.
2. Update the **Shop Project** from the previous section to use the database for storing and managing product data instead of local files.

---

### **1. Install the PostgreSQL Node.js Driver**

Ensure the `pg` package is installed in your project:

```bash
npm install pg
```

---

### **2. Dynamically Create the Database Using Node.js**

Instead of manually creating the database, let’s do it programmatically.

#### **Create a Database Initialization Script**

1. Create a new file called **`db-init.js`**.

2. Add the following code:

```javascript
const { Pool } = require("pg");

// Connect to PostgreSQL (default postgres database)
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "your-password",
  database: "postgres", // Connect to the default database
  port: 5432,
});

// Create the new database and tables
(async () => {
  try {
    // Create database
    await pool.query("CREATE DATABASE nodejs_course");
    console.log('Database "nodejs_course" created successfully!');

    // Disconnect from the default database
    await pool.end();

    // Reconnect to the newly created database
    const newPool = new Pool({
      host: "localhost",
      user: "postgres",
      password: "your-password",
      database: "nodejs_course",
      port: 5432,
    });

    // Create products table
    await newPool.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price NUMERIC(10, 2) NOT NULL,
        description TEXT,
        imageUrl TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Table "products" created successfully!');

    await newPool.end();
  } catch (err) {
    console.error("Error creating database or tables:", err);
  }
})();
```

3. Run the script to initialize the database and table:

```bash
node db-init.js
```

You should see the following output if everything works:

```
Database "nodejs_course" created successfully!
Table "products" created successfully!
```

---

### **3. Update the Shop Project to Use PostgreSQL**

We will now modify the **Shop Project** from the previous section to replace file storage with the database.

---

#### **Update the Product Model**

Replace the current file-based product model with one that interacts with the database.

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

  // Find a product by ID
  static async findById(id) {
    const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return rows[0];
  }

  // Add a new product
  static async create(name, price, description, imageUrl) {
    const { rows } = await pool.query(
      "INSERT INTO products (name, price, description, imageUrl) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, description, imageUrl]
    );
    return rows[0];
  }

  // Update a product by ID
  static async updateById(id, name, price, description, imageUrl) {
    const { rows } = await pool.query(
      "UPDATE products SET name = $1, price = $2, description = $3, imageUrl = $4 WHERE id = $5 RETURNING *",
      [name, price, description, imageUrl, id]
    );
    return rows[0];
  }

  // Delete a product by ID
  static async deleteById(id) {
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
  }
}

module.exports = Product;
```

---

#### **Update the Product Controller**

Modify the controller to interact with the new database model.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Fetch all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.render("shop/index", { title: "Shop", products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Error fetching products");
  }
};

// Fetch product details
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

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;
    await Product.create(name, price, description, imageUrl);
    res.redirect("/");
  } catch (err) {
    console.error("Error adding product:", err);
    res.status(500).send("Error adding product");
  }
};

// Update an existing product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, imageUrl } = req.body;
    await Product.updateById(id, name, price, description, imageUrl);
    res.redirect("/");
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).send("Error updating product");
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.deleteById(id);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).send("Error deleting product");
  }
};
```

---

#### **Update Views to Include New Fields**

Update your **views** to reflect the additional fields (`description` and `imageUrl`) for products.

Example updates to **`views/shop/index.pug`** and **`views/shop/product-detail.pug`** can include rendering the `description` and displaying the `imageUrl`.

---

### **4. Test the Updated Project**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Test All Endpoints**:

   - Add a product.
   - Edit a product.
   - View all products.
   - View product details.
   - Delete a product.

3. **Verify Database**:
   Use PostgreSQL CLI or **pgAdmin** to confirm changes in the `products` table:
   ```sql
   SELECT * FROM products;
   ```

---

### **Summary**

In this updated lesson, you:

1. Created the PostgreSQL database and table dynamically using Node.js.
2. Updated the **Shop Project** to replace file-based storage with PostgreSQL.
3. Tested all endpoints to ensure the project fully integrates with the database.

This upgrade sets a strong foundation for building more complex features in future sections! 🚀
