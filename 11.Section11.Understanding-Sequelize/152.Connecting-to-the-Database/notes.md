# Section 11: Understanding Sequelize

## **Lesson 152: Connecting to the Database**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739000#overview)
- [sequelize - documentation](https://sequelize.org/)

---

### **Objective**

In this lesson, you’ll learn how to install Sequelize and configure it to connect to your PostgreSQL database.

---

### **Step-by-Step Guide**

---

### **1. Install Sequelize and PostgreSQL Driver**

To get started, install Sequelize and the PostgreSQL driver (`pg`) in your Node.js project:

```bash
npm install sequelize pg
```

If you’re using TypeScript, you can also install Sequelize types:

```bash
npm install @types/sequelize --save-dev
```

---

### **2. Initialize Sequelize**

Create a new file called **`config/database.js`** to configure Sequelize.

#### **`config/database.js`**:

```javascript
const { Sequelize } = require("sequelize");

// Initialize Sequelize
const sequelize = new Sequelize("nodejs_course", "postgres", "your-password", {
  host: "localhost",
  dialect: "postgres", // Database type
  logging: false, // Disable SQL query logging for cleaner output
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to PostgreSQL has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
```

#### **Explanation**:

1. `nodejs_course`: Name of your database.
2. `postgres`: Database username.
3. `your-password`: Database password.
4. `host`: Database host (e.g., `localhost` for local development).
5. `dialect`: Specifies the type of database (e.g., `postgres`).

---

### **3. Integrate Sequelize into the Project**

In your main application file (**`app.js`**), import the Sequelize instance to ensure the database connection is established when the app starts.

#### **`app.js`**:

```javascript
const express = require("express");
const sequelize = require("./config/database"); // Import Sequelize instance

const app = express();
const PORT = 3000;

// Middleware and routes here...

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // Sync the database (optional at this point)
  try {
    await sequelize.sync();
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing the database:", error);
  }
});
```

---

### **4. Test the Connection**

Start your application:

```bash
node app.js
```

#### **Expected Output**:

If everything is set up correctly, you should see:

```
Connection to PostgreSQL has been established successfully.
Database synced successfully.
Server is running on http://localhost:3000
```

---

### **5. Troubleshooting**

1. **Error: Authentication Failed**:

   - Verify your PostgreSQL username and password in `config/database.js`.

2. **Error: Database Does Not Exist**:

   - Ensure the `nodejs_course` database is created. If not, create it using:

     ```sql
     CREATE DATABASE nodejs_course;
     ```

3. **Connection Issues**:
   - Ensure PostgreSQL is running:
     ```bash
     sudo service postgresql start
     ```

---

### **Next Steps**

Now that Sequelize is connected to your PostgreSQL database, the next lesson will cover defining a **model** to map a database table to a JavaScript object.

---

Are you ready to move on to **Lesson 153: Defining a Model**? 🚀
