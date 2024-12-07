# Section 4: Improved Development Workflow and Debug

## **47. Global & Local npm Packages**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12192520#overview)

---

### **What Are npm Packages?**

An **npm package** is a collection of reusable code that can be installed into a Node.js project. Packages can be installed **locally** (specific to a project) or **globally** (available system-wide).

---

### **Types of npm Packages**

1. **Local Packages**
2. **Global Packages**

---

### **1. Local npm Packages**

**Local packages** are installed in the project's directory and only available within that specific project. They are stored in the `node_modules` folder.

#### **Installation**

To install a local package:

```bash
npm install <package-name>
```

Example:

```bash
npm install nodemon
```

This creates:

1. **`node_modules` Folder:** Stores the package.
2. **`package.json` Entry:** Adds the package to `dependencies`.
3. **`package-lock.json`:** Tracks the exact versions of installed dependencies.

#### **Advantages of Local Packages**

1. **Project-Specific:**

   - No risk of version conflicts with other projects.

2. **Shareable:**

   - You can share the project without the `node_modules` folder.
   - Running `npm install` will recreate the `node_modules` folder.

3. **Controlled Environment:**
   - Each project maintains its own dependencies, ensuring stability.

#### **Example of Using a Local Package**

1. Install **Nodemon** locally:

   ```bash
   npm install --save-dev nodemon
   ```

2. Add a script in `package.json`:

   ```json
   {
     "scripts": {
       "dev": "nodemon server.js"
     }
   }
   ```

3. Run the script:

   ```bash
   npm run dev
   ```

---

### **2. Global npm Packages**

**Global packages** are installed system-wide and available from any directory. They are typically used for CLI tools or utilities that you want to use across multiple projects.

#### **Installation**

To install a package globally:

```bash
npm install -g <package-name>
```

Example:

```bash
npm install -g nodemon
```

#### **Location of Global Packages**

Global packages are stored in a system-wide directory. You can find the location with:

```bash
npm root -g
```

#### **Running a Global Package**

After installing globally, you can use the package directly in the terminal:

```bash
nodemon server.js
```

#### **Advantages of Global Packages**

1. **Convenience:**

   - Easy to run CLI tools without specifying paths.

2. **System-Wide Access:**
   - Available across all projects and directories.

#### **Disadvantages of Global Packages**

1. **Version Conflicts:**

   - Different projects might require different versions of the package.

2. **Not Shareable:**
   - Global dependencies are not included in `package.json`, making the project harder to reproduce.

---

### **Comparison Table**

| **Feature**              | **Local Packages**                          | **Global Packages**                          |
| ------------------------ | ------------------------------------------- | -------------------------------------------- |
| **Scope**                | Project-specific                            | System-wide                                  |
| **Installation Command** | `npm install <package-name>`                | `npm install -g <package-name>`              |
| **Stored In**            | `node_modules` directory inside the project | Global npm directory (`npm root -g`)         |
| **Use Case**             | Libraries, frameworks, project dependencies | CLI tools, utilities, globally used packages |
| **Execution**            | `npx <package>` or npm script               | Directly in the terminal                     |

---

### **Best Practices**

1. **Use Local Packages for Project Dependencies:**

   - Keeps projects isolated and avoids conflicts.

2. **Use Global Packages for CLI Tools:**

   - Ideal for utilities like `nodemon`, `typescript`, or `create-react-app`.

3. **Share Projects Without `node_modules`:**

   - Run `npm install` to restore dependencies when sharing.

4. **Document Global Dependencies:**
   - If a project relies on a global package, mention it in the documentation or `README.md`.

---

### **Checking Installed Packages**

1. **List Local Packages:**

   ```bash
   npm list
   ```

2. **List Global Packages:**

   ```bash
   npm list -g --depth=0
   ```

---

### **Mini-Exercise**

1. **Install Nodemon Locally:**

   ```bash
   npm install --save-dev nodemon
   ```

2. **Add a Script to `package.json`:**

   ```json
   {
     "scripts": {
       "dev": "nodemon server.js"
     }
   }
   ```

3. **Run the Server:**

   ```bash
   npm run dev
   ```

4. **Install Nodemon Globally (Optional):**

   ```bash
   npm install -g nodemon
   ```

5. **Run the Server Globally:**

   ```bash
   nodemon server.js
   ```

---

### **Vocabulary for Technical English**

- **Local Package:** A dependency installed specifically for a project.
- **Global Package:** A dependency installed system-wide, accessible from any project.
- **Dependencies:** Packages required by a project, listed in `package.json`.
- **CLI Tool:** Command-line interface utility (e.g., `nodemon`, `eslint`).

---

Next, we’ll cover **48. Debugging Node.js Applications**! Let me know when you’re ready to dive in! 🚀
