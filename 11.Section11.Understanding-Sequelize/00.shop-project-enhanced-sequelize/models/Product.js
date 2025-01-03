const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

class Product {
  constructor(id, name, price, imageURL) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
  }

  // Helper method to read data from the file
  static async readFile() {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading file:", err);
      return [];
    }
  }

  // Helper method to write data to the file
  static async writeFile(data) {
    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Error writing to file:", err);
    }
  }

  // Fetch all products
  static async fetchAll() {
    try {
      const data = await fs.readFile(filePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  // Find a product by ID
  static async findById(id) {
    const products = await this.readFile();
    return products.find((product) => product.id === parseInt(id));
  }

  // Create a new product
  static async create(name, price, imageURL) {
    const products = await this.fetchAll();
    const newProduct = new Product(products.length + 1, name, price, imageURL);
    products.push(newProduct);
    await fs.writeFile(filePath, JSON.stringify(products, null, 2));
    // await this.writeFile(products);
    return newProduct;
  }

  // Update a product by ID
  static async updateById(id, name, price) {
    const products = await this.readFile();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex !== -1) {
      products[productIndex].name = name || products[productIndex].name;
      products[productIndex].price = price || products[productIndex].price;
      await this.writeFile(products);
      return products[productIndex];
    }

    return null;
  }

  // Delete a product by ID
  static async deleteById(id) {
    let products = await this.readFile();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(id)
    );

    if (productIndex) {
      const deletedProduct = products.splice(productIndex, 1);
      await this.writeFile(products);
      return deletedProduct[0];
    }

    return null;
  }
}

module.exports = Product;
