const express = require('express')
// const bodyParse = require('body-parser')
const app = express()

/* app.use(bodyParse.json)
app.use(bodyParse.urlencoded)({
    extended: false
}); */

const routesLivros = require('./router/livrosRouter')


module.exports = app