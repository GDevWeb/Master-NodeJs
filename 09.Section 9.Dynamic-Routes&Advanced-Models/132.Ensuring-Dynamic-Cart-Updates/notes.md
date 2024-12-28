# Section 9: Dynamic Routes & Advanced Models

## **132. Ensuring Dynamic Cart Updates**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738918#overview)

---

### **Objective**

In this lesson, we’ll ensure the cart updates dynamically whenever items are added or removed. This involves validating the data, recalculating totals, and reflecting the changes in the cart view.

---

### **Step-by-Step Guide**

---

### **1. Revalidate Cart Data on Updates**

Update the **Cart model** to ensure the cart data is always consistent after adding or removing items.

**`models/Cart.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");
const Product = require("./Product");

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

      // Ensure the product exists in the database
      const product = await Product.findById(productId);
      if (!product) {
        console.log(`Product with ID ${productId} does not exist.`);
        return;
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
      let cart = { products: [] };

      // Read existing cart data
      try {
        const data = await fs.readFile(cartPath, "utf-8");
        cart = JSON.parse(data);
      } catch (err) {
        console.log("No existing cart found, creating a new one.");
      }

      // Filter out the product to be removed
      const updatedProducts = cart.products.filter(
        (prod) => prod.id !== productId
      );

      cart.products = updatedProducts;

      // Save the updated cart data
      await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
    } catch (err) {
      console.error("Error removing product from cart:", err);
    }
  }

  // Fetch detailed cart data
  static async getCartWithDetails() {
    try {
      const data = await fs.readFile(cartPath, "utf-8");
      const cart = JSON.parse(data);

      const detailedCart = [];
      for (const item of cart.products) {
        const product = await Product.findById(item.id);
        if (product) {
          detailedCart.push({
            ...product,
            quantity: item.quantity,
          });
        }
      }
      return detailedCart;
    } catch (err) {
      console.error("Error fetching cart details:", err);
      return [];
    }
  }
}

module.exports = Cart;
```

---

### **2. Validate Data in the Cart Controller**

Ensure the **cart controller** handles cases where invalid data might be submitted.

**`controllers/cartController.js`**:

```javascript
const Cart = require("../models/Cart");

// Add a product to the cart
exports.addToCart = async (req, res) => {
  try {
    const productId = req.body.productId;
    if (!productId) {
      return res.status(400).send("Product ID is required.");
    }

    await Cart.addProduct(productId);
    res.redirect("/cart");
  } catch (err) {
    res.status(500).send("Error adding product to cart");
  }
};

// Remove a product from the cart
exports.removeFromCart = async (req, res) => {
  try {
    const productId = req.body.productId;
    if (!productId) {
      return res.status(400).send("Product ID is required.");
    }

    await Cart.removeProduct(productId);
    res.redirect("/cart");
  } catch (err) {
    res.status(500).send("Error removing product from cart");
  }
};

// Get cart with details
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.getCartWithDetails();
    res.render("shop/cart", { title: "Your Cart", cart });
  } catch (err) {
    res.status(500).send("Error loading cart");
  }
};
```

---

### **3. Update the Cart View**

Ensure the cart view dynamically reflects the current cart data.

**`views/shop/cart.pug`**:

```pug
extends ../layout

block content
  h1 #{title}

  if cart.length
    ul
      each item in cart
        li
          | #{item.name} - $#{item.price} (x#{item.quantity})
          form(action="/cart/remove" method="POST" style="display:inline")
            input(type="hidden" name="productId" value=item.id)
            button(type="submit") Remove
    p Total: $#{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
  else
    p Your cart is empty.

  a(href="/") Back to Shop
```

---

### **4. Test Dynamic Updates**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Test Adding Items**:

   - Add items to the cart from their respective detail pages.
   - Verify that the cart updates dynamically with the new items.

3. **Test Removing Items**:

   - Remove items from the cart using the **Remove** button.
   - Ensure the cart reflects the changes immediately.

4. **Check Total**:
   - Verify that the total price is recalculated correctly after each update.

---

### **Expected Output**

**Before Adding Items**:

```
Your cart is empty.
```

**After Adding Items**:

```
Your Cart

Laptop - $999 (x2) [Remove]
Phone - $499 (x1) [Remove]

Total: $2497
```

**After Removing Items**:

```
Your Cart

Phone - $499 (x1) [Remove]

Total: $499
```

---

### **Error Handling**

1. **Invalid Product ID**:

   - Logs an error to the console if the product doesn’t exist.

2. **Empty Cart**:

   - Displays:
     ```
     Your cart is empty.
     ```

3. **Invalid Form Submission**:
   - Returns a **400 error** if no product ID is provided:
     ```
     Product ID is required.
     ```

---

### **Summary**

In this lesson, you:

1. Enhanced the **Cart model** to revalidate data on updates.
2. Improved the **cart controller** to handle invalid inputs.
3. Updated the **cart view** to dynamically reflect changes.
4. Tested the cart to ensure all updates are handled correctly.

---

### 🚀 **Next Step**: In the next lesson, we’ll fix any potential bugs and refine the overall cart functionality! 🛒
