const express = require ('express');
const router = express.Router();
const controller = require ('../controller/livrosController');
const fs = require('fs');
const { resourceUsage} = require('process');

router.get ('/',controller.getAllLivros);
router.get ('/livros',controller.getAllLivros);
router.delete('/:id', controller.deletarLivro);

const getById = (req, res) => {
    const id = req.params.id;
  
    res.status(200).send(tarefas.find((controller) => controller.id == id));
  };


  const postLivros = (req, res) => {
    console.log(req.body);
    const { id, nome, genero, autora, editora, numeroDePaginas, dataDePublicacao } = req.body;
    tarefas.push({ id, nome, genero, autora, editora, numeroDePaginas, dataDePublicacao });
  
    fs.writeFile("./src/model/livros.json", JSON.stringify(controller), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("-----> Arquivo atualizado!!!");
    });
  
    res.status(201).send(tarefas);
  };
  
router.get('/colaboradoras', controller.getAllColaboradoras);
router.delete('/colaboradoras/:id',controller.deletarColaboradoras);

router.post('/',controler.postLivros)

router.get('/livros/:genero', controller.getLivrosGenero);
router.get('/idade/:id', controller.getAgeByID)


module.exports = router;