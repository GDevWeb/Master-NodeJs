### Section 7: The Model View Controller (MVC)

## **102. Storing Data in Files via the Model**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602954#overview)

---

### **Objective**

In this lesson, we'll focus on storing and managing data using **local files** through the **Product Model**. We'll utilize the **asynchronous `fs` module** to perform CRUD operations while ensuring data persistence in a `products.json` file.

---

### **Project Recap**

Current project structure:

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

### **Step-by-Step Guide**

#### **1. Create the `products.json` File**

Ensure you have a `products.json` file in the `data` folder to store product data.

**`data/products.json`**:

```json
[
  { "id": 1, "name": "Laptop", "price": 999 },
  { "id": 2, "name": "Phone", "price": 499 },
  { "id": 3, "name": "Tablet", "price": 299 }
]
```

---

#### **2. Product Model for File Operations**

Update the **`models/Product.js`** to perform CRUD operations using asynchronous file storage.

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
    const products = await this.fetchAll();
    return products.find((product) => product.id === parseInt(id));
  }

  // Create a new product asynchronously
  static async create(name, price) {
    const products = await this.fetchAll();
    const newProduct = new Product(products.length + 1, name, price);
    products.push(newProduct);
    await this.saveProductsToFile(products);
    return newProduct;
  }

  // Update a product by ID asynchronously
  static async updateById(id, name, price) {
    const products = await this.fetchAll();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex !== -1) {
      products[productIndex].name = name || products[productIndex].name;
      products[productIndex].price = price || products[productIndex].price;
      await this.saveProductsToFile(products);
      return products[productIndex];
    }

    return null;
  }

  // Delete a product by ID asynchronously
  static async deleteById(id) {
    let products = await this.fetchAll();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex !== -1) {
      const deletedProduct = products.splice(productIndex, 1);
      await this.saveProductsToFile(products);
      return deletedProduct[0];
    }

    return null;
  }

  // Save products to the file asynchronously
  static async saveProductsToFile(products) {
    try {
      await fs.writeFile(filePath, JSON.stringify(products, null, 2));
    } catch (err) {
      console.error("Error writing to file:", err);
    }
  }
}

module.exports = Product;
```

---

### **Explanation of Key Methods**

1. **`fetchAll()`**:

   - Reads the `products.json` file and returns all products as an array.

2. **`findById(id)`**:

   - Finds a product by its `id` and returns it.

3. **`create(name, price)`**:

   - Creates a new product with a unique ID and saves it to the file.

4. **`updateById(id, name, price)`**:

   - Updates the name and/or price of a product by its ID and saves the changes.

5. **`deleteById(id)`**:

   - Deletes a product by its ID and saves the updated data.

6. **`saveProductsToFile(products)`**:
   - Saves the updated product list to `products.json`.

---

### **3. Example Usage in the Controller**

Ensure your **`controllers/productController.js`** is using the `Product` model correctly.

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

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }
    const newProduct = await Product.create(name, price);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedProduct = await Product.updateById(req.params.id, name, price);
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating product" });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.deleteById(req.params.id);
    if (deletedProduct) {
      res.json({ message: "Product deleted successfully", deletedProduct });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
```

---

### **4. Run the Application**

Start the server:

```bash
node app.js
```

---

### **5. Testing the Application**

Use **Postman** or any API testing tool to test the following endpoints:

1. **Fetch All Products**:

   - **GET** `http://localhost:3000/products`

2. **Fetch a Product by ID**:

   - **GET** `http://localhost:3000/products/1`

3. **Create a New Product**:

   - **POST** `http://localhost:3000/products`
   - **Body** (JSON):
     ```json
     { "name": "Smartwatch", "price": 199 }
     ```

4. **Update a Product by ID**:

   - **PUT** `http://localhost:3000/products/2`
   - **Body** (JSON):
     ```json
     { "name": "Updated Phone", "price": 599 }
     ```

5. **Delete a Product by ID**:
   - **DELETE** `http://localhost:3000/products/3`

---

### **Summary**

In this lesson, you:

1. **Stored data in a local file** (`products.json`) using the `fs` module.
2. Created **CRUD operations** in the Product model to manage the data.
3. Ensured the **Controller** interacted with the Product model asynchronously.
4. Tested the endpoints to verify data storage and retrieval.

This approach is a great way to practice data persistence without using a database. 🚀

In the next lessons, we'll explore how to introduce **databases** like MongoDB or SQL for more robust data storage. 💾
