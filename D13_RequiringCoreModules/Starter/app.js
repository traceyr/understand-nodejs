'use strict';
let util = require('util');
console.log(util);

let name = 'Tracye';
let greeting = util.format('Hello, %s', name);
util.log(greeting);
