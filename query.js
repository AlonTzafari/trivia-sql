const {Country} = require('./models');
const {Op} = require('sequelize');
Country.findAll({
    where:{
        crimeIndex:{
            [Op.lt]: 50
        }
    },
}).then( data => console.log( data.map(item => item.toJSON() ) ) );
