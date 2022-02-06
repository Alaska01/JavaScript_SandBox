'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

console.log(667)

// const request = new XMLHttpRequest();
// request.open('GET', 'https://api.publicapis.org/entries');
// request.open('GET', 'https://api.agify.io?name=michael');
// request.open('GET', 'https://restcountries.com/v3.1/name/nigeria');
// request.send();
// request.addEventListener('load', function(){
//     console.log(this.responseText);
//     // console.log(555)
//     // const [data] = (this.responseText);
//     // console.log(data);
//     const data = JSON.parse(this.responseText)
//     console.log(data);
// })



// const getCountryData = function(country){
// const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
    
// }).then(data => console.log(alert(data)))
// console.log(request);
// }

// getCountryData('nigeria');

// fetch()
const whereAmI = function(long, lat){
    console.log('Test data')
    const request = fetch(`https://geocode.xyz/${long},${lat}?geoit=json`).then(function(response){return response.json()})
    .then(data => {
        console.log(data.alt.loc.city)
                    // const [country] = data;
                    // ({ country} = data)
                    console.log(data.country);
    })
}

whereAmI(51.50354, -0.12768)