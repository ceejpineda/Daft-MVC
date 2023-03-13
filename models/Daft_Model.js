const database = require('../database')

class Daft_Model {

    constructor() {
        this.connection = database;
        this.connection.connect();
    }

    query(sql, values = []){
        return new Promise((resolve, reject) =>{
            this.connection.query(sql, (err, rows, fields) =>{
                if(err){
                    return reject(err);
                }
                return resolve(rows);
            })
        })
    }

}
  
module.exports = Daft_Model;