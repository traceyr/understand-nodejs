'use strict';

// const EE = require('events');
//
// const emtr = new EE();
// //'greet' is a magic string, which is bad
// emtr.on('greet', () =>{console.log('Somewhere, someone said hello.');});
//
// emtr.on('greet', () =>{console.log('A greeting occured');});
//
// console.log('Hello');
// emtr.emit('greet');

const eventConfig = require('./config').events;
console.log(eventConfig);
const EE = require('events');

const emtr = new EE();

emtr.on(eventConfig.GREET, () =>{console.log('Somewhere, someone said hello.');});

emtr.on(eventConfig.GREET, () =>{console.log('A greeting occured');});

console.log('Hello');
emtr.emit(eventConfig.GREET);
