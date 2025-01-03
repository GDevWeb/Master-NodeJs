const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "Nodejs_Tuto",
  port: process.env.DB_PORT,
});

console.info(`Connected to Data Base ${process.env.DB_NAME}`);

module.exports = pool;
