'use strict';
//Before ES6
// function Person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
//
// Person.prototype.greet = function() {
//   console.log(`Hello ${this.firstname} ${this.lastname}`);
// };

//After ES6
class Person {
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
}

let john = new Person('john', 'doe');
john.greet();

let jane = new Person('jane', 'doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
