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

async function getQuestionById(id) {
    return Question.findOne({
        where: {id: id}
    })
    .then( question => question.toJSON() );
}

async function getRandomQuestion() {
    return Question.findAll({
        order: Sequelize.literal('rand()'),
        limit: 1
    })
    .then( question => question[0].toJSON() );
}



async function saveQuestion(questionObj) {
    const question = Question.build(questionObj);
    return await question.save();
}

async function updateQuestionRating(id, rating) {
    Question.findOne({
        where: {id}
    })
    .then( question => {
        const prevRate = question.toJSON().rating;
        question.update({rating: prevRate + rating})
    }); 
}


async function saveUser({username, password}) {
    const isNameUsed = await User.findOne({
        where: { name: username }
    });
    if (isNameUsed) throw "username taken";
    const user = User.build({name: username, password});
    return await user.save();
}

function getUser(username) {
    return User.findOne({
        where: { name: username }
    })
    .then( user => user?.toJSON() );
}

async function updateUserScore(name, score) {
    User.findOne({
        where: {name}
    })
    .then( user => user.update({score}) );
}
async function getTopPlayers() {
    return User.findAll({
        order: [['score', 'DESC']],
        limit: 100
    })
    .then( users => users.map( user => user.toJSON() ) );
}


module.exports = {
    findCountryById,
    getRandomTemplate,
    getRandomCountriesWithColumn,
    getRandomValuesFromColumn,
    getRandomQuestion,
    saveQuestion,
    updateQuestionRating,
    saveUser,
    getUser,
    updateUserScore,
    getQuestionById,
    getTopPlayers
};
