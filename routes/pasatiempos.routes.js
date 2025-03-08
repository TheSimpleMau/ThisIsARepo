const express = require('express');
const router = express.Router();
const pasatiemposController = require('../controllers/pasatiempos.controller');

router.get('/', pasatiemposController.getRoot);

module.exports = router; 