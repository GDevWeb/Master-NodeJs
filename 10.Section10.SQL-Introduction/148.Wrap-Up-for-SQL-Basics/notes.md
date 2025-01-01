# Section 10: SQL Introduction

## **Lesson 148: Wrap-Up for SQL Basics**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738986#overview)

---

### **Objective**

In this lesson, we’ll review the key concepts and accomplishments from this section. You’ll also get a preview of what’s coming next.

---

### **What You’ve Learned**

---

### **1. Setting Up the Database**

- Installed and configured PostgreSQL.
- Created a `nodejs_course` database.
- Created a `products` table with columns for `id`, `name`, `price`, `description`, `imageUrl`, and `created_at`.

#### Example:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  description TEXT,
  imageUrl TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### **2. Basic SQL Commands**

- **SELECT**: Retrieve data from the database.
- **INSERT INTO**: Add new rows to a table.
- **WHERE**: Filter rows based on conditions.
- **ORDER BY**: Sort data in ascending or descending order.

---

### **3. Integrating SQL with Node.js**

- Used the `pg` library to connect Node.js to PostgreSQL.
- Created reusable models with SQL queries.
- Added controllers to manage application logic.

#### Example Query in Node.js:

```javascript
const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
```

---

### **4. Shop Project Enhancements**

You replaced file-based data storage with PostgreSQL for the **Shop Project**. Accomplishments include:

1. **Fetching All Products**:
   - Dynamically displaying all products on the shop page.
2. **Displaying Product Details**:
   - Dynamically rendering a product detail page using the `id`.
3. **Adding Products**:
   - Inserted new products into the database via a user-friendly form.
4. **Filtering and Pagination**:
   - Added functionality to filter products by price and paginate results.

---

### **5. Testing and Debugging**

- Used PostgreSQL CLI and pgAdmin to test queries.
- Handled errors such as invalid product IDs and database connectivity issues.

---

### **Next Steps**

In the next section, you’ll build on these basics by:

1. Managing relationships between tables (e.g., orders and users).
2. Using advanced SQL queries (e.g., joins and aggregates).
3. Adding real-world features like authentication and cart management.

---

### **Summary**

Congratulations on completing this foundational SQL section! You’ve:

1. Learned core SQL commands and concepts.
2. Integrated PostgreSQL into the **Shop Project**.
3. Built a strong foundation for advanced backend development.

You’re now ready to tackle more complex database designs and queries.

---

Are you ready to move on to the next section, **Section 11: Advanced SQL & Relationships**? 🚀
