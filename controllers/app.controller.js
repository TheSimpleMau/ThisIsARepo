exports.notFound = (request, response, next) => {
    response.statusCode = 400;
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    response.render('notFound', sessionStatus);
}

exports.getRoot = (request, response, next) => {
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    response.render('index', sessionStatus);
}