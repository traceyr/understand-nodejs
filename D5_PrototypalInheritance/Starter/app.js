// Your Javascript Code Goes Here
'use strict';
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function() {
  console.log(`Hello, ${this.firstname} ${this.lastname}`);
}

let john = new Person('john', 'doe');

console.log(john.firstname);
john.greet();

let jane = new Person('jane', 'bard');

jane.greet();
