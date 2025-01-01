# Section 10: SQL Introduction

## **Lesson 140: Setting Up MySQL**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738948#overview)
- [Udemy - code - starting project](code/00-starting-setup.zip)
- [MySQL - documentaion - getting started](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)

---

### **Objective**

In this lesson, we’ll install and configure MySQL on your local machine, ensuring it’s ready to connect with your Node.js app.

---

### **Step-by-Step Guide**

---

### **1. Install MySQL**

#### **Windows**

1. Download the MySQL installer:
   - Visit the official [MySQL Downloads Page](https://dev.mysql.com/downloads/installer/).
2. Run the installer:
   - Select **"Developer Default"** setup type.
3. Set up a root user:
   - During installation, you’ll be prompted to create a **root password**. Remember it!
4. Complete the installation.

#### **Mac**

1. Install MySQL via Homebrew:
   ```bash
   brew install mysql
   ```
2. Start the MySQL service:
   ```bash
   brew services start mysql
   ```
3. Secure MySQL and set a root password:
   ```bash
   mysql_secure_installation
   ```

#### **Linux**

1. Install MySQL:
   ```bash
   sudo apt update
   sudo apt install mysql-server
   ```
2. Secure the installation:
   ```bash
   sudo mysql_secure_installation
   ```
3. Set a root password during the setup.

---

### **2. Verify Installation**

Check if MySQL is running:

```bash
mysql --version
```

To log into the MySQL shell:

```bash
mysql -u root -p
```

You’ll be prompted for your root password. Once logged in, you’ll see:

```
Welcome to the MySQL monitor.
```

---

### **3. Set Up a Database**

1. Log into the MySQL shell:

   ```bash
   mysql -u root -p
   ```

2. Create a new database:

   ```sql
   CREATE DATABASE nodejs_course;
   ```

3. Use the database:

   ```sql
   USE nodejs_course;
   ```

4. Verify:
   ```sql
   SHOW DATABASES;
   ```

---

### **4. Install MySQL Workbench (Optional)**

MySQL Workbench is a graphical tool for managing databases.

1. Download MySQL Workbench:
   - Visit [MySQL Workbench Downloads](https://dev.mysql.com/downloads/workbench/).
2. Install it and connect to your local MySQL server using your root credentials.
3. Use it to view databases, run queries, and manage your MySQL server.

---

### **5. Test Connection with Node.js**

To confirm that MySQL is ready for use in your Node.js app, follow these steps:

1. Install the MySQL Node.js driver:

   ```bash
   npm install mysql2
   ```

2. Create a test connection script:

   **`test-db.js`**:

   ```javascript
   const mysql = require("mysql2");

   const pool = mysql.createPool({
     host: "localhost",
     user: "root",
     password: "your-root-password",
     database: "nodejs_course",
   });

   pool.execute("SELECT 1 + 1 AS result", (err, results) => {
     if (err) {
       console.error("Error connecting to the database:", err);
     } else {
       console.log("Database connected successfully:", results[0].result);
     }
   });
   ```

3. Run the script:

   ```bash
   node test-db.js
   ```

4. Expected Output:
   ```
   Database connected successfully: 2
   ```

---

### **Troubleshooting**

1. **Cannot Connect to MySQL**:

   - Ensure MySQL service is running:
     ```bash
     sudo service mysql start
     ```
   - Check your MySQL credentials (username and password).

2. **Access Denied for Root**:
   - Reset the root password:
     ```bash
     sudo mysql
     ALTER USER 'root'@'localhost' IDENTIFIED BY 'new-password';
     FLUSH PRIVILEGES;
     ```

---

### **Summary**

In this lesson, you:

1. Installed and configured MySQL.
2. Created a new database for your project.
3. Tested the connection between MySQL and Node.js.

---

Are you ready to move on to **Lesson 141: Connecting Our App to the SQL Database**? 🚀
