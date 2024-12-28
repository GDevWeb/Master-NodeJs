# Section 9: Dynamic Routes & Advanced Models

## **131. Displaying Cart Items on the Cart Page**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738916#overview)

---

### **Objective**

In this lesson, we’ll display detailed information about the items in the cart on the cart page. This includes fetching product details (e.g., name, price) for each item in the cart.

---

### **Step-by-Step Guide**

---

### **1. Enhance the Cart Model**

Update the **Cart model** to include a method that fetches detailed cart items by combining product data with the cart’s contents.

**`models/Cart.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");
const Product = require("./Product");

const cartPath = path.join(__dirname, "../data/cart.json");

class Cart {
  // Retrieve cart with detailed product data
  static async getCartWithDetails() {
    try {
      const data = await fs.readFile(cartPath, "utf-8");
      const cart = JSON.parse(data);

      // Use Promise.all to fetch all product details in parallel
      const detailedCart = await Promise.all(
        cart.products.map(async (item) => {
          const product = await Product.findById(item.id);
          if (product) {
            return {
              ...product,
              quantity: item.quantity,
            };
          }
          return null;
        })
      );

      // Filter out any null entries (in case some products are not found)
      return detailedCart.filter((item) => item !== null);
    } catch (err) {
      console.error("Error fetching cart details:", err);
      return [];
    }
  }
}

module.exports = Cart;
```

#### **Explanation**:

- **Fetch Product Details**: For each cart item, the product details are fetched using `Product.findById`.
- **Combine Data**: Combines product details with the quantity from the cart.

---

### **2. Update the Cart Controller**

Modify the `getCart` method to use the new `getCartWithDetails` function.

**`controllers/cartController.js`**:

```javascript
const Cart = require("../models/Cart");

// Display the cart with detailed product data
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.getCartWithDetails(); // Fetch detailed cart items
    res.render("shop/cart", { title: "Your Cart", cart });
  } catch (err) {
    res.status(500).send("Error loading cart");
  }
};
```

#### **Explanation**:

- Uses `Cart.getCartWithDetails` to fetch the cart items with detailed product information.
- Passes the detailed cart to the view.

---

### **3. Update the Cart View**

Modify the **cart view** to display detailed product information, including the name, price, and quantity.

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

#### **Explanation**:

- **Display Product Info**: Shows the product’s name, price, and quantity.
- **Total Price**: Calculates and displays the total price of all items in the cart.

---

### **4. Test the Cart Page**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Add Items to the Cart**:  
   Add products to the cart from their respective detail pages.

3. **Visit the Cart Page**:  
   Go to [http://localhost:3000/cart](http://localhost:3000/cart).

4. **Verify the Cart Details**:
   - The cart should display each product’s name, price, quantity, and the total price.

---

### **Expected Output**

**Cart Page**:

```
Your Cart

Laptop - $999 (x2) [Remove]
Phone - $499 (x1) [Remove]

Total: $2497

[Back to Shop]
```

---

### **Error Handling**

1. **Product Not Found**:

   - If a product in the cart is not found in the product list, it will be skipped in the detailed cart.

2. **Empty Cart**:

   - If the cart is empty, display the message:
     ```
     Your cart is empty.
     ```

3. **Server Errors**:
   - If an error occurs while loading the cart, return a **500 error**:
     ```
     Error loading cart
     ```

---

### **Summary**

In this lesson, you:

1. Updated the **Cart model** to fetch detailed product data for each cart item.
2. Enhanced the **cart controller** to pass detailed cart information to the view.
3. Updated the **cart view** to display product names, prices, quantities, and the total price.
4. Tested the cart page to ensure all details are displayed correctly.

---

### 🚀 **Next Step**: In the next lesson, we’ll ensure the cart updates dynamically when items are removed or added! 💻
