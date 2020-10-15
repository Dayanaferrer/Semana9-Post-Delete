const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).send({
    title: "Reprograma - On7 Backend - Exercicio da Semana - Inclusão e Exclusão de livros e funcinarios",
    version: "1.1.2"
  })

});

module.exports = router