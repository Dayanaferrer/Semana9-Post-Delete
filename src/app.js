const express = require('express');
const bodyParse = require('body-parser')
const app = express();

const index = require('./router/index');
const livros = require('./router/livrosRouter');
const colaboradoras = require('./router/colaboradorasRoutes');

app.use(bodyParse.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });

app.use('/', index)
app.use('/livros', livros)
app.use ('/colaboradoras', require('./router/colaboradorasRoutes'))

module.exports = app