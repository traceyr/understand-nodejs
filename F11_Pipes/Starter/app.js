'use strict';

let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet.txt');

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

let compressed = fs.createWriteStream(__dirname + '/greetcopy.txt.gz');


let gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);
