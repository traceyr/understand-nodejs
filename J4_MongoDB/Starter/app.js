var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(' mongodb://127.0.0.1:27017/test', { useNewUrlParser: true });

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var callipso = Person({
	firstname: 'Callipso',
	lastname: 'Radcliffe',
	address: '555 Main St.'
});

callipso.save(function(err){
	if (err) throw err;

	console.log('Person Saved');
});

var jane = Person({
	firstname: 'Jane',
	lastname: 'Doe',
	address: '123 adddress place'
});

jane.save(function(err) {
	if (err) throw err;

	console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	//get all users
	Person.find({}, function(err, users) {
		if (err) throw err;
		//object of all users
		console.log(users);
	})
	next();
});

htmlController(app);

apiController(app);

app.listen(port);
