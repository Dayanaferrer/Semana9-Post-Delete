const routes = require('./router/livrosRouter')

const express = require('express')
const app = express()

app.use ('/', routes)

module.exports = app