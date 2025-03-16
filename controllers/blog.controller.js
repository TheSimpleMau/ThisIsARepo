const Blog = require('../models/blog.model');

exports.getAllPosts = (request, response, next) => {
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    Blog.getAll().then(([rows]) => {
        response.render('blog/index', {rows, sessionStatus});
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.getOnePost = (request, response, next) => {
    const sessionStatus = {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    };

    const id = request.params.id;

    Blog.fetchOne(id)
        .then(([rows]) => {
            if (rows.length > 0) {
                const post = rows[0];
                response.render('blog/post', {post, sessionStatus});
            } else {
                response.status(404).render('notFound', {sessionStatus});
            }
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
    const id = request.params.id;
    Blog.deleteById(id)
    .then(() => {
        response.redirect('/blog');
    })
    .catch((error) => {
        console.log(error);
    });
};

