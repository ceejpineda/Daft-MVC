const Car = require('../models/Car.js');
const Daft_Controller = require('./Daft_Controller')

class Cars extends Daft_Controller{
    
    constructor() {
        super();
        this.Car = new Car();
       // this.result = this.result.bind(this);
    }
  
    index = async(req, res) =>{
        if(!req.session.visit){
            req.session.visit = 1;
        }else{
            req.session.visit += 1;
        }
        this.data['cars'] = await this.Car.getAll();
        this.data['count'] = await this.Car.getCount();
        this.data['visit'] = req.session.visit;
        console.log(this.data);
        res.render('index', this.data);
    }
  
}
  
  module.exports = Cars;