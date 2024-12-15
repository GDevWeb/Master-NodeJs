# Section 7: The Model View Controller (MVC)

## **99. Adding Controllers (New Project Setup)**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602948#overview)

---

### **Objective**

In this lesson, we'll create a new Express.js project and structure it following the **Model-View-Controller (MVC)** pattern, starting with the **Controllers**. Controllers handle incoming requests and manage communication between the **Models** and **Views** (responses).

---

### **Step-by-Step Guide to Creating a New Project with Controllers**

#### **1. Project Setup**

1. **Create a New Project Directory**:

   ```bash
   mkdir mvc-project
   cd mvc-project
   ```

2. **Initialize the Project**:

   ```bash
   npm init -y
   ```

3. **Install Express**:

   ```bash
   npm install express
   ```

4. **Create Project Structure**:

   ```bash
   mkdir controllers routes models public
   touch app.js routes/productRoutes.js controllers/productController.js models/Product.js
   ```

Your project structure should now look like this:

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

#### **2. Create the Controller**

**`controllers/productController.js`**:

```javascript
// Import the Product model
const Product = require("../models/Product");

// Controller to handle fetching all products
exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.json(products);
};

// Controller to handle fetching a single product by ID
exports.getProductById = (req, res) => {
  const productId = req.params.id;
  const product = Product.findById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
```

---

#### **3. Create the Model**

**`models/Product.js`**:

```javascript
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Fetch all products (mock data)
  static fetchAll() {
    return [
      new Product(1, "Laptop", 999),
      new Product(2, "Phone", 499),
      new Product(3, "Tablet", 299),
    ];
  }

  // Find a product by ID
  static findById(id) {
    const products = Product.fetchAll();
    return products.find((product) => product.id === parseInt(id));
  }
}

module.exports = Product;
```

---

#### **4. Create the Routes**

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

#### **5. Set Up the Express Server**

**`app.js`**:

```javascript
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Use the product routes
app.use("/", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

#### **6. Run the Application**

Start the server with:

```bash
node app.js
```

---

### **7. Test the Controllers**

1. **Fetch All Products**:  
   Open your browser or use a tool like **Postman** and visit:  
   [http://localhost:3000/products](http://localhost:3000/products)

   **Response**:

   ```json
   [
     { "id": 1, "name": "Laptop", "price": 999 },
     { "id": 2, "name": "Phone", "price": 499 },
     { "id": 3, "name": "Tablet", "price": 299 }
   ]
   ```

2. **Fetch a Single Product by ID**:  
   Visit: [http://localhost:3000/products/1](http://localhost:3000/products/1)

   **Response**:

   ```json
   { "id": 1, "name": "Laptop", "price": 999 }
   ```

3. **Invalid Product ID**:  
   Visit: [http://localhost:3000/products/99](http://localhost:3000/products/99)

   **Response**:

   ```json
   { "message": "Product not found" }
   ```

---

### **Summary**

In this lesson, you:

1. **Set Up a New Project**: Initialized an Express.js project.
2. **Created a Controller**: Handled fetching all products and a single product by ID.
3. **Created a Model**: Defined mock product data and methods to fetch it.
4. **Created Routes**: Defined routes to link requests to the controller.
5. **Ran and Tested the Application**: Verified the controller functionality using the browser or Postman.

---

### **Next Steps**

In the next lesson, we’ll explore how to **expand the MVC structure** by adding more features to the **Model** and improving the **Controller** for handling different types of requests (e.g., adding new products). 🚀
