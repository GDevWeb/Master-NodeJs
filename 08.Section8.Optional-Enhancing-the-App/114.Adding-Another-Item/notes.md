# Section 8: Optional - Enhancing the App

## **114. Adding Another Item**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602996#overview)
- [Udemy - code](code/05-adding-another-item.zip)

---

### **Objective**

In this lesson, we’ll add functionality to **add another product** to the shop after submitting the form. Instead of redirecting directly to the shop page, we’ll give users the option to **add multiple products** consecutively.

---

### **Step-by-Step Guide**

---

### **1. Update the Add Product View**

Modify the **add product form** to include a button that allows users to **add another item** after submitting the form.

**`views/shop/add-product.pug`**:

```pug
extends ../layout

block content
  h1 #{title}
  form(action="/products" method="POST")
    label(for="name") Name:
    input(type="text" name="name" required)
    label(for="price") Price:
    input(type="number" name="price" required)
    button(type="submit" name="action" value="add") Add Product
    button(type="submit" name="action" value="add-another") Add Another Product
```

#### **Explanation**:

- **Two Buttons**:
  - The first button (`Add Product`) redirects to the shop page.
  - The second button (`Add Another Product`) stays on the **add product page** to allow adding another product.
- Each button has a `name="action"` and a `value` to distinguish the action.

---

### **2. Update the Product Controller**

Modify the `createProduct` function to handle the different actions based on which button was clicked.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const action = req.body.action;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }

    await Product.create(name, price);

    if (action === "add-another") {
      res.redirect("/add-product");
    } else {
      res.redirect("/");
    }
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};
```

#### **Explanation**:

- **Action Handling**:
  - If the `action` is `'add-another'`, the user is redirected back to the **add product page** (`/add-product`).
  - Otherwise, the user is redirected to the **shop page** (`/`).

---

### **3. Test the Feature**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Go to the Add Product Page**:  
   [http://localhost:3000/add-product](http://localhost:3000/add-product)

3. **Add a Product**:

   - Fill in the **name** and **price** fields.
   - Click **“Add Product”** to add the product and go back to the shop page.
   - Click **“Add Another Product”** to add the product and stay on the add product page.

4. **Check the Shop Page**:
   - Visit [http://localhost:3000](http://localhost:3000) to verify that the new products have been added.

---

### **Summary**

In this lesson, you:

1. Added two buttons to the **add product form** to support different actions.
2. Updated the **controller** to handle the logic for adding multiple products consecutively.
3. Tested the feature to ensure users can **add products and choose to add another** or **return to the shop page**.

This enhancement improves the **user experience** by making it easier to add multiple items without navigating back and forth. 🚀

---

### 🚀 **Next Step**: In the final lesson of this section, we’ll review the **useful resources and links** to reinforce what you’ve learned! 📚
