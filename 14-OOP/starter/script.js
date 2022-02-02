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