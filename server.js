var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var name = 'Default';

app.get('/test', function (req,res){
  res.send(name);
});

app.post('/test', function (req, res) {
  //res.json(req.body);
  //res.send(req.body.name + ' -- ' + req.body.age);
  console.log(req.body);    // your JSON
  name = req.body.name;
  res.send(name);   // echo the result back
});

app.listen(3000);
