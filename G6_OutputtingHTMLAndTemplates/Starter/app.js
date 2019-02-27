'use strict';

let http = require('http');
let fs = require('fs');


http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  let message = 'Another Hello World......';
  html = html.replace('{Message}', message);
  res.end(html);

}).listen(1337, '127.0.0.1');
