const express = require('express');

const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
  

app.listen(3000)
console.log("Servidor web corriendo: http://localhost:3000")