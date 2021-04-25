const {Router} = require('express');
const {saveUser, updateQuestionRating, saveQuestion, updateUserScore} = require('../utilScripts/Database');
const {getRandomQuestion} = require('../utilScripts/triviaUtils');
const trivia = Router();

const players = [];

trivia.put("/user", async (req, res, next) => {
    try {
        const {username} = req.body;
        const {id} = await saveUser(username);
        players.push({id, username, questions: [] })
        res.status(201).send({userId: id});
    } catch (error) {
        next(error);
    }
    
});

trivia.get("/question", async (req, res, next) => {
    try {
        const userIdStr = req.headers.userid;
        const userId = Number(userIdStr);
        if ( isNaN(userId) ) throw "Invalid userId";
        const player = players.find(player => player.id === userId);
        const generateQ = (player.questions.length > 0) && (player.questions.length % 3 === 0);
        console.log("generating question: ", generateQ);
        let question = await getRandomQuestion(generateQ);
        if ( player.questions.some( q => q.id === question.id) ) question = await getRandomQuestion(true);
        player.questions.push(question);
        const sendQ = Object.assign({}, question, {"tempId": player.questions.length - 1});
        res.status(200).send(sendQ);
    } catch (error) {
        next(error);
    }
    
});

// trivia.put("/question", async (req, res, next) => {
//     try {
//         const {userIdStr,questionId, rating} = req.body;
//         const userId = Number(userIdStr);
//         if ( typeof(userId) !== "number" || isNaN(userId) ) throw "Invalid userId";
//         await updateQuestionRating(questionId, rating);
//         res.status(200).end();
//     } catch (error) {
//         next(error);
//     }
    
// })

trivia.put("/end", async (req, res, next) => {
    try {
        console.log("end game");
        const {userId: serIdStr, ratings, score} = req.body;
        const userId = Number(serIdStr);
        if ( typeof(userId) !== "number" || isNaN(userId) ) throw "Invalid userId";
        const player = players.find(player => player.id === userId);
        for(const rating of ratings) {
            const question = player.questions[rating.tempId];
            if(question.id) {
                console.log("updating question");
                await updateQuestionRating(question.id, rating.rating * score)
            } else {
                console.log("saving question");
                question.rating = rating.rating * score;
                await saveQuestion(question);
            }
        }
        await updateUserScore(userId, score);
        const indexToRemove = players.findIndex(player => player.id === userId);
        players.splice(indexToRemove, 1);
        res.status(200).end();
    } catch (error) {
        next(error);
    }
    
})

module.exports = trivia;