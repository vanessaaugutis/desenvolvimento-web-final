// ExpressJS do projeto (lembrando que o ExpressJs é um framework de NodeJs)
const express = require('express');
const app = express();
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
var path = require('path');
var Personagens = require('./model/personagens');

const port = 3000

// app.get('/', function (req, res) {
//   Usuario.find({}).exec(function (err, docs) {
//       res.render('index.html', { Usuarios: docs });
//   })

// })

// app.post('/', function (req, res)) {
//   Usuario.find({ nome: new RegExp(req.body.txtPesquisa, 'gi') }).exec(function (err, docs) {
//       res.render('index.html', { Usuarios: docs });
//   })

app.listen(port, () => {
  console.log("Conectado");
})


