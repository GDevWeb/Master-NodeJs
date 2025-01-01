const pool = require("../config/db");

class Product {
  // Fetch all products
  static async fetchAll() {
    const { rows } = await pool.query(
      "SELECT * FROM products ORDER BY created_at DESC"
    );
    return rows;
  }

  // Find a product by ID
  static async findById(id) {
    const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return rows[0];
  }

  // Add a new product
  static async create(name, price, description, imageUrl) {
    const { rows } = await pool.query(
      "INSERT INTO products (name, price, description, imageUrl) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, description, imageUrl]
    );
    return rows[0];
  }

  // Update a product by ID
  static async updateById(id, name, price, description, imageUrl) {
    const { rows } = await pool.query(
      "UPDATE products SET name = $1, price = $2, description = $3, imageUrl = $4 WHERE id = $5 RETURNING *",
      [name, price, description, imageUrl, id]
    );
    return rows[0];
  }

  // Delete a product by ID
  static async deleteById(id) {
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
    //check that runs but returning an error product not found ...
  }
}
module.exports = Product;
