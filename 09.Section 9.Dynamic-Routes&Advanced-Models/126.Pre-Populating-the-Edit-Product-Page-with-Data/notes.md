# Section 9: Dynamic Routes & Advanced Models

## **126. Pre-Populating the Edit Product Page with Data**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738904#overview)
- [Udemy - code](code/05-pre-populating-the-edit-product-page.zip)

Here’s the **complete and updated version** of the last lesson, ensuring no steps are missed.

---

### **Objective**

In this lesson, you’ll learn how to:

1. **Pre-fill the Edit Product Page** with existing product data.
2. **Handle Product Updates** by modifying the product data in `products.json`.
3. **Test the Entire Flow**, from navigating to the edit page to saving changes.

---

### **Step-by-Step Guide**

---

### **1. Add the Edit Product Route**

Ensure the route to display the edit product page exists in **`routes/shopRoutes.js`**.

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Route to display the edit product form by ID
router.get("/edit-product/:id", shopController.getEditProduct);

module.exports = router;
```

---

### **2. Create the Edit Product View**

Create or update the **edit-product view** to display the product’s current details.

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

  a(href="/") Back to Shop
```

#### **Explanation**:

- **Pre-filled Fields**: The `value` attributes of the inputs are populated with the product’s current `name` and `price`.
- **Form Action**: Sends a POST request to `/products/:id/update` for saving changes.

---

### **3. Implement `getEditProduct` in the Shop Controller**

Add logic to pre-fill the form with existing product data.

**`controllers/shopController.js`**:

```javascript
const Product = require("../models/Product");

// Render the edit product page with existing product data
exports.getEditProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (product) {
      res.render("shop/edit-product", { title: "Edit Product", product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error loading product");
  }
};
```

#### **Explanation**:

- Fetches the product using `Product.findById(productId)`.
- Passes the `product` data to the view.

---

### **4. Add the Update Product Route**

Define the route for updating the product in **`routes/productRoutes.js`**.

**`routes/productRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to handle updating a product
router.post("/:id/update", productController.updateProduct);

module.exports = router;
```

---

### **5. Implement `updateProduct` in the Product Controller**

Add logic to handle the POST request for updating the product.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price } = req.body;

    const updatedProduct = await Product.updateById(productId, name, price);

    if (updatedProduct) {
      res.redirect("/");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error updating product");
  }
};
```

#### **Explanation**:

- Retrieves the `productId`, `name`, and `price` from the request.
- Calls `Product.updateById` to save changes to the product.
- Redirects back to the shop page upon success.

---

### **6. Update the Product Model**

Add an `updateById` method to handle updating a product in the data file.

**`models/Product.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

class Product {
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
    try {
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
    } catch (err) {
      console.error("Error updating product:", err);
      throw err;
    }
  }
}

module.exports = Product;
```

#### **Explanation**:

- Finds the product by its `id` and updates its `name` and `price`.
- Saves the updated data back to `products.json`.

---

### **7. Restart Your Server**

After completing the above steps, restart your server:

```bash
node app.js
```

---

### **8. Test the Full Flow**

1. **Visit the Shop Page**:  
   [http://localhost:3000](http://localhost:3000)

2. **Edit a Product**:

   - Click **"Edit"** next to a product.
   - Modify the product’s name or price and click **"Update Product"**.

3. **Verify Changes**:
   - Check that the updated details are visible on the shop page.
   - Open `data/products.json` to ensure the product was updated correctly.

---

### **Expected Output**

1. On the **Edit Product Page** (`/edit-product/1`):

   ```
   Edit Product

   Name: Laptop
   Price: 999

   [Update Product]
   [Back to Shop]
   ```

2. After updating, the shop page reflects the changes, and `products.json` is updated.

---

### **Summary**

In this lesson, you:

1. Added a route to display the **edit product page** with pre-filled data.
2. Defined a route to handle **updating products** via POST.
3. Implemented the update logic in both the **controller** and the **model**.
4. Tested the complete flow from editing to saving product changes.

This should now provide a complete and functional solution! 🚀
