const pool = require("../config/db");

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Connected to PostgreSQL:", res.rows[0]);
    pool.end(); // Close the connection
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
  }
})();
