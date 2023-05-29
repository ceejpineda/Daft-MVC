/*
    WARNING! Changing or Modifying this file might make the app
    not work as expected. 
    
    If you need to modify please use the config.js file in
    /application/configuration directory.
*/

const config = require('../base_config')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `${config.MONGO_DB.host}://${config.MONGO_DB.user}:${config.MONGO_DB.password}@${config.MONGO_DB.cluster}.onp4h1d.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client;