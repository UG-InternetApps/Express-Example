var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola MAMA estoy haciendo express');

});

var server = app.listen(8000, function() {
  var port = server.address().port;
  console.log('Servidor ejecutando en el puerto:', port)
});
