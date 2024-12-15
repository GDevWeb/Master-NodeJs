# Section 7: The Model View Controller (MVC)

## **98. What is the MVC?**

- [Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602946#overview)

---

### **What is MVC?**

**MVC (Model-View-Controller)** is a **design pattern** used to organize the structure of web applications. In the context of **Node.js and Express**, it helps you separate your application into three main components:

1. **Model**: Manages the application's data and business logic.
2. **View**: Responsible for sending responses to the client (e.g., JSON data).
3. **Controller**: Handles incoming requests, processes data via the Model, and sends responses to the client.

---

### **Why Use the MVC Pattern?**

1. **Separation of Concerns**:
   - Each component has a specific role, making your code cleaner and easier to understand.
2. **Maintainability**:

   - Easier to update or debug parts of the application without affecting other parts.

3. **Scalability**:

   - Helps structure larger applications, making it easier to add new features.

4. **Team Collaboration**:
   - Developers can work on different parts (Models, Controllers) simultaneously.

---

### **Components of MVC**

#### 1. **Model**

The **Model** is responsible for:

- **Managing Data**: Defining the structure of your data (e.g., database schemas).
- **Business Logic**: Handling operations like validation, queries, and data processing.

**Example Model in Node.js (using a simple JavaScript object)**:

```javascript
// models/Product.js
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static fetchAll() {
    return [new Product(1, "Laptop", 999), new Product(2, "Phone", 499)];
  }
}

module.exports = Product;
```

#### 2. **Controller**

The **Controller** is responsible for:

- **Handling Requests**: Receiving incoming HTTP requests.
- **Processing Data**: Using the Model to retrieve or update data.
- **Sending Responses**: Sending the appropriate response back to the client.

**Example Controller in Node.js and Express**:

```javascript
// controllers/productController.js
const Product = require("../models/Product");

exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.json(products);
};
```

#### 3. **View**

In the context of a pure Node.js and Express application (without templating engines), the **View** refers to the **response** sent to the client, which is often in **JSON format**.

**Example Route Using the Controller**:

```javascript
// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products", productController.getProducts);

module.exports = router;
```

#### **Putting It All Together**

**`app.js`**:

```javascript
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Use the product routes
app.use("/", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

### **Request Flow in MVC**

1. **Client Request**:  
   A user makes a request to `http://localhost:3000/products`.

2. **Controller**:  
   The `productController.getProducts` function handles the request.

3. **Model**:  
   The controller uses the `Product` model to fetch the data.

4. **Response**:  
   The controller sends the product data as a JSON response to the client.

---

### **Example Response**

When you visit `http://localhost:3000/products`, the server responds with:

```json
[
  { "id": 1, "name": "Laptop", "price": 999 },
  { "id": 2, "name": "Phone", "price": 499 }
]
```

---

### **Summary**

- **Model**: Manages data and business logic.
- **Controller**: Handles requests and interacts with the model.
- **View**: The response sent to the client (e.g., JSON).

Using the **MVC pattern** helps keep your Express applications organized, maintainable, and scalable.

---

🛠️ **Next Step**: Learn how to **set up an MVC project structure** in your Node.js and Express application! 🚀
