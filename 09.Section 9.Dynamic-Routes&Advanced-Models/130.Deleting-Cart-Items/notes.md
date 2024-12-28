# Section 9: Dynamic Routes & Advanced Models

## **130. Deleting Cart Items**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738914#overview)
- [Udemy - code](code/08-deleting-cart-items.zip)

---

---

### **Objective**

In this lesson, we’ll implement the functionality to remove items from the shopping cart. This complements the product deletion feature and ensures the cart stays consistent when products are removed.

---

### **Step-by-Step Guide**

---

### **1. Add the Remove Item Route**

Define a route to handle removing items from the cart.

**`routes/cartRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// Route to handle removing an item from the cart
router.post("/cart/remove", cartController.removeFromCart);

module.exports = router;
```

---

### **2. Implement the `removeFromCart` Method**

Add the logic for removing items from the cart in the **cart controller**.

**`controllers/cartController.js`**:

```javascript
const Cart = require("../models/Cart");

// Remove a product from the cart
exports.removeFromCart = async (req, res) => {
  try {
    const productId = req.body.productId; // Get the product ID from the form
    await Cart.removeProduct(productId); // Call the model to remove the item
    res.redirect("/cart"); // Redirect back to the cart page
  } catch (err) {
    res.status(500).send("Error removing product from cart");
  }
};
```

#### **Explanation**:

- **`req.body.productId`**: Extracts the product ID from the submitted form.
- **`Cart.removeProduct(productId)`**: Calls the model to remove the product from the cart.
- **Redirect**: Redirects to the cart page after the operation.

---

### **3. Add the Remove Logic in the Cart Model**

Implement the `removeProduct` method in the **Cart model**.

**`models/Cart.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");

const cartPath = path.join(__dirname, "../data/cart.json");

class Cart {
  // Remove a product from the cart
  static async removeProduct(productId) {
    try {
      const data = await fs.readFile(cartPath, "utf-8");
      const cart = JSON.parse(data);

      // Filter out the product to be removed
      const updatedProducts = cart.products.filter(
        (prod) => prod.id !== productId
      );

      if (cart.products.length === updatedProducts.length) {
        console.log("Product not found in cart");
      }

      cart.products = updatedProducts;

      // Save the updated cart
      await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
    } catch (err) {
      console.error("Error removing product from cart:", err);
      throw err;
    }
  }
}

module.exports = Cart;
```

#### **Explanation**:

- **Filter Products**: Removes the product with the specified `id` from the `products` array.
- **Save Data**: Writes the updated cart data back to `cart.json`.

---

### **4. Update the Cart View**

Add a **Remove** button for each product in the cart.

**`views/shop/cart.pug`**:

```pug
extends ../layout

block content
  h1 #{title}

  if cart.products.length
    ul
      each product in cart.products
        li
          | Product ID: #{product.id} - Quantity: #{product.quantity}
          form(action="/cart/remove" method="POST" style="display:inline")
            input(type="hidden" name="productId" value=product.id)
            button(type="submit") Remove
  else
    p Your cart is empty.

  a(href="/") Back to Shop
```

#### **Explanation**:

- **Hidden Input**: Passes the `productId` to the POST request.
- **Remove Button**: Submits the form to the `/cart/remove` route to delete the item.

---

### **5. Test the Remove Functionality**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Add Items to the Cart**:  
   Add multiple products to the cart from their respective detail pages.

3. **Visit the Cart Page**:  
   [http://localhost:3000/cart](http://localhost:3000/cart)

4. **Remove an Item**:

   - Click the **"Remove"** button next to a product.
   - Ensure the product is removed from the cart.

5. **Verify `cart.json`**:
   - Open `data/cart.json` and confirm the item has been removed.

---

### **Expected Output**

Before removing:

```
Your Cart

Product ID: 1 - Quantity: 2 [Remove]
Product ID: 2 - Quantity: 1 [Remove]

[Back to Shop]
```

After removing Product ID 1:

```
Your Cart

Product ID: 2 - Quantity: 1 [Remove]

[Back to Shop]
```

`cart.json`:

```json
{
  "products": [{ "id": "2", "quantity": 1 }]
}
```

---

### **Error Handling**

1. **Product Not Found**:

   - If the product is not in the cart, log a message to the console:
     ```
     Product not found in cart
     ```

2. **Server Errors**:
   - If an error occurs while removing the product, return a **500 error**:
     ```
     Error removing product from cart
     ```

---

### **Summary**

In this lesson, you:

1. Added a route to handle **removing cart items**.
2. Implemented the `removeFromCart` method in the **controller**.
3. Enhanced the **Cart model** to delete products from the cart.
4. Updated the cart view with a **Remove button**.
5. Tested the functionality to ensure items are successfully removed.

---

### 🚀 **Next Step**: In the next lesson, we’ll focus on **displaying cart items on the cart page** dynamically. 💻
