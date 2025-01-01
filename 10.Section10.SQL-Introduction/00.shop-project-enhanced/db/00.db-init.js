const { Pool } = require("pg");

const pool = require("./00.connect-db")(
  // Create the new database and tables
  async () => {
    try {
      // Create database
      await pool.query("CREATE DATABASE nodejs_course");
      console.log('Database "nodejs_course" created successfully!');

      // Disconnect from the default database
      await pool.end();

      // Reconnect to the newly created database
      const newPool = new Pool({
        host: "localhost",
        user: "postgres",
        password: "Ann@beth59.",
        database: "nodejs_course",
        port: 5432,
      });

      // Create products table
      await newPool.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price NUMERIC(10, 2) NOT NULL,
        description TEXT,
        imageUrl TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
      console.log('Table "products" created successfully!');

      await newPool.end();
    } catch (err) {
      console.error("Error creating database or tables:", err);
    }
  }
)();
