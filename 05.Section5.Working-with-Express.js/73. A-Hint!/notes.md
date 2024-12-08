# Section 5: Working with Express.js

## **73. A Hint!**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/25848538#overview)

---

### **Understanding `process.mainModule.filename` and `require.main.filename`**

In the next lecture, we'll be writing this code snippet to get the **directory name** of the main module:

```javascript
module.exports = path.dirname(process.mainModule.filename);
```

Let's break down what this does and why there is a potential **deprecation warning**.

---

### **What Does This Code Do?**

- **`path.dirname()`**: Returns the **directory name** of a given path.
- **`process.mainModule.filename`**: Refers to the filename of the script that was run (i.e., the entry point of the application).

Together, this code returns the **directory of the entry file** (usually `app.js` or `server.js`).

---

### **Deprecation Warning**

- In recent versions of Node.js, `process.mainModule` has been **deprecated**.
- As a replacement, you can use `require.main.filename` to achieve the same result.

#### **Updated Code**

To avoid the deprecation warning, switch to:

```javascript
module.exports = path.dirname(require.main.filename);
```

---

### **Explanation**

- **`require.main.filename`**: Refers to the filename of the entry script (the main module that started the application).
- It provides the same functionality as `process.mainModule.filename` without triggering a deprecation warning.

---

### **Example Usage**

Suppose you want to get the root directory of your project in a utility file (`pathHelper.js`):

1. **Create `pathHelper.js`**:

   ```javascript
   const path = require("path");

   // Export the directory name of the main module
   module.exports = path.dirname(require.main.filename);
   ```

2. **Use it in `app.js`**:

   ```javascript
   const express = require("express");
   const path = require("path");
   const rootDir = require("./pathHelper");

   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.sendFile(path.join(rootDir, "public", "index.html"));
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

---

### **Why This Is Useful**

- **File Serving**: When serving static files, it's often necessary to resolve paths relative to the root directory.
- **Avoid Hardcoding Paths**: Helps avoid hardcoding absolute paths, making your code more portable and maintainable.

---

### **Summary**

- **Original Code** (may trigger deprecation warning):

  ```javascript
  module.exports = path.dirname(process.mainModule.filename);
  ```

- **Updated Code** (recommended):

  ```javascript
  module.exports = path.dirname(require.main.filename);
  ```

- **Purpose**: To get the directory of the main entry file in a reliable way.

---

### **Next Steps**

In the next lecture, we’ll see this code in action and understand its use case more deeply. Happy coding! 🚀
