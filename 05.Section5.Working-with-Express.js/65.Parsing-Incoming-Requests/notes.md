# Section 5: Working with Express.js

## **65. Parsing Incoming Requests**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566290#overview)

---

### **What is Parsing in Express.js?**

When a client sends a request to an Express server, the request often contains data such as:

- **Form Data** from an HTML form.
- **JSON Data** from a REST API.
- **URL Parameters** or **Query Strings**.

To handle this data effectively, **parsing** is required. Express provides built-in middleware to parse incoming requests.

---

### **Types of Data in Incoming Requests**

1. **URL-encoded Form Data** (e.g., data submitted via HTML forms).
2. **JSON Data** (commonly used in APIs).
3. **Multipart Data** (for file uploads).
4. **Query Parameters** (e.g., `?name=John`).
5. **Route Parameters** (e.g., `/users/:id`).

---

### **Built-in Middleware for Parsing Requests**

1. **`express.json()`**:

   - Parses incoming requests with JSON payloads.

2. **`express.urlencoded({ extended: true })`**:
   - Parses incoming requests with URL-encoded payloads (from HTML forms).

---

### **1. Parsing JSON Data**

To parse JSON data in incoming requests, use the `express.json()` middleware.

**Example:**

1. **Create `app.js`:**

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   // Middleware to parse JSON
   app.use(express.json());

   // Route to handle POST request with JSON data
   app.post("/data", (req, res) => {
     const jsonData = req.body;
     res.send(`Received JSON data: ${JSON.stringify(jsonData)}`);
   });

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

2. **Send a POST Request with JSON Data:**

   Use a tool like **Postman** or `curl`:

   ```bash
   curl -X POST http://localhost:3000/data -H "Content-Type: application/json" -d '{"name": "John", "age": 30}'
   ```

3. **Response:**

   ```
   Received JSON data: {"name":"John","age":30}
   ```

---

### **2. Parsing URL-Encoded Form Data**

To parse URL-encoded data (submitted via HTML forms), use the `express.urlencoded()` middleware.

**Example:**

1. **Create `app.js`:**

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   // Middleware to parse URL-encoded data
   app.use(express.urlencoded({ extended: true }));

   // Route to handle POST request with form data
   app.post("/form", (req, res) => {
     const formData = req.body;
     res.send(`Received Form Data: ${JSON.stringify(formData)}`);
   });

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

2. **Create an HTML Form (`index.html`):**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <title>Form Example</title>
     </head>
     <body>
       <form action="http://localhost:3000/form" method="POST">
         <label for="name">Name:</label>
         <input type="text" id="name" name="name" />
         <br />
         <label for="age">Age:</label>
         <input type="text" id="age" name="age" />
         <br />
         <button type="submit">Submit</button>
       </form>
     </body>
   </html>
   ```

3. **Submit the Form and Check the Response:**

   After submitting the form, the server will respond with:

   ```
   Received Form Data: {"name":"John","age":"30"}
   ```

---

### **3. Parsing Query Parameters**

Query parameters are part of the URL after the `?` symbol.

**Example:**

```javascript
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Search results for: ${keyword}`);
});
```

- **URL to Access:**  
  `http://localhost:3000/search?keyword=express`

- **Response:**  
  `Search results for: express`

---

### **4. Parsing Route Parameters**

Route parameters are defined in the URL path.

**Example:**

```javascript
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

- **URL to Access:**  
  `http://localhost:3000/users/42`

- **Response:**  
  `User ID: 42`

---

### **5. Parsing Multipart Data (File Uploads)**

To handle file uploads, you need a third-party library like **`multer`**.

1. **Install `multer`:**

   ```bash
   npm install multer
   ```

2. **Example of File Upload:**

   ```javascript
   const express = require("express");
   const multer = require("multer");
   const upload = multer({ dest: "uploads/" }); // Files will be saved in the 'uploads' folder

   const app = express();
   const port = 3000;

   app.post("/upload", upload.single("file"), (req, res) => {
     res.send(`File uploaded: ${req.file.originalname}`);
   });

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

3. **HTML Form for File Upload:**

   ```html
   <form
     action="http://localhost:3000/upload"
     method="POST"
     enctype="multipart/form-data"
   >
     <input type="file" name="file" />
     <button type="submit">Upload File</button>
   </form>
   ```

---

### **Summary of Parsing Methods**

| **Type of Data**           | **Middleware**                 | **Example Usage**                              |
| -------------------------- | ------------------------------ | ---------------------------------------------- |
| **JSON Data**              | `express.json()`               | API requests with JSON payloads                |
| **URL-encoded Form Data**  | `express.urlencoded()`         | HTML form submissions                          |
| **Query Parameters**       | Access via `req.query`         | `http://localhost:3000/search?keyword=express` |
| **Route Parameters**       | Access via `req.params`        | `http://localhost:3000/users/42`               |
| **Multipart Data (Files)** | `multer` (third-party library) | File uploads via forms                         |

---

### **Useful Resources**

1. **Express.js Request Object Documentation:**  
   [Express Request Object](https://expressjs.com/en/4x/api.html#req)

2. **Multer for File Uploads:**  
   [Multer on npm](https://www.npmjs.com/package/multer)

3. **Body Parser Documentation (Express Built-In):**  
   [Body Parsing in Express](https://expressjs.com/en/4x/api.html#express.json)

---

### **Next Steps**

In the next lesson, we’ll explore **serving static files in Express.js** to handle HTML, CSS, JavaScript, and images. 🚀
