const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

class Product {
  constructor(id, name, price, description, imageURL) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
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
      const products = JSON.parse(data);

      return products.map((product) => ({
        ...product,
        id: product.id.toString(),
      }));
    } catch (error) {
      if (error.code === "ENOENT") {
        return [];
      }
      throw error;
    }
  }

  // Find a product by ID
  static async findById(id) {
    try {
      const products = await this.fetchAll();
      return products.find((product) => product.id === id.toString());
    } catch (error) {
      console.error("Error finding product:", error);
      return null;
    }
  }

  // Create a new product
  static async create(
    name,
    price,
    description,
    imageURL,
    id = Math.floor(Math.random() * 99)
  ) {
    try {
      console.log("create object - id", id);
      const products = await this.fetchAll();
      const newProduct = new Product(id, name, price, description, imageURL);
      products.push(newProduct);
      await fs.writeFile(filePath, JSON.stringify(products, null, 2));
      return newProduct;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  static async updateById(id, name, price) {
    try {
      const products = await this.fetchAll();
      const productIndex = products.findIndex(
        (product) => product.id === id.toString()
      );

      if (productIndex !== -1) {
        products[productIndex].name = name || products[productIndex].name;
        products[productIndex].price = price || products[productIndex].price;

        await fs.writeFile(filePath, JSON.stringify(products, null, 2));
        return products[productIndex];
      }
      return null;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  }

  static async deleteById(id) {
    try {
      const products = await this.fetchAll();
      const updatedProducts = products.filter(
        (product) => product.id !== parseInt(id)
      );

      if (products.length === updatedProducts.length) {
        return null; //not found
      }

      await fs.writeFile(filePath, JSON.stringify(updatedProducts, null, 2));
      return true; //product deleted
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  }
}

module.exports = Product;
