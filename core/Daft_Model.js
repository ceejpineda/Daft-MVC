const database = require('../application/configuration/database')

class Daft_Model {

    constructor() {
        this.connection = database;
        this.connection.connect();
        this.result = '';
        this.row_array = '';
        this.result_array = '';
    }

    async query (sql, values = []){
        return new Promise((resolve, reject) => {
            this.connection.query(sql, values, (err, rows, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(rows);
            });
        });
    }

    // async result_array(){
    //     return this.result[0];
    // }

    // async row_array(){
    //     return this.result[0][0];
    // }

}
  
module.exports = Daft_Model;