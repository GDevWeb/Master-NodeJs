# Section 9: Dynamic Routes & Advanced Models

## **120. Extracting Dynamic Params**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738862#overview)
- [Udemy - code](code/01-extracting-dynamic-params.zip)

---

### **Objective**

In this lesson, we’ll explore how to extract **dynamic parameters** from the URL in Express.js. Specifically, we'll learn how to retrieve and use these parameters in our controllers to fetch and display specific product data.

---

### **Understanding Dynamic Params**

Dynamic parameters in Express are parts of a route that can change. For example:

```
/products/:id
```

- **`:id`** is a dynamic parameter.
- If you access `/products/5`, `5` is the value of `:id`.

You can extract this parameter using `req.params`.

---

### **Step-by-Step Guide**

#### **1. Dynamic Route in `shopRoutes.js`**

Ensure you have a dynamic route set up for product details.

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Route to display product details by ID
router.get("/products/:id", shopController.getProductDetail);

module.exports = router;
```

---

#### **2. Extract Dynamic Params in the Controller**

In the **shop controller**, extract the dynamic `id` parameter using `req.params`.

**`controllers/shopController.js`**:

```javascript
const Product = require("../models/Product");

// Display product details by ID
exports.getProductDetail = async (req, res) => {
  try {
    const productId = req.params.id; // Extract the dynamic parameter
    console.log(`Product ID: ${productId}`); // Log to check the value

    const product = await Product.findById(productId);
    if (product) {
      res.render("shop/product-detail", { title: "Product Detail", product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching product details");
  }
};
```

#### **Explanation**:

- **`req.params.id`**: Extracts the `id` parameter from the URL.
- The `console.log` statement helps you verify that the correct `id` is being received.
- The `findById` method retrieves the product with the matching `id`.

---

#### **3. Test the Dynamic Parameter Extraction**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:  
   [http://localhost:3000](http://localhost:3000)

3. **Click on a Product’s "View Details" Link**:

   - This should take you to a URL like:
     ```
     http://localhost:3000/products/1
     ```

4. **Check the Console**:

   - You should see the logged output:
     ```
     Product ID: 1
     ```

5. **Verify the Product Detail Page**:
   - The product details should display correctly.
   - If the `id` does not match any product, you should see a **404 error** message.

---

### **4. Error Handling**

Add error handling to manage invalid or missing IDs.

**`controllers/shopController.js`**:

```javascript
exports.getProductDetail = async (req, res) => {
  try {
    const productId = req.params.id;

    // Check if the productId is a valid number
    if (isNaN(productId)) {
      return res.status(400).send("Invalid product ID");
    }

    const product = await Product.findById(productId);
    if (product) {
      res.render("shop/product-detail", { title: "Product Detail", product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching product details");
  }
};
```

#### **Explanation**:

- **Check for Valid ID**:
  - If `productId` is not a number, return a **400 Bad Request** error.
- **404 Error**:
  - If the product is not found, return a **404 Not Found** error.

---

### **Summary**

In this lesson, you:

1. Learned how to **extract dynamic parameters** from the URL using `req.params`.
2. Updated the **shop controller** to retrieve the product ID and fetch the relevant product.
3. Added **error handling** for invalid or missing product IDs.
4. Tested the dynamic route and verified the ID extraction.

---

### 🚀 **Next Step**: In the next lesson, we’ll load **product detail data** and display it dynamically in the view! 💻
