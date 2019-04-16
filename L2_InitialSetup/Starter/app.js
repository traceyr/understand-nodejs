'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
// let config = require('./config');
let port = process.env.PORT || 3000;
let setupctrl = require('./controllers/setupController');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'esj');

mongoose.connect('mongodb+srv://test:test@cluster0-k4jj7.mongodb.net/test?retryWrites=true', { useNewUrlParser: true, dbName: 'testdb' }, function(err){
  if(err) console.log(err);
  console.log('Conencted to Mongo');
});
setupctrl(app);

app.listen(port, function(){
  console.log(`App listening on port ${port}`);
});
