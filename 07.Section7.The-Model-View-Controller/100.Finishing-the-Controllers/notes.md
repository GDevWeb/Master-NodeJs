# Section 7: The Model View Controller (MVC)

## **100. Finishing the Controllers**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602950#overview)

---

### **Objective**

In this lesson, we will finish our **Controllers** by adding more functionality to handle **Create**, **Update**, and **Delete** operations in our Express.js application. We'll also ensure the Controllers handle errors gracefully and follow good practices.

---

### **Current Project Recap**

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
└── public/
```

---

### **1. Update the Controller with CRUD Operations**

Add **Create**, **Update**, and **Delete** functions in **`controllers/productController.js`**:

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Fetch all products
exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.json(products);
};

// Fetch a single product by ID
exports.getProductById = (req, res) => {
  const productId = req.params.id;
  const product = Product.findById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// Create a new product
exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }
  const newProduct = Product.create(name, price);
  res.status(201).json(newProduct);
};

// Update a product by ID
exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;
  const updatedProduct = Product.updateById(productId, name, price);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  const deletedProduct = Product.deleteById(productId);
  if (deletedProduct) {
    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
```

---

### **2. Update the Model to Support CRUD Operations**

Update **`models/Product.js`** to include methods for creating, updating, and deleting products.

**`models/Product.js`**:

```javascript
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Mock database
  static products = [
    new Product(1, "Laptop", 999),
    new Product(2, "Phone", 499),
    new Product(3, "Tablet", 299),
  ];

  // Fetch all products
  static fetchAll() {
    return this.products;
  }

  // Find a product by ID
  static findById(id) {
    return this.products.find((product) => product.id === parseInt(id));
  }

  // Create a new product
  static create(name, price) {
    const newProduct = new Product(this.products.length + 1, name, price);
    this.products.push(newProduct);
    return newProduct;
  }

  // Update a product by ID
  static updateById(id, name, price) {
    const product = this.findById(id);
    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      return product;
    }
    return null;
  }

  // Delete a product by ID
  static deleteById(id) {
    const index = this.products.findIndex(
      (product) => product.id === parseInt(id)
    );
    if (index !== -1) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = Product;
```

---

### **3. Update the Routes**

Update **`routes/productRoutes.js`** to include routes for **Create**, **Update**, and **Delete** operations.

**`routes/productRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Fetch all products
router.get("/products", productController.getProducts);

// Fetch a single product by ID
router.get("/products/:id", productController.getProductById);

// Create a new product
router.post("/products", productController.createProduct);

// Update a product by ID
router.put("/products/:id", productController.updateProduct);

// Delete a product by ID
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
```

---

### **4. Update the Express Server**

Ensure **`app.js`** can handle JSON data and includes the routes.

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

### **5. Testing the CRUD Operations**

Use **Postman** or a similar tool to test the following endpoints:

1. **Fetch All Products**

   - **GET** `http://localhost:3000/products`

2. **Fetch a Product by ID**

   - **GET** `http://localhost:3000/products/1`

3. **Create a New Product**

   - **POST** `http://localhost:3000/products`
   - **Body** (JSON):
     ```json
     {
       "name": "Smartwatch",
       "price": 199
     }
     ```

4. **Update a Product by ID**

   - **PUT** `http://localhost:3000/products/2`
   - **Body** (JSON):
     ```json
     {
       "name": "Updated Phone",
       "price": 599
     }
     ```

5. **Delete a Product by ID**
   - **DELETE** `http://localhost:3000/products/3`

---

### **Summary**

In this lesson, you:

1. **Finished the Controllers** by adding:
   - **Create** (`createProduct`)
   - **Update** (`updateProduct`)
   - **Delete** (`deleteProduct`)
2. **Updated the Model** to support CRUD operations.
3. **Updated the Routes** to handle the new controller actions.
4. **Tested the CRUD operations** using Postman.

---

### 🚀 **Next Steps**

In the next lesson, we’ll explore **connecting our Models to a real database** (e.g., MongoDB or a relational database like MySQL) to make the application more dynamic and persistent! 💻
