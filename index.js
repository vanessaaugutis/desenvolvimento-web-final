// ExpressJS do projeto (lembrando que o ExpressJs é um framework de NodeJs)
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var Personagem = require('./model/personagems');
var Usuario = require('./model/usuarios');
const cool = require('cool-ascii-faces');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/cool', (req, res) => res.send(cool()))
  .listen(5000, () => console.log(`Listening on ${ 5000 }`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

app.get('/personagems', function (req, res) {
  res.render('../personagems.html');
})

app.get('/showpersonagems', function (req, res) {
  var showPersonagems = Personagem.find({});
  req.body.publicsUser = showPersonagems;
})

app.get('/validateLogin', function (req, res) {
  var existe = Usuario.findOne({email: req.body.emailUser});
  res.render('../personagems.html');
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
      res.render('../login.html');
    }
  })
})

app.post('/personagems', function (req, res) {
  var personagems = new Personagem({
    nome: req.body.nomePersonagem,
    forca: req.body.forcaPersonagem,
    descricao: req.body.descricaoPersonagem,
    foto: req.body.fotoPersonagem,
  })

  personagems.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.render('../personagems.html');
    }
  })
})




