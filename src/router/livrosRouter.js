const express = require ('express');
const router = express.Router();
const controller = require ('../controller/livrosController');

router.get('/', controller.getAllLivros);
router.get('/livros', controller.getAllLivros);
router.get('/:id',controller.getById);

router.post('/', controller.postLivro);

router.delete('/:id', controller.deletarLivro);
router.delete('/', controller.deletarLivrosConcluida);

router.put('/:id', controller.putLivros);

router.patch('/:id', controller.patchLivros)

module.exports = router