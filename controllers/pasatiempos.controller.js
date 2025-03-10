exports.getRoot = (request, response, next)=>{
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    response.render('pasatiempos', sessionStatus);
};
