const database = require('../application/configuration/database')
let last_queries = [];

class Daft_Model {
    
    static last_query = '';
    static query_time = '';

    constructor() {
        this.connection = database;
        this.connection.connect();
        this.result = '';
        this.row_array = '';
        this.result_array = '';
    }

    static async getLastQuery(){
        let result = last_queries;
        last_queries = [];
        return result;
    }

    static async getQueryTime(){
        let result = Daft_Model.query_time;
        Daft_Model.query_time = '';
        return result;
    }
    
    query (sql, values = []){
        let query_time_start = new Date();
        return new Promise((resolve, reject) => {
            this.connection.query(sql, values, (err, rows, fields) => {
                last_queries.push(this.connection.format(sql, values))
                Daft_Model.last_query = this.connection.format(sql, values);
                if (err) {
                    return reject(err);
                }
                Daft_Model.query_time = new Date() - query_time_start + ` ms`;
                console.log(Daft_Model.query_time);
                return resolve(rows);
            });
        });
    }

}
  
module.exports = Daft_Model;