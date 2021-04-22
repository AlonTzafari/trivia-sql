const {Router} = require('express');
const {getRandomQuestion} = require('../utilScripts/triviaUtils');
const trivia = Router();

trivia.put("/user", async (req, res, next) => {
    try {
        const {username} = req.body;
        const userId = Number(userIdStr);
        if ( typeof(username) !== "number" || isNaN(userId) ) throw "Invalid userId";
        const question = await getRandomQuestion();
        res.status(200).send(question);
    } catch (error) {
        next(error);
    }
    
});

trivia.get("/question", async (req, res, next) => {
    try {
        const {userIdStr} = req.body;
        const userId = Number(userIdStr);
        if ( typeof(username) !== "number" || isNaN(userId) ) throw "Invalid userId";
        const question = await getRandomQuestion();
        res.status(200).send(question);
    } catch (error) {
        next(error);
    }
    
});

module.exports = trivia;