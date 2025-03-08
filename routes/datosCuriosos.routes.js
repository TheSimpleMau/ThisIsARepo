const express = require('express');
const router = express.Router();
const datosCuriososController = require('../controllers/datosCuriosos.controller');

router.get('/', datosCuriososController.getRoot);

module.exports = router;