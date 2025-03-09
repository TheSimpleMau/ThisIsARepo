exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); 
    });
};

exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.username = request.body.username;
    response.redirect('/');
};

exports.getLogin = (request, response, next) => {
    response.render('login');
}