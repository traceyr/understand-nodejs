'use strict';

var EventEmitter = require('events');
var util = require('util'); //Dont need with ES6
//Before ES6
// function Greetr() {
//   EventEmitter.call(this);
//   this.greeting = 'Hello world!';
// }
//
// util.inherits(Greetr, EventEmitter);
//
// Greetr.prototype.greet = function(data) {
//   console.log(this.greeting + ': ' + data);
//   this.emit('greet', data);
// };

//After ES6

// class Greetr extends EventEmitter {
//   constructor() {
//     super();
//     this.greeting = 'Hello World';
//   }
//
//   greet(data) {
//     console.log((`${this.greeting}: ${data}`));
//     this.emit('greet', data);
//   }
// }
let Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');
