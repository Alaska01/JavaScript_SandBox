'use strict';

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`The ${this.make} is speeding at ${this.speed} km/h`);
}

Car.prototype.break = function(){
    this.speed -= 5;
    console.log(`The ${this.make} is speeding at ${this.speed} km/h`);
}

const car1 = new Car("BMW", 120);
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.break();
car1.break();
// console.log(car1.prototype)

//   Recreating the above with ES6 Classes

// Class Expression
const CarExp = class {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`Class Expression: The ${this.make} is speeding at ${this.speed} km/h`);
    }

    break(){
        this.speed -= 5;
        console.log(`Class Expression: The ${this.make} is speeding at ${this.speed} km/h`);
    }

    get speedUS(){
        return `Getter Class Expression: ${this.speed / 1.6} m/h`
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
    
}

const carExp = new CarExp("BMW", 120);
carExp.accelerate();
carExp.accelerate();
carExp.accelerate();
carExp.accelerate();
carExp.break();
carExp.break();
console.log(carExp.speedUS);
carExp.speedUS = 50;
console.log(carExp.speed)

// Class Declaration
class CarDec {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`Class Declaration: The ${this.make} is speeding at ${this.speed} km/h`);
    }

    break(){
        this.speed -= 5;
        console.log(`Class Declaration: The ${this.make} is speeding at ${this.speed} km/h`);
    }

    get speedUS(){
        return `Getter Class Declaration: ${this.speed / 1.6} m/h`
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }

}

const carDec = new CarDec("BMW", 120);
carDec.accelerate();
carDec.accelerate();
carDec.accelerate();
carDec.accelerate();
carDec.break();
carDec.break();
console.log(carDec.speedUS);

// Coding Challenge 3

const CarC3 = function(make, speed){
    this.make = make;
    this.speed = speed;
}

CarC3.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`The ${this.make} is speeding at ${this.speed} km/h`);
}

CarC3.prototype.break = function(){
    this.speed -= 5;
    console.log(`The ${this.make} is speeding at ${this.speed} km/h`);
}

const EV3 = function(make, speed, charge){
    CarC3.call(this, make, speed)
        this.charge = charge;
}

//  Link Prototypes

EV3.prototype = Object.create(CarC3.prototype)

//  Add methods to prototye of EV

// EV3.prototype.charge
EV3.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}

EV3.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`The ${this.make} is speeding at ${this.speed} km/h with a charge of ${this.charge}`);
}

const tesla = new EV3('Tesla', 120, 23)
console.log(tesla.chargeBattery(85))
tesla.break()
tesla.accelerate();

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
  
    // 2) Private fields (instances)
    #movements = [];
    #pin;
  
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
  
      // Protected property
      // this._movements = [];
      // this.locale = navigator.language;
  
      console.log(`Thanks for opening an account, ${owner}`);
    }
  
    // 3) Public methods
  
    // Public interface
    getMovements() {
      return this.#movements;
    }
  
    deposit(val) {
      this.#movements.push(val);
      return this;
    }
  
    withdraw(val) {
      this.deposit(-val);
      return this;
    }
  
    requestLoan(val) {
    //   if (this.#approveLoan(val)) {
      if (this._approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
        return this;
      }
    }
  
    static helper() {
      console.log('Helper');
    }
  
    // 4) Private methods
    // #approveLoan(val) {
    _approveLoan(val) {
      return true;
    }
  }
  
  const acc1 = new Account('Jonas', 'EUR', 1111);
  
  // acc1._movements.push(250);
  // acc1._movements.push(-140);
  // acc1.approveLoan(1000);
  
  acc1.deposit(250);
  acc1.withdraw(140);
  acc1.requestLoan(1000);
  console.log(acc1.getMovements());
  console.log(acc1);
  Account.helper();
  
//   console.log(acc1.#movements);
//   console.log(acc1.#pin);
//   console.log(acc1.#approveLoan(100));
  
  // Chaining
  acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
  console.log(acc1.getMovements());

//   Challenge 4

class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`Class Declaration: The ${this.make} is speeding at ${this.speed} km/h`);
        // return this;
    }

    break(){
        this.speed -= 5;
        console.log(`Class Declaration: The ${this.make} is speeding at ${this.speed} km/h`);
        return this;
    }

    get speedUS(){
        return `Getter Class Declaration: ${this.speed / 1.6} m/h`
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }

}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge){
        super(make, speed)
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
      }
    
      accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
          `${this.make} is going at ${this.speed} km/h, with a charge of ${
            this.#charge
          }`
        )
        
        return this;
        ;}
        
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian)
// console.log(rivian.#charge)
rivian.accelerate().accelerate()