const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const isAuth = require('../utils/isAuth');

router.get('/create', isAuth, blogController.getCreatePost);
router.post('/create', isAuth, blogController.postCreatePost);
router.post('/delete/:id', isAuth, blogController.deletePost);
router.get('/post/:id', isAuth, blogController.getOnePost);

router.get('/', blogController.getAllPosts);

module.exports = router;