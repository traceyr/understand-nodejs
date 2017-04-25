// Your Javascript Code Goes Here

'use strict';

let person = {
  firstname: 'john',
  lastname: 'doe',
  greet: function(){
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
  }
}

person.greet();

console.log(person['firstname']);
