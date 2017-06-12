'use strict';

let Emitter = require('./emitter');

let emtr = new Emitter();

emtr.on('greet', function(){
  console.log(('Somehwere, someone said hello'));
});

emtr.on('greet', function(){
  console.log('A greeting occured!');
});

console.log('Hello');
emtr.emit('greet');
