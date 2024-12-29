# Section

## **chapter**

- [Udemy]()
- [Udemy - code]()

---

Adding an image for each product is a fantastic idea! It enhances the user experience and makes the shop more visually appealing. Here’s how you can add images for your products step by step:

---

### **1. Update the Product Model**

Include an `imageUrl` property for each product. Modify your `products.json` file to include URLs for product images.

**`data/products.json`**:

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 999,
    "description": "A powerful laptop for work and play.",
    "imageUrl": "https://via.placeholder.com/150?text=Laptop"
  },
  {
    "id": 2,
    "name": "Phone",
    "price": 499,
    "description": "A smartphone with a great camera.",
    "imageUrl": "https://via.placeholder.com/150?text=Phone"
  },
  {
    "id": 3,
    "name": "Tablet",
    "price": 299,
    "description": "A tablet for browsing and reading.",
    "imageUrl": "https://via.placeholder.com/150?text=Tablet"
  }
]
```

---

### **2. Update the Product Detail View**

Modify the **product detail view** to display the product’s image.

**`views/shop/product-detail.pug`**:

```pug
extends ../layout

block content
  h1 #{product.name}

  div
    img(src=product.imageUrl alt=`Image of ${product.name}` width="300")
    p Price: $#{product.price}
    if product.description
      p Description: #{product.description}

  form(action="/cart" method="POST")
    input(type="hidden" name="productId" value=product.id)
    button(type="submit") Add to Cart

  a(href="/") Back to Shop
```

#### **Explanation**:

- **Image Tag**: Uses the `imageUrl` property to display the product’s image.

---

### **3. Update the Shop View**

Modify the **shop view** to include images in the product list.

**`views/shop/index.pug`**:

```pug
extends ../layout

block content
  h1 #{title}

  if products.length
    ul
      each product in products
        li
          img(src=product.imageUrl alt=`Image of ${product.name}` width="100")
          | #{product.name} - $#{product.price}
          a(href=`/edit-product/${product.id}`) Edit
          form(action=`/products/${product.id}/delete` method="POST" style="display:inline")
            button(type="submit") Delete
  else
    p No products available.

  a(href="/add-product") Add a New Product
```

#### **Explanation**:

- Adds a thumbnail-sized image for each product in the shop list.

---

### **4. Update the Add/Edit Product Forms**

Allow users to specify an image URL when adding or editing a product.

**`views/shop/edit-product.pug`**:

```pug
extends ../layout

block content
  h1 #{title}

  form(action=`/products/${product.id}/update` method="POST")
    label(for="name") Name:
    input(type="text" name="name" value=product.name required)

    label(for="price") Price:
    input(type="number" name="price" value=product.price required)

    label(for="imageUrl") Image URL:
    input(type="text" name="imageUrl" value=product.imageUrl required)

    button(type="submit") Update Product

  a(href="/") Back to Shop
```

---

### **5. Update the Controller to Handle Image URLs**

Ensure the controller saves and updates the `imageUrl` when adding or editing products.

**`controllers/productController.js`**:

```javascript
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price, imageUrl } = req.body;

    const updatedProduct = await Product.updateById(
      productId,
      name,
      price,
      imageUrl
    );

    if (updatedProduct) {
      res.redirect("/");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error updating product");
  }
};
```

**Update Product Model**:

```javascript
static async updateById(id, name, price, imageUrl) {
  try {
    const products = await this.fetchAll();
    const productIndex = products.findIndex((product) => product.id === parseInt(id));

    if (productIndex !== -1) {
      products[productIndex].name = name || products[productIndex].name;
      products[productIndex].price = price || products[productIndex].price;
      products[productIndex].imageUrl = imageUrl || products[productIndex].imageUrl;

      await fs.writeFile(filePath, JSON.stringify(products, null, 2));
      return products[productIndex];
    }

    return null; // Product not found
  } catch (err) {
    console.error('Error updating product:', err);
    throw err;
  }
}
```

---

### **6. Test the Updates**

1. **Add New Products**:
   - Add a new product with an image URL through the "Add Product" form.
2. **Edit Existing Products**:
   - Update the `imageUrl` for an existing product using the edit form.
3. **View Products**:
   - Verify images are displayed on the **shop page** and **product detail page**.

---

### **Expected Output**

**Shop Page**:

```
[Image of Laptop] Laptop - $999 [Edit] [Delete]
[Image of Phone] Phone - $499 [Edit] [Delete]
[Image of Tablet] Tablet - $299 [Edit] [Delete]
```

**Product Detail Page**:

```
[Image of Laptop]
Laptop
Price: $999
Description: A powerful laptop for work and play.

[Add to Cart] [Back to Shop]
```

---

### **Summary**

In this enhancement, you:

1. Added support for product images in `products.json`.
2. Displayed images on the **shop page** and **product detail page**.
3. Allowed users to manage images through the add and edit forms.
4. Ensured controllers and models handled the new `imageUrl` property.

Let me know if you need further assistance or adjustments! 🚀
