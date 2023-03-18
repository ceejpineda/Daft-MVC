const express = require("express");
const router = express.Router();
const profiler = require('../../system/core/profiler');
const Controller = require('../../system/core/ControllerLoader');

/*START OF ROUTING:*/

/* Documentation: 
    How to use:
        All created controllers don't need to be required here, the ControllerLoader will
        handle it for us.

        Use router.HTTP_REQUEST("URI", "Controller.CONTROLLER_NAME.METHOD").

        Example: router.get('/', Controller.Main.index);
    ---------------------------
    Legend:
        HTTP REQUEST: get, post, and all.
        URI Example: '/', '/load', '/show'
*/
router.get("/", Controller.Players.index);
router.post("/search", Controller.Players.search);


module.exports = router;