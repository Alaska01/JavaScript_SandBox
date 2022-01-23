'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//  Personal Solution
  const individualFlight = (flights.split('+'));

  for (const ind of individualFlight){
    const msg = ind.split(';');
    const properMsg = `${msg[0].split('_').join(' ')} From ${msg[1].slice(1,4).toUpperCase()} To ${msg[2].slice(1,4).toUpperCase()} (${msg[3].replace(':', 'h')})`
    console.log(properMsg.padStart(50));
  }
 

  const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const hours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, mainIndex, starterIndex, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3},`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);
// const { name, openingHours, categories } = restaurant;

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];

// console.log(ingredients);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(name, openingHours, categories);
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// // let c;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of menu) console.log(item);
// for (const item of menu.entries()) console.log(item);
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
// console.log(restaurant);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

const scoreList = game.scored;
console.log(scoreList);
for (const [score, player] of scoreList.entries())
  console.log(`Goal ${score + 1}: ${player} `);

//Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

const oddsValues = Object.values(game.odds);
console.log(oddsValues);
const averageOdds = function (arg) {
  let a = arg.length;
  let b = 0;
  for (let i = 0; i < arg.length; i++) {
    b += arg[i];
  }
  return b / a;
};

console.log(averageOdds(oddsValues));

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}
Odd of draw: ${game.odds.x}
Odd of victory ${game.team2}: ${game.odds.team2}`);

// Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// // }

// const goals = function (gamesScore) {
//   arr = [];
//   let b = gameScore;
//   for (let i = 0; i < gamesScore.length; i++) {
//     for (let j = 0; j < b.length; j++) {}
//   }
// };

// const scorers = game.scored;

// function toObject(arr) {
//   var rv = {};
//   for (var i = 0; i < arr.length; ++i)
//     if (arr[i] !== undefined) rv[i] = arr[i];
//   return rv;
// }

// console.log(toObject(scorers))


// const obj ={};
// // console.log('Second attempt: ',scorers2);
// for(const [i, player] of  game.scored.entries()) {
//   console.log(i, player)
//   // {{player}: 1} = obj;

//   console.log(obj);
  
// };

// BONUS SOLUTION
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

const goalsArr =['Saka', 'Martineli', 'Ordegaad', 'Saka', 'Martineli', 'Ozil', 'Ozil']
const scorers1 = {};
for (const player of goalsArr) {
  // console.log(scores1);?
  scorers1[player] ? scorers1[player]++ : (scorers1[player] = 1);
  console.log(player)
}

console.log(scorers1);

// let result = {};

// scorers.forEach(function (x) {
//   result[x] = (result[x] || 0) + 1;
// });

// console.log(result);

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Garlic Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// // ordersSet.delete('Risotto');
// console.log(ordersSet);
// console.log(ordersSet.size);

// for (const item of ordersSet) console.log(item);
// ordersSet.clear();
// console.log(ordersSet);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest.set(3, 'Makurdi, Benue'));

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents);

// 1. Personal Solution: Array of different events that happened no duplicated

const gameEventsValues = gameEvents.values();
console.log(gameEventsValues);

const gameEventsUnique = [...new Set(gameEventsValues)];
console.log(gameEventsUnique);

// 2. Removing False Yellow Card

const wrongYellow = gameEvents.delete(64);
console.log(wrongYellow);
console.log(gameEvents);

// 3. An Event happens in every ?? Minutes
console.log('Number of events: ', gameEvents.size);
console.log(`An event occurred in every ${90/(gameEvents.size)} minutes`);

// 4. Loop over the event and log to console
for(const [minutes, gameEvent] of gameEvents.entries()) {
  // console.log(minutes, gameEvent)
  if(minutes <= 45){
    console.log(`FIRST HALF ${minutes}: ${gameEvent}`)
  } else {
    console.log(`SECOND HALF ${minutes}: ${gameEvent}`)
  }

};


// PERSONAL SOLUTION

// Delete A less elegant solution

// PERSONAL SOLUTION

// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase
// firstName ✅
// ✅✅
// someVariable
// calculateAge ✅✅✅
// ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// PERSONAL SOLUTION

function camelCase(str) {
  let n = [];
  for (let i = 0; i < str.length; i++) {
    n.push(str[i].split('_'));
  }

  let y = '✅';
  let z = '';
  // x = '';
  for (let j = 0; j < n.length; j++) {
    if (j + 1) {
      z = z + y;
    }

    console.log(
      n[j][0].toLowerCase() +
        n[j][1][0].toUpperCase() +
        n[j][1].toLowerCase().slice(1) +
        '   ' +
        `${z}`
    );
  }
}

camelCase([
  'underscore_case',
  'first_name',
  'Some_Variable',
  'calculate_AGE',
  'delayed_departure',
]);
