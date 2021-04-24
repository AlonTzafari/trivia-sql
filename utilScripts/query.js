const {Country, Question, Template, User, sequelize} = require('../models');
const {Sequelize, Op} = require('sequelize');

async function findCountryById(id) {
    return Country.findOne({
        where: { id: id },
    })
    .then( data => data.toJSON() );    
}

async function getRandomTemplate(id) {
    return Template.findAll({
        order: Sequelize.literal('rand()'), limit: 1 
    })
    .then( template => template[0].toJSON() )
}

async function getRandomCountriesWithColumn(column, num = 1) {
    const filter = {};
    filter[column] = { [Op.not]: null };

    return Country.findAll({
        where: filter,
        order: Sequelize.literal('rand()'),
        limit: num,
        attributes:['id', 'country', column]
    })
    .then( countries => countries.map( country => country.toJSON() ) )
}
async function getRandomValuesFromColumn(column, num = 1, filterId = null) {
    const filter = { id: { [Op.ne]: filterId } };
    filter[column] = { [Op.not]: null };

    return Country.findAll({
        where: filter,
        order: Sequelize.literal('rand()'),
        limit: num,
        attributes:[ [Sequelize.fn('DISTINCT', Sequelize.col(column)), column] ]
    })
    .then( countries => countries.map( country => country.toJSON() ) )
}

async function getRandomQuestion() {
    return Question.findAll({
        where: filter,
        order: Sequelize.literal('rand()'),
        limit: 1
    })
    .then( question => question[0].toJSON() );
}



async function saveQuestion(questionObj) {
    const question = Question.build(questionObj);
    await question.save();
}

async function saveUser(username) {
    const user = User.build({name: username});
    await question.save();
}

async function updateUserScore(id, score) {
    User.findOne({
        where: {id}
    })
    .then( user => user.update({score}) );
}



module.exports = {
    findCountryById,
    getRandomTemplate,
    getRandomCountriesWithColumn,
    getRandomValuesFromColumn,
    getRandomQuestion,
    saveUser
};
