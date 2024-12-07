# Section 5: Working with Express.js

## **60. Installing Express.js**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566252#overview)

---

### **Getting Started with Express.js**

To use **Express.js** in your Node.js project, you'll need to install it via **npm** (Node Package Manager). Let's go through the steps to install and set up Express in a new or existing project.

---

### **Step-by-Step Guide to Install Express.js**

#### **1. Initialize a New Node.js Project**

If you don’t already have a project set up, create a new one:

1. **Create a Project Directory:**

   ```bash
   mkdir my-express-app
   cd my-express-app
   ```

2. **Initialize `package.json`:**

   ```bash
   npm init -y
   ```

   This creates a `package.json` file with default values.

#### **2. Install Express.js**

Install Express using `npm`:

```bash
npm install express
```

This command does the following:

- Installs the latest version of Express.
- Adds Express to the `dependencies` section of `package.json`.
- Creates a `node_modules` folder (if it doesn't exist) where the Express library and its dependencies are stored.

#### **3. Verify Installation**

Check if Express is listed in your `package.json`:

```json
{
  "dependencies": {
    "express": "^4.18.2" // The version number may vary
  }
}
```

---

### **Creating Your First Express Server**

1. **Create a File Named `app.js`:**

   ```bash
   touch app.js
   ```

2. **Add the Following Code to `app.js`:**

   ```javascript
   // Import the Express module
   const express = require("express");

   // Create an instance of an Express app
   const app = express();

   // Define a route for the root URL
   app.get("/", (req, res) => {
     res.send("Hello, Express!");
   });

   // Start the server on port 3000
   app.listen(3000, () => {
     console.log("Server is running on http://localhost:3000");
   });
   ```

3. **Run the Server:**

   ```bash
   node app.js
   ```

4. **Visit the Server:**

   Open your browser and go to:

   ```
   http://localhost:3000
   ```

   You should see:

   ```
   Hello, Express!
   ```

---

### **Installing Express.js as a Development Dependency**

Sometimes, you might want to install Express as a **development dependency** (for example, if you're testing or prototyping):

```bash
npm install express --save-dev
```

This will add Express to the `devDependencies` section of `package.json`.

---

### **Common Errors and Troubleshooting**

1. **`Cannot find module 'express'`:**

   - Ensure you have run `npm install express`.
   - Check that the `node_modules` folder exists in your project.

2. **Port Already in Use:**

   - If port 3000 is busy, change the port in your `app.js`:

     ```javascript
     app.listen(4000, () => {
       console.log("Server is running on http://localhost:4000");
     });
     ```

3. **Permission Issues:**

   - Run the command with administrator privileges:

     ```bash
     sudo npm install express
     ```

---

### **Useful Commands**

- **Install Express:**

  ```bash
  npm install express
  ```

- **Check Installed Packages:**

  ```bash
  npm list
  ```

- **Remove Express:**
  ```bash
  npm uninstall express
  ```

---

### **Summary**

1. **Initialize a Project:**

   ```bash
   npm init -y
   ```

2. **Install Express:**

   ```bash
   npm install express
   ```

3. **Create a Basic Server:**

   ```javascript
   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
     res.send("Hello, Express!");
   });

   app.listen(3000, () => {
     console.log("Server is running on http://localhost:3000");
   });
   ```

4. **Run the Server:**
   ```bash
   node app.js
   ```

---

### **Useful Resources**

1. **Official Express.js Installation Guide:**  
   [Express.js Installation](https://expressjs.com/en/starter/installing.html)

2. **Node.js Package Manager (npm):**  
   [npm Documentation](https://docs.npmjs.com/)

---

### **Next Steps**

In the next lesson, we’ll cover **setting up basic routing in Express.js** to handle different URLs and HTTP methods. Get ready to build your first set of routes! 🚀
