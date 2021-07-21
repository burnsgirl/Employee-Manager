
const mysql = require('mysql');
require("dotenv").config();
const util = require("util");

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: process.env.MYSQL_PASS,
  database: 'employee_DB',
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;

