const UserController = require('./controllers/UserController.js');

module.exports = (app) => {
  const userController = new UserController();

  app.get('/', userController.getUsers.bind(userController));
  app.post('/users', userController.addUser.bind(userController));
};