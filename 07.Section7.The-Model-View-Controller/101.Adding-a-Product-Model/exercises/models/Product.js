const fs = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "../data/products.json");

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Fetch all products asynchronously
  static async fetchAll() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading file:", err);
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
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

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
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

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
      console.error("Error writing to file:", err);
    }
  }
}

module.exports = Product;
