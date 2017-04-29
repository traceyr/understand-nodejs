'use strict';

let greet1 = require('./greet1');
greet1();

let greet2 = require('./greet2').greet;
greet2();

let greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'changed hello world 3';

let greet3b = require('./greet3');
greet3b.greet();

let Greet4 = require('./greet4');
let grtr4 = new Greet4();
grtr4.greet();

let greet5 = require('./greet5').greet;
greet5();
