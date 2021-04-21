// const str = "country,region,coastline,net_migration,infant_mortality_per_1000_births,gdp_per_capita,literacy_percent,phones_per_1000,arable_percent,crops_percent,other_percent,climate,birthrate,deathrate,agriculture,industry,service,capital,continent,cost_of_living_index,rent_index,cost_of_living_plus_rent_index,groceries_index,restaurant_price_index,local_purchasing_power_index,age_0_to_14_years,age_15_to_64_years,age_above_65_years,crime_index,safety_index,health_care_index,health_care_exp_index,price_to_income_ratio,gross_rental_yield_city_centre,gross_rental_yield_outside_of_centre,price_to_rent_ratio_city_centre,price_to_rent_ratio_outside_of_city_centre,mortgage_as_a_percentage_of_income,affordability_index,quality_of_life_index,purchasing_power_index,safety_index,health_care_index,cost_of_living_index,property_price_to_income_ratio,traffic_commute_time_index,pollution_index,climate_index";
// const strArr = str.split(',');
// const strArrCamelCase = strArr.map(str => {
//     const varWords = str.split('_');
//     const camelCasedArr = varWords.map( (word, i) => {
//         if (i === 0) return word;
//         return word.charAt(0).toUpperCase() + word.slice(1); 
//     });
//     return camelCasedArr.join('');
// });
// // console.log(strArrCamelCase.join(','));
// const types = ["text", "text", "double", "double", "double", "integer", "double", "double", "double", "double", "integer", "double", "double"]
// const strArrCamelCaseWithTypes = strArrCamelCase.map( (column, i) => {
//     const attType = types[i] ? types[i] : "text"; 
//     return `${column}:${attType}`
// });
// console.log(strArrCamelCaseWithTypes.join(','));


// country,region,coastline,netMigration,infantMortalityPer1000Births,gdpPerCapita,literacyPercent,phonesPer1000,arablePercent,cropsPercent,otherPercent,climate,birthrate,deathrate,agriculture,industry,service,capital,continent,costOfLivingIndex,rentIndex,costOfLivingPlusRentIndex,groceriesIndex,restaurantPriceIndex,localPurchasingPowerIndex,age0To14Years,age15To64Years,ageAbove65Years,crimeIndex,safetyIndex,healthCareIndex,healthCareExpIndex,priceToIncomeRatio,grossRentalYieldCityCentre,grossRentalYieldOutsideOfCentre,priceToRentRatioCityCentre,priceToRentRatioOutsideOfCityCentre,mortgageAsAPercentageOfIncome,affordabilityIndex,qualityOfLifeIndex,purchasingPowerIndex,safetyIndex,healthCareIndex,costOfLivingIndex,propertyPriceToIncomeRatio,trafficCommuteTimeIndex,pollutionIndex,climateIndex
// country:text,region:text,coastline:double,netMigration:double,infantMortalityPer1000Births:double,gdpPerCapita:integer,literacyPercent:double,phonesPer1000:double,arablePercent:double,cropsPercent:double,otherPercent:integer,climate:double,birthrate:double,deathrate:text,agriculture:text,industry:text,service:text,capital:text,continent:text,costOfLivingIndex:text,rentIndex:text,costOfLivingPlusRentIndex:text,groceriesIndex:text,restaurantPriceIndex:text,localPurchasingPowerIndex:text,age0To14Years:text,age15To64Years:text,ageAbove65Years:text,crimeIndex:text,safetyIndex:text,healthCareIndex:text,healthCareExpIndex:text,priceToIncomeRatio:text,grossRentalYieldCityCentre:text,grossRentalYieldOutsideOfCentre:text,priceToRentRatioCityCentre:text,priceToRentRatioOutsideOfCityCentre:text,mortgageAsAPercentageOfIncome:text,affordabilityIndex:text,qualityOfLifeIndex:text,purchasingPowerIndex:text,safetyIndex:text,healthCareIndex:text,costOfLivingIndex:text,propertyPriceToIncomeRatio:text,trafficCommuteTimeIndex:text,pollutionIndex:text,climateIndex:text
// Country text 
// Region text 
// Coastline double 
// Net migration double 
// Infant mortality (per 1000 births) double 
// GDP ($ per capita) int 
// Literacy (%) bigint 
// Phones (per 1000) double 
// Arable (%) double 
// Crops (%) double 
// Other (%) double 
// Climate int 
// Birthrate double 
// Deathrate double

const types = {
    country: "string",
    region: "string",
    region: "string",
    gdpPerCapita: "integer",
    climate: "integer",
    capital: "string",
    continent: "string",
    age0To14Years: "string",
    age15To64Years: "string",
    ageAbove65Years: "string",
    rank: "integer",
    population: "integer",
    date: "string",
    populationSource: "string"

}

const columns = "country,region,coastline,netMigration,infantMortalityPer1000Births,gdpPerCapita,literacyPercent,phonesPer1000,arablePercent,cropsPercent,otherPercent,climate,birthrate,deathrate,agriculture,industry,service,capital,continent,costOfLivingIndex,rentIndex,costOfLivingPlusRentIndex,groceriesIndex,restaurantPriceIndex,localPurchasingPowerIndex,age0To14Years,age15To64Years,ageAbove65Years,crimeIndex,safetyIndex,healthCareIndex,healthCareExpIndex,priceToIncomeRatio,grossRentalYieldCityCentre,grossRentalYieldOutsideOfCentre,priceToRentRatioCityCentre,priceToRentRatioOutsideOfCityCentre,mortgageAsAPercentageOfIncome,affordabilityIndex,qualityOfLifeIndex,purchasingPowerIndex,propertyPriceToIncomeRatio,trafficCommuteTimeIndex,pollutionIndex,climateIndex,rank,areaKm2,areaMi2,population,densityPopOverKm2,densityPopOverMi2,date,populationSource";
const columnsArr = columns.split(",");
const columnsArrWithTypes = columnsArr.map( column =>  {
    const dataType = types[column] ? types[column] : "float";
    return `${column}:${dataType}`; 
});
console.log( columnsArrWithTypes.join(",") );
