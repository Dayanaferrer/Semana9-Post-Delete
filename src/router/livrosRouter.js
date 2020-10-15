const express = require ('express');
const router = express.Router();
const controller = require ('../controller/livrosController');

router.get('/', controller.getAllLivros);

router.post('/', controller.postLivro);

router.delete('/:id', controller.deletarLivro)

module.exports = router