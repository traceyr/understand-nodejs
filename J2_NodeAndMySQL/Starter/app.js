var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	var con = mysql.createConnection({
		host: "localhost",
		user: "test",
		password: "test",
		// database: "addressbook"
	});

	// con.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses On People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Address.ID', function(err, rows){
	// 	if(err) throw err;
	// 	console.log(rows);
	// });

	con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + con.threadId);
});

con.end()

	next();
});

htmlController(app);

apiController(app);

app.listen(port);
