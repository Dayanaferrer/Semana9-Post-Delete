const express = require('express');
const router = express.Router();
const controller = require ('../controller/colaboradorasController');

router.get ('/', controller.getColaboradoras);
router.get('/:id', controller.getColaboradorasById);

router.post('/:id', controller.postColaboradoras);

router.delete(':/id', controller.deletarColaboradoras);

router.put('/:id', controller.putColaboradoras);

router.patch('/:id', controller.patchColaboradoras);

module.exports = router;