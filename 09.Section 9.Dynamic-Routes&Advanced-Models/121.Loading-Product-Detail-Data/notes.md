# Section 9: Dynamic Routes & Advanced Models

## **121. Loading Product Detail Data**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738868#overview)
- [Udemy - code](code/02-loading-product-detail-data.zip)

---

### **Objective**

In this lesson, we’ll load detailed product data based on the **dynamic product ID** and render it in the view. We will update the **Product Model** to fetch specific product details and ensure the product data is passed to the view for display.

---

### **Step-by-Step Guide**

---

### **1. Update the Product Model**

Ensure the `Product` model has a method for finding a product by ID.

**`models/Product.js`**:

```javascript
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

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
    try {
      const products = await this.fetchAll();
      return products.find((product) => product.id === parseInt(id));
    } catch (err) {
      console.error("Error finding product:", err);
      return null;
    }
  }
}

module.exports = Product;
```

#### **Explanation**:

- **`fetchAll()`** reads the `products.json` file and returns all products.
- **`findById(id)`** searches for a product with the matching `id` and returns the product if found.

---

### **2. Update the Shop Controller**

Update the **`getProductDetail`** method to fetch and pass the product details to the view.

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
    console.error("Error fetching product details:", err);
    res.status(500).send("Error fetching product details");
  }
};
```

#### **Explanation**:

- **`Product.findById(productId)`** retrieves the product with the given `id`.
- **`res.render('shop/product-detail', { title: 'Product Detail', product })`** renders the `product-detail` view with the product data.

---

### **3. Create or Update the Product Detail View**

Ensure the **`product-detail.pug`** template displays the product details.

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

### **4. Test the Product Detail Page**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:  
   [http://localhost:3000](http://localhost:3000)

3. **View Product Details**:

   - Click the **"View Details"** link next to a product.
   - This should take you to a URL like:
     ```
     http://localhost:3000/products/1
     ```

4. **Verify the Product Detail Page**:
   - You should see the product’s **name** and **price** displayed.

---

### **Example Output**

**URL**: `http://localhost:3000/products/1`

```
Product Detail

Name: Laptop
Price: $999

[Back to Shop]
```

---

### **Error Handling**

1. **Invalid Product ID**:

   - If the product ID is invalid, a **404 error** message is displayed:
     ```
     Product not found
     ```

2. **Server Errors**:
   - If an error occurs during data fetching, a **500 error** message is displayed:
     ```
     Error fetching product details
     ```

---

### **Summary**

In this lesson, you:

1. Updated the **Product Model** to fetch a product by ID.
2. Updated the **shop controller** to load product detail data based on the dynamic ID.
3. Created a **product detail view** to display the product’s details.
4. Tested the functionality and ensured **error handling** works as expected.

---

### 🚀 **Next Step**: In the next lesson, we’ll render the **product detail view** and enhance its presentation! 💻
