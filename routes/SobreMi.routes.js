const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const sobreMiController = require('../controllers/sobreMi.controller');

router.post('/guardar', sobreMiController.postGuardar);

router.get('/', sobreMiController.getRoot);

module.exports = router;