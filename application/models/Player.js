const Daft_Model = require('../../system/Daft_Model');

class Player extends Daft_Model{

    constructor(){
        super();
    }

    async match_players(post) {
        let query = "SELECT * FROM athletes WHERE name LIKE ? ";
        let name = `%${post.name}%`;
        let values = [name];
        if (post.sport && post.sport.length > 0) {
            let sports = post.sport;
            query += "AND sport IN (";
            for (let i = 0; i < sports.length; i++) {
                if (i > 0) query += ",";
                query += "?";
                values.push(sports[i]);
            }
            query += ")";
        }
        
        if (post.gender && post.gender.length > 0) {
            let genders = post.gender;
            query += "AND gender IN (";
            for (let i = 0; i < genders.length; i++) {
                if (i > 0) query += ",";
                query += "?";
                values.push(genders[i]);
            }
            query += ")";
        }
        return await this.query(query, values);
    }

}
  
module.exports = new Player();