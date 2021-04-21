const {Country} = require('./models');
const {Op} = require('sequelize');
Country.findAll({
    where:{
        crimeIndex:{
            [Op.gt]: 70
        }
    },
    attributes: ["country", "crimeIndex"]
}).then( data => console.log( data.map(item => item.toJSON() ) ) );
