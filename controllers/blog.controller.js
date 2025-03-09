const Blog = require('../models/blog.model');

exports.getAllPosts = (request, response) => {
    const posts = Blog.getAll();
    response.render('blog/index', { posts });
};

exports.getCreatePost = (request, response) => {
    response.render('blog/create');
};

exports.postCreatePost = (request, response) => {
    const title = request.body.title;
    const content = request.body.content;
    if (!title || !content) {
        return response.redirect('/blog/create');
    }
    
    const newPost = new Blog(title, content);
    newPost.save();
    
    response.redirect('/blog');
};

exports.deletePost = (request, response) => {
    const id  = request.params;
    Blog.deleteById(id);
    response.redirect('/blog');
};
