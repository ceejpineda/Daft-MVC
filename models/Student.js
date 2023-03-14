const Daft_Model = require('./Daft_Model');

class Student extends Daft_Model{

    constructor(){
        super();
    }

    async insert_new_user(post) {
        const query = `INSERT INTO users(first_name, last_name, email, password)
                        VALUES(?, ?, ?, ?)`;
        const values = [post.firstName, post.lastName, post.email, post.password];
        return await this.query(query, values);
    }

    async get_user_by_email(email){
        const query = "SELECT * FROM users WHERE email = ?";
        const values = [email];
        let result = await this.query(query, values);
        return result[0];
    }

    async validate_signin_match(user, password){
        if(user.password == password){
            return "success";
        }else{
            return "Incorrect email/password"
        }
    }

}
  
module.exports = new Student();