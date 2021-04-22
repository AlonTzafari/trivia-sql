const {Router} = require('express');
const {getRandomQuestion} = require('../utilScripts/triviaUtils');
const trivia = Router();

trivia.get("/question", async (req, res, next) => {
    try {
        const question = await getRandomQuestion();
        res.status(200).send(question);
    } catch (error) {
        next(error);
    }
    
});

module.exports = trivia;