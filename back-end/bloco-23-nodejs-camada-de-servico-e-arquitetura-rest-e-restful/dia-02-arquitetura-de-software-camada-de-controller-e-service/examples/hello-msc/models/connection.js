const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'dsouza',
  password: 'Dabcs0!23',
  database: 'model_example'
});

module.exports = connection;