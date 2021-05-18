const {Router} = require('express');
const {saveUser,getUser, updateQuestionRating, saveQuestion, updateUserScore} = require('../utilScripts/Database');
const {getRandomQuestion} = require('../utilScripts/triviaUtils');
const trivia = Router();

const players = {};

trivia.get("/question", async (req, res, next) => {
    try {
        const {user} = res.locals;
        if (user.noToken) return res.status(401).end();
        const username = user.info.name;
        if ( !players.hasOwnProperty(username) ) players[username] = {questions: []}; 
        const player = players[username];  
        const generateQ = (player.questions.length > 0) && (player.questions.length % 3 === 0);
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
        const {ratings, score} = req.body;
        const user = res.locals.user;
        if (user.noToken) return res.status(401).end();
        const player = players[user.info.name];
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
        await updateUserScore(user.info.name, score);
        delete players[user.info.name];
        res.status(200).end();
    } catch (error) {
        next(error);
    }
    
})

module.exports = trivia;