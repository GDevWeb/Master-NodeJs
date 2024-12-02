# Section 1: Node.js - Introduction

## **04. Installing Node.js and Creating Our First App**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12281310#overview)

---

### **Step 1: Installing Node.js**

To begin, you need to install Node.js on your system. Follow these steps based on your operating system:

1. **Go to the Official Website**

   - Visit the Node.js official website: [https://nodejs.org](https://nodejs.org).

2. **Choose a Version**

   - **LTS (Long-Term Support):** Recommended for most users, especially for production use.
   - **Current Version:** Includes the latest features, suitable for development and testing.

3. **Download and Install**

   - Download the installer for your operating system:
     - Windows: `.msi` file
     - macOS: `.pkg` file
     - Linux: Use package managers like `apt` or `yum`.
   - Follow the installation wizard to complete the setup.

4. **Verify Installation**
   - Open a terminal and type the following commands:
     ```bash
     node -v
     npm -v
     ```
   - These commands should display the installed versions of Node.js and NPM (Node Package Manager).

---

#### **Step 2: Creating Your First Node.js App**

Let’s build a simple app to understand how Node.js works.

1. **Create a New Project Folder**

   - Create a folder where you’ll store your app files.  
     Example: `my-first-node-app`.

2. **Initialize a New Node.js Project**

   - Open the terminal, navigate to your folder, and run:
     ```bash
     npm init -y
     ```
   - This creates a `package.json` file, which holds metadata about your project.

3. **Create a JavaScript File**

   - Inside your project folder, create a file named `app.js`.

4. **Write Your First Code**

   - Open `app.js` and add the following code:

     ```javascript
     const http = require("http");

     const server = http.createServer((req, res) => {
       res.writeHead(200, { "Content-Type": "text/plain" });
       res.end("Hello, Node.js!");
     });

     server.listen(3000, () => {
       console.log("Server is running on http://localhost:3000");
     });
     ```

   - Explanation:
     - `http.createServer` creates a server.
     - The server responds with "Hello, Node.js!" when accessed.
     - `server.listen` starts the server on port `3000`.

5. **Run Your Application**
   - In the terminal, run:
     ```bash
     node app.js
     ```
   - Open your browser and visit `http://localhost:3000`. You should see the message "Hello, Node.js!".

---

#### **Optional: Install a Code Editor**

For a smoother experience, download **Visual Studio Code (VS Code)**: [https://code.visualstudio.com](https://code.visualstudio.com).

---

#### **Mini-Exercise**

1. Create a simple Node.js application that prints "Welcome to Node.js!" in the browser.
2. Experiment by changing the response message or the port number.

---

#### **Vocabulary for Technical English:**

- **Initialize:** Start or set up something, like a project.
- **Server:** A system or program that provides resources or services to other computers.
- **Port:** A communication endpoint for connecting a client and server.

Next, we’ll explore **Understanding the Node.js Runtime and Core Modules.**
