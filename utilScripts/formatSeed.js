const fs = require('fs');

const countriesRaw = fs.readFileSync('countries.json');
const countries = JSON.parse(countriesRaw);
// console.log(countries);
countries.forEach(country => {
    for(const key in country) {
        if (country[key] === "NULL" || country[key] === "" || country[key] === "–") country[key] = null; 
    }
});
// console.log(countries);
const countriesStr = JSON.stringify(countries, null, 4);
fs.writeFileSync("countries.json", countriesStr);