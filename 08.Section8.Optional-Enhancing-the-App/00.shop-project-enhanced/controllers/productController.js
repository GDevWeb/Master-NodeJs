const Product = require("../models/Product");

// Fetch all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
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

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedProduct = await Product.updateById(req.params.id, name, price);
    if (updatedProduct) {
      res.redirect("/");
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating product", error: err });
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
    res.status(500).json({ message: "Error deleting product", error: err });
  }
};
