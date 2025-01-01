# Section 10: SQL Introduction

## 140.b.Using PostgreSQL Instead of MySQL

If you'd prefer to work with **PostgreSQL** instead of MySQL, here’s how you can set it up and integrate it with your Node.js app.

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738948#overview)
- [PostGreSQL - documentation - getting started](https://www.postgresql.org/download/)

---

### **1. Install PostgreSQL**

#### **Windows**

1. Download the PostgreSQL installer:
   - Visit the [PostgreSQL Downloads Page](https://www.postgresql.org/download/).
2. Run the installer:
   - During installation, set up a **superuser password** (usually for the `postgres` user). Remember this password!
   - Install the optional **pgAdmin 4** for graphical management.

#### **Mac**

1. Install PostgreSQL via Homebrew:
   ```bash
   brew install postgresql
   ```
2. Start the PostgreSQL service:
   ```bash
   brew services start postgresql
   ```
3. Access the PostgreSQL command-line interface (CLI):
   ```bash
   psql postgres
   ```
4. Set a password for the `postgres` user:
   ```sql
   ALTER USER postgres PASSWORD 'your-password';
   ```

#### **Linux**

1. Install PostgreSQL:
   ```bash
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   ```
2. Switch to the `postgres` user and access the PostgreSQL CLI:
   ```bash
   sudo -i -u postgres
   psql
   ```
3. Set a password for the `postgres` user:
   ```sql
   ALTER USER postgres PASSWORD 'your-password';
   ```

---

### **2. Create a Database**

1. Open the PostgreSQL CLI:
   ```bash
   psql -U postgres
   ```
2. Create a new database:
   ```sql
   CREATE DATABASE nodejs_course;
   ```
3. Verify the database was created:
   ```sql
   \l
   ```

---

### **3. Install the PostgreSQL Node.js Driver**

Install the `pg` package to enable your Node.js app to connect to PostgreSQL.

```bash
npm install pg
```

---

### **4. Connect to PostgreSQL in Node.js**

Here’s a simple script to connect your Node.js app to PostgreSQL.

**`test-db.js`**:

```javascript
const { Pool } = require("pg");

// Create a new pool
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "your-password",
  database: "nodejs_course",
  port: 5432, // Default PostgreSQL port
});

// Test the connection
pool.query("SELECT 1 + 1 AS result", (err, res) => {
  if (err) {
    console.error("Error connecting to PostgreSQL:", err);
  } else {
    console.log("Connected to PostgreSQL! Result:", res.rows[0].result);
  }
  pool.end(); // Close the connection pool
});
```

---

### **5. Run the Test Script**

Run the script to verify the connection:

```bash
node test-db.js
```

Expected output:

```
Connected to PostgreSQL! Result: 2
```

---

### **6. Using PostgreSQL in Your Node.js Project**

#### **Query Example**

Once the connection is working, you can use `pool.query` to interact with the database.

```javascript
// Insert a new product
pool.query(
  "INSERT INTO products (name, price) VALUES ($1, $2)",
  ["Laptop", 999],
  (err, res) => {
    if (err) {
      console.error("Error inserting product:", err);
    } else {
      console.log("Product inserted successfully:", res.rowCount);
    }
    pool.end();
  }
);
```

#### **Parameterized Queries**

Always use parameterized queries (e.g., `$1, $2`) to prevent SQL injection attacks.

---

### **7. Managing PostgreSQL with pgAdmin (Optional)**

1. Open **pgAdmin** (installed with PostgreSQL).
2. Connect to your local PostgreSQL server.
3. Use the graphical interface to:
   - View your database.
   - Run SQL queries.
   - Manage users and permissions.

---

### **Troubleshooting**

1. **Cannot Connect**:

   - Ensure the PostgreSQL service is running:
     ```bash
     sudo service postgresql start
     ```
   - Check your connection details (host, port, username, password).

2. **Permission Denied**:

   - Ensure your user has the correct permissions:
     ```sql
     GRANT ALL PRIVILEGES ON DATABASE nodejs_course TO postgres;
     ```

3. **Firewall Issues** (if working with remote PostgreSQL):
   - Ensure the PostgreSQL port (`5432` by default) is open.

---

### **Summary**

By following these steps, you can use PostgreSQL instead of MySQL in your Node.js project. PostgreSQL offers robust support for relational data and advanced features like JSON handling and full-text search.

If you’re ready, let’s move on to **Lesson 141: Connecting Our App to the SQL Database**, but now using PostgreSQL! 🚀
