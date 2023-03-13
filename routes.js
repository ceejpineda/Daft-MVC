const express = require("express");
const router = express.Router();
const CarsController = require('./controllers/Cars');
const Cars = new CarsController();


/*START OF ROUTING:
Documentation: Use router.HTTP_REQUEST("URL", "CONTROLLER METHOD").
HTTP REQUEST: get, post.
*/
router.get("/", Cars.index);

module.exports = router;