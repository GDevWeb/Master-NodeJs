# Section 9: Dynamic Routes & Advanced Models

## **129. Adding the Product-Delete Functionality (Recap)**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738912#overview)
- [Udemy - code](code/07-adding-the-product-delete-functionality.zip)

---

### **Objective**

In this recap lesson, we’ll ensure the product deletion functionality is complete, tested, and integrated into the app. While this was covered previously, it’s useful to consolidate and verify all steps for deleting products.

---

### **Step-by-Step Recap**

---

### **1. Define the Delete Route**

Ensure the **delete route** exists in `routes/productRoutes.js`.

**`routes/productRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to delete a product by ID
router.post("/:id/delete", productController.deleteProduct);

module.exports = router;
```

---

### **2. Implement the Delete Logic in the Controller**

Ensure the **`deleteProduct`** method is implemented in `controllers/productController.js`.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.deleteById(productId);

    if (deletedProduct) {
      res.redirect("/"); // Redirect to shop page after deletion
    } else {
      res.status(404).send("Product not found"); // Handle product not found
    }
  } catch (err) {
    res.status(500).send("Error deleting product"); // Handle server errors
  }
};
```

#### **Explanation**:

- **`req.params.id`**: Extracts the product ID from the request.
- **`Product.deleteById(productId)`**: Calls the model method to delete the product.
- **Redirect**: Redirects to the shop page upon success.

---

### **3. Add the Delete Logic in the Product Model**

Ensure the `deleteById` method is implemented in **`models/Product.js`**.

**`models/Product.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

class Product {
  // Delete a product by ID
  static async deleteById(id) {
    try {
      const products = await this.fetchAll();
      const updatedProducts = products.filter(
        (product) => product.id !== parseInt(id)
      );

      if (products.length === updatedProducts.length) {
        return null; // Product not found
      }

      await fs.writeFile(filePath, JSON.stringify(updatedProducts, null, 2));
      return true; // Product deleted
    } catch (err) {
      console.error("Error deleting product:", err);
      throw err;
    }
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
}

module.exports = Product;
```

#### **Explanation**:

- **Filter Products**: Filters out the product with the matching `id`.
- **Save Changes**: Writes the updated product list back to `products.json`.

---

### **4. Add the Delete Button**

Add a delete button for each product in the **shop view**.

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

  a(href="/add-product") Add a New Product
```

---

### **5. Test the Delete Functionality**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:  
   [http://localhost:3000](http://localhost:3000)

3. **Delete a Product**:

   - Click the **"Delete"** button next to a product.
   - Ensure the product is removed from the shop page.

4. **Verify `products.json`**:
   - Open `data/products.json` to confirm the product has been deleted.

---

### **Expected Output**

Before deleting:

```
Laptop - $999 [Edit] [Delete]
Phone - $499 [Edit] [Delete]
```

After deleting the "Phone" product:

```
Laptop - $999 [Edit] [Delete]
```

`products.json`:

```json
[{ "id": 1, "name": "Laptop", "price": 999 }]
```

---

### **Error Handling**

1. **Product Not Found**:

   - If the `id` doesn’t match any product, return a **404 error**:
     ```
     Product not found
     ```

2. **Server Errors**:
   - If an error occurs while deleting the product, return a **500 error**:
     ```
     Error deleting product
     ```

---

### **Summary**

In this recap, we ensured the following:

1. A **delete route** is defined for handling product deletions.
2. The **controller** logic handles product deletion.
3. The **model** correctly filters and saves the updated product list.
4. The **shop view** includes a delete button for each product.

---

### 🚀 **Next Step**: In the next lesson, we’ll explore how to **delete cart items** to complement the product deletion functionality! 🛒
