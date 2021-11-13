const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "portfolio",
  user: "root",
  password: "CodinG_108",
});

module.exports = pool;
