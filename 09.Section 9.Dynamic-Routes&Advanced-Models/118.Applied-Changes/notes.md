# Section 9: Dynamic Routes & Advanced Models

## **118. Applied Changes**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12269546#overview)

---

### **Objective**

In this short lesson, we’ll review the changes made so far to ensure everything is in place before diving into dynamic routes.

---

### **Review of Applied Changes**

1. **Project Structure**:

   - Verified the presence of necessary folders and files:
     ```
     mvc-project/
     ├── app.js
     ├── controllers/
     │   ├── productController.js
     │   └── shopController.js
     ├── routes/
     │   ├── productRoutes.js
     │   └── shopRoutes.js
     ├── models/
     │   ├── Product.js
     │   └── Cart.js      <-- Placeholder
     ├── views/
     │   └── shop/
     │       ├── index.pug
     │       ├── add-product.pug
     │       ├── edit-product.pug
     │       └── product-detail.pug  <-- Placeholder
     └── data/
         └── products.json
     ```

2. **Dependencies**:

   - Confirmed that **Express** and **Pug** are installed:
     ```bash
     npm install express pug
     ```

3. **Middleware Configuration**:

   - Set up middleware in `app.js`:
     ```javascript
     app.use(express.json());
     app.use(express.urlencoded({ extended: false }));
     app.use(express.static(path.join(__dirname, "public")));
     ```

4. **Placeholder Files**:

   - Added placeholders for:
     - **Cart Model** (`models/Cart.js`)
     - **Product Detail View** (`views/shop/product-detail.pug`)

5. **Routes**:
   - Verified **shop routes** and **product routes** are correctly defined in `routes/shopRoutes.js` and `routes/productRoutes.js`.

---

### **Testing the Setup**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Following Routes**:

   - **Shop Page**: [http://localhost:3000](http://localhost:3000)
   - **Add Product Page**: [http://localhost:3000/add-product](http://localhost:3000/add-product)

3. Ensure no errors appear in the console, and the pages load correctly.

---

### **Next Steps**

Now that we’ve confirmed everything is set up properly, we’re ready to:

1. **Add the Product ID to the Path**.
2. **Extract Dynamic Parameters** to load specific product details.

---

🚀 **Let’s move on to the next lesson and start working with dynamic routes!** 💻
