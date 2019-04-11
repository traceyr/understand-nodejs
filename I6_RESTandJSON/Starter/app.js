'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let port = process.env.PORT || 3000;

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/api/person/:id', function(req, res) {
	//get that data from db
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.post('api/personjson', jsonParser, function(req, res) {

	// save to the db
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.delete('/api/person/:id', function(req, res) {
	// delete from db
})

app.listen(port);
