# Section 4: Improved Development Workflow and Debug

## **43. Understanding NPM Scripts**

- [Udemy](https://chatgpt.com/c/674d802b-da68-8008-8dc1-fa5a42035111)
- [code]()

---

### **What Are NPM Scripts?**

**NPM scripts** are commands defined in the `scripts` section of the `package.json` file. They help automate tasks like starting a server, running tests, formatting code, and building applications.

NPM scripts streamline your workflow by reducing the need to type long terminal commands repeatedly.

---

### **Defining NPM Scripts**

1. **Create or Update `package.json`:**  
   Ensure your project has a `package.json` file. If not, create one with:

   ```bash
   npm init -y
   ```

2. **Add Scripts:**  
   In `package.json`, define your scripts under the `scripts` field:
   ```json
   {
     "name": "my-node-app",
     "version": "1.0.0",
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js",
       "test": "echo \"No tests specified\" && exit 0",
       "build": "echo \"Build process goes here\""
     }
   }
   ```

---

### **Running NPM Scripts**

Use the `npm run` command to execute a script:

- **Run the `start` Script:**

  ```bash
  npm start
  ```

  - `npm start` is a shorthand for `npm run start`.

- **Run Other Scripts:**
  ```bash
  npm run dev
  npm run test
  ```

---

### **Commonly Used Scripts**

1. **Starting a Server:**

   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

   ```bash
   npm start
   ```

2. **Development Server with Nodemon:**

   ```json
   "scripts": {
     "dev": "nodemon server.js"
   }
   ```

   ```bash
   npm run dev
   ```

3. **Running Tests:**

   ```json
   "scripts": {
     "test": "jest"
   }
   ```

   ```bash
   npm test
   ```

4. **Formatting Code with Prettier:**

   ```json
   "scripts": {
     "format": "prettier --write ."
   }
   ```

   ```bash
   npm run format
   ```

5. **Linting Code with ESLint:**

   ```json
   "scripts": {
     "lint": "eslint ."
   }
   ```

   ```bash
   npm run lint
   ```

6. **Building a Project:**
   ```json
   "scripts": {
     "build": "webpack --mode production"
   }
   ```
   ```bash
   npm run build
   ```

---

### **Passing Arguments to NPM Scripts**

You can pass arguments to scripts using `--`:

```json
"scripts": {
  "start": "node server.js"
}
```

```bash
npm start -- --port=4000
```

In `server.js`, you can access the arguments:

```javascript
console.log(process.argv);
```

---

### **Combining Multiple Scripts**

Use `&&` to chain scripts sequentially:

```json
"scripts": {
  "lint": "eslint .",
  "test": "jest",
  "check": "npm run lint && npm run test"
}
```

```bash
npm run check
```

---

### **Predefined Script Hooks**

NPM provides hooks that run before or after specific scripts:

1. **`prestart` and `poststart`:**

   ```json
   "scripts": {
     "prestart": "echo \"Preparing to start...\"",
     "start": "node server.js",
     "poststart": "echo \"Server started!\""
   }
   ```

2. **`pretest` and `posttest`:**
   ```json
   "scripts": {
     "pretest": "eslint .",
     "test": "jest",
     "posttest": "echo \"Tests complete!\""
   }
   ```

---

### **Example `package.json` with Scripts**

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "lint": "eslint .",
    "format": "prettier --write .",
    "test": "jest",
    "build": "webpack --mode production",
    "check": "npm run lint && npm run test"
  }
}
```

---

### **Best Practices for NPM Scripts**

1. **Keep Scripts Descriptive:**

   - Use clear and concise names (e.g., `start`, `dev`, `lint`, `test`).

2. **Automate Repetitive Tasks:**

   - Automate build processes, testing, and formatting.

3. **Use Hooks:**

   - Leverage `pre` and `post` hooks to automate tasks before or after script execution.

4. **Document Scripts:**
   - Include comments in `package.json` or a `README.md` to explain the purpose of each script.

---

### **Mini-Exercise**

1. **Create a `package.json`** file with the following scripts:

   - `start`: Runs `node server.js`.
   - `dev`: Runs `nodemon server.js`.
   - `lint`: Runs `eslint .`.
   - `test`: Displays a message "No tests defined yet."

2. **Run the following commands:**

   ```bash
   npm start
   npm run dev
   npm run lint
   npm test
   ```

3. **Add a `prestart` script** that prints "Initializing server..." before the server starts.

---

### **Vocabulary for Technical English**

- **NPM Script:** A command defined in `package.json` to automate tasks.
- **Hook:** A script that runs before (`pre`) or after (`post`) another script.
- **Automation:** Using scripts to handle repetitive tasks like starting a server or running tests.

---

Next, we’ll explore **44. Installing Third-Party Packages**! Let me know when you’re ready! 🚀
