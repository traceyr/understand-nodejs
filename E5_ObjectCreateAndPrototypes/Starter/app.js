'use strict';
let person = {
  firstname: '',
  lastname: '',
  greet: function(){
    return this.firstname + ' ' + this.lastname;
  },
};

let johh = Object.create(person);
johh.firstname = 'Johh';
johh.lastname = 'Doe';

let jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(johh.greet());
console.log(jane.greet());
