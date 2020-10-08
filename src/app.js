const express = require('express')
const app = express()
const routesLivros = require('./router/livrosRouter')

app.use ('/', routesLivros)

module.exports = app