const express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(80);

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/name:name', function(req, res) {
//console.log(req.query);
	res.send('Guten Tag, Frau ' + req.params.name);
});

app.get('/login', function(req, res) {
//console.log(req.query);
	res.sendFile(__dirname + "/static/login.html");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/static/index.html");
});

app.post('/login', urlencodedParser, function(req,res) {
	if (!req.body) return res.sendStatus(400);
 //console.log(req.body);
 console.log('Name: '+ req.body.new_email);
 console.log('Pass: '+ req.body.new_pass);
 res.sendFile(__dirname + "/static/login.html");
});
