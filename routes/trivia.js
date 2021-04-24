const {Router} = require('express');
const {getRandomQuestion, saveUser, updateQuestionRating} = require('../utilScripts/Database');
const trivia = Router();

trivia.put("/user", async (req, res, next) => {
    try {
        const {username} = req.body;
        console.log("recived username: ", username);
        const {id} = await saveUser(username);
        res.status(201).send({userId: id});
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

trivia.put("/question", async (req, res, next) => {
    try {
        const {userIdStr,questionId, rating} = req.body;
        const userId = Number(userIdStr);
        if ( typeof(userId) !== "number" || isNaN(userId) ) throw "Invalid userId";
        await updateQuestionRating(questionId, rating);
        res.status(200).end();
    } catch (error) {
        next(error);
    }
    
})

module.exports = trivia;