'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Implementing the find method using for of loop

for (const account of accounts){
  if (account.owner=== 'Jessica Davis' ){
  console.log(account)
  }
}

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

          <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

// console.log(createUsernames('Steven Thomas Williams'));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawals);

const balance = movements.reduce((acc, cur, i, arr) => acc + cur);
console.log(balance);
/////////////////////////////////////////////////
// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`**********FOREACH***************`);

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// // Test Data

// // Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// // Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   const newArr = [...dogsJulia.slice(1, -2), ...dogsKate];
//   const newArr1 = dogsJulia.slice(1, -2).concat(dogsKate);

//   newArr1.forEach((el, index) => {
//     if (el >= 3) {
//       console.log(
//         `Dog 🐶 number ${index + 1} is an adult, and is ${el} years old`
//       );
//     } else {
//       console.log(`Dog number ${index + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 5, 8, 3], [10, 5, 6, 1, 4]);

// const euruToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * euruToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsDescriptions = movements.map((mov, i, array) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });

// const movementsDescriptions1 = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// console.log(movementsDescriptions1);


//  Conversion of Dogs Age to Humans Personal Solutiom

const dAges = [5, 2, 1, 4, 15, 8, 3]

const calcAverageHumanAge = function(ages){

  const dogsAges = ages;
  const dogsAges1 = []
  dogsAges.map(function(val){
    if(val <=2 ){
      return dogsAges1.push(2* val);
    } else{
      return dogsAges1.push(16 +(2*val));
    }
  })
  const adultDogs = dogsAges1.filter(val => val >= 18 );
  const adultDogsArraySize = adultDogs.length;

  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const ageAdultDogsTotal = adultDogs.reduce(reducer)

  const average = ageAdultDogsTotal/adultDogsArraySize

  return average;

};

// console.log(calcAverageHumanAge(dAges));

//  Solution by Jonas

const calcAverageHumanAge1 = function(ages){
  const humanAges = ages.map(age => age <= 2 ? 2* age : 16 + 4 * age)
  const adults = humanAges.filter(age => age >= 18)
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // const average = adults.reduce((acc, age) => acc + age/ adults.length, 0);

  const average = adults.reduce((acc, age, i, arr) => acc + age/ arr.length, 0);
  console.log(average);
}


// const avg1 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);

// const avg2 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAgeArrow = ages => {
  const humanAges = ages.map(age => age <= 2 ? 2* age : 16 + 4 * age).
  filter(age => age >= 18).
  reduce((acc, age, i, arr) => acc + age/ arr.length, 0);
  console.log(humanAges);
}


const avg1 = calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);

// Coding Challenge Two

// Rolling A dice in 100 places in an array

const dice = Math.trunc(Math.random() *6 + 1)
const diceArray100 = Array.from({length: 100}, (_, i)=> Math.trunc(Math.random() *6 + 1))
console.log(diceArray100);


// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// GOOD LUCK 😀

// Solution 1
dogs.map(dog => {
  dog.recommendedFood = (dog.weight * 0.75 * 28 ) //* 0.001 
})

console.log(dogs)

// Solution 2

