# Section 7: The Model View Controller (MVC)

## **103. Fetching Data from Files via the Model**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602956#overview)

---

### **Objective**

In this lesson, we'll focus on **fetching data** from a local file using the **Product Model** in our Node.js and Express application. We'll ensure the model reads data asynchronously using the `fs` module and handles potential errors gracefully.

---

### **Project Recap**

Your current project structure should look like this:

```
mvc-project/
│
├── app.js
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── models/
│   └── Product.js
└── data/
│   └── products.json
└── public/
```

---

### **1. Sample Data File**

Ensure you have a `products.json` file in the `data` folder with sample data:

**`data/products.json`**:

```json
[
  { "id": 1, "name": "Laptop", "price": 999 },
  { "id": 2, "name": "Phone", "price": 499 },
  { "id": 3, "name": "Tablet", "price": 299 }
]
```

---

### **2. Product Model for Fetching Data**

In **`models/Product.js`**, we'll create methods to **fetch all products** and **fetch a product by ID** asynchronously using the `fs` module.

**`models/Product.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Fetch all products asynchronously
  static async fetchAll() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading file:", err);
      return [];
    }
  }

  // Find a product by ID asynchronously
  static async findById(id) {
    try {
      const products = await this.fetchAll();
      return products.find((product) => product.id === parseInt(id));
    } catch (err) {
      console.error("Error finding product:", err);
      return null;
    }
  }
}

module.exports = Product;
```

#### **Explanation**

1. **`fetchAll()`**:

   - Reads the `products.json` file asynchronously.
   - Parses the file content and returns the product array.
   - Returns an empty array if an error occurs.

2. **`findById(id)`**:
   - Calls `fetchAll()` to get all products.
   - Searches for a product by its `id`.
   - Returns `null` if an error occurs or the product is not found.

---

### **3. Update the Controller**

Ensure **`controllers/productController.js`** uses the updated model methods to fetch data.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Fetch all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
};
```

---

### **4. Define Routes**

Ensure the routes are set up to handle requests for fetching products.

**`routes/productRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to fetch all products
router.get("/products", productController.getProducts);

// Route to fetch a single product by ID
router.get("/products/:id", productController.getProductById);

module.exports = router;
```

---

### **5. Set Up the Express Server**

Make sure **`app.js`** is configured to use the product routes.

**`app.js`**:

```javascript
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Use product routes
app.use("/", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

### **6. Run the Application**

Start the server:

```bash
node app.js
```

---

### **7. Testing the Endpoints**

Use **Postman**, **cURL**, or your browser to test the following endpoints:

1. **Fetch All Products**:

   - **GET** `http://localhost:3000/products`
   - **Expected Response**:
     ```json
     [
       { "id": 1, "name": "Laptop", "price": 999 },
       { "id": 2, "name": "Phone", "price": 499 },
       { "id": 3, "name": "Tablet", "price": 299 }
     ]
     ```

2. **Fetch a Product by ID**:

   - **GET** `http://localhost:3000/products/1`
   - **Expected Response**:
     ```json
     { "id": 1, "name": "Laptop", "price": 999 }
     ```

3. **Invalid Product ID**:
   - **GET** `http://localhost:3000/products/99`
   - **Expected Response**:
     ```json
     { "message": "Product not found" }
     ```

---

### **Error Handling**

1. **File Read Errors**:

   - If `products.json` is missing or corrupted, the `fetchAll()` method will log an error and return an empty array.

2. **Product Not Found**:
   - If a product with the specified ID doesn’t exist, the controller returns a **404 Not Found** error.

---

### **Summary**

In this lesson, you:

1. Created methods in the **Product Model** to **fetch all products** and **fetch a product by ID** using asynchronous file operations.
2. Updated the **controller** to handle these operations.
3. Defined **routes** to link requests to the controller methods.
4. Tested the endpoints to ensure data is being fetched correctly.

This approach provides a simple way to persist and retrieve data from a local file without needing a database.

---

### 🚀 **Next Steps**

In the upcoming lessons, we’ll explore how to handle **creating, updating, and deleting data** in the local file via the model! 💻
