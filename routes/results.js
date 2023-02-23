const express = require('express');
const router = express.Router();
const controller = require('../controllers/results')

/* GET users listing. */

router.get('/:n1/:n2', controller.index);

router.post('/', controller.create);

router.put('/', controller.replace);

router.patch('/', controller.update);

router.delete('/:n1/:n2', controller.destroy);

module.exports = router;
