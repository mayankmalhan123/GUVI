//Setting up data 

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function() {
    if(xhr.status>=200 && xhr.status<300){
        let data = JSON.parse(xhr.response);
        for(let i of data){
            var user = i;
            console.log(`
            Flag: ${user.flag}`)
        }
    } else {
        console.log("Data is not available");
    }
}

// Output

// Flag: https://restcountries.eu/data/afg.svg