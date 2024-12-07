# Section 5: Working with Express.js

## **Exercise 2: Time to Practice - Express.js**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/practice/1057486/introduction#overview)
- [rules - udemy exercise 2](pdf/rules.png)

---

### **Objective**

In this exercise, you'll create a basic Express.js application to practice the key concepts you've learned, including:

1. **Setting up an Express server**.
2. **Defining routes** for different HTTP methods.
3. **Using route parameters and query parameters**.
4. **Adding middleware** to process requests.
5. **Serving static files**.

---

### **Step 1: Set Up Your Project**

1. **Create a New Project Directory:**

   ```bash
   mkdir express-practice
   cd express-practice
   ```

2. **Initialize `package.json`:**

   ```bash
   npm init -y
   ```

3. **Install Express:**

   ```bash
   npm install express
   ```

---

### **Step 2: Create Your Express Server**

1. **Create a File Named `app.js`:**

   ```bash
   touch app.js
   ```

2. **Add the Basic Server Setup:**

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   // Middleware to log each request
   app.use((req, res, next) => {
     console.log(`Request Method: ${req.method}, URL: ${req.url}`);
     next();
   });

   // Home route
   app.get("/", (req, res) => {
     res.send("Welcome to the Express.js Practice App!");
   });

   // About route
   app.get("/about", (req, res) => {
     res.send("This is the About page.");
   });

   // Route with a parameter (e.g., /users/123)
   app.get("/users/:id", (req, res) => {
     const userId = req.params.id;
     res.send(`User ID: ${userId}`);
   });

   // Route with query parameters (e.g., /search?query=express)
   app.get("/search", (req, res) => {
     const searchTerm = req.query.query;
     res.send(`Search results for: ${searchTerm}`);
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
   });
   ```

---

### **Step 3: Add Static Files**

1. **Create a `public` Folder:**

   ```bash
   mkdir public
   ```

2. **Add an `index.html` File in the `public` Folder:**

   ```html
   <!-- public/index.html -->
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Express Static File</title>
     </head>
     <body>
       <h1>Welcome to the Static Page!</h1>
     </body>
   </html>
   ```

3. **Serve Static Files from the `public` Directory:**

   Add the following line to `app.js`:

   ```javascript
   app.use(express.static("public"));
   ```

---

### **Step 4: Run Your Express Server**

1. **Start the Server:**

   ```bash
   node app.js
   ```

2. **Test the Following Routes:**

   1. **Home Route:**  
      Visit [http://localhost:3000](http://localhost:3000)

      - **Response:** `Welcome to the Express.js Practice App!`

   2. **About Route:**  
      Visit [http://localhost:3000/about](http://localhost:3000/about)

      - **Response:** `This is the About page.`

   3. **Route with a Parameter:**  
      Visit [http://localhost:3000/users/42](http://localhost:3000/users/42)

      - **Response:** `User ID: 42`

   4. **Route with Query Parameters:**  
      Visit [http://localhost:3000/search?query=express](http://localhost:3000/search?query=express)

      - **Response:** `Search results for: express`

   5. **Static File:**  
      Visit [http://localhost:3000/index.html](http://localhost:3000/index.html)
      - **Response:** Displays the HTML content from `public/index.html`.

---

### **Bonus Challenge**

1. **Add Middleware to Check for an API Key:**

   Only allow access to the `/search` route if a valid API key is provided via the query parameter `apiKey`.

   ```javascript
   app.get("/search", (req, res, next) => {
     const apiKey = req.query.apiKey;
     if (apiKey === "12345") {
       next();
     } else {
       res.status(403).send("Forbidden: Invalid API Key");
     }
   });
   ```

2. **Test the Route:**
   - Visit [http://localhost:3000/search?query=express&apiKey=12345](http://localhost:3000/search?query=express&apiKey=12345)
     - **Response:** `Search results for: express`
   - Visit [http://localhost:3000/search?query=express](http://localhost:3000/search?query=express)
     - **Response:** `Forbidden: Invalid API Key`

---

### **Summary of Concepts Practiced**

1. **Setting up an Express server.**
2. **Defining routes for different HTTP methods.**
3. **Using route parameters and query parameters.**
4. **Adding middleware for logging and API key validation.**
5. **Serving static files.**

---

### **Next Steps**

In the next lesson, we’ll explore **serving static files and templates with Express.js** to create more dynamic web applications. 🚀
