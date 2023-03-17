const express = require('express');
const bodyParser = require('body-parser')
const router = require('./application/configuration/routes.js');
const app = express();
const session = require('express-session');
const config = require('./application/configuration/config');
const path = require('path');
//const form_validator = require("./core/form_validator");


//Middlewares
app.set('views', path.join(__dirname, 'application/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(session(config.session))
app.use(router);
app.set('view engine', 'ejs');

app.listen(config.port, () => {
    console.log(`App is listening at http://localhost:${config.port}`);
});
