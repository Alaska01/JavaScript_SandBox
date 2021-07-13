// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Understanding Problem
// Takes an array as a function input
// logs out the string to the console

// Subproblems
// 1. create a function to take in the arrays
// 2. loop over the array and log each element out to the console.

const printForecast = function (arr) {
  let strForcast = `...`;
  for (let i = 0; i < arr.length; i++) {
    strForcast += `${arr[i]} degree celcius in ${i + 1} days ...`;
  }
  return strForcast;
};

console.log(printForecast([11, 23, 13]));
