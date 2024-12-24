# Section 9: Dynamic Routes & Advanced Models

## **123. Passing Data with POST Requests**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738882#overview)

---

### **Objective**

In this lesson, we’ll learn how to pass data using **POST requests** in Express.js. We'll implement a form to add a product to a shopping cart and handle the data submission using a POST route.

---

### **Step-by-Step Guide**

---

### **1. Create the Add to Cart Form**

Update the **product detail view** to include a form for adding the product to the cart.

**`views/shop/product-detail.pug`**:

```pug
extends ../layout

block content
  h1 #{product.name}

  div
    p Price: $#{product.price}
    if product.description
      p Description: #{product.description}

  form(action="/cart" method="POST")
    input(type="hidden" name="productId" value=product.id)
    button(type="submit") Add to Cart

  a(href="/") Back to Shop
```

#### **Explanation**

- **Hidden Input**: Contains the `productId`, which will be submitted with the form.
- **Submit Button**: Sends a POST request to the `/cart` route when clicked.

---

### **2. Create the Cart Controller**

Add a method to handle adding products to the cart.

**`controllers/cartController.js`**:

```javascript
const Cart = require("../models/Cart");

exports.addToCart = (req, res) => {
  const productId = req.body.productId;

  Cart.addProduct(productId);
  res.redirect("/");
};
```

#### **Explanation**:

- **`req.body.productId`**: Extracts the product ID from the POST request.
- **`Cart.addProduct(productId)`**: Calls the `addProduct` method in the `Cart` model to add the product to the cart.
- **`res.redirect('/')`**: Redirects back to the shop page after adding the product.

---

### **3. Update the Cart Model**

Add an `addProduct` method to the `Cart` model to handle adding products to a cart array.

**`models/Cart.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");

const cartPath = path.join(__dirname, "../data/cart.json");

class Cart {
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
}

module.exports = Cart;
```

#### **Explanation**:

- **Read Cart Data**: Reads the existing `cart.json` file.
- **Check for Existing Product**: Increments the quantity if the product already exists; otherwise, adds a new product.
- **Save Data**: Writes the updated cart data back to `cart.json`.

---

### **4. Add the Cart Route**

Create a route to handle the POST request for adding products to the cart.

**`routes/cartRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// Route to handle adding products to the cart
router.post("/cart", cartController.addToCart);

module.exports = router;
```

---

### **5. Register the Cart Route in `app.js`**

Update **`app.js`** to use the new cart route.

**`app.js`**:

```javascript
const express = require("express");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const shopRoutes = require("./routes/shopRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
const port = 3000;

// Set the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/", shopRoutes);
app.use("/products", productRoutes);
app.use("/", cartRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

### **6. Create `cart.json`**

Add an empty `cart.json` file in the `data` folder to store the cart data.

**`data/cart.json`**:

```json
{
  "products": []
}
```

---

### **7. Test Adding a Product to the Cart**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **View Product Details**:  
   Go to [http://localhost:3000/products/1](http://localhost:3000/products/1).

3. **Add the Product to the Cart**:  
   Click the **“Add to Cart”** button.

4. **Check `cart.json`**:  
   The product should be added to the cart:

   ```json
   {
     "products": [{ "id": "1", "quantity": 1 }]
   }
   ```

---

### **Summary**

In this lesson, you:

1. Created a **form** to add a product to the cart.
2. Handled the **POST request** in the **cart controller**.
3. Updated the **Cart Model** to save cart data in `cart.json`.
4. Added a **cart route** and registered it in `app.js`.
5. Tested the functionality to ensure products are added to the cart.

---

### 🚀 **Next Step**: In the next lesson, we’ll add a **Cart Model** and continue building out the cart functionality! 🛒💻
