const express = require ('express')
const path = require("path")
const app = express();

app.use(express.static(path.resolve(__dirname,'assets')));
/* 
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/vistas/index.html");
  }); */
  
  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "vistas","flexbox.html"));
  });

  app.get('/cv', function (req, res) {
    res.sendFile(path.resolve(__dirname, "vistas","cv.html"));
  });

app.listen(3000)
console.log("Servidor web corriendo: http://localhost:3000")