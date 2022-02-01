//Setting up data
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

//add a listener to process the request
xhr.onload = function() {
    if(xhr.status>=200 && xhr.status<300){

        let data = JSON.parse(xhr.response);
        for(let i of data){
            let user = i;
            console.log(`
            Country Name: ${user.name}
            Region: ${user.region}
            Sub-region: ${user.subregion}
            Population: ${user.population}`)
        }
    } else {
        console.log("Data is not available");
    }
}

// countries name, region, sub region and population

// Country Name: Afghanistan
// Region: Asia
// Sub-region: Southern Asia
// Population: 27657145