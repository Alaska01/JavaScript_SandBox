
/*let js = "amazing";

console.log(40 + 8 + 23 - 10)
console.log("Aye")
console.log(23)

let firstName = "Victor"
console.log(firstName)
console.log(firstName)
console.log(firstName)

let firstJob = "Programmer"
let currentJob = "Teacher"

// Type of Data
let javascriptIsFun = true;
let message;
console.log(typeof message)
console.log(javascriptIsFun);
console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 60)
console.log(typeof "James")

javascriptIsFun = "YES!"
console.log(javascriptIsFun)

console.log(typeof null)


// let, const, and var

// let is used to define variables that can change in the future. ie we reassign or mutate those variables

let age = 30;
age = 31;

const birthYear = 1991;

const yearTrial = 1975;

// Basic Operators

// math operators
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// assignment operators

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// comparison operators

console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(isFullAge);

console.log(now - 1991 > now - 2018);


const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

var a;
a = 'String';

console.log(a);

var myStr;

myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);


let markBMI, johnBMI;
let massJohn, massMark, heightJohn, heightMark;
let BMI, mass, height;

markBMI = massMark / (heightMark ** 2);
johnBMI = massJohn / (heightJohn ** 2);

massJohn = 92;
massMark = 78;
heightMark = 1.69;
heightJohn = 1.95;

markBMI = massMark / (heightMark ** 2);
johnBMI = massJohn / (heightJohn ** 2);

markHigherBMI = markBMI > johnBMI;
console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

massJohn1 = 85;
massMark1 = 95;
heightJohn1 = 1.76;
heightMark1 = 1.88;

let markBMI1;
let johnBMI1;
markBMI1 = massMark1 / (heightMark1 ** 2);
johnBMI1 = massJohn1 / (heightJohn1 ** 2);
markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markBMI1);
console.log(johnBMI1);
console.log(markHigherBMI1);



const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ` + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);


const age = 14;


if (age >= 18) {
    console.log('Sarah can start a driving license')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:`)
}

const birthYear = 2015;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


let markBMI, johnBMI;
let massJohn, massMark, heightJohn, heightMark;
let BMI, mass, height;

markBMI = massMark / (heightMark ** 2);
johnBMI = massJohn / (heightJohn ** 2);

massJohn = 92;
massMark = 78;
heightMark = 1.69;
heightJohn = 1.95;

markBMI = massMark / (heightMark ** 2);
johnBMI = massJohn / (heightJohn ** 2);

if (markBMI > johnBMI) {
    console.log("Mark has a higher BMI than John")
} else {
    console.log('John has a higher BMI than Mark')
}


if (markBMI > johnBMI) {
    console.log(`Mark's BMI is ${markBMI} and is higher than John's BMI ${johnBMI}`)
} else {
    console.log(`John's BMI is ${johnBMI} and is higher than Mark's BMI ${markBMI}`)
}



const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18)
console.log(Number(inputYear + 18));
console.log(Number('Titus'));
console.log(typeof NaN);
console.log(String(33));


// Five false values 0, "",  underfined, null, and NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;

if (money) {
    console.log("Don't spend it all ;");
} else {
    console.log("You should get a job!");
}

let height = 1;
if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED')
}




// Equality Operator

const age = 18;

if (age === 18) console.log("You just became an adult")


//Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//     console.log('Sarah is able to Drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false; // C

console.log(hasDriversLicense || hasGoodVision || isTired)

if (shouldDrive && !isTired) {
    console.log('Sarah is able to Drive!')
} else {
    console.log('Someone else should drive...')
}



const averageScoresDolphine = (97 + 112 + 80) / 3;
const averageScoresKoalas = (109 + 95 + 50) / 3;

if ((averageScoresDolphine > averageScoresKoalas) && (averageScoresDolphine >= 100)) {
    console.log("The winner is Dolphines")
} else if ((averageScoresDolphine < averageScoresKoalas) && (averageScoresKoalas >= 100)) {
    console.log("The winner is Koalas")
} else if (averageScoresKoalas >= 100) {
    {
        console.log('There is a draw, both are winners')
    }
} else {
    console.log('No one wins the trophy')
}

console.log(averageScoresDolphine, averageScoresKoalas)



const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure!');
        console.log('Go to coding meet up');
        break;
    case 'tuesday':
        console.log('Prepare theory videos!');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write codes examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!')
}

*/

const bill = 60;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2



// if (bill >= 50 && bill <= 300) {
//     console.log(`The tip is ${bill * 0.15} dollars`);
// } else {
//     console.log(`The tip is ${bill * 0.2} dollars`);
// }

console.log(`The bill is ${bill} and the tip is ${tip} dollars and the total value is ${bill + tip}`);