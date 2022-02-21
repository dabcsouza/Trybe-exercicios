const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'dsouza',
  password: 'Da@123456',
  database: 'model_example'
});

module.exports = connection;