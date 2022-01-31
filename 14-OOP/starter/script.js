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