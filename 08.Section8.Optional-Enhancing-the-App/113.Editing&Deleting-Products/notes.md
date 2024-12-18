# Section 8: Optional - Enhancing the App

## **113. Editing & Deleting Products**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602994#overview)
- [Udemy - code](code/04-editing-and-deleting-products.zip)

---

### **Objective**

In this lesson, we’ll add functionality for **editing** and **deleting products** in our Express.js shop application. We’ll create the necessary routes, controller methods, and views to handle these operations.

---

### **Step-by-Step Guide**

---

### **1. Update the Product Model**

Ensure the `Product` model has methods for updating and deleting products.

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

  // Fetch all products
  static async fetchAll() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading file:", err);
      return [];
    }
  }

  // Find a product by ID
  static async findById(id) {
    const products = await this.fetchAll();
    return products.find((product) => product.id === parseInt(id));
  }

  // Update a product by ID
  static async updateById(id, name, price) {
    const products = await this.fetchAll();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex !== -1) {
      products[productIndex].name = name || products[productIndex].name;
      products[productIndex].price = price || products[productIndex].price;
      await fs.writeFile(filePath, JSON.stringify(products, null, 2));
      return products[productIndex];
    }

    return null;
  }

  // Delete a product by ID
  static async deleteById(id) {
    let products = await this.fetchAll();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex !== -1) {
      const deletedProduct = products.splice(productIndex, 1);
      await fs.writeFile(filePath, JSON.stringify(products, null, 2));
      return deletedProduct[0];
    }

    return null;
  }
}

module.exports = Product;
```

---

### **2. Update the Product Controller**

Add methods for handling **update** and **delete** operations in the product controller.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedProduct = await Product.updateById(req.params.id, name, price);
    if (updatedProduct) {
      res.redirect("/");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error updating product");
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.deleteById(req.params.id);
    if (deletedProduct) {
      res.redirect("/");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error deleting product");
  }
};
```

---

### **3. Update the Product Routes**

Add routes for **updating** and **deleting** products.

**`routes/productRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to handle updating a product (PUT)
router.post("/:id/update", productController.updateProduct);

// Route to handle deleting a product (POST)
router.post("/:id/delete", productController.deleteProduct);

module.exports = router;
```

---

### **4. Update the Shop View**

Add **Edit** and **Delete** buttons in the shop view.

**`views/shop/index.pug`**:

```pug
extends ../layout

block content
  h1 #{title}
  if products.length
    ul
      each product in products
        li
          | #{product.name} - $#{product.price}
          a(href=`/edit-product/${product.id}`) Edit
          form(action=`/products/${product.id}/delete` method="POST" style="display:inline")
            button(type="submit") Delete
  else
    p No products available.
```

---

### **5. Create the Edit Product View**

Create a form for editing products.

**`views/shop/edit-product.pug`**:

```pug
extends ../layout

block content
  h1 #{title}
  form(action=`/products/${product.id}/update` method="POST")
    label(for="name") Name:
    input(type="text" name="name" value=product.name required)
    label(for="price") Price:
    input(type="number" name="price" value=product.price required)
    button(type="submit") Update Product
```

---

### **6. Update the Shop Controller**

Ensure the **edit product** controller function is set up correctly.

**`controllers/shopController.js`**:

```javascript
const Product = require("../models/Product");

// Display the edit product form by ID
exports.getEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.render("shop/edit-product", { title: "Edit Product", product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching product");
  }
};
```

---

### **7. Update the Shop Routes**

Add a route for displaying the **edit product** form.

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Route to display the shop
router.get("/", shopController.getShop);

// Route to display the add product form
router.get("/add-product", shopController.getAddProduct);

// Route to display the edit product form by ID
router.get("/edit-product/:id", shopController.getEditProduct);

module.exports = router;
```

---

### **8. Test the Application**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:  
   [http://localhost:3000](http://localhost:3000)

3. **Edit a Product**:

   - Click the **"Edit"** link next to a product.
   - Modify the product details and submit the form.

4. **Delete a Product**:
   - Click the **"Delete"** button next to a product.
   - The product should be removed from the list.

---

### **Summary**

In this lesson, you:

1. Added functionality to **edit** and **delete products**.
2. Updated the **Product Model** to handle update and delete operations.
3. Created routes and controller methods for **updating** and **deleting products**.
4. Updated the shop view to include **Edit** and **Delete** buttons.
5. Created a form for editing products.

---

### 🚀 **Next Step**: In the next lesson, we’ll add functionality for **adding another item** to the shop! 🛒💻
