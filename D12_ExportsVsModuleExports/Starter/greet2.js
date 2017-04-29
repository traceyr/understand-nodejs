'use strict';

exports.greet = () => {
  console.log('hello 2');
};

console.log(exports);
console.log(module.exports);

//this way mutates the object instead of pointing it somewhere else
