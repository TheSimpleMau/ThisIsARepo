const express = require('express');
const router = express.Router();
const pasatiemposController = require('../controllers/pasatiempos.controller');
const isAuth = require('../utils/isAuth');

router.get('/', isAuth, pasatiemposController.getRoot);

module.exports = router; 