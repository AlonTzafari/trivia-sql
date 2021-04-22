const {getRandomTemplate, getRandomCountriesWithColumn, getRandomValuesFromColumn} = require('./query');
// const main = async () => {
//     const template = await getRandomTemplate();
//     console.log("template: ", template);
//     // const countries = await getRandomCountriesWithColumn('crimeIndex', 3);
//     // console.log(countries);
//     const question = await createRandomQuestion(template);
//     console.log("question: ", question);
// }
// main();

async function createRandomQuestion({type, template, column, comparison}) {
    if (type === 1) {
        const countries = await getRandomCountriesWithColumn(column, 4);
        if (comparison === "greater") countries.sort((a, b) => b[column] - a[column] );
        else if (comparison === "lesser") countries.sort((a, b) => a[column] - b[column] );
        else throw new Error("Invalid comparison");
        return {type,
            question: template,
            answer: countries[0],
            optionA: countries[2],
            optionB: countries[1],
            optionC: countries[3],
            yesNo: false,
            rating: 0,
            votes: 0
        };

    } else if (type === 2) {
        const [country] = await getRandomCountriesWithColumn(column);
        let options = await getRandomValuesFromColumn(column, 3, country.id);
        const question = template.replace("_paramA", country.country);
        return {
            type,
            question,
            answer: country[column],
            optionA: options[0][column],
            optionB: options[1][column],
            optionC: options[2][column],
            yesNo: false,
            rating: 0,
            votes: 0
        };

    } else if (type === 3) {
        if (comparison !== "lesser" && comparison !== "greater") throw new Error("Invalid comparison"); 
        const countries = await getRandomCountriesWithColumn(column, 2);
        const isQuestionTrue = (comparison === "greater" && countries[0][column] > countries[1][column]) || (comparison === "lesser" && countries[0][column] < countries[1][column]);
        const answer = isQuestionTrue ? "yes" : "no";
        const question = template.replace("_paramA", countries[0].country).replace("_paramB", countries[1].country);
        return {
            type,
            question,
            answer,
            optionA: "yes",
            optionB: "no",
            optionC: null,
            yesNo: true,
            rating: 0,
            votes: 0
        };       
    } else {
        throw new Error('Invalid template type');
    }
};

module.exports = {createRandomQuestion};