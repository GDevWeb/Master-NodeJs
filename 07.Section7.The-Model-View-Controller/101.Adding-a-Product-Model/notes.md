# Section 7: The Model View Controller (MVC)

## **101. Adding a Product Model (Using a Local File for Data Storage)**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602952#overview)

---

### **Objective**

In this lesson, we'll create a **Product Model** that handles data storage and retrieval using a **local file**. We'll avoid databases for now and focus on using **JSON files** to store our data.

---

### **Project Recap**

Your current project structure:

```
mvc-project/
│
├── app.js
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── models/
│   └── Product.js
└── data/
│   └── products.json   <-- New file for storing products
└── public/
```

---

### **Step-by-Step Guide**

#### **1. Create the `data` Folder and `products.json`**

Create a `data` folder and a `products.json` file to store product data.

**`data/products.json`**:

```json
[
  { "id": 1, "name": "Laptop", "price": 999 },
  { "id": 2, "name": "Phone", "price": 499 },
  { "id": 3, "name": "Tablet", "price": 299 }
]
```

---

#### **2. Create the Product Model**

Update the **`models/Product.js`** to handle CRUD operations using the local JSON file.

**`models/Product.js`**:

```js
const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(\_\_dirname, '../data/products.json');

class Product {
constructor(id, name, price) {
this.id = id;
this.name = name;
this.price = price;
}

// Fetch all products asynchronously
static async fetchAll() {
try {
const data = await fs.readFile(filePath, 'utf-8');
return JSON.parse(data);
} catch (err) {
console.error('Error reading file:', err);
return [];
}
}

// Find a product by ID asynchronously
static async findById(id) {
const products = await this.fetchAll();
return products.find((product) => product.id === parseInt(id));
}

// Create a new product asynchronously
static async create(name, price) {
const products = await this.fetchAll();
const newProduct = new Product(products.length + 1, name, price);
products.push(newProduct);
await this.saveProductsToFile(products);
return newProduct;
}

// Update a product by ID asynchronously
static async updateById(id, name, price) {
const products = await this.fetchAll();
const productIndex = products.findIndex((product) => product.id === parseInt(id));

    if (productIndex !== -1) {
      products[productIndex].name = name || products[productIndex].name;
      products[productIndex].price = price || products[productIndex].price;
      await this.saveProductsToFile(products);
      return products[productIndex];
    }

    return null;

}

// Delete a product by ID asynchronously
static async deleteById(id) {
let products = await this.fetchAll();
const productIndex = products.findIndex((product) => product.id === parseInt(id));

    if (productIndex !== -1) {
      const deletedProduct = products.splice(productIndex, 1);
      await this.saveProductsToFile(products);
      return deletedProduct[0];
    }

    return null;

}

// Save products to the file asynchronously
static async saveProductsToFile(products) {
try {
await fs.writeFile(filePath, JSON.stringify(products, null, 2));
} catch (err) {
console.error('Error writing to file:', err);
}
}
}

module.exports = Product;
```

---

### **Explanation of the Product Model**

1. **`getProductsFromFile()`**:

   - Reads the product data from `products.json` and parses it.

2. **`saveProductsToFile(products)`**:

   - Writes the updated product data back to `products.json`.

3. **`fetchAll()`**:

   - Returns all products.

4. **`findById(id)`**:

   - Finds and returns a product by its ID.

5. **`create(name, price)`**:

   - Creates a new product, assigns it a unique ID, and saves it.

6. **`updateById(id, name, price)`**:

   - Updates a product’s name and/or price by its ID and saves the changes.

7. **`deleteById(id)`**:
   - Deletes a product by its ID and saves the changes.

---

### **3. Ensure the Controller Uses the Updated Model**

Check that your **`controllers/productController.js`** is still using the correct methods from the Product model.

**`controllers/productController.js`**:

```javascript
const Product = require("../models/Product");

// Fetch all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }
    const newProduct = await Product.create(name, price);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedProduct = await Product.updateById(req.params.id, name, price);
    if (updatedProduct) {
      res.json(updatedProduct);
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
      res.json({ message: "Product deleted successfully", deletedProduct });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
```

---

### **4. Run the Server**

Start the server:

```bash
node app.js
```

---

### **5. Test the CRUD Operations**

Use **Postman** or a similar tool to test these endpoints:

1. **Fetch All Products**

   - **GET** `http://localhost:3000/products`

2. **Fetch a Product by ID**

   - **GET** `http://localhost:3000/products/1`

3. **Create a New Product**

   - **POST** `http://localhost:3000/products`
   - **Body** (JSON):
     ```json
     {
       "name": "Smartwatch",
       "price": 199
     }
     ```

4. **Update a Product by ID**

   - **PUT** `http://localhost:3000/products/2`
   - **Body** (JSON):
     ```json
     {
       "name": "Updated Phone",
       "price": 599
     }
     ```

5. **Delete a Product by ID**
   - **DELETE** `http://localhost:3000/products/3`

---

### **Summary**

In this lesson, you:

1. **Created a Product Model** that reads and writes data to a local JSON file.
2. Implemented **CRUD operations** in the Product model.
3. Ensured the **controllers** use the Product model to handle requests.
4. Tested the endpoints for **Create**, **Read**, **Update**, and **Delete** operations.

---

### 🚀 **Next Steps**

In the next lesson, we'll explore how to handle **error handling and validation** more effectively within our controllers and models. 💻
