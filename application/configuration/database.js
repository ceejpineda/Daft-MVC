/*
    WARNING! Changing or Modifying this file might make the app
    not work as expected. 
    
    If you need to modify please use the config.js file in
    /application/configuration directory.
*/

const mysql = require('mysql2');
const config = require('./config')

const connection = mysql.createConnection(config.database);

module.exports = connection;