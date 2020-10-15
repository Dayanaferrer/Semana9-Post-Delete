const express = require('express');
const app = express();

const index = require('./router/index');
const routerLivros = require('./router/livrosRouter');
const routerColaboradoras = require('./router/colaboradorasRoutes');

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
app.use('/routerLivros', routerLivros)
app.use ('/routerColaboradoras', routerColaboradoras)

module.exports = app