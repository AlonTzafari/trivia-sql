const {createRandomQuestion} = require('./questionGenerator');
const {getRandomTemplate, getRandomQuestion: randQuestion} = require('./query');

async function getRandomQuestion(generate = true) {
    if (generate) {
        const template = await getRandomTemplate();
        return await createRandomQuestion(template);
    } else {
        return await randQuestion();
    }
}

module.exports = {getRandomQuestion};