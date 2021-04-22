'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('templates', [
      {
        type: 1,
        template: "Which country is most populous?",
        column: "population",
        comparison: "greater"
      },
      {
        type: 1,
        template: "Which country is least populous?",
        column: "population",
        comparison: "lesser"
      },
      {
        type: 1,
        template: "Which country is the largest by total area?",
        column: "km",
        comparison: "greater"
      },
      {
        type: 1,
        template: "Which country is the smallest by total area?",
        column: "km",
        comparison: "lesser"
      },
      {
        type: 1,
        template: "Which country is the most densely populated?",
        column: "densityPopKm",
        comparison: "greater"
      },
      {
        type: 1,
        template: "Which country is the least densely populated?",
        column: "densityPopKm",
        comparison: "lesser"
      },
      {
        type: 1,
        template: "Which country has the most cell phones per person?",
        column: "phonesPerThousand",
        comparison: "greater"
      },
      {//custom template
        type: 1,
        template: "Which country has the highest crime rate?",
        column: "crimeIndex",
        comparison: "greater"
      },
      {
        type: 2,
        template: "What is the capital of _paramA?",
        column: "capital",
        comparison: null
      },
      {
        type: 2,
        template: "How many people live in _paramA?",
        column: "population",
        comparison: null
      },
      {
        type: 2,
        template: "In what continent is _paramA?",
        column: "continent",
        comparison: null
      },
      {//custom template
        type: 2,
        template: "What is the literacy percentage in _paramA?",
        column: "literacy",
        comparison: null
      },
      {
        type: 3,
        template: "Are there more people in _paramA than in _paramB?",
        column: "population",
        comparison: "greater"
      },
      {
        type: 3,
        template: "Is _paramA larger than _paramB?",
        column: "km",
        comparison: "greater"
      },
      {
        type: 3,
        template: "Does _paramA have a higher population density than _paramB?",
        column: "densityPopKm",
        comparison: "greater"
      },
      {
        type: 3,
        template: "Is the quality of life in _paramA higher than the quality of life in _paramB?",
        column: "qualityOfLifeIndex",
        comparison: "greater"
      },
      {
        type: 3,
        template: "Is the crime rate of _paramA higher than the crime rate in _paramB?",
        column: "crimeIndex",
        comparison: "greater"
      },
      {
        type: 3,
        template: "Are restaurants in _paramA more expensive than restaurants in _paramB?",
        column: "restaurantPriceIndex",
        comparison: "greater"
      },
      {//custom template
        type: 3,
        template: "Is the cost of living in _paramA higher than in _paramB?",
        column: "costOfLivingIndex",
        comparison: "greater"
      },
      {//custom template
        type: 3,
        template: "Is the cost of living in _paramA lower than in _paramB?",
        column: "costOfLivingIndex",
        comparison: "lesser"
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('templates', null, {});
  }
};
