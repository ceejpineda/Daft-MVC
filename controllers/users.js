//const User = require('../models/User.js');

class UserController {
    
    constructor() {
    }
  
    index = (req, res) => {
      res.render('index');
    }
  
    result = (req, res) => {
      console.log(req.body)
      res.render('result', req.body);
    }
  }
  
  module.exports = UserController;