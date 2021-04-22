const str = "country,km,population,density_pop_km,region,coastline,net_migration,infant_mortality_per_thousand_births,gdp_per_capita,literacy,phones_per_thousand,arable,crops,other,climate,birthrate,deathrate,agriculture,industry,service,capital,continent,cost_of_living_index,rent_index,cost_of_living_plus_rent_index,groceries_index,restaurant_price_index,local_purchasing_power_index,age_zero_to_fourteen_years,age_fifteen_to_sixty_four_years,age_Above_sixty_five_years,crime_index,safety_index,health_care_index,health_care_exp_index,price_to_income_ratio,gross_rental_yield_city_centre,gross_rental_yield_outside_of_centre,price_to_rent_ratio_city_centre,price_to_rent_ratio_outside_of_city_centre,mortgage_as_a_percentage_of_income,affordability_index,quality_of_life_index,purchasing_power_index,property_price_to_income_ratio,traffic_commute_time_index,pollution_index,climate_index";
const strArr = str.split(',');
const strArrCamelCase = strArr.map(str => {
    const varWords = str.split('_');
    const camelCasedArr = varWords.map( (word, i) => {
        if (i === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1); 
    });
    return camelCasedArr.join('');
});
console.log(strArrCamelCase.join(','));