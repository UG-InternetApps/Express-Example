var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/', function(req, res) {
  res.send('Hola MAMA estoy haciendo express');
});

app.post('/', function(req, res) {
  console.log('Hola mama acabo de hacer un POST');
  res.send('Hola mama acabo de hacer un POST');
});

app.get('/users', function(req, res) {
  res.send('Hola MAMA estoy haciendo Usuarios');
});

app.get('/get_form', function(req, res) {
  var data = {
    first: req.query.first,
    last: req.query.last
  };

  console.log(data);
  res.send(JSON.stringify(data));
});


var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Servidor ejecutando en el puerto:', port);
});
