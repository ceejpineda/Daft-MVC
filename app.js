
/*SET THE PORT NUMBER USING THIS CONST VARIABLE*/
const port = 3000;

const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes.js');

const app = express();

//Middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));

routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});