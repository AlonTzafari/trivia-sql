const {createRandomQuestion} = require('./questionGenerator');
const {getRandomTemplate, getRandomQuestion: randQuestion, saveUser} = require('./query');

async function getRandomQuestion(generate = true) {
    if (generate) {
        const template = await getRandomTemplate();
        return await createRandomQuestion(template);
    } else {
        return await randQuestion();
    }
}

async function registerUser(username) {
    await saveUser({username})
}

module.exports = {getRandomQuestion, registerUser};