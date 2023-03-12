const Express = require("express");
const Router = Express.Router();
const UserController = require('./controllers/users');
const userController = new UserController();

Router.get("/", userController.index);
Router.post("/result", userController.result);

module.exports = Router;