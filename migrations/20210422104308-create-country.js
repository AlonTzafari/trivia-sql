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
      km: {
        type: Sequelize.FLOAT
      },
      population: {
        type: Sequelize.FLOAT
      },
      densityPopKm: {
        type: Sequelize.FLOAT
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
      infantMortalityPerThousandBirths: {
        type: Sequelize.FLOAT
      },
      gdpPerCapita: {
        type: Sequelize.FLOAT
      },
      literacy: {
        type: Sequelize.FLOAT
      },
      phonesPerThousand: {
        type: Sequelize.FLOAT
      },
      arable: {
        type: Sequelize.FLOAT
      },
      crops: {
        type: Sequelize.FLOAT
      },
      other: {
        type: Sequelize.FLOAT
      },
      climate: {
        type: Sequelize.FLOAT
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
      ageZeroToFourteenYears: {
        type: Sequelize.STRING
      },
      ageFifteenToSixtyFourYears: {
        type: Sequelize.STRING
      },
      ageAboveSixtyFiveYears: {
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