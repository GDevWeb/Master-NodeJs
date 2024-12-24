# Section 9: Dynamic Routes & Advanced Models

## **119. Adding the Product ID to the Path**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738854#overview)

---

### **Objective**

In this lesson, we’ll add **dynamic routes** to our application by incorporating the **product ID** into the path. This will allow us to fetch and display details for a specific product.

---

### **Step-by-Step Guide**

---

### **1. Update the Shop Controller**

Add a new method in the **shop controller** to handle displaying product details based on the product ID.

**`controllers/shopController.js`**:

```javascript
const Product = require("../models/Product");

// Display product details by ID
exports.getProductDetail = async (req, res) => {
  try {
    const productId = req.params.id;
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

- **`req.params.id`**: Extracts the product ID from the URL.
- **`Product.findById(productId)`**: Fetches the product with the matching ID.
- **`res.render`**: Renders the `product-detail` view with the product data.
- Returns a **404** error if the product is not found.

---

### **2. Update the Shop Routes**

Add a new route to handle requests for product details.

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Route to display the shop
router.get("/", shopController.getShop);

// Route to display the add product form
router.get("/add-product", shopController.getAddProduct);

// Route to display the edit product form by ID
router.get("/edit-product/:id", shopController.getEditProduct);

// Route to display product details by ID
router.get("/products/:id", shopController.getProductDetail);

module.exports = router;
```

#### **Explanation**:

- **Dynamic Route**:  
  `'/products/:id'` defines a route with a dynamic parameter `:id`.

---

### **3. Update the Shop View**

Add a **link to the product details page** for each product in the shop view.

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
          a(href=`/products/${product.id}`) View Details
          a(href=`/edit-product/${product.id}`) Edit
  else
    p No products available.
```

#### **Explanation**:

- The **"View Details"** link directs users to `/products/:id`, passing the product ID dynamically.

---

### **4. Create the Product Detail View**

Create a new Pug template to display the product details.

**`views/shop/product-detail.pug`**:

```pug
extends ../layout

block content
  h1 #{title}
  p Name: #{product.name}
  p Price: $#{product.price}
  a(href="/") Back to Shop
```

---

### **5. Test the Dynamic Route**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:  
   [http://localhost:3000](http://localhost:3000)

3. **View Product Details**:
   - Click the **"View Details"** link next to a product.
   - You should see the **Product Detail** page displaying the product’s name and price.

---

### **Expected Output**

On the **Shop Page**:

```
Laptop - $999 [View Details] [Edit]
Phone - $499  [View Details] [Edit]
```

On clicking **"View Details"**:

```
Product Detail

Name: Laptop
Price: $999

[Back to Shop]
```

---

### **Summary**

In this lesson, you:

1. Added a dynamic route to handle **product details by ID**.
2. Updated the **shop controller** to fetch and display product details.
3. Created a **product detail view**.
4. Added a **"View Details"** link in the shop view.

---

### 🚀 **Next Step**: In the next lesson, we’ll focus on **extracting dynamic parameters** from the route to further refine our product detail functionality! 💻
