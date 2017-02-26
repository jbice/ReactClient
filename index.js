var express = require('express')
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.json());

app.post('/test', function (req, res) {
  //res.json(req.body);
  res.send(req.body.name + ' -- ' + req.body.age);
});

app.listen(3000);
