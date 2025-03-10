
exports.getLogout = (request, response, next) => {
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
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
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    response.render('login', sessionStatus);
}