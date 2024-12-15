const Product = require("../models/Product");

/* constantes */
const errorNotFound = { message: "Product not found" };
const errorServer = { message: "Error fetching products" };

// Fetch all product
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.json(products);
  } catch (error) {
    res.status(500).json(errorServer);
  }
};
// Fetch a single product using ID :
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json(errorNotFound);
    }
  } catch (error) {
    res.status(500).json(errorServer);
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }
    const newProduct = await Product.create(name, parseFloat(price));
    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Update product by id
exports.updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const updatedProduct = await Product.updateById(req.prams.id, name, price);
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json(errorNotFound);
    }
  } catch (error) {
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
