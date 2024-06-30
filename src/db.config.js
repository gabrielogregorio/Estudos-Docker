const mysql = require("mysql");

/** @type {import('mysql').ConnectionConfig} */
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

const connection = mysql.createConnection(config);

connection.connect();
module.exports = connection;
