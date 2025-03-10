const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

router.get('/', appController.getRoot);
router.get('/index', appController.getRoot);


router.use(appController.notFound);


module.exports = router