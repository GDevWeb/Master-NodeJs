# Section 8: Optional - Enhancing the App

## **112. Displaying Product Data**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602992#overview)

---

### **Objective**

In this lesson, we’ll ensure that product data stored in our local JSON file is dynamically **displayed on the shop page**. We’ll fetch the data using the **Product Model** and render it using the **shop controller** and the corresponding Pug template.

---

### **Step-by-Step Guide**

#### **1. Ensure the Product Model Fetches Data**

Check that the `Product` model has a method to **fetch all products**.

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

  // Fetch all products asynchronously
  static async fetchAll() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading file:", err);
      return [];
    }
  }
}

module.exports = Product;
```

---

#### **2. Update the Shop Controller**

Ensure the `getShop` method in the **shop controller** fetches products using the `Product` model and passes them to the view.

**`controllers/shopController.js`**:

```javascript
const Product = require("../models/Product");

// Display all products in the shop
exports.getShop = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.render("shop/index", { title: "Shop", products });
  } catch (err) {
    res.status(500).send("Error fetching products");
  }
};
```

---

#### **3. Create or Update the Shop View**

Update the **Pug template** to display the list of products dynamically.

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
          a(href=`/edit-product/${product.id}`) Edit
  else
    p No products available.
```

#### **Explanation**:

- **Conditional Check**:  
  If there are products, display them as a list. If not, show a message saying **"No products available."**
- **List of Products**:  
  Each product is displayed with its **name** and **price**.
- **Edit Link**:  
  Provides a link to the **edit product** page for each product.

---

#### **4. Test the Shop Page**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:  
   Go to [http://localhost:3000](http://localhost:3000).

3. **Check the Product List**:

   - You should see a list of products displayed with their names and prices.
   - Each product should have an **"Edit"** link next to it.

4. **Add a New Product**:
   - Visit [http://localhost:3000/add-product](http://localhost:3000/add-product).
   - Add a new product using the form and submit it.
   - The new product should appear in the shop list.

---

### **Sample Output**

When you visit the shop page, you should see something like:

```
Shop

- Laptop - $999      [Edit]
- Phone - $499       [Edit]
- Tablet - $299      [Edit]
- Smartwatch - $199  [Edit]
```

---

### **Error Handling**

1. **File Read Errors**:

   - If the `products.json` file cannot be read, a **500 Internal Server Error** is displayed.

2. **No Products Available**:
   - If the `products.json` file is empty, the message **"No products available."** is shown.

---

### **Summary**

In this lesson, you:

1. Updated the **Product Model** to fetch all products from the local JSON file.
2. Enhanced the **shop controller** to fetch products and pass them to the view.
3. Updated the **shop view** to display product data dynamically.
4. Tested the shop page to ensure products are displayed correctly.

---

### 🚀 **Next Step**: In the next lesson, we’ll add functionality for **editing and deleting products**! 🛒💻
