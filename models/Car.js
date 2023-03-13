const Daft_Model = require('./Daft_Model');

class Car extends Daft_Model{

    async getAll() {
        const query = "SELECT * from cars";
        return await this.query(query);
    }

    async getCount() {
        const query = "SELECT count(*) as count from cars";
        const [result] = await this.query(query);
        return result.count;
    }

}
  
module.exports = Car;