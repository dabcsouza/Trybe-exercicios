const mysql = require('mysql2/promise');
const connection = mysql.createPool({
  user: 'dsouza',
  password: 'Dabcs0!23',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;