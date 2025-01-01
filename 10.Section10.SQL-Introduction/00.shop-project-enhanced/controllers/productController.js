const Cart = require("../models/Cart");
const Product = require("../models/Product");
const pool = require("../config/db");

// Fetch all products
exports.getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Error fetching products");
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
    res.status(500).json({ message: "Error fetching product", error: err });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, imageUrl } = req.body;
    if (!name || !price || !imageUrl) {
      return res
        .status(400)
        .json({ message: "Name, price, and image URL are required" });
    }
    await Product.create(name, price, imageUrl);
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    console.info(typeof productID, "from productController");
    const { name, price, imageUrl } = req.body;

    const updatedProduct = await Product.updateById(
      productID,
      name,
      price,
      imageUrl
    );

    if (updatedProduct) {
      res.redirect("/");
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send("Error updating product");
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.deleteById(productId);

    res.redirect("/");

    if (deletedProduct) {
      await Cart.removeProduct(productId);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error deleting product");
  }
};
