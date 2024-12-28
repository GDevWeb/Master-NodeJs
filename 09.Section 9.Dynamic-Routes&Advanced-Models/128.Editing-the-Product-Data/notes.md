# Section 9: Dynamic Routes & Advanced Models

## **128. Editing the Product Data**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738910#overview)
- [Udemy - code](code/06-editing-the-product-data.zip)

---

### **Objective**

In this lesson, we’ll complete the **editing functionality** by enabling users to update product details. This involves handling the submitted form data, updating the product in the data store, and ensuring the changes are reflected in the application.

---

### **Step-by-Step Guide**

---

### **1. Handle the Update Request**

Ensure the **update route** exists and is correctly defined in `productRoutes.js`.

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

### **2. Implement the `updateProduct` Method**

Add the logic to handle the update in the **product controller**.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Extract product ID
    const { name, price } = req.body; // Extract updated data from form

    const updatedProduct = await Product.updateById(productId, name, price);

    if (updatedProduct) {
      res.redirect("/"); // Redirect to the shop page after a successful update
    } else {
      res.status(404).send("Product not found"); // Handle cases where the product doesn't exist
    }
  } catch (err) {
    res.status(500).send("Error updating product"); // Handle server errors
  }
};
```

#### **Explanation**:

- **Extract Data**: Retrieves `id`, `name`, and `price` from the request.
- **Update Product**: Calls `Product.updateById()` to save changes.
- **Redirect**: Redirects to the shop page upon success.

---

### **3. Update the Product Model**

Implement the logic for updating product data in the **`Product` model**.

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
        // Update product fields
        products[productIndex].name = name || products[productIndex].name;
        products[productIndex].price = price || products[productIndex].price;

        // Save changes to file
        await fs.writeFile(filePath, JSON.stringify(products, null, 2));
        return products[productIndex];
      }

      return null; // Product not found
    } catch (err) {
      console.error("Error updating product:", err);
      throw err;
    }
  }
}

module.exports = Product;
```

#### **Explanation**:

- **Find Product**: Locates the product in the array using its `id`.
- **Update Fields**: Updates `name` and `price` with the provided data.
- **Save Changes**: Writes the updated product list back to `products.json`.

---

### **4. Test the Editing Functionality**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:  
   [http://localhost:3000](http://localhost:3000)

3. **Edit a Product**:

   - Click **"Edit"** next to a product.
   - Modify the product’s name or price in the form.
   - Click **"Update Product"**.

4. **Verify Changes**:
   - Ensure the updated details are visible on the shop page.
   - Check `data/products.json` to confirm the product was updated.

---

### **Expected Output**

1. Before editing, the product details in the shop page might appear as:

   ```
   Laptop - $999 [Edit]
   ```

2. After editing the product name to "Gaming Laptop" and price to "$1200", the shop page should update to:

   ```
   Gaming Laptop - $1200 [Edit]
   ```

3. The `products.json` file should reflect the changes:

   ```json
   [
     { "id": 1, "name": "Gaming Laptop", "price": 1200 },
     { "id": 2, "name": "Phone", "price": 499 },
     { "id": 3, "name": "Tablet", "price": 299 }
   ]
   ```

---

### **Error Handling**

1. **Product Not Found**:

   - If the `id` doesn’t match any product, return a **404 error**:
     ```
     Product not found
     ```

2. **Server Errors**:
   - If an error occurs while updating the product, return a **500 error**:
     ```
     Error updating product
     ```

---

### **Summary**

In this lesson, you:

1. Added a route to handle **product updates**.
2. Implemented the `updateProduct` method in the **controller**.
3. Enhanced the **Product Model** to support updates.
4. Tested the complete flow, from editing a product to saving changes.

---

### 🚀 **Next Step**: In the next lesson, we’ll add functionality for **deleting products** from the shop! 🗑️💻
