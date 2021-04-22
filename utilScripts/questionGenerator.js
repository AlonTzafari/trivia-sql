const {getRandomTemplate, getRandomCountrysWithColumn} = require('./query');
const main = async () => {
    const template = await getRandomTemplate();
    console.log(template);
    const countries = await getRandomCountrysWithColumn('crimeIndex', 3);
    console.log(countries);
}
main();