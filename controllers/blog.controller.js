const Blog = require('../models/blog.model');

exports.getAllPosts = (request, response, next) => {
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    const posts = Blog.getAll()
    .then(([rows, fieldData]) => {
        response.render('blog/index', {rows, sessionStatus});
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.getCreatePost = (request, response, next) => {
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    response.render('blog/create', sessionStatus);
};

exports.postCreatePost = (request, response, next) => {
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
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
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    const id  = request.params;
    Blog.deleteById(id);
    response.redirect('/blog');
};
