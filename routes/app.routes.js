const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');
const isAuth = require('../utils/isAuth');

router.get('/', isAuth, appController.getRoot);
router.get('/index', isAuth, appController.getRoot);


router.use(appController.notFound);


module.exports = router