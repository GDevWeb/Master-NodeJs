# Section 8: Optional - Enhancing the App

## **110. Registering the Routes**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602986#overview)
- [Udemy - code](code/02-registering-the-routes.zip)

---

### **Objective**

In this lesson, we'll ensure that all the necessary **shop-related routes** are properly registered and set up in our Express.js application. We'll handle routes for displaying the shop, adding products, editing products, and deleting products.

---

### **Step-by-Step Guide**

#### **1. Shop Routes**

Update the **shop routes** to cover the key functionalities: displaying products, adding products, and editing products.

**`routes/shopRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Route to display the shop (all products)
router.get("/", shopController.getShop);

// Route to display the add product form
router.get("/add-product", shopController.getAddProduct);

// Route to display the edit product form by ID
router.get("/edit-product/:id", shopController.getEditProduct);

module.exports = router;
```

---

#### **2. Product Routes**

Ensure the **product routes** handle actions related to creating, updating, and deleting products.

**`routes/productRoutes.js`**:

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to handle creating a new product (POST)
router.post("/", productController.createProduct);

// Route to handle updating a product by ID (PUT)
router.put("/:id", productController.updateProduct);

// Route to handle deleting a product by ID (DELETE)
router.delete("/:id", productController.deleteProduct);

module.exports = router;
```

---

#### **3. Ensure Controllers are Properly Set Up**

Check that your controllers are defined correctly.

1. **Shop Controller** (`controllers/shopController.js`):

   ```javascript
   const Product = require("../models/Product");

   // Display all products
   exports.getShop = async (req, res) => {
     try {
       const products = await Product.fetchAll();
       res.render("shop/index", { title: "Shop", products });
     } catch (err) {
       res.status(500).send("Error fetching products");
     }
   };

   // Display the add product form
   exports.getAddProduct = (req, res) => {
     res.render("shop/add-product", { title: "Add Product" });
   };

   // Display the edit product form by ID
   exports.getEditProduct = async (req, res) => {
     try {
       const product = await Product.findById(req.params.id);
       if (product) {
         res.render("shop/edit-product", { title: "Edit Product", product });
       } else {
         res.status(404).send("Product not found");
       }
     } catch (err) {
       res.status(500).send("Error fetching product");
     }
   };
   ```

2. **Product Controller** (`controllers/productController.js`):

   ```javascript
   const Product = require("../models/Product");

   // Create a new product
   exports.createProduct = async (req, res) => {
     try {
       const { name, price } = req.body;
       if (!name || !price) {
         return res
           .status(400)
           .json({ message: "Name and price are required" });
       }
       const newProduct = await Product.create(name, price);
       res.redirect("/");
     } catch (err) {
       res.status(500).json({ message: "Error creating product" });
     }
   };

   // Update a product by ID
   exports.updateProduct = async (req, res) => {
     try {
       const { name, price } = req.body;
       const updatedProduct = await Product.updateById(
         req.params.id,
         name,
         price
       );
       if (updatedProduct) {
         res.redirect("/");
       } else {
         res.status(404).json({ message: "Product not found" });
       }
     } catch (err) {
       res.status(500).json({ message: "Error updating product" });
     }
   };

   // Delete a product by ID
   exports.deleteProduct = async (req, res) => {
     try {
       const deletedProduct = await Product.deleteById(req.params.id);
       if (deletedProduct) {
         res.redirect("/");
       } else {
         res.status(404).json({ message: "Product not found" });
       }
     } catch (err) {
       res.status(500).json({ message: "Error deleting product" });
     }
   };
   ```

---

#### **4. Update `app.js`**

Ensure `app.js` uses the shop and product routes.

**`app.js`**:

```javascript
const express = require("express");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const shopRoutes = require("./routes/shopRoutes");

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

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

### **5. Test the Routes**

1. **Start the Server**:

   ```bash
   node app.js
   ```

2. **Visit the Following Routes**:

   - **Shop Page**:  
     [http://localhost:3000](http://localhost:3000)  
     Displays all products.

   - **Add Product Page**:  
     [http://localhost:3000/add-product](http://localhost:3000/add-product)  
     Form to add a new product.

   - **Edit Product Page**:  
     [http://localhost:3000/edit-product/1](http://localhost:3000/edit-product/1)  
     Form to edit the product with ID `1`.

3. **Test CRUD Operations**:

   - **Add a Product**: Submit the form on the **Add Product** page.
   - **Edit a Product**: Update an existing product via the **Edit Product** form.
   - **Delete a Product**: Implement a delete button/form on the shop page to test deletion.

---

### **Summary**

In this lesson, you:

1. **Registered Routes** for the shop and product functionalities.
2. Created routes for displaying, adding, and editing products.
3. Tested the routes to ensure everything works as expected.

---

### 🚀 **Next Step**: In the next lesson, we’ll focus on **storing product data** dynamically! 🛒💻
