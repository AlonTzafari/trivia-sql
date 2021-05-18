"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "questions",
            [
                {
                    type: 3,
                    question:
                        "Is the crime rate of Puerto Rico higher than the crime rate in France?",
                    answer: "yes",
                    optionA: "yes",
                    optionB: "no",
                    optionC: "",
                    yesNo: 1,
                    rating: 3700.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "What is the capital of South Korea?",
                    answer: "Seoul",
                    optionA: "Kigali",
                    optionB: "Ashgabat",
                    optionC: "Abu Dhabi",
                    yesNo: 0,
                    rating: 9900.0,
                    votes: 0,
                },
                {
                    type: 1,
                    question: "Which country is the largest by total area?",
                    answer: "Congo Republic",
                    optionA: "Jordan",
                    optionB: "Guatemala",
                    optionC: "Belize",
                    yesNo: 0,
                    rating: 6700.0,
                    votes: 0,
                },
                {
                    type: 3,
                    question:
                        "Is the crime rate of Nicaragua higher than the crime rate in United Arab Emirates?",
                    answer: "yes",
                    optionA: "yes",
                    optionB: "no",
                    optionC: "",
                    yesNo: 1,
                    rating: 4800.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "In what continent is Papua New Guinea?",
                    answer: "Australia",
                    optionA: "Europe",
                    optionB: "South America",
                    optionC: "Africa",
                    yesNo: 0,
                    rating: 12900.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "In what continent is Puerto Rico?",
                    answer: "North America",
                    optionA: "Africa",
                    optionB: "Central America",
                    optionC: "Asia",
                    yesNo: 0,
                    rating: 5100.0,
                    votes: 0,
                },
                {
                    type: 1,
                    question: "Which country is most populous?",
                    answer: "Zambia",
                    optionA: "Liechtenstein",
                    optionB: "Georgia",
                    optionC: "Wallis and Futuna",
                    yesNo: 0,
                    rating: 5600.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "How many people live in Kosovo?",
                    answer: "1795670",
                    optionA: "66435600",
                    optionB: "4971200",
                    optionC: "96762",
                    yesNo: 0,
                    rating: 9600.0,
                    votes: 0,
                },
                {
                    type: 1,
                    question: "Which country is the largest by total area?",
                    answer: "Greenland",
                    optionA: "Dominican Republic",
                    optionB: "Japan",
                    optionC: "Timor-Leste",
                    yesNo: 0,
                    rating: 3600.0,
                    votes: 0,
                },
                {
                    type: 1,
                    question: "Which country is the smallest by total area?",
                    answer: "Tonga",
                    optionA: "Finland",
                    optionB: "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
                    optionC: "Angola",
                    yesNo: 0,
                    rating: 5600.0,
                    votes: 0,
                },
                {
                    type: 3,
                    question:
                        "Does Saint Helena, Ascension and Tristan da Cunha have a higher population density than Czech Republic?",
                    answer: "no",
                    optionA: "yes",
                    optionB: "no",
                    optionC: "",
                    yesNo: 1,
                    rating: 4500.0,
                    votes: 0,
                },
                {
                    type: 3,
                    question:
                        "Is the cost of living in Czech Republic lower than in Bosnia and Herzegovina?",
                    answer: "no",
                    optionA: "yes",
                    optionB: "no",
                    optionC: "",
                    yesNo: 1,
                    rating: 6800.0,
                    votes: 0,
                },
                {
                    type: 3,
                    question:
                        "Are there more people in Cameroon than in Bhutan?",
                    answer: "yes",
                    optionA: "yes",
                    optionB: "no",
                    optionC: "",
                    yesNo: 1,
                    rating: 3900.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "What is the capital of Bahrain?",
                    answer: "Manama",
                    optionA: "Singapore",
                    optionB: "Port of Spain",
                    optionC: "Niamey",
                    yesNo: 0,
                    rating: 6400.0,
                    votes: 0,
                },
                {
                    type: 3,
                    question:
                        "Does Uruguay have a higher population density than South Ossetia?",
                    answer: "yes",
                    optionA: "yes",
                    optionB: "no",
                    optionC: "",
                    yesNo: 1,
                    rating: 4000.0,
                    votes: 0,
                },
                {
                    type: 1,
                    question: "Which country is most populous?",
                    answer: "Turkmenistan",
                    optionA: "Reunion",
                    optionB: "Eritrea",
                    optionC: "Vanuatu",
                    yesNo: 0,
                    rating: 2000.0,
                    votes: 0,
                },
                {
                    type: 1,
                    question: "Which country is the largest by total area?",
                    answer: "Australia",
                    optionA: "Nigeria",
                    optionB: "Mauritania",
                    optionC: "Haiti",
                    yesNo: 0,
                    rating: 6600.0,
                    votes: 0,
                },
                {
                    type: 1,
                    question: "Which country is most populous?",
                    answer: "Mauritius",
                    optionA: "Cook Islands",
                    optionB: "Bahamas",
                    optionC: "Nauru",
                    yesNo: 0,
                    rating: 2000.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "How many people live in Poland?",
                    answer: "38386000",
                    optionA: "1265580",
                    optionB: "96762",
                    optionC: "64027",
                    yesNo: 0,
                    rating: 800.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "In what continent is Trinidad and Tobago?",
                    answer: "North America",
                    optionA: "Australia",
                    optionB: "South America",
                    optionC: "Central America",
                    yesNo: 0,
                    rating: 1600.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "What is the literacy percentage in Senegal?",
                    answer: "40.2",
                    optionA: "80.2",
                    optionB: "67.5",
                    optionC: "40.9",
                    yesNo: 0,
                    rating: 1600.0,
                    votes: 0,
                },
                {
                    type: 1,
                    question: "Which country is most populous?",
                    answer: "Mexico",
                    optionA: "Costa Rica",
                    optionB: "Thailand",
                    optionC: "Montenegro",
                    yesNo: 0,
                    rating: 2000.0,
                    votes: 0,
                },
                {
                    type: 3,
                    question:
                        "Is Barbados larger than Saint Helena, Ascension and Tristan da Cunha?",
                    answer: "yes",
                    optionA: "yes",
                    optionB: "no",
                    optionC: "",
                    yesNo: 1,
                    rating: 2000.0,
                    votes: 0,
                },
                {
                    type: 3,
                    question:
                        "Is the cost of living in Vietnam lower than in Argentina?",
                    answer: "no",
                    optionA: "yes",
                    optionB: "no",
                    optionC: "",
                    yesNo: 1,
                    rating: 1200.0,
                    votes: 0,
                },
                {
                    type: 2,
                    question: "What is the literacy percentage in Singapore?",
                    answer: "92.5",
                    optionA: "97.9",
                    optionB: "91.3",
                    optionC: "86.5",
                    yesNo: 0,
                    rating: 1200.0,
                    votes: 0,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("questions", null, {});
    },
};