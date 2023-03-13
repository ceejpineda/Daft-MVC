/*SET THE PORT NUMBER USING THIS CONST VARIABLE*/
const port = 3000;

const express = require('express');
const bodyParser = require('body-parser')
const router = require('./routes.js');
const app = express();
const session = require('express-session');

//Middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(session({
    secret: 'cJ3nCrYp7i0n',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use('/', router);


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
