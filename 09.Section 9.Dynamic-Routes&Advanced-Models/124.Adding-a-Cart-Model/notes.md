# Section 9: Dynamic Routes & Advanced Models

## **124. Adding a Cart Model**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738896#overview)
- [Udemy - code - adding a cart model](code/04-adding-a-cart-model.zip)

---

### **Objective**

In this lesson, we’ll expand the **Cart Model** to manage more advanced cart functionality. The model will handle operations like **adding products**, **removing products**, and **retrieving the cart’s contents**.

---

### **Step-by-Step Guide**

---

### **1. Expand the Cart Model**

Update the **`Cart`** model to include methods for retrieving and managing the cart.

**`models/Cart.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");

const cartPath = path.join(__dirname, "../data/cart.json");

class Cart {
  // Add a product to the cart
  static async addProduct(productId) {
    try {
      let cart = { products: [] };

      // Read existing cart data
      try {
        const data = await fs.readFile(cartPath, "utf-8");
        cart = JSON.parse(data);
      } catch (err) {
        console.log("No existing cart found, creating a new one.");
      }

      // Find if the product is already in the cart
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === productId
      );

      if (existingProductIndex !== -1) {
        // Increment quantity if product exists
        cart.products[existingProductIndex].quantity += 1;
      } else {
        // Add new product with quantity 1
        cart.products.push({ id: productId, quantity: 1 });
      }

      // Save the updated cart data
      await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  }

  // Remove a product from the cart
  static async removeProduct(productId) {
    try {
      const data = await fs.readFile(cartPath, "utf-8");
      const cart = JSON.parse(data);

      // Filter out the product to be removed
      cart.products = cart.products.filter((prod) => prod.id !== productId);

      // Save the updated cart data
      await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
    } catch (err) {
      console.error("Error removing product from cart:", err);
    }
  }

  // Retrieve all products in the cart
  static async getCart() {
    try {
      const data = await fs.readFile(cartPath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading cart data:", err);
      return { products: [] };
    }
  }
}

module.exports = Cart;
```

#### **Explanation**:

1. **`addProduct(productId)`**: Adds a product to the cart. If the product already exists, increments its quantity.
2. **`removeProduct(productId)`**: Removes a product from the cart by filtering it out of the `products` array.
3. **`getCart()`**: Reads and returns the current cart data.

---

### **2. Update the Cart Controller**

Add methods to the **cart controller** for viewing and managing the cart.

**`controllers/cartController.js`**:

```javascript
const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const productId = req.body.productId;
  await Cart.addProduct(productId);
  res.redirect("/cart");
};

exports.removeFromCart = async (req, res) => {
  const productId = req.body.productId;
  await Cart.removeProduct(productId);
  res.redirect("/cart");
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.getCart();
    res.render("shop/cart", { title: "Your Cart", cart });
  } catch (err) {
    res.status(500).send("Error loading cart");
  }
};
```

#### **Explanation**:

1. **`addToCart`**: Adds a product to the cart and redirects to the cart page.
2. **`removeFromCart`**: Removes a product from the cart and redirects to the cart page.
3. **`getCart`**: Retrieves the cart data and renders the cart view.

---

### **3. Add Routes for Cart Operations**

Create a new route for managing cart-related operations.

**`routes/cartRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// Add product to cart
router.post("/cart", cartController.addToCart);

// Remove product from cart
router.post("/cart/remove", cartController.removeFromCart);

// View cart
router.get("/cart", cartController.getCart);

module.exports = router;
```

---

### **4. Create a Cart View**

Add a new view to display the cart’s contents.

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

- **Product List**: Displays the product ID and quantity for each item in the cart.
- **Remove Button**: Submits a form to remove the product from the cart.
- **Empty Cart Message**: Displays a message if the cart is empty.

---

### **5. Test the Cart Functionality**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Add Products to the Cart**:

   - Go to a product’s detail page (e.g., `/products/1`) and click **“Add to Cart”**.

3. **View the Cart**:

   - Visit [http://localhost:3000/cart](http://localhost:3000/cart).
   - The product should appear in the cart.

4. **Remove a Product**:

   - Click the **“Remove”** button next to a product in the cart.
   - The product should be removed.

5. **Verify `cart.json`**:
   - Check that the `cart.json` file reflects the cart’s current state.

---

### **Summary**

In this lesson, you:

1. Expanded the **Cart Model** to handle adding, removing, and retrieving products.
2. Updated the **cart controller** to support these operations.
3. Created routes for managing the cart.
4. Added a **cart view** to display the cart’s contents.
5. Tested the cart functionality, ensuring products can be added and removed.

---

### 🚀 **Next Step**: In the next lesson, we’ll explore using **query parameters** to enhance our application’s routes! 💻
