const express = require('express');
const router = express.Router();
const sobreMiController = require('../controllers/sobreMi.controller');
const isAuth = require('../utils/isAuth');

router.post('/guardar', isAuth, sobreMiController.postGuardar);

router.get('/', isAuth, sobreMiController.getRoot);

module.exports = router;