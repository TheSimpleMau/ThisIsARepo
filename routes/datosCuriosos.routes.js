const express = require('express');
const router = express.Router();
const datosCuriososController = require('../controllers/datosCuriosos.controller');
const isAuth = require('../utils/isAuth');

router.get('/', isAuth, datosCuriososController.getRoot);

module.exports = router;