# Section 7: The Model View Controller (MVC)

## **104. Refactoring the File Storage Code**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602958#overview)

---

### **Objective**

In this lesson, we'll **refactor the file storage code** in the **Product Model** to improve readability, maintainability, and error handling. We'll consolidate repetitive logic and streamline the CRUD operations.

---

### **Why Refactor the Code?**

1. **Reduce Redundancy**: Eliminate repetitive code.
2. **Improve Readability**: Make the code easier to understand.
3. **Enhance Maintainability**: Easier to update or modify in the future.
4. **Better Error Handling**: Handle potential file operation errors more effectively.

---

### **Refactored Product Model**

Here's the updated `Product` model with refactored file storage code.

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

  // Helper method to read data from the file
  static async readFile() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading file:", err);
      return [];
    }
  }

  // Helper method to write data to the file
  static async writeFile(data) {
    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Error writing to file:", err);
    }
  }

  // Fetch all products
  static async fetchAll() {
    return await this.readFile();
  }

  // Find a product by ID
  static async findById(id) {
    const products = await this.readFile();
    return products.find((product) => product.id === parseInt(id));
  }

  // Create a new product
  static async create(name, price) {
    const products = await this.readFile();
    const newProduct = new Product(products.length + 1, name, price);
    products.push(newProduct);
    await this.writeFile(products);
    return newProduct;
  }

  // Update a product by ID
  static async updateById(id, name, price) {
    const products = await this.readFile();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex !== -1) {
      products[productIndex].name = name || products[productIndex].name;
      products[productIndex].price = price || products[productIndex].price;
      await this.writeFile(products);
      return products[productIndex];
    }

    return null;
  }

  // Delete a product by ID
  static async deleteById(id) {
    let products = await this.readFile();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex !== -1) {
      const deletedProduct = products.splice(productIndex, 1);
      await this.writeFile(products);
      return deletedProduct[0];
    }

    return null;
  }
}

module.exports = Product;
```

---

### **Key Changes and Improvements**

1. **Consolidated File Operations**:

   - Introduced `readFile()` and `writeFile()` helper methods to handle file reading and writing. This reduces redundancy in CRUD operations.

2. **Simplified CRUD Methods**:

   - The methods `fetchAll()`, `findById()`, `create()`, `updateById()`, and `deleteById()` now use the helper methods, making them more concise and easier to read.

3. **Improved Error Handling**:

   - Centralized error handling in `readFile()` and `writeFile()` ensures consistent error management across all operations.

4. **Cleaner Code Structure**:
   - Each method now focuses on its core functionality, with file operations abstracted into helper methods.

---

### **Updated Controller**

Ensure the **controller** uses the refactored `Product` model without any changes.

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

### **Testing the Refactored Code**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Test the Endpoints**:

   - **Fetch All Products**:  
     **GET** `http://localhost:3000/products`

   - **Fetch Product by ID**:  
     **GET** `http://localhost:3000/products/1`

   - **Create New Product**:  
     **POST** `http://localhost:3000/products`  
     **Body (JSON)**:

     ```json
     { "name": "Smartwatch", "price": 199 }
     ```

   - **Update Product by ID**:  
     **PUT** `http://localhost:3000/products/2`  
     **Body (JSON)**:

     ```json
     { "name": "Updated Phone", "price": 599 }
     ```

   - **Delete Product by ID**:  
     **DELETE** `http://localhost:3000/products/3`

---

### **Summary**

In this lesson, you:

1. **Refactored the Product Model** by introducing helper methods for file operations.
2. **Reduced Code Redundancy** and improved readability.
3. **Centralized Error Handling** in `readFile()` and `writeFile()` methods.
4. **Tested the CRUD operations** to ensure everything works as expected.

This refactoring makes your code more efficient, easier to maintain, and prepares you for future improvements. 🚀

---

### 🚀 **Next Steps**

In the next lesson, we’ll explore **error handling and validation** to make our application more robust and user-friendly! 💻
