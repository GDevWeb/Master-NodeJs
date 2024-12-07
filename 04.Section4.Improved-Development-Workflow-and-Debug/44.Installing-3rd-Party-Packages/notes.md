# Section 4: Improved Development Workflow and Debug

## **44. Installing 3rd Party Packages**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11562998#overview)

---

### **What Are 3rd Party Packages?**

**3rd party packages** are libraries or modules created by other developers and shared via the **npm registry** (Node Package Manager). These packages extend your application with ready-to-use functionalities, saving you time and effort.

Examples of popular 3rd party packages:

- **Express:** Web framework for Node.js.
- **Lodash:** Utility library for working with arrays, objects, and functions.
- **Axios:** HTTP client for making API requests.
- **Dotenv:** Loads environment variables from a `.env` file.

---

### **Installing 3rd Party Packages**

1. **Basic Installation:**

   Use the `npm install` command to install a package and add it to your `package.json` dependencies:

   ```bash
   npm install <package-name>
   ```

   Example:

   ```bash
   npm install express
   ```

   This installs the package and adds it to your `dependencies`:

   ```json
   {
     "dependencies": {
       "express": "^4.18.2"
     }
   }
   ```

2. **Installing a Specific Version:**

   ```bash
   npm install <package-name>@<version>
   ```

   Example:

   ```bash
   npm install lodash@4.17.21
   ```

3. **Installing Packages as Development Dependencies:**

   Use `--save-dev` to install packages needed only during development (e.g., testing frameworks, linters):

   ```bash
   npm install <package-name> --save-dev
   ```

   Example:

   ```bash
   npm install nodemon --save-dev
   ```

   This adds the package to `devDependencies`:

   ```json
   {
     "devDependencies": {
       "nodemon": "^2.0.22"
     }
   }
   ```

4. **Global Installation:**

   Install a package globally so it's available across all projects:

   ```bash
   npm install -g <package-name>
   ```

   Example:

   ```bash
   npm install -g nodemon
   ```

   To check if a global package is installed:

   ```bash
   npm list -g --depth=0
   ```

---

### **Using Installed Packages**

1. **Importing a Package in Your Code:**

   After installing a package, you can use it with `require` (CommonJS) or `import` (ES Modules):

   ```javascript
   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
     res.send("Hello, World!");
   });

   app.listen(3000, () =>
     console.log("Server running on http://localhost:3000")
   );
   ```

2. **Example with Lodash:**

   ```javascript
   const _ = require("lodash");

   const numbers = [1, 2, 3, 4];
   console.log(_.reverse(numbers)); // Output: [4, 3, 2, 1]
   ```

---

### **Managing Dependencies**

1. **View Installed Packages:**

   ```bash
   npm list
   ```

2. **View Outdated Packages:**

   ```bash
   npm outdated
   ```

3. **Update a Package:**

   ```bash
   npm update <package-name>
   ```

4. **Uninstall a Package:**

   ```bash
   npm uninstall <package-name>
   ```

   Example:

   ```bash
   npm uninstall lodash
   ```

5. **Reinstall All Dependencies:**

   If `node_modules` is deleted, you can reinstall all dependencies with:

   ```bash
   npm install
   ```

---

### **`package-lock.json`**

- **Purpose:**  
  `package-lock.json` ensures that the exact versions of dependencies are installed, providing consistency across different environments.

- **Best Practice:**  
  Always commit `package-lock.json` to version control to ensure consistent installs for all developers on the project.

---

### **Installing Packages via `npx`**

`npx` is a tool for running Node.js packages without installing them globally.

Example:

```bash
npx create-react-app my-app
```

This runs `create-react-app` directly without needing to install it first.

---

### **Mini-Exercise**

1. **Create a New Node.js Project:**

   ```bash
   mkdir my-app
   cd my-app
   npm init -y
   ```

2. **Install `express` and `lodash`:**

   ```bash
   npm install express lodash
   ```

3. **Create a Simple Express Server:**

   - File: `server.js`

     ```javascript
     const express = require("express");
     const _ = require("lodash");

     const app = express();

     app.get("/", (req, res) => {
       const message = _.capitalize("hello, world!");
       res.send(message);
     });

     app.listen(3000, () => {
       console.log("Server is running on http://localhost:3000");
     });
     ```

4. **Run the Server:**

   ```bash
   node server.js
   ```

5. **Check Your Dependencies:**

   ```bash
   npm list
   ```

---

### **Useful Commands Reference**

| **Command**                        | **Description**                                    |
| ---------------------------------- | -------------------------------------------------- |
| `npm install <package>`            | Install a package and add to `dependencies`.       |
| `npm install <package> --save-dev` | Install a package and add to `devDependencies`.    |
| `npm install -g <package>`         | Install a package globally.                        |
| `npm uninstall <package>`          | Remove a package.                                  |
| `npm list`                         | List installed packages.                           |
| `npm outdated`                     | List outdated packages.                            |
| `npm update <package>`             | Update a package to the latest compatible version. |

---

### **Vocabulary for Technical English**

- **Dependency:** A package or module required by your project.
- **npm:** The default package manager for Node.js.
- **DevDependency:** A dependency needed only during development.
- **Global Package:** A package installed system-wide, not limited to one project.

---

Next, we’ll explore **45. Global vs Local Packages**! Let me know when you’re ready! 🚀
