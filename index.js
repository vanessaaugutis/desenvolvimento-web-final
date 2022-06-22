// ExpressJS do projeto (lembrando que o ExpressJs é um framework de NodeJs)
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var Personagem = require('./model/personagems');
var Usuario = require('./model/usuarios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);


app.get('/', function (req, res) {
  res.render('../index.html');
})

app.get('/login', function (req, res) {
  res.render('../login.html');
})

app.get('/cadastro', function (req, res) {
  res.render('../cadastro.html');
})

app.get('/peronagens', function (req, res) {
  res.render('../personagens.html');
})

//inserir dados
app.post('/cadastro', function (req, res) {
  var usuario = new Usuario({
    nome: req.body.nome,
    senha: req.body.senha,
    email: req.body.email
  })

  usuario.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('../login.html');
    }
  })
})
/*app.post('/personagems', function (req, res) {
  var personagems = new Personagems({
    nome: req.body.nome,
    força: req.body.senha,
    avatar: req.body.email
  })

  usuario.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('../login.html');
    }
  })
})/** */

let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Conexão inicializada.");
})




