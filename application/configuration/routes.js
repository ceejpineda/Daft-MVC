const express = require("express");
const router = express.Router();

/*START OF CONTROLLER SETUP:*/
const Students = require('../controllers/Students.js');


/*START OF ROUTING:*/

/* Documentation: Use router.HTTP_REQUEST("URL", "CONTROLLER METHOD").
    HTTP REQUEST: get, post.    */
router.get("/", Students.index);
router.post("/register", Students.register);
router.post("/students/profile", Students.login);
router.get("/logoff", Students.logoff);


module.exports = router;