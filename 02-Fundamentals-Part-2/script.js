'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive');


function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(2, 0);

console.log(appleJuice);

// Function Declaration

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);

// console.log(age1);

// Function Expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
// console.log(age2);

console.log(age1, age2);


// Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2005, "James"));
console.log(yearsUntilRetirement(1975, "Joan"));



const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}

const processedFruits = fruitProcessor(3, 4)

console.log(processedFruits)



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Jonas"));




// My Solution

let s1, s2, s3;
// let avgDolphins, avgKoalas;
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(34, 23, 27);

console.log(avgDolphins);
console.log(avgKoalas);

let confirmWinner = function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins / avgKoalas >= 2) {
        return `Dolphins is the winner with ${avgDolphins} vs Koalas ${avgKoalas} points`
    } else if (avgDolphins < avgKoalas && avgKoalas / avgDolphins >= 2) {
        return `Koalas is the winner with ${avgKoalas} vs Dolphins ${avgDolphins} points`
    } else {
        return `There is no winner Dolphins vs Koalas`
    }
}

console.log(confirmWinner(avgDolphins, avgKoalas));




const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 5, 4));
// console.log(calcAverage(3, 5, 7));
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`No team wins!!!!`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
checkWinner(200, 600);

console.log(`*************************************`)

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas)

// Arrays

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);
const newLength = friends.push('Jay')
// friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);
console.log(newLength)

friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Jack'));

console.log('*****************')

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));



// PERSONAL SOLUTIONS

let bill = [125, 555, 44]
// let i = 0;
console.log(bill.length);
const tips = [];
const totalBill = [];
console.log('******************')
let calcTip = function (arg1) {

    for (let i = 0; i < arg1.length; i++) {

        // console.log(arg1[i]);
        if (arg1[i] >= 50 && arg1[i] <= 300) {
            console.log(`Tip is ${arg1[i] * 0.15} for ${arg1[i]} value`)
            tips.push(arg1[i] * 0.15)

        } else {
            console.log(`Tip is ${arg1[i] * 0.20} for ${arg1[i]} value`)
            tips.push(arg1[i] * 0.20)
        }
    }
    return tips
}


console.log(calcTip(bill));

console.log(bill, tips);

let tBill = function (bill, tips) {
    let ctr = 0;
    let result = [];
    while (ctr < bill.length && ctr < tips.length) {
        result.push(bill[ctr] + tips[ctr]);
        ctr++;
    }
    return result
}

console.log(tBill(bill, tips));


// OBJECT EXAMPLES

// let jonas = {
//     firstName: "Jonas",
//     yearsOld: 46,
//     hasDriversLicense: true,
//     occupation: "teacher",
//     jonasDriver: function () {
//         if (this.hasDriversLicense) {
//             return "has a driver's license";
//         } else {
//             return "does not have a driver's license";
//         }
//     },

//     processJonas: `${this.firstName} is a ${this.yearsOld}-years old ${this.occupation} and he ${this.jonasDriver}`

// };

// console.log(jonas);
// console.log(jonas.jonasDriver)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven'],

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this)
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         // console.log(this)
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(jonas.calcAge())
// console.log(jonas.age)
// console.log(jonas.age)
// console.log(jonas.age)
// console.log(jonas["calAge"](1994))

// CHALLENGE


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        // console.log(this)
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge())
console.log(jonas.getSummary())
console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)



let mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.fBMI = this.mass / (this.height ** 2);
        return this.fBMI;
    }

};

console.log(mark.calcBMI())
console.log(mark.fBMI)

let john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.fBMI = this.mass / (this.height ** 2);
        return this.fBMI;
    }
};

console.log(john.calcBMI())
console.log(john.fBMI)

const higherBMI = function (mark, john) {
    if (mark > john) {
        return `Mark Miller's BMI (${mark}) is greater than John Smith's BMI (${john})`

    } else if (mark < john) {
        return `John Smith's BMI (${john}) is greater than Mark Miller's BMI (${mark})`
    }
}

console.log(higherBMI(mark.calcBMI(), john.calcBMI()));



// for LOOP

for (let rep = 1; rep <= 3; rep++) {
    console.log(`infinite loop ${rep}`);
}

const jonas = ['Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // having the various types at same time gives double boolean in output;

    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and Break

console.log('----Only Strings----')

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);


}

console.log('----Break with number----')

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);


}


// PERSONAL SOLUTIONS

let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let i = 0;
console.log(bill.length);
const tips = [];
const totalBill = [];
console.log('******************')
let calcTip = function (arg1) {

    for (let i = 0; i < arg1.length; i++) {

        // console.log(arg1[i]);
        if (arg1[i] >= 50 && arg1[i] <= 300) {
            console.log(`Tip is ${arg1[i] * 0.15} for ${arg1[i]} value`)
            tips.push(arg1[i] * 0.15)

        } else {
            console.log(`Tip is ${arg1[i] * 0.20} for ${arg1[i]} value`)
            tips.push(arg1[i] * 0.20)
        }
    }
    return tips
}


console.log(calcTip(bill));

console.log(bill, tips);

let tBill = function (bill, tips) {
    let ctr = 0;
    let result = [];
    while (ctr < bill.length && ctr < tips.length) {
        result.push(bill[ctr] + tips[ctr]);
        ctr++;
    }
    return result
}

console.log(tBill(bill, tips));
*/

// Solution

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const z = 23;
// if (x === 3) console.log(45);

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));
console.log(calcAge(1976));
console.log(calcAge(1975));
console.log(calcAge(1976));
