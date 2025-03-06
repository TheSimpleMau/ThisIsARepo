const express = require('express');
const router = express.Router();
const path = require('path');


router.use('/', (request, response, next)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'DatosCuriosos.html'))
})

module.exports = router;