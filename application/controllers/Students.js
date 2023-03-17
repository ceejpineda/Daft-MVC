const Student = require('../models/Student.js');
const Daft_Controller = require('../../system/Daft_Controller')
const profiler = require('../../system/core/profiler');


class Students extends Daft_Controller{
    
    constructor() {
        super();
    };
  
    index(req, res){
        profiler(req, res, ()=>{
            if (req.session.first_name) {
                res.render('profile', req.session);
            } else {
                res.render('index');
            }
        })
    };

    async register(req, res) {
        await Student.insert_new_user(req.body);
        res.redirect("/");
    };

    async login(req, res){
        let user = await Student.get_user_by_email(req.body.loginEmail);
        let result = await Student.validate_signin_match(user, req.body.loginPassword);
        
        profiler(req, res, async() => {
            if(result == "success"){
                req.session.first_name = user.first_name;
                req.session.last_name = user.last_name;
                req.session.email = user.email;
                res.render('profile', req.session);
            }else{
                res.redirect("/");
            }
       });
    }

    logoff(req, res){
        req.session.destroy();
        res.redirect("/");
    }
}
  
module.exports = new Students;