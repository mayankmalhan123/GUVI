//Setting up data
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

//add a listener to process the request
xhr.onload = function() {
    if(xhr.status>=200 && xhr.status<300){

        let data = JSON.parse(xhr.response);
        // Get all the countries from Asia continent /region using Filter function
        let countriesAsia = [];
        data.filter((country) => {
            if(country.region === 'Asia'){
                countriesAsia.push(country.name);
            }
        })
        console.log(countriesAsia);

        // Get all the countries with a population of less than 2 lakhs using Filter function
        let populationLessThan2Lakh = [];
        data.filter((country) => {
            if(country.population < 200000){
                populationLessThan2Lakh.push(country.name);
            }
        })
        console.log(populationLessThan2Lakh);

        // Print the following details name, capital, flag using forEach function
        data.forEach((country) => {
            console.log(`
            Country Name: ${country.name}
            Capital City: ${country.capital}
            Country Flag: ${country.flag}`);
        });

        // Print the total population of countries using reduce function
        let totalPopulation = data.reduce((total, country) => {
            return total + country.population;
        },0);
        console.log(totalPopulation);

        // Print the country which uses US Dollars as currency.
        let currencyDollar = [];
        data.filter((country) => {
            if(country && country.currencies){
                for(let i = 0; i < country.currencies.length; i++){
                    if(country.currencies[i].code === "USD"){
                        currencyDollar.push(country.name);
                        break;
                    }
                }
            }
        })
        console.log(currencyDollar);

    } else {
        console.log("Data is not available");
    }
}