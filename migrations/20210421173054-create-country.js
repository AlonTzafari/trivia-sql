'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      coastline: {
        type: Sequelize.FLOAT
      },
      netMigration: {
        type: Sequelize.FLOAT
      },
      infantMortalityPer1000Births: {
        type: Sequelize.FLOAT
      },
      gdpPerCapita: {
        type: Sequelize.INTEGER
      },
      literacyPercent: {
        type: Sequelize.FLOAT
      },
      phonesPer1000: {
        type: Sequelize.FLOAT
      },
      arablePercent: {
        type: Sequelize.FLOAT
      },
      cropsPercent: {
        type: Sequelize.FLOAT
      },
      otherPercent: {
        type: Sequelize.FLOAT
      },
      climate: {
        type: Sequelize.INTEGER
      },
      birthrate: {
        type: Sequelize.FLOAT
      },
      deathrate: {
        type: Sequelize.FLOAT
      },
      agriculture: {
        type: Sequelize.FLOAT
      },
      industry: {
        type: Sequelize.FLOAT
      },
      service: {
        type: Sequelize.FLOAT
      },
      capital: {
        type: Sequelize.STRING
      },
      continent: {
        type: Sequelize.STRING
      },
      costOfLivingIndex: {
        type: Sequelize.FLOAT
      },
      rentIndex: {
        type: Sequelize.FLOAT
      },
      costOfLivingPlusRentIndex: {
        type: Sequelize.FLOAT
      },
      groceriesIndex: {
        type: Sequelize.FLOAT
      },
      restaurantPriceIndex: {
        type: Sequelize.FLOAT
      },
      localPurchasingPowerIndex: {
        type: Sequelize.FLOAT
      },
      age0To14Years: {
        type: Sequelize.STRING
      },
      age15To64Years: {
        type: Sequelize.STRING
      },
      ageAbove65Years: {
        type: Sequelize.STRING
      },
      crimeIndex: {
        type: Sequelize.FLOAT
      },
      safetyIndex: {
        type: Sequelize.FLOAT
      },
      healthCareIndex: {
        type: Sequelize.FLOAT
      },
      healthCareExpIndex: {
        type: Sequelize.FLOAT
      },
      priceToIncomeRatio: {
        type: Sequelize.FLOAT
      },
      grossRentalYieldCityCentre: {
        type: Sequelize.FLOAT
      },
      grossRentalYieldOutsideOfCentre: {
        type: Sequelize.FLOAT
      },
      priceToRentRatioCityCentre: {
        type: Sequelize.FLOAT
      },
      priceToRentRatioOutsideOfCityCentre: {
        type: Sequelize.FLOAT
      },
      mortgageAsAPercentageOfIncome: {
        type: Sequelize.FLOAT
      },
      affordabilityIndex: {
        type: Sequelize.FLOAT
      },
      qualityOfLifeIndex: {
        type: Sequelize.FLOAT
      },
      purchasingPowerIndex: {
        type: Sequelize.FLOAT
      },
      propertyPriceToIncomeRatio: {
        type: Sequelize.FLOAT
      },
      trafficCommuteTimeIndex: {
        type: Sequelize.FLOAT
      },
      pollutionIndex: {
        type: Sequelize.FLOAT
      },
      climateIndex: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Countries');
  }
};