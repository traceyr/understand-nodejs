'use strict';

const util = require('util');

function Person() {
  this.firstname = 'han';
  this.lastname = 'solo';
}

Person.prototype.greet = function() {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
};

// function Policeman() {
//   //this allows person to be called. Without line 16, line 22 would say hello undefined undefined
//   Person.call(this);
//   this.badgenum = '1234';
// }
//
// util.inherits(Policeman, Person);
// let officer = new Policeman();
// officer.greet();

//me testing ES6 version Util docs suggested. 

class Policeman extends Person {
  constructor(num){
    super(num);
    this.badgenum = num;
  }
}
let officer = new Policeman('4444');
officer.greet();
// officer.badgenum = '4444';
console.log(officer.badgenum);
