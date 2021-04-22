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
    km: DataTypes.FLOAT,
    population: DataTypes.FLOAT,
    densityPopKm: DataTypes.FLOAT,
    region: DataTypes.STRING,
    coastline: DataTypes.FLOAT,
    netMigration: DataTypes.FLOAT,
    infantMortalityPerThousandBirths: DataTypes.FLOAT,
    gdpPerCapita: DataTypes.FLOAT,
    literacy: DataTypes.FLOAT,
    phonesPerThousand: DataTypes.FLOAT,
    arable: DataTypes.FLOAT,
    crops: DataTypes.FLOAT,
    other: DataTypes.FLOAT,
    climate: DataTypes.FLOAT,
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
    ageZeroToFourteenYears: DataTypes.STRING,
    ageFifteenToSixtyFourYears: DataTypes.STRING,
    ageAboveSixtyFiveYears: DataTypes.STRING,
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
    climateIndex: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};