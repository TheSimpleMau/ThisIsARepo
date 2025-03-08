const express = require('express');
const router = express.Router();

const sobreMiController = require('../controllers/sobreMi.controller');

router.post('/guardar', sobreMiController.postGuardar);

router.get('/', sobreMiController.getRoot);

module.exports = router;