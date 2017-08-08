'use strict';

//First part with node

let buf = new Buffer('Hello', 'utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
//wo wrote over the first two spots in our buffer

//second part with ES6 dealing with Buffers

let buffer = new ArrayBuffer(8);

//int32 32 zeros and ones
let view = new  Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 30;
console.log(view);
console.log(buffer);
