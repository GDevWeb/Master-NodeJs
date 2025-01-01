# Section 10: SQL Introduction

## **Lesson 145: Hands-On Practice for Fetching Products**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738972#overview)
- [Udemy - code](code/02-fetching-products-time-to-practice.zip)

---

### **Objective**

In this lesson, you will practice fetching and displaying products from the database by implementing additional queries and features in the **Shop Project**.

---

### **Practice Challenges**

---

### **1. Display Only Products Above a Certain Price**

#### **Task**:

Modify the shop page to show only products priced above a certain value (e.g., `$500`).

#### **Steps**:

1. Update the Product Model:
   Add a method to fetch products based on a minimum price.

   **`models/Product.js`**:

   ```javascript
   static async fetchAbovePrice(minPrice) {
     const { rows } = await pool.query('SELECT * FROM products WHERE price > $1 ORDER BY price DESC', [minPrice]);
     return rows;
   }
   ```

2. Add a Controller Method:
   Fetch products above the specified price.

   **`controllers/productController.js`**:

   ```javascript
   exports.getProductsAbovePrice = async (req, res) => {
     const minPrice = req.query.minPrice || 0; // Default to 0 if no minPrice is provided
     try {
       const products = await Product.fetchAbovePrice(minPrice);
       res.render("shop/index", {
         title: `Products Above $${minPrice}`,
         products,
       });
     } catch (err) {
       console.error("Error fetching products above price:", err);
       res.status(500).send("Error fetching products above price");
     }
   };
   ```

3. Add a Route:
   Create a route to handle the query.

   **`routes/shopRoutes.js`**:

   ```javascript
   router.get("/products/above-price", productController.getProductsAbovePrice);
   ```

4. Test the Feature:
   Start the server and visit the URL:
   ```
   http://localhost:3000/products/above-price?minPrice=500
   ```

---

### **2. Add Pagination to the Shop Page**

#### **Task**:

Implement pagination to limit the number of products displayed per page.

#### **Steps**:

1. Update the Product Model:
   Add a method to fetch products with pagination.

   **`models/Product.js`**:

   ```javascript
   static async fetchPaginated(limit, offset) {
     const { rows } = await pool.query('SELECT * FROM products ORDER BY created_at DESC LIMIT $1 OFFSET $2', [limit, offset]);
     return rows;
   }

   static async countProducts() {
     const { rows } = await pool.query('SELECT COUNT(*) AS total FROM products');
     return rows[0].total;
   }
   ```

2. Add a Controller Method:
   Fetch products for the current page and calculate pagination details.

   **`controllers/productController.js`**:

   ```javascript
   exports.getPaginatedProducts = async (req, res) => {
     const limit = 5; // Number of products per page
     const page = parseInt(req.query.page) || 1;
     const offset = (page - 1) * limit;

     try {
       const products = await Product.fetchPaginated(limit, offset);
       const totalProducts = await Product.countProducts();
       const totalPages = Math.ceil(totalProducts / limit);

       res.render("shop/index", {
         title: "Shop - Paginated",
         products,
         currentPage: page,
         totalPages,
       });
     } catch (err) {
       console.error("Error fetching paginated products:", err);
       res.status(500).send("Error fetching paginated products");
     }
   };
   ```

3. Add a Route:
   Create a route to handle pagination.

   **`routes/shopRoutes.js`**:

   ```javascript
   router.get("/products/paginated", productController.getPaginatedProducts);
   ```

4. Update the View:
   Add pagination controls to the shop view.

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
     else
       p No products available.

     if totalPages > 1
       nav
         ul
           each page in Array(totalPages).fill().map((_, i) => i + 1)
             li
               if page === currentPage
                 | Page #{page}
               else
                 a(href=`/products/paginated?page=${page}`) Page #{page}
   ```

5. Test the Feature:
   Start the server and visit the URL:
   ```
   http://localhost:3000/products/paginated?page=1
   ```

---

### **3. Implement a Search Feature**

#### **Task**:

Add a search bar to the shop page to search for products by name.

#### **Steps**:

1. Update the Product Model:
   Add a method to search products by name.

   **`models/Product.js`**:

   ```javascript
   static async searchByName(query) {
     const { rows } = await pool.query('SELECT * FROM products WHERE name ILIKE $1', [`%${query}%`]);
     return rows;
   }
   ```

2. Add a Controller Method:
   Handle the search query.

   **`controllers/productController.js`**:

   ```javascript
   exports.searchProducts = async (req, res) => {
     const query = req.query.q || "";
     try {
       const products = await Product.searchByName(query);
       res.render("shop/index", {
         title: `Search Results for "${query}"`,
         products,
       });
     } catch (err) {
       console.error("Error searching products:", err);
       res.status(500).send("Error searching products");
     }
   };
   ```

3. Add a Route:
   Create a route for the search feature.

   **`routes/shopRoutes.js`**:

   ```javascript
   router.get("/products/search", productController.searchProducts);
   ```

4. Add a Search Bar to the View:
   Update the shop view to include a search bar.

   **`views/shop/index.pug`**:

   ```pug
   extends ../layout

   block content
     h1 #{title}

     form(action="/products/search" method="GET")
       input(type="text" name="q" placeholder="Search products")
       button(type="submit") Search

     if products.length
       ul
         each product in products
           li
             | #{product.name} - $#{product.price}
     else
       p No products found.
   ```

5. Test the Feature:
   Start the server and visit the URL:
   ```
   http://localhost:3000/products/search?q=laptop
   ```

---

### **Summary**

In this lesson, you:

1. Implemented a feature to display products above a certain price.
2. Added pagination to the shop page.
3. Created a search feature to find products by name.

These enhancements improve the usability and functionality of the **Shop Project**.
