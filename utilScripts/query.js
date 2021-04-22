const {Country, Question, Template} = require('../models');
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

async function getRandomCountrysWithColumn(column, num = 1) {
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

module.exports = {findCountryById, getRandomTemplate, getRandomCountrysWithColumn};
