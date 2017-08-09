'use strict';

let fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt', {
  //So it comes back as text instead of buffer
  encoding: 'utf8',
  //highWaterMark is size of chunks
  highWaterMark: 16 * 1024
});
let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk)  {
  console.log(chunk.length);
  writable.write(chunk);
});
