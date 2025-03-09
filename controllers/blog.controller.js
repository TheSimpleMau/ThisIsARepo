const Blog = require('../models/blog.model');

exports.getAllPosts = (request, response, next) => {
    const posts = Blog.getAll();
    response.render('blog/index', posts);
};

exports.getCreatePost = (request, response, next) => {
    response.render('blog/create');
};

exports.postCreatePost = (request, response, next) => {
    const title = request.body.title;
    const content = request.body.content;
    if (!title || !content) {
        return response.redirect('/blog/create');
    }
    
    const newPost = new Blog(title, content);
    newPost.save();
    
    response.redirect('/blog');
};

exports.deletePost = (request, response, next) => {
    const id  = request.params;
    Blog.deleteById(id);
    response.redirect('/blog');
};
