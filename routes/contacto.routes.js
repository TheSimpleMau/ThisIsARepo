const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contacto.controller');
const isAuth = require('../utils/isAuth');

router.get('/', isAuth, contactoController.getRoot);

module.exports = router; 