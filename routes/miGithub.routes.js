const express = require('express');
const router = express.Router();
const miGithubContrlloer = require('../controllers/miGithub.controller');


router.get('/', miGithubContrlloer.getRoot);

module.exports = router; 