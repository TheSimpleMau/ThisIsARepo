const express = require('express');
const router = express.Router();

const path = require('path');

router.use('/', (request, response, next)=>{
    response.render('pasatiempos');
})

module.exports = router; 