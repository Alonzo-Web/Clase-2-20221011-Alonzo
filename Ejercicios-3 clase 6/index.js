const express = require('express');
const { dirname } = require('node:path/posix');
const app = express()

/* app.get('/', function (req, res) {
  res.send('Hello World')
}) */

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/vistas/index.html');
  })

app.listen(3000)
console.log("Servidor web corriendo: http://localhost:3000")