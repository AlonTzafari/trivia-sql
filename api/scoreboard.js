const {Router} = require('express');
const {getTopPlayers} = require('../utilScripts/Database');
const scoreboard = Router();


scoreboard.get("/", async (req, res, next) => {
    try {
        const topPlayers = await getTopPlayers();
        res.status(200).send(topPlayers);
    } catch (error) {
        next(error);
    }
    
});


module.exports = scoreboard;