const mysql = require('mysql2');
const config = require('./config')

const connection = mysql.createConnection(config.database);

module.exports = connection;