const express = require ('express');
const router = express.Router();
const controller = require ('../controller/livrosController');

router.get ('/livros',controller.getAllLivros);
router.delete('/:id', controller.deletarLivro);

router.get('/colaboradoras', controller.getAllColaboradoras);
router.delete('/colaboradoras/:id',controller.deletarColaboradoras);

router.get('/livros/:genero', controller.getLivrosGenero);
router.get('/idade/:id', controller.getAgeByID)


module.exports = router;