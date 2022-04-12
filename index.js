const express = require('express');
var app = express();
app.listen(8080);

app.get('/name:name', function(req, res) {
//console.log(req.query);
	res.send('Guten Tag, Frau ' + req.params.name);
});

app.get('/', function(req, res) {
  console.log('Name: '+ req.query['name']);
    console.log('Age: '+ req.query['age']);
	res.send('Guten Tag');
});
  //comment
