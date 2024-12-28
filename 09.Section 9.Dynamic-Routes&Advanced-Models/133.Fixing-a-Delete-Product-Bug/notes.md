# Section 9: Dynamic Routes & Advanced Models

## **133. Fixing a Delete Product Bug**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738920#overview)
- [Udemy - code](code/09-fixing-a-delete-product-bug.zip)

---

### **Objective**

In this lesson, we’ll address a common bug where products deleted from the shop remain in the cart. This inconsistency can cause issues when displaying or managing the cart, especially if users try to interact with products that no longer exist.

---

### **Step-by-Step Guide**

---

### **1. Identify the Issue**

When a product is removed from the shop:

1. It is deleted from `products.json`.
2. However, it remains in `cart.json`.

If the cart attempts to reference a deleted product, errors or inconsistencies can occur, such as missing product details on the cart page.

---

### **2. Update the Delete Logic**

Modify the **deleteProduct** method in the **Product controller** to also remove the product from the cart.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");
const Cart = require("../models/Cart");

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Delete the product from the shop
    const deletedProduct = await Product.deleteById(productId);

    if (deletedProduct) {
      // Also remove the product from the cart
      await Cart.removeProduct(productId);

      res.redirect("/");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error deleting product");
  }
};
```

#### **Explanation**:

- After deleting the product from `products.json`, the method calls `Cart.removeProduct(productId)` to ensure the cart is updated.

---

### **3. Test the Deletion Flow**

1. **Add Items to the Cart**:

   - Add products to the cart from their respective detail pages.

2. **Delete a Product from the Shop**:

   - Delete a product using the **Delete** button on the shop page.

3. **Check the Cart**:
   - Visit the cart page and verify the deleted product no longer appears.

---

### **4. Enhance the Cart View**

Ensure the cart view gracefully handles cases where products are removed from the shop but not yet cleaned up in the cart.

**`views/shop/cart.pug`**:

```pug
extends ../layout

block content
  h1 #{title}

  if cart.length
    ul
      each item in cart
        if item.name
          li
            | #{item.name} - $#{item.price} (x#{item.quantity})
            form(action="/cart/remove" method="POST" style="display:inline")
              input(type="hidden" name="productId" value=item.id)
              button(type="submit") Remove
        else
          li This product has been removed from the shop.
          form(action="/cart/remove" method="POST" style="display:inline")
            input(type="hidden" name="productId" value=item.id)
            button(type="submit") Remove from Cart
    p Total: $#{cart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0)}
  else
    p Your cart is empty.

  a(href="/") Back to Shop
```

#### **Explanation**:

- **Graceful Handling**: If a product is missing from the shop, display a message and allow the user to remove it from the cart.

---

### **5. Test Edge Cases**

1. **Delete a Product That’s Not in the Cart**:

   - Ensure the deletion works without issues.

2. **Delete a Product That’s in the Cart**:

   - Verify the product is removed from both the shop and the cart.

3. **Delete All Products**:
   - Confirm the cart reflects the changes correctly.

---

### **Expected Output**

1. When a product is deleted from the shop, it is also removed from the cart.
2. The cart gracefully handles missing product details.

---

### **Summary**

In this lesson, you:

1. Updated the **deleteProduct** method to also remove the product from the cart.
2. Enhanced the **cart view** to handle missing product details gracefully.
3. Tested the full flow to ensure consistency between the shop and the cart.

---

### 🚀 **Next Step**: In the next lesson, we’ll wrap up this section and review everything you’ve accomplished! 💻
