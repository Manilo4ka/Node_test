const express = require('express');
var app = express();
app.listen(8080);
app.get('/name/:name', function(req, res) {
	res.send('Guten Tag, Frau ' + req.params.name);
});
app.get('/', function(req, res) {
	res.send('Guten Tag');
});
