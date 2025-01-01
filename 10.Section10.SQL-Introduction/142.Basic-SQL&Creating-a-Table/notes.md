# Section 10: SQL Introduction

## **Lesson 142: Basic SQL & Creating a Table**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738960#overview)

---

### **Objective**

In this lesson, you’ll learn how to create a table using SQL and understand the basic syntax of SQL commands.

---

### **What is SQL?**

SQL (Structured Query Language) is used to interact with relational databases. Some common operations include:

- **CREATE**: Create tables and databases.
- **INSERT**: Add data.
- **SELECT**: Retrieve data.
- **UPDATE**: Modify data.
- **DELETE**: Remove data.

---

### **Step-by-Step Guide to Creating a Table**

---

### **1. Open the PostgreSQL CLI or pgAdmin**

#### Using CLI:

1. Open your terminal and log into PostgreSQL:
   ```bash
   psql -U postgres
   ```
2. Connect to the database:
   ```sql
   \c nodejs_course
   ```

#### Using pgAdmin:

1. Open **pgAdmin** and connect to your database.
2. Select your database (`nodejs_course`) from the sidebar.

---

### **2. Write the CREATE TABLE Statement**

We’ll create a `products` table to store information about shop products.

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,          -- Unique identifier for each product
  name VARCHAR(255) NOT NULL,     -- Product name (max length: 255 characters)
  price NUMERIC(10, 2) NOT NULL,  -- Price with up to 10 digits and 2 decimals
  description TEXT,               -- Optional product description
  imageUrl TEXT,                  -- URL to the product image
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Auto-filled timestamp
);
```

#### **Explanation**:

- `id SERIAL PRIMARY KEY`: Automatically generates a unique ID for each row.
- `VARCHAR(255)`: Limits text length to 255 characters.
- `NUMERIC(10, 2)`: Ensures precise storage for prices (e.g., 999.99).
- `TEXT`: Allows longer text for descriptions.
- `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`: Adds a timestamp for when the record is created.

---

### **3. Verify the Table**

After creating the table, verify it exists using:

```sql
\dt
```

You should see a table named `products`.

To view the structure of the table:

```sql
\d products
```

---

### **4. Insert Sample Data**

Add some sample rows to the `products` table:

```sql
INSERT INTO products (name, price, description, imageUrl)
VALUES
('Laptop', 999.99, 'A powerful laptop for work and play.', 'https://via.placeholder.com/150?text=Laptop'),
('Phone', 499.99, 'A smartphone with a great camera.', 'https://via.placeholder.com/150?text=Phone'),
('Tablet', 299.99, 'A tablet for browsing and reading.', 'https://via.placeholder.com/150?text=Tablet');
```

To check if the data was added successfully:

```sql
SELECT * FROM products;
```

Expected output:

```
 id |   name   | price  |         description         |               imageUrl                |        created_at
----+----------+--------+-----------------------------+---------------------------------------+-------------------------
  1 | Laptop   | 999.99 | A powerful laptop for work. | https://via.placeholder.com/150?text= | 2025-01-01 12:00:00
  2 | Phone    | 499.99 | A smartphone with a camera. | https://via.placeholder.com/150?text= | 2025-01-01 12:05:00
  3 | Tablet   | 299.99 | A tablet for browsing.      | https://via.placeholder.com/150?text= | 2025-01-01 12:10:00
```

---

### **5. Integrate the Table with Node.js**

#### Update Product Model to Use the `products` Table

Ensure your **Product model** from the previous lesson uses the `products` table for queries. For example:

**`models/Product.js`**:

```javascript
const pool = require("../config/db");

class Product {
  static async fetchAll() {
    const { rows } = await pool.query(
      "SELECT * FROM products ORDER BY created_at DESC"
    );
    return rows;
  }

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

### **Key SQL Commands Introduced**

1. **CREATE TABLE**:

   - Creates a new table in the database.
   - Syntax:
     ```sql
     CREATE TABLE table_name (
       column1 datatype constraints,
       column2 datatype constraints
     );
     ```

2. **INSERT INTO**:

   - Adds new rows of data to a table.
   - Syntax:
     ```sql
     INSERT INTO table_name (column1, column2) VALUES (value1, value2);
     ```

3. **SELECT**:
   - Retrieves data from a table.
   - Syntax:
     ```sql
     SELECT column1, column2 FROM table_name;
     ```

---

### **Summary**

In this lesson, you:

1. Created the `products` table using SQL.
2. Added sample data to the table.
3. Verified the data using `SELECT`.
4. Integrated the table into your Node.js app.

---

Are you ready to move on to **Lesson 143: Retrieving Data**? 🚀
