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
    const request = fetch(`https://geocode.xyz/${long},${lat}?geoit=json`)
    .then(function(response){
        // console.log(response)
        if(!response.ok){
            throw new Error(`Problem with geocoding, ${response.status}`);
        }
        return response.json()})
    .then(data => {
        // const city = data.alt.loc.city;
        const city = data.city;
        const country = data.country;
        // if(!city || !country){
        //     throw new Error('City Not Available Currently')
        // }
                    // const [country] = data;
                    // ({ country} = data)
                    // console.log(data)
                    console.log(`You are in ${city}, ${country}`);
    })
    .catch(error => console.log(error))
}

whereAmI(51.50354, -0.12768)
// whereAmI(52.508, 13.381)

// const whereAmIJonas = function(lat, lng){
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => res.json())
//     .then( data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`)
//     })
// }

// whereAmIJonas(52.508, 13.381)