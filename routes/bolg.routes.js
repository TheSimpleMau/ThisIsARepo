const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

router.get('/create', blogController.getCreatePost);
router.post('/create', blogController.postCreatePost);
router.post('/delete/:id', blogController.deletePost);

router.get('/', blogController.getAllPosts);

module.exports = router;