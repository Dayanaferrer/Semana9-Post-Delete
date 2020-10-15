const express = require('express');
const app = express();

const index = require('./router/index');
const livros = require('./router/livrosRouter');
const colaboradoras = require('./router/colaboradorasRoutes');

app.use(express.json());

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
app.use ('/colaboradoras', colaboradoras)

module.exports = app