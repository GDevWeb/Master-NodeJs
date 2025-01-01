# Section 10: SQL Introduction

## **Lesson 141: Connecting Our App to the SQL Database**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738954#overview)
- [Udemy - code - connecting our app](code/01-connecting-our-app.zip)

---

### **Objective**

In this lesson, we’ll connect our Node.js app to the PostgreSQL database and set up a reusable database connection pool for running queries.

---

### **Step-by-Step Guide**

---

### **1. Install the PostgreSQL Node.js Driver**

Make sure you’ve installed the `pg` package:

```bash
npm install pg
```

---

### **2. Create a Database Configuration File**

To keep your app organized, create a database configuration file.

**`config/db.js`**:

```javascript
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost", // Database host
  user: "postgres", // Your PostgreSQL username
  password: "your-password", // Your PostgreSQL password
  database: "nodejs_course", // Your database name
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
```

---

### **3. Test the Database Connection**

Create a test script to verify the connection.

**`test-db.js`**:

```javascript
const pool = require("./config/db");

// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Database connected successfully:", res.rows[0]);
  }
  pool.end(); // Close the connection pool
});
```

---

### **4. Create a Basic Table**

Let’s create a `products` table in your database. Open the PostgreSQL CLI or use a GUI tool like **pgAdmin** and run:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### **5. Insert Sample Data**

Add some sample products to the table:

```sql
INSERT INTO products (name, price)
VALUES
('Laptop', 999.99),
('Phone', 499.99),
('Tablet', 299.99);
```

---

### **6. Query the Database in Your App**

Now that the database is connected, let’s fetch data from the `products` table in your Node.js app.

**`app.js`**:

```javascript
const express = require("express");
const pool = require("./config/db");

const app = express();
const PORT = 3000;

// Get all products
app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Error fetching products");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

### **7. Test the `/products` Endpoint**

1. Start your server:

   ```bash
   node app.js
   ```

2. Visit [http://localhost:3000/products](http://localhost:3000/products) in your browser or test with a tool like **Postman**.

3. Expected Output:

   ```json
   [
     {
       "id": 1,
       "name": "Laptop",
       "price": 999.99,
       "created_at": "2025-01-01T12:00:00.000Z"
     },
     {
       "id": 2,
       "name": "Phone",
       "price": 499.99,
       "created_at": "2025-01-01T12:05:00.000Z"
     },
     {
       "id": 3,
       "name": "Tablet",
       "price": 299.99,
       "created_at": "2025-01-01T12:10:00.000Z"
     }
   ]
   ```

---

### **8. Handle Errors Gracefully**

Add proper error handling to manage database connection issues.

**Example**:

```javascript
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).send("An unexpected error occurred.");
});
```

---

### **Summary**

In this lesson, you:

1. Connected your Node.js app to PostgreSQL using the `pg` library.
2. Created a reusable connection pool.
3. Queried the database to fetch products dynamically.
4. Tested the `/products` endpoint.

---

Are you ready to move on to **Lesson 142: Basic SQL & Creating a Table**? 🚀
