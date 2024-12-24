# Section 9: Dynamic Routes & Advanced Models

## **122. Rendering the Product Detail View**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738876#overview)
- [Udemy - code](code/03-rendering-the-product-detail-view.zip)

---

### **Objective**

In this lesson, we’ll ensure that the product detail page is rendered correctly with dynamic product data. We’ll also improve the presentation of the product detail view to provide a better user experience.

---

### **Step-by-Step Guide**

---

### **1. Update the Product Detail View**

We’ll enhance the **`product-detail.pug`** template to display detailed information about the product, such as the product name, price, and a description.

**`views/shop/product-detail.pug`**:

```pug
extends ../layout

block content
  h1 #{product.name}

  div
    p Price: $#{product.price}
    if product.description
      p Description: #{product.description}

  a(href="/") Back to Shop
```

#### **Explanation**:

- **Product Name**: Displayed as a header (`h1`).
- **Price**: Displayed as a paragraph (`p`).
- **Description**: Conditionally displayed if the `description` field exists.
- **Back to Shop Link**: Provides a link back to the main shop page.

---

### **2. Update the Product Data**

Ensure your **`products.json`** file contains sample data with descriptions.

**`data/products.json`**:

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 999,
    "description": "A powerful laptop for work and play."
  },
  {
    "id": 2,
    "name": "Phone",
    "price": 499,
    "description": "A smartphone with a great camera."
  },
  {
    "id": 3,
    "name": "Tablet",
    "price": 299,
    "description": "A tablet for browsing and reading."
  }
]
```

---

### **3. Update the Product Model (Optional)**

If your products do not yet include a description, update the `Product` model’s constructor to handle a `description` field.

**`models/Product.js`**:

```javascript
class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  // Other methods remain unchanged
}
```

---

### **4. Test the Product Detail View**

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
   - The product’s **name**, **price**, and **description** should be displayed.

---

### **Expected Output**

When visiting `http://localhost:3000/products/1`, you should see:

```
Laptop

Price: $999
Description: A powerful laptop for work and play.

[Back to Shop]
```

---

### **Error Handling**

1. **Missing Description**:

   - If a product doesn’t have a description, the description section will be omitted due to the conditional check.

2. **Invalid Product ID**:
   - If the product ID is invalid or doesn’t exist, a **404 error** should be displayed.

---

### **Summary**

In this lesson, you:

1. Enhanced the **product detail view** to display the product’s name, price, and description.
2. Updated the **product data** to include descriptions.
3. Tested the functionality to ensure product details are rendered correctly.

---

### 🚀 **Next Step**: In the next lesson, we’ll learn how to **pass data with POST requests** to enhance interactivity and data submission! 💻
