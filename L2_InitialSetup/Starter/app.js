'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
let config = require('./config');
let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'esj');

mongoose.connect(config.getDBConnectionString());

app.listen(port, function(){
  console.log(`App listening on port ${port}`);
});
