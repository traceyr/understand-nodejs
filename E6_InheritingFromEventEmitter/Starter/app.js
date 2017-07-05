'use strict';

const EE = require('events');
const util = require('util');

function Greetr() {
  this.greeting = 'Hello world';
}

util.inherits(Greetr, EE);

Greetr.prototype.greet = function(data){
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
};

let greeter1 = new Greetr();
greeter1.on('greet', function(data){
  console.log('Some Greeting!: ' + data);
});

greeter1.greet('Bobby');
