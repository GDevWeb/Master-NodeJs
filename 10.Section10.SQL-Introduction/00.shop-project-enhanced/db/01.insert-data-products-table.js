const pool = require("../config/db");

(async () => {
  try {
    const query = `
    INSERT INTO Products (name, price, description, imageUrl)
    VALUES
    ('Laptop', 999.99, 'A cool item', 'https://placehold.co/300x300'),
    ('Phone', 499.99, 'A cool item', 'https://placehold.co/300x300'),
    ('Tablet', 299.99, 'A cool item', 'https://placehold.co/300x300')
    RETURNING *;
    `;

    // Execute the query
    const result = await pool.query(query);
    console.log("Data inserted successfully:", result.rows);
  } catch (error) {
    console.error("Error inserting data into Products table", error);
  } finally {
    // Always close the pool to prevent hanging connections
    await pool.end();
  }
})();
