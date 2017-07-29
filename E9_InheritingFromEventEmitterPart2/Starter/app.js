'use strict';

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  //EventEmitter is a constructor, so new creates new. But we are overwriting what this is(so dont need new) run fnt constructor. This is similar to Super Constructor in other languages.
  EventEmitter.call(this);
  this.greeting = 'Hello world!';
}

//util.inherits is discouraged via the docs. Use ES6 class and extends

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet');
};

var greeter1 = new Greetr();

greeter1.on('greet', function() {
  console.log('Someone greeted!');
});

greeter1.greet();
