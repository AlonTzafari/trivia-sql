'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Country.init({
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    coastline: DataTypes.FLOAT,
    netMigration: DataTypes.FLOAT,
    infantMortalityPer1000Births: DataTypes.FLOAT,
    gdpPerCapita: DataTypes.INTEGER,
    literacyPercent: DataTypes.FLOAT,
    phonesPer1000: DataTypes.FLOAT,
    arablePercent: DataTypes.FLOAT,
    cropsPercent: DataTypes.FLOAT,
    otherPercent: DataTypes.FLOAT,
    climate: DataTypes.INTEGER,
    birthrate: DataTypes.FLOAT,
    deathrate: DataTypes.FLOAT,
    agriculture: DataTypes.FLOAT,
    industry: DataTypes.FLOAT,
    service: DataTypes.FLOAT,
    capital: DataTypes.STRING,
    continent: DataTypes.STRING,
    costOfLivingIndex: DataTypes.FLOAT,
    rentIndex: DataTypes.FLOAT,
    costOfLivingPlusRentIndex: DataTypes.FLOAT,
    groceriesIndex: DataTypes.FLOAT,
    restaurantPriceIndex: DataTypes.FLOAT,
    localPurchasingPowerIndex: DataTypes.FLOAT,
    age0To14Years: DataTypes.STRING,
    age15To64Years: DataTypes.STRING,
    ageAbove65Years: DataTypes.STRING,
    crimeIndex: DataTypes.FLOAT,
    safetyIndex: DataTypes.FLOAT,
    healthCareIndex: DataTypes.FLOAT,
    healthCareExpIndex: DataTypes.FLOAT,
    priceToIncomeRatio: DataTypes.FLOAT,
    grossRentalYieldCityCentre: DataTypes.FLOAT,
    grossRentalYieldOutsideOfCentre: DataTypes.FLOAT,
    priceToRentRatioCityCentre: DataTypes.FLOAT,
    priceToRentRatioOutsideOfCityCentre: DataTypes.FLOAT,
    mortgageAsAPercentageOfIncome: DataTypes.FLOAT,
    affordabilityIndex: DataTypes.FLOAT,
    qualityOfLifeIndex: DataTypes.FLOAT,
    purchasingPowerIndex: DataTypes.FLOAT,
    propertyPriceToIncomeRatio: DataTypes.FLOAT,
    trafficCommuteTimeIndex: DataTypes.FLOAT,
    pollutionIndex: DataTypes.FLOAT,
    climateIndex: DataTypes.FLOAT,
    rank: DataTypes.INTEGER,
    areaKm2: DataTypes.FLOAT,
    areaMi2: DataTypes.FLOAT,
    population: DataTypes.INTEGER,
    densityPopOverKm2: DataTypes.FLOAT,
    densityPopOverMi2: DataTypes.FLOAT,
    date: DataTypes.STRING,
    populationSource: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};