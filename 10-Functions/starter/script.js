'use strict';

const greet = greeting => nameF => console.log(`${greeting} ${nameF}`);

const greeterHey = greet('Hey');
greeterHey('Aye');
greeterHey('Daniel');
greet('Hello')('Boniface');

const tax = function (rate) {
  return function calcTax(value) {
    return value + value * rate;
  };
};

const taxRate = tax(0.25);
console.log(taxRate(200));

console.log(tax(0.13)(400));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
      )
    );
    console.log(answer);

    // register the answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // polls results
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 7, 8, 10] }, 'string');

// IIFE

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

h();
f();
