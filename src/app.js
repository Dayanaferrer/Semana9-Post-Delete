const express = require('express')
const app = express()
const routesLivros = require('./router/livrosRouter')
const index = require("./routes/index")

app.use(bodyParser.json());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use("/", index)
app.use ('/', routesLivros)

module.exports = app