/*SET THE PORT NUMBER USING THIS CONST VARIABLE*/

const express = require('express');
const bodyParser = require('body-parser')
const router = require('./routes.js');
const app = express();
const session = require('express-session');
const config = require('./config')

//Middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(session(config.session))
app.use('/', router);

app.listen(config.port, () => {
    console.log(`App is listening at http://localhost:${config.port}`);
});
