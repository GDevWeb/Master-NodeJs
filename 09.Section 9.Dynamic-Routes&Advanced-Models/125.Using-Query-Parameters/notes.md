# Section 9: Dynamic Routes & Advanced Models

## **125. Using Query Parameters**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738904#overview)
- [Udemy - code](code/05-pre-populating-the-edit-product-page.zip)

---

### **Objective**

In this lesson, we’ll explore **query parameters** in Express.js. Query parameters allow you to pass additional data to a route in the URL. We’ll implement a feature that lets users filter or modify behavior based on these parameters.

---

### **What Are Query Parameters?**

- Query parameters are appended to a URL after a `?` symbol.
- Example:

  ```
  /cart?sort=asc
  ```

- In Express, query parameters are accessed via `req.query`.

---

### **Step-by-Step Guide**

---

### **1. Modify the Cart Controller to Use Query Parameters**

Let’s enhance the `getCart` method to handle query parameters, such as sorting the cart’s products.

**`controllers/cartController.js`**:

```javascript
const Cart = require("../models/Cart");

exports.getCart = async (req, res) => {
  try {
    const sort = req.query.sort; // Extract the query parameter
    let cart = await Cart.getCart();

    // Sort products if a sort query is provided
    if (sort === "asc") {
      cart.products.sort((a, b) => a.id - b.id);
    } else if (sort === "desc") {
      cart.products.sort((a, b) => b.id - a.id);
    }

    res.render("shop/cart", { title: "Your Cart", cart });
  } catch (err) {
    res.status(500).send("Error loading cart");
  }
};
```

#### **Explanation**:

- **`req.query.sort`**: Retrieves the `sort` query parameter from the URL.
- **Sorting Logic**:
  - Sorts the products by ID in ascending order if `sort=asc`.
  - Sorts in descending order if `sort=desc`.

---

### **2. Update the Cart View with Sorting Links**

Add links to the cart view for sorting products by ID.

**`views/shop/cart.pug`**:

```pug
extends ../layout

block content
  h1 #{title}

  p
    a(href="/cart?sort=asc") Sort by ID (Ascending)
    |
    a(href="/cart?sort=desc") Sort by ID (Descending)

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

- **Sorting Links**:
  - Clicking **"Sort by ID (Ascending)"** appends `?sort=asc` to the URL.
  - Clicking **"Sort by ID (Descending)"** appends `?sort=desc` to the URL.

---

### **3. Test the Query Parameters**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Add Products to the Cart**:  
   Add multiple products to the cart from their respective detail pages.

3. **Visit the Cart Page**:  
   Go to [http://localhost:3000/cart](http://localhost:3000/cart).

4. **Sort the Cart**:
   - Click **"Sort by ID (Ascending)"** and verify the products are sorted by ID in ascending order.
   - Click **"Sort by ID (Descending)"** and verify the products are sorted by ID in descending order.

---

### **Expected Output**

When visiting the cart with `?sort=asc`:

```
Your Cart

Product ID: 1 - Quantity: 1
Product ID: 2 - Quantity: 1
Product ID: 3 - Quantity: 1

[Sort by ID (Ascending)] [Sort by ID (Descending)]
```

When visiting the cart with `?sort=desc`:

```
Your Cart

Product ID: 3 - Quantity: 1
Product ID: 2 - Quantity: 1
Product ID: 1 - Quantity: 1

[Sort by ID (Ascending)] [Sort by ID (Descending)]
```

---

### **Summary**

In this lesson, you:

1. Learned how to use **query parameters** with `req.query`.
2. Enhanced the **cart controller** to sort products based on the `sort` query parameter.
3. Updated the **cart view** with links to trigger sorting.
4. Tested the feature to ensure query parameters work as expected.

---

### 🚀 **Next Step**: In the next lesson, we’ll focus on **pre-populating the edit product page with data** for better user experience! 💻
