### Section 9: Dynamic Routes & Advanced Models

#### **127. Linking to the Edit Page**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738906#overview)

---

### **Objective**

In this short lesson, we’ll ensure the **shop page** properly links to the edit product page for each product. This involves adding the "Edit" button or link that redirects to the correct route with the product ID.

---

### **Step-by-Step Guide**

---

### **1. Update the Shop View**

Add an **Edit** link for each product in the shop list.

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

  a(href="/add-product") Add a New Product
```

#### **Explanation**:

- **Dynamic Link**: The `href` attribute dynamically includes the product’s `id`, linking to `/edit-product/:id`.

---

### **2. Test the Edit Links**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Shop Page**:  
   [http://localhost:3000](http://localhost:3000)

3. **Verify Links**:

   - Each product should have an **"Edit"** link.
   - Clicking **"Edit"** should redirect to the correct URL, e.g., `/edit-product/1`.

4. **Check Pre-filled Form**:
   - On the **Edit Product Page**, the form should be pre-filled with the product’s current details.

---

### **Expected Output**

On the shop page:

```
Laptop - $999 [Edit]
Phone - $499 [Edit]
Tablet - $299 [Edit]
```

Clicking **"Edit"** redirects to:

```
http://localhost:3000/edit-product/1
```

---

### **Summary**

In this lesson, you:

1. Added **Edit links** for each product on the shop page.
2. Verified the links dynamically include the correct product ID.
3. Tested the flow to ensure users are redirected to the pre-filled edit form.

---

### 🚀 **Next Step**: In the next lesson, we’ll complete the **editing functionality** by updating the product data dynamically. 💻
