var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola MAMA estoy haciendo express');

});

app.listen(3000);
