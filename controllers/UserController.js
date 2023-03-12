//const User = require('../models/User.js');

class UserController {

    constructor() {
      this.users = [];
    }
  
    getUsers(req, res) {
      res.render('index', { users: this.users });
    }
  
    addUser(req, res) {
      const { name, email, password } = req.body;
      const user = new User(name, email, password);
      this.users.push(user);
      res.redirect('/');
    }
    
}
  
  module.exports = UserController;