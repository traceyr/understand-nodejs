'use strict';

const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'esj');

app.listen(port, function(){
  console.log(`App listening on port ${port}`);
});
