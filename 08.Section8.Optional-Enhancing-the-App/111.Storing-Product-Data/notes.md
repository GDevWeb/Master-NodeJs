# Section 8: Optional - Enhancing the App

## **111. Storing Product Data**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602988#overview)
- [Udemy - code](code/03-storing-product-data.zip)

---

### **Objective**

In this lesson, we'll implement the logic for **storing product data** when adding new products. We'll ensure the data gets saved to a **local JSON file** and that the new products are displayed on the shop page.

---

### **Step-by-Step Guide**

#### **1. Ensure the Product Model Handles Data Storage**

We'll use the `Product` model to store new products in the `products.json` file.

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

  // Create a new product and save to the file
  static async create(name, price) {
    const products = await this.readFile();
    const newProduct = new Product(products.length + 1, name, price);
    products.push(newProduct);
    await this.writeFile(products);
    return newProduct;
  }

  // Fetch all products
  static async fetchAll() {
    return await this.readFile();
  }
}

module.exports = Product;
```

---

#### **2. Update the Controller to Handle Product Creation**

Ensure the `createProduct` function in the **product controller** handles adding a new product.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }
    await Product.create(name, price);
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};
```

---

#### **3. Update the Add Product View**

Ensure the form in the **add product** view submits data to the correct endpoint.

**`views/shop/add-product.pug`**:

```pug
extends ../layout

block content
  h1 #{title}
  form(action="/products" method="POST")
    label(for="name") Name:
    input(type="text" name="name" required)
    label(for="price") Price:
    input(type="number" name="price" required)
    button(type="submit") Add Product
```

---

#### **4. Ensure Routes Are Set Up Correctly**

Check that the **product routes** file handles the `POST` request for creating a new product.

**`routes/productRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to handle creating a new product
router.post("/", productController.createProduct);

module.exports = router;
```

---

#### **5. Test the Product Creation**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Add a New Product**:

   - Go to [http://localhost:3000/add-product](http://localhost:3000/add-product).
   - Fill out the form with a **name** and **price** for the new product.
   - Click **"Add Product"**.

3. **Check the Shop Page**:

   - Visit [http://localhost:3000](http://localhost:3000).
   - You should see the new product displayed in the list.

4. **Verify `products.json`**:

   - Open `data/products.json` to ensure the new product has been saved:

     ```json
     [
       { "id": 1, "name": "Laptop", "price": 999 },
       { "id": 2, "name": "Phone", "price": 499 },
       { "id": 3, "name": "Tablet", "price": 299 },
       { "id": 4, "name": "Smartwatch", "price": 199 }
     ]
     ```

---

### **Error Handling**

1. **Missing Data**:

   - If the form is submitted without a name or price, the controller returns a **400 Bad Request** error with a relevant message.

2. **File Errors**:
   - Errors reading or writing to the file are logged to the console, and a **500 Internal Server Error** response is sent.

---

### **Summary**

In this lesson, you:

1. Implemented the logic for **storing new product data** in a local JSON file.
2. Updated the **Product Model** to handle creating and saving new products.
3. Ensured the **Product Controller** processes product creation requests.
4. Tested the functionality by adding new products and verifying they are displayed.

---

### 🚀 **Next Step**: In the next lesson, we’ll work on **displaying product data** dynamically in the shop view! 🛒💻
