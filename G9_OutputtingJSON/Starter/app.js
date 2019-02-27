'use strict';

let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  let obj = {
    firstname: 'Callipso',
    lastname: 'Radcliffe'
  };
  res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');
