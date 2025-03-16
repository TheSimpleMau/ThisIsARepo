const express = require('express');
const router = express.Router();
const miGithubContrlloer = require('../controllers/miGithub.controller');
const isAuth = require('../utils/isAuth');


router.get('/', isAuth, miGithubContrlloer.getRoot);

module.exports = router; 