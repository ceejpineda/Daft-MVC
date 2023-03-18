const Player = require('../models/Player.js');
const Daft_Controller = require('../../system/Daft_Controller')
const profiler = require('../../system/core/profiler');


class Players extends Daft_Controller{
    
    constructor() {
        super();
    };
  
    index(req, res){
        // res.on('finish', ()=>{
        //     profiler(res, req);
        //     console.log('finished')
        // })
        profiler(req, res, ()=>{
            res.render('index');
        })
    };

    async search(req, res){
        profiler(req, res, async()=>{
            let players = await Player.match_players(req.body)
            res.render('partials/player_partial', {players})
        })
    }
    
}


  
module.exports = Players;